import { CreateWorkspaceData } from "./../validator/index";
import useSWRMutation from "swr/mutation";
import { createWorkspace, getDetailWorkspace, getListWorkspace } from "../api";
import useSWR from "swr";

export const useCreateWorkspace = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/workspaces",
    (_, { arg }: { arg: CreateWorkspaceData }) => createWorkspace(arg)
  );

  return {
    workspace: data,
    isLoading: isMutating,
    isError: error,
    mutateWorkspace: trigger,
  };
};

export const useGetListWorkspace = () => {
  const { data, error, isLoading } = useSWR("/workspaces", getListWorkspace);
  return {
    workspaces: data,
    isLoading,
    isError: !!error,
  };
};

export const useGetDetailWorkspace = (id: string) => {
  const { data, error, isLoading } = useSWR(`/workspaces/${id}`, () =>
    getDetailWorkspace(id)
  );
  return {
    workspace: data ?? [],
    isLoading,
    isError: !!error,
  };
};
