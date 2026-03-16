"use client";
import "@/app/globals.css";
import { createBlock, deleteBlock, updateBlock } from "@/features/block/api";
import { useGetBlocksByPage } from "@/features/block/hooks";
import {
  BlockType,
  type Block as ApiBlock,
  type CreateBlockData,
  type UpdateBlockData,
} from "@/features/block/types";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/core/style.css";
import { Block, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

interface EditorProps {
  pageId: string;
}

type ApiContent = Record<string, unknown>;

// Convert API block to BlockNote block format
function apiBlockToEditorBlock(apiBlock: ApiBlock): PartialBlock {
  const content = apiBlock.content as ApiContent | null;
  return {
    id: apiBlock.id,
    type: (apiBlock.type.toLowerCase() as Block["type"]) || "paragraph",
    props: content?.props as Record<string, unknown> | undefined,
    content: content?.content as Block["content"] | undefined,
    children: content?.children as PartialBlock[] | undefined,
  };
}

// Convert BlockNote block to API format
function editorBlockToApiFormat(block: Block): {
  type: BlockType;
  content: ApiContent;
} {
  const typeMap: Record<string, BlockType> = {
    paragraph: BlockType.PARAGRAPH,
    heading: BlockType.HEADING,
    bulletListItem: BlockType.BULLET_LIST,
    numberedListItem: BlockType.NUMBERED_LIST,
    checkListItem: BlockType.TODO,
    image: BlockType.IMAGE,
    video: BlockType.VIDEO,
    audio: BlockType.AUDIO,
    file: BlockType.FILE,
    table: BlockType.TABLE,
    codeBlock: BlockType.CODE,
    quote: BlockType.QUOTE,
    divider: BlockType.DIVIDER,
  };

  return {
    type: typeMap[block.type] || BlockType.PARAGRAPH,
    content: {
      props: block.props,
      content: block.content,
      children: block.children,
    },
  };
}

export default function Editor({ pageId }: EditorProps) {
  const resolveTheme = useTheme().resolvedTheme;
  const { blocks: apiBlocks, isLoading } = useGetBlocksByPage(pageId);
  const [isInitialized, setIsInitialized] = useState(false);
  const blocksMapRef = useRef<Map<string, ApiBlock>>(new Map());

  // Initialize editor with empty document
  const editor = useCreateBlockNote();

  // Load blocks from API into editor
  useEffect(() => {
    if (!isLoading && !isInitialized && editor) {
      // Update blocks map
      blocksMapRef.current.clear();
      apiBlocks.forEach((block) => blocksMapRef.current.set(block.id, block));

      if (apiBlocks.length > 0) {
        const editorBlocks = apiBlocks
          .sort((a, b) => a.orderIndex - b.orderIndex)
          .map(apiBlockToEditorBlock);

        try {
          editor.replaceBlocks(editor.document, editorBlocks);
        } catch (error) {
          console.error("Failed to load blocks:", error);
        }
      }
      setIsInitialized(true);
    }
  }, [apiBlocks, isLoading, isInitialized, editor]);

  // Debounced sync to API
  const syncToApi = useDebounceCallback(async (blocks: Block[]) => {
    if (!isInitialized) return;

    const currentIds = new Set(blocks.map((b) => b.id));

    // Find new, updated, and deleted blocks
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      const existingBlock = blocksMapRef.current.get(block.id);
      const apiFormat = editorBlockToApiFormat(block);

      if (!existingBlock) {
        // Create new block
        try {
          const payload: CreateBlockData = {
            pageId,
            type: apiFormat.type,
            content: apiFormat.content,
            orderIndex: i,
            parentId: null,
          };
          const response = await createBlock(payload);
          if (response?.data) {
            blocksMapRef.current.set(block.id, response.data);
          }
        } catch (error) {
          console.error("Failed to create block:", error);
        }
      } else {
        // Check if update needed (simple comparison)
        const contentChanged =
          JSON.stringify(existingBlock.content) !==
          JSON.stringify(apiFormat.content);
        const orderChanged = existingBlock.orderIndex !== i;
        const typeChanged = existingBlock.type !== apiFormat.type;

        if (contentChanged || orderChanged || typeChanged) {
          try {
            const payload: UpdateBlockData = {
              type: apiFormat.type,
              content: apiFormat.content,
              orderIndex: i,
              parentId: null,
            };
            const updated = await updateBlock(existingBlock.id, payload);
            if (updated?.data) {
              blocksMapRef.current.set(block.id, updated.data);
            }
          } catch (error) {
            console.error("Failed to update block:", error);
          }
        }
      }
    }

    // Delete removed blocks
    for (const [clientId, serverBlock] of blocksMapRef.current.entries()) {
      if (!currentIds.has(clientId)) {
        try {
          await deleteBlock(serverBlock.id);
          blocksMapRef.current.delete(clientId);
        } catch (error) {
          console.error("Failed to delete block:", error);
        }
      }
    }
  }, 1000);

  const handleChange = useCallback(() => {
    if (!isInitialized) return;
    syncToApi(editor.document);
  }, [editor, isInitialized, syncToApi]);

  if (isLoading) {
    return (
      <div className="w-full max-w-3/4 min-h-[50vh] flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">
          Đang tải trình soạn thảo...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3/4">
      <BlockNoteView
        editor={editor}
        onChange={handleChange}
        theme={resolveTheme === "dark" ? "dark" : "light"}
        className="min-h-[50vh] h-max"
      />
    </div>
  );
}
