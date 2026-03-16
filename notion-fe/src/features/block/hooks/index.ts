import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { useCallback } from "react";
import {
  createBlock,
  getBlocksByPage,
  getBlockById,
  getChildrenBlocks,
  updateBlock,
  deleteBlock,
} from "../api";
import { Block, CreateBlockData, UpdateBlockData } from "../types";

export const blocksByPageKey = (pageId: string) => `/blocks/pages/${pageId}`;
export const blockDetailKey = (blockId: string) => `/blocks/${blockId}`;
export const blockChildrenKey = (blockId: string) =>
  `/blocks/${blockId}/children`;

/**
 * Hook to get all blocks of a page
 */
export const useGetBlocksByPage = (pageId: string | null) => {
  const key = pageId ? blocksByPageKey(pageId) : null;
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(key, () => getBlocksByPage(pageId as string), {
    revalidateOnFocus: false,
    keepPreviousData: true,
  });

  return {
    blocks: (data?.data || []) as Block[],
    isLoading,
    isError: !!error,
    refetch,
    error,
  };
};

/**
 * Hook to get a block by ID
 */
export const useGetBlockById = (blockId: string | null) => {
  const key = blockId ? blockDetailKey(blockId) : null;
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(key, () => getBlockById(blockId as string), {
    revalidateOnFocus: false,
  });

  return {
    block: data?.data,
    isLoading,
    isError: !!error,
    refetch,
    error,
  };
};

/**
 * Hook to get children blocks of a parent block
 */
export const useGetChildrenBlocks = (parentBlockId: string | null) => {
  const key = parentBlockId ? blockChildrenKey(parentBlockId) : null;
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(key, () => getChildrenBlocks(parentBlockId as string), {
    revalidateOnFocus: false,
    keepPreviousData: true,
  });

  return {
    children: data?.data || [],
    isLoading,
    isError: !!error,
    refetch,
    error,
  };
};

/**
 * Hook to create a new block
 */
export const useCreateBlock = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    "/blocks",
    (_, { arg }: { arg: CreateBlockData }) => createBlock(arg),
  );

  const create = useCallback(
    async (blockData: CreateBlockData) => {
      const result = await trigger(blockData);
      // Revalidate the blocks list for the page
      mutate(blocksByPageKey(blockData.pageId));
      return result;
    },
    [trigger],
  );

  return {
    isLoading: isMutating,
    isError: !!error,
    create,
  };
};

/**
 * Hook to update a block
 */
export const useUpdateBlock = (blockId: string, pageId: string) => {
  const { trigger, error, isMutating } = useSWRMutation(
    blockDetailKey(blockId),
    (_, { arg }: { arg: UpdateBlockData }) => updateBlock(blockId, arg),
  );

  const update = useCallback(
    async (blockData: UpdateBlockData) => {
      const result = await trigger(blockData);
      // Revalidate the block and blocks list
      mutate(blockDetailKey(blockId));
      mutate(blocksByPageKey(pageId));
      return result;
    },
    [trigger, blockId, pageId],
  );

  return {
    isLoading: isMutating,
    isError: !!error,
    update,
  };
};

/**
 * Hook to delete a block
 */
export const useDeleteBlock = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    "/blocks/delete",
    (_, { arg }: { arg: { blockId: string; pageId: string } }) =>
      deleteBlock(arg.blockId),
  );

  const remove = useCallback(
    async (blockId: string, pageId: string) => {
      const result = await trigger({ blockId, pageId });
      // Revalidate blocks list
      mutate(blocksByPageKey(pageId));
      return result;
    },
    [trigger],
  );

  return {
    isLoading: isMutating,
    isError: !!error,
    remove,
  };
};

/**
 * Hook for optimistic block updates (for editor)
 */
export const useBlocksSync = (pageId: string | null) => {
  const { blocks, isLoading, isError, refetch } = useGetBlocksByPage(pageId);

  const syncBlocks = useCallback(
    async (updatedBlocks: Array<{ id: string } & UpdateBlockData>) => {
      // Optimistic update
      for (const block of updatedBlocks) {
        await updateBlock(block.id, block);
      }
      // Revalidate
      if (pageId) {
        mutate(blocksByPageKey(pageId));
      }
    },
    [pageId],
  );

  return {
    blocks,
    isLoading,
    isError,
    refetch,
    syncBlocks,
  };
};
