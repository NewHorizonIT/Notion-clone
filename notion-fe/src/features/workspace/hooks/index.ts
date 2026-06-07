import { CreateWorkspaceData } from "./../validator/index";
import useSWRMutation from "swr/mutation";
import {
  createWorkspace,
  deleteWorkspace,
  getDetailWorkspace,
  getListWorkspace,
  updateWorkspace,
} from "../api";
import useSWR, { mutate } from "swr";
import { useCallback } from "react";
import { Workspace } from "../types";

export const WORKSPACES_KEY = "/workspaces";
const EMPTY_WORKSPACES: Workspace[] = [];

type WorkspaceListItem = Workspace & {
  deletedAt?: string | null;
};

/**
 * Hook to create a new workspace
 * @returns Object with create action, loading and error state
 */
export const useCreateWorkspace = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    WORKSPACES_KEY,
    (_, { arg }: { arg: CreateWorkspaceData }) => createWorkspace(arg),
  );

  const create = useCallback(
    async (workspaceData: CreateWorkspaceData) => {
      const result = await trigger(workspaceData);
      // Revalidate the workspaces list after creating a new workspace
      mutate(WORKSPACES_KEY);
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
 * Hook to get all workspaces for the current user
 * @returns Object with workspaces, isLoading, and isError
 */
export const useGetListWorkspace = () => {
  const { data, error, isLoading, mutate } = useSWR(
    WORKSPACES_KEY,
    getListWorkspace,
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
    },
  );

  const workspaces = (
    (data?.data as WorkspaceListItem[] | undefined) ?? []
  ).filter((workspace) => !workspace.deletedAt) as Workspace[];

  return {
    workspaces: workspaces.length > 0 ? workspaces : EMPTY_WORKSPACES,
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
    { revalidateOnFocus: false },
  );

  return {
    workspace: data?.data as Workspace | undefined,
    isLoading,
    isError: !!error,
    refetch: mutate,
    error,
  };
};

/**
 * Hook to update a workspace
 * @param id - Workspace ID to update
 * @returns Object with update action, loading and error state
 */
export const useUpdateWorkspace = (id: string) => {
  const { trigger, error, isMutating } = useSWRMutation(
    `/workspaces/${id}`,
    (_, { arg }: { arg: Partial<CreateWorkspaceData> }) =>
      updateWorkspace(id, arg),
  );

  const update = useCallback(
    async (workspaceData: Partial<CreateWorkspaceData>) => {
      const result = await trigger(workspaceData);
      // Revalidate both the specific workspace and the list
      mutate(`/workspaces/${id}`);
      mutate(WORKSPACES_KEY);
      return result;
    },
    [trigger, id],
  );

  return {
    isLoading: isMutating,
    isError: !!error,
    update,
  };
};

/**
 * Hook to delete a workspace
 * @param id - Workspace ID to delete
 * @returns Object with delete action, loading and error state
 */
export const useDeleteWorkspace = (id: string) => {
  const { trigger, error, isMutating } = useSWRMutation(
    `/workspaces/${id}`,
    () => deleteWorkspace(id),
  );

  const remove = useCallback(async () => {
    const result = await trigger();
    // Revalidate both the specific workspace and the list after deletion
    mutate(`/workspaces/${id}`);
    mutate(WORKSPACES_KEY);
    return result;
  }, [trigger, id]);

  return {
    isLoading: isMutating,
    isError: !!error,
    remove,
  };
};
