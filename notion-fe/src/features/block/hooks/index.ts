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
import { CreateBlockData, UpdateBlockData } from "../types";

/**
 * Hook to get all blocks of a page
 */
export const useGetBlocksByPage = (pageId: string | null) => {
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(
    pageId ? `/blocks/pages/${pageId}` : null,
    () => (pageId ? getBlocksByPage(pageId) : null),
    { revalidateOnFocus: false },
  );

  return {
    blocks: data?.data || [],
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
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(
    blockId ? `/blocks/${blockId}` : null,
    () => (blockId ? getBlockById(blockId) : null),
    { revalidateOnFocus: false },
  );

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
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(
    parentBlockId ? `/blocks/${parentBlockId}/children` : null,
    () => (parentBlockId ? getChildrenBlocks(parentBlockId) : null),
    { revalidateOnFocus: false },
  );

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
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blocks",
    (_, { arg }: { arg: CreateBlockData }) => createBlock(arg),
  );

  const handleCreateBlock = useCallback(
    async (blockData: CreateBlockData) => {
      const result = await trigger(blockData);
      // Revalidate the blocks list for the page
      mutate(`/blocks/pages/${blockData.pageId}`);
      return result;
    },
    [trigger],
  );

  return {
    block: data?.data,
    isLoading: isMutating,
    isError: !!error,
    createBlock: handleCreateBlock,
  };
};

/**
 * Hook to update a block
 */
export const useUpdateBlock = (blockId: string, pageId: string) => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/blocks/${blockId}`,
    (_, { arg }: { arg: UpdateBlockData }) => updateBlock(blockId, arg),
  );

  const handleUpdateBlock = useCallback(
    async (blockData: UpdateBlockData) => {
      const result = await trigger(blockData);
      // Revalidate the block and blocks list
      mutate(`/blocks/${blockId}`);
      mutate(`/blocks/pages/${pageId}`);
      return result;
    },
    [trigger, blockId, pageId],
  );

  return {
    block: data?.data,
    isLoading: isMutating,
    isError: !!error,
    updateBlock: handleUpdateBlock,
  };
};

/**
 * Hook to delete a block
 */
export const useDeleteBlock = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/blocks/delete",
    (_, { arg }: { arg: { blockId: string; pageId: string } }) =>
      deleteBlock(arg.blockId),
  );

  const handleDeleteBlock = useCallback(
    async (blockId: string, pageId: string) => {
      const result = await trigger({ blockId, pageId });
      // Revalidate blocks list
      mutate(`/blocks/pages/${pageId}`);
      return result;
    },
    [trigger],
  );

  return {
    deletedBlock: data?.data,
    isLoading: isMutating,
    isError: !!error,
    deleteBlock: handleDeleteBlock,
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
        mutate(`/blocks/pages/${pageId}`);
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
