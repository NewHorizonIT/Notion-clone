import { CreateWorkspaceData } from "./../validator/index";
import useSWRMutation from "swr/mutation";
import {
  createWorkspace,
  getDetailWorkspace,
  getListWorkspace,
  updateWorkspace,
} from "../api";
import useSWR, { mutate } from "swr";
import { useCallback } from "react";

/**
 * Hook to create a new workspace
 * @returns Object with workspace, isLoading, isError, mutateWorkspace, and mutate function
 */
export const useCreateWorkspace = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/workspaces",
    (_, { arg }: { arg: CreateWorkspaceData }) => createWorkspace(arg)
  );

  const handleCreateWorkspace = useCallback(
    async (workspaceData: CreateWorkspaceData) => {
      const result = await trigger(workspaceData);
      // Revalidate the workspaces list after creating a new workspace
      mutate("/workspaces");
      return result;
    },
    [trigger]
  );

  return {
    workspace: data?.data,
    isLoading: isMutating,
    isError: error,
    mutateWorkspace: handleCreateWorkspace,
  };
};

/**
 * Hook to get all workspaces for the current user
 * @returns Object with workspaces, isLoading, and isError
 */
export const useGetListWorkspace = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/workspaces",
    getListWorkspace
  );

  return {
    workspaces: data?.data || [],
    isLoading,
    isError: !!error,
    refetch: mutate,
    error,
  };
};

/**
 * Hook to get a specific workspace by ID
 * @param id - Workspace ID
 * @returns Object with workspace, isLoading, and isError
 */
export const useGetDetailWorkspace = (id: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `/workspaces/${id}` : null,
    () => getDetailWorkspace(id),
    { revalidateOnFocus: false }
  );

  return {
    workspace: data?.data,
    isLoading,
    isError: !!error,
    refetch: mutate,
    error,
  };
};

/**
 * Hook to update a workspace
 * @param id - Workspace ID to update
 * @returns Object with workspace, isLoading, isError, and mutateWorkspace function
 */
export const useUpdateWorkspace = (id: string) => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `/workspaces/${id}`,
    (_, { arg }: { arg: Partial<CreateWorkspaceData> }) =>
      updateWorkspace(id, arg)
  );

  const handleUpdateWorkspace = useCallback(
    async (workspaceData: Partial<CreateWorkspaceData>) => {
      const result = await trigger(workspaceData);
      // Revalidate both the specific workspace and the list
      mutate(`/workspaces/${id}`);
      mutate("/workspaces");
      return result;
    },
    [trigger, id]
  );

  return {
    workspace: data?.data,
    isLoading: isMutating,
    isError: error,
    mutateWorkspace: handleUpdateWorkspace,
  };
};
