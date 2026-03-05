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
import { CreatePageData, UpdatePageData } from "../types";

/**
 * Hook to create a new page
 */
export const useCreatePage = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/pages",
    (_, { arg }: { arg: CreatePageData }) => createPage(arg),
  );

  const handleCreatePage = useCallback(
    async (pageData: CreatePageData) => {
      const result = await trigger(pageData);
      // Revalidate the pages list for the workspace
      mutate(`/pages/workspace/${pageData.workspaceId}`);
      return result;
    },
    [trigger],
  );

  return {
    page: data?.data,
    isLoading: isMutating,
    isError: !!error,
    createPage: handleCreatePage,
  };
};

/**
 * Hook to get all pages in a workspace
 */
export const useGetPagesByWorkspace = (workspaceId: string | null) => {
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(
    workspaceId ? `/pages/workspace/${workspaceId}` : null,
    () => (workspaceId ? getPagesByWorkspace(workspaceId) : null),
    { revalidateOnFocus: false },
  );

  return {
    pages: data?.data || [],
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
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(
    workspaceId ? `/pages/workspaces/${workspaceId}/trash` : null,
    () => (workspaceId ? getTrashedPages(workspaceId) : null),
    { revalidateOnFocus: false },
  );

  return {
    trashedPages: data?.data || [],
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
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(
    pageId ? `/pages/${pageId}` : null,
    () => (pageId ? getPageById(pageId) : null),
    { revalidateOnFocus: false },
  );

  return {
    page: data?.data,
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
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/pages/${pageId}`,
    (_, { arg }: { arg: UpdatePageData }) => updatePage(pageId, arg),
  );

  const handleUpdatePage = useCallback(
    async (pageData: UpdatePageData) => {
      const result = await trigger(pageData);
      // Revalidate the page
      mutate(`/pages/${pageId}`);
      return result;
    },
    [trigger, pageId],
  );

  return {
    page: data?.data,
    isLoading: isMutating,
    isError: !!error,
    updatePage: handleUpdatePage,
  };
};

/**
 * Hook to soft delete a page
 */
export const useDeletePage = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/pages/delete",
    (_, { arg }: { arg: { pageId: string; workspaceId: string } }) =>
      deletePage(arg.pageId),
  );

  const handleDeletePage = useCallback(
    async (pageId: string, workspaceId: string) => {
      const result = await trigger({ pageId, workspaceId });
      // Revalidate pages list and trash
      mutate(`/pages/workspace/${workspaceId}`);
      mutate(`/pages/workspaces/${workspaceId}/trash`);
      return result;
    },
    [trigger],
  );

  return {
    deletedPage: data?.data,
    isLoading: isMutating,
    isError: !!error,
    deletePage: handleDeletePage,
  };
};

/**
 * Hook to restore a page from trash
 */
export const useRestorePage = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/pages/restore",
    (_, { arg }: { arg: { pageId: string; workspaceId: string } }) =>
      restorePage(arg.pageId),
  );

  const handleRestorePage = useCallback(
    async (pageId: string, workspaceId: string) => {
      const result = await trigger({ pageId, workspaceId });
      // Revalidate pages list and trash
      mutate(`/pages/workspace/${workspaceId}`);
      mutate(`/pages/workspaces/${workspaceId}/trash`);
      return result;
    },
    [trigger],
  );

  return {
    restoredPage: data?.data,
    isLoading: isMutating,
    isError: !!error,
    restorePage: handleRestorePage,
  };
};

/**
 * Hook to permanently delete a page
 */
export const useHardDeletePage = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/pages/hard-delete",
    (_, { arg }: { arg: { pageId: string; workspaceId: string } }) =>
      hardDeletePage(arg.pageId),
  );

  const handleHardDeletePage = useCallback(
    async (pageId: string, workspaceId: string) => {
      const result = await trigger({ pageId, workspaceId });
      // Revalidate trash
      mutate(`/pages/workspaces/${workspaceId}/trash`);
      return result;
    },
    [trigger],
  );

  return {
    isLoading: isMutating,
    isError: !!error,
    hardDeletePage: handleHardDeletePage,
  };
};

/**
 * Hook to search pages
 */
export const useSearchPages = (searchQuery: string | null) => {
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(
    searchQuery ? `/pages/search?title=${searchQuery}` : null,
    () => (searchQuery ? searchPages(searchQuery) : null),
    { revalidateOnFocus: false },
  );

  return {
    pages: data?.data || [],
    isLoading,
    isError: !!error,
    refetch,
    error,
  };
};
