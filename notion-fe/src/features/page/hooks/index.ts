import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { useCallback } from "react";
import {
  createPage,
  getPagesByWorkspace,
  getTrashedPages,
  getPageById,
  updatePage,
  deletePage,
  restorePage,
  hardDeletePage,
  searchPages,
} from "../api";
import { CreatePageData, Page, UpdatePageData } from "../types";

export const pagesByWorkspaceKey = (workspaceId: string) =>
  `/pages/workspace/${workspaceId}`;
export const pageDetailKey = (pageId: string) => `/pages/${pageId}`;
export const trashedPagesKey = (workspaceId: string) =>
  `/pages/workspaces/${workspaceId}/trash`;
export const pagesSearchKey = (title: string) =>
  `/pages/search?title=${encodeURIComponent(title)}`;

/**
 * Hook to create a new page
 */
export const useCreatePage = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    "/pages",
    (_, { arg }: { arg: CreatePageData }) => createPage(arg),
  );

  const create = useCallback(
    async (pageData: CreatePageData) => {
      const result = await trigger(pageData);
      // Revalidate the pages list for the workspace
      mutate(pagesByWorkspaceKey(pageData.workspaceId));
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
 * Hook to get all pages in a workspace
 */
export const useGetPagesByWorkspace = (workspaceId: string | null) => {
  const key = workspaceId ? pagesByWorkspaceKey(workspaceId) : null;
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(key, () => getPagesByWorkspace(workspaceId as string), {
    revalidateOnFocus: false,
    keepPreviousData: true,
  });

  return {
    pages: (data?.data || []) as Page[],
    isLoading,
    isError: !!error,
    refetch,
    error,
  };
};

/**
 * Hook to get trashed pages in a workspace
 */
export const useGetTrashedPages = (workspaceId: string | null) => {
  const key = workspaceId ? trashedPagesKey(workspaceId) : null;
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(key, () => getTrashedPages(workspaceId as string), {
    revalidateOnFocus: false,
    keepPreviousData: true,
  });

  return {
    trashedPages: (data?.data || []) as Page[],
    isLoading,
    isError: !!error,
    refetch,
    error,
  };
};

/**
 * Hook to get a page by ID
 */
export const useGetPageById = (pageId: string | null) => {
  const key = pageId ? pageDetailKey(pageId) : null;
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(key, () => getPageById(pageId as string), {
    revalidateOnFocus: false,
  });

  return {
    page: data?.data as Page | undefined,
    isLoading,
    isError: !!error,
    refetch,
    error,
  };
};

/**
 * Hook to update a page
 */
export const useUpdatePage = (pageId: string) => {
  const { trigger, error, isMutating } = useSWRMutation(
    pageDetailKey(pageId),
    (_, { arg }: { arg: UpdatePageData }) => updatePage(pageId, arg),
  );

  const update = useCallback(
    async (pageData: UpdatePageData) => {
      const result = await trigger(pageData);
      // Revalidate the page
      mutate(pageDetailKey(pageId));
      return result;
    },
    [trigger, pageId],
  );

  return {
    isLoading: isMutating,
    isError: !!error,
    update,
  };
};

/**
 * Hook to soft delete a page
 */
export const useDeletePage = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    "/pages/delete",
    (_, { arg }: { arg: { pageId: string; workspaceId: string } }) =>
      deletePage(arg.pageId),
  );

  const remove = useCallback(
    async (pageId: string, workspaceId: string) => {
      const result = await trigger({ pageId, workspaceId });
      // Revalidate pages list and trash
      mutate(pagesByWorkspaceKey(workspaceId));
      mutate(trashedPagesKey(workspaceId));
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
 * Hook to restore a page from trash
 */
export const useRestorePage = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    "/pages/restore",
    (_, { arg }: { arg: { pageId: string; workspaceId: string } }) =>
      restorePage(arg.pageId),
  );

  const restore = useCallback(
    async (pageId: string, workspaceId: string) => {
      const result = await trigger({ pageId, workspaceId });
      // Revalidate pages list and trash
      mutate(pagesByWorkspaceKey(workspaceId));
      mutate(trashedPagesKey(workspaceId));
      return result;
    },
    [trigger],
  );

  return {
    isLoading: isMutating,
    isError: !!error,
    restore,
  };
};

/**
 * Hook to permanently delete a page
 */
export const useHardDeletePage = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    "/pages/hard-delete",
    (_, { arg }: { arg: { pageId: string; workspaceId: string } }) =>
      hardDeletePage(arg.pageId),
  );

  const hardDelete = useCallback(
    async (pageId: string, workspaceId: string) => {
      const result = await trigger({ pageId, workspaceId });
      // Revalidate trash
      mutate(trashedPagesKey(workspaceId));
      return result;
    },
    [trigger],
  );

  return {
    isLoading: isMutating,
    isError: !!error,
    hardDelete,
  };
};

/**
 * Hook to search pages
 */
export const useSearchPages = (searchQuery: string | null) => {
  const normalizedQuery = searchQuery?.trim() || null;
  const key = normalizedQuery ? pagesSearchKey(normalizedQuery) : null;
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(key, () => searchPages(normalizedQuery as string), {
    revalidateOnFocus: false,
    keepPreviousData: true,
  });

  return {
    pages: (data?.data || []) as Page[],
    isLoading,
    isError: !!error,
    refetch,
    error,
  };
};
