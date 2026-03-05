"use client";
import "@/app/globals.css";
import {
  Block as ApiBlock,
  BlockType,
  createBlock,
  deleteBlock,
  updateBlock,
  useGetBlocksByPage,
} from "@/features/block";
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

// Convert API block to BlockNote block format
function apiBlockToEditorBlock(apiBlock: ApiBlock): PartialBlock {
  const content = apiBlock.content as Record<string, unknown> | null;
  return {
    id: apiBlock.id,
    type: apiBlock.type.toLowerCase() as Block["type"],
    props: content?.props as Record<string, unknown> | undefined,
    content: content?.content as Block["content"] | undefined,
    children: content?.children as PartialBlock[] | undefined,
  };
}

// Convert BlockNote block to API format
function editorBlockToApiFormat(block: Block): {
  type: BlockType;
  content: Record<string, unknown>;
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
  const pendingChangesRef = useRef(false);

  // Initialize editor with empty document
  const editor = useCreateBlockNote();

  // Load blocks from API into editor
  useEffect(() => {
    if (!isLoading && apiBlocks && !isInitialized && editor) {
      // Update blocks map
      blocksMapRef.current.clear();
      apiBlocks.forEach((block) => blocksMapRef.current.set(block.id, block));

      if (apiBlocks.length > 0) {
        const editorBlocks = apiBlocks
          .sort((a, b) => a.position - b.position)
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
    const existingIds = new Set(blocksMapRef.current.keys());

    // Find new, updated, and deleted blocks
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      const existingBlock = blocksMapRef.current.get(block.id);
      const apiFormat = editorBlockToApiFormat(block);

      if (!existingBlock) {
        // Create new block
        try {
          const response = await createBlock({
            pageId,
            type: apiFormat.type,
            content: apiFormat.content,
            position: i,
          });
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
        const positionChanged = existingBlock.position !== i;

        if (contentChanged || positionChanged) {
          try {
            await updateBlock(existingBlock.id, {
              type: apiFormat.type,
              content: apiFormat.content,
              position: i,
            });
          } catch (error) {
            console.error("Failed to update block:", error);
          }
        }
      }
    }

    // Delete removed blocks
    for (const existingId of existingIds) {
      if (!currentIds.has(existingId)) {
        try {
          await deleteBlock(existingId);
          blocksMapRef.current.delete(existingId);
        } catch (error) {
          console.error("Failed to delete block:", error);
        }
      }
    }

    pendingChangesRef.current = false;
  }, 1000);

  const handleChange = useCallback(() => {
    if (!isInitialized) return;
    pendingChangesRef.current = true;
    syncToApi(editor.document);
  }, [editor, isInitialized, syncToApi]);

  if (isLoading) {
    return (
      <div className="w-full max-w-3/4 min-h-[50vh] flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">
          Loading editor...
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
