import useSWRMutation from "swr/mutation";
import { loginUser, registerUser } from "../api";
import { LoginData } from "../validator";

export const useLogin = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/auth/login",
    (_, { arg }: { arg: LoginData }) => loginUser(arg)
  );

  return {
    user: data,
    isLoading: isMutating,
    isError: error,
    mutateUser: trigger,
  };
};

export const useRegister = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/auth/register",
    (_, { arg }) => registerUser(arg)
  );

  return {
    user: data,
    isLoading: isMutating,
    isError: error,
    mutateUser: trigger,
  };
};
