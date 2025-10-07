import useSWRMutation from "swr/mutation";
import { loginUser, registerUser, resetPassword } from "../api";
import { LoginData, SignupData } from "../validator";

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
    (_, { arg }: { arg: SignupData }) => registerUser(arg)
  );

  return {
    user: data,
    isLoading: isMutating,
    isError: error,
    mutateUser: trigger,
  };
};

export const useResetPassword = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/auth/reset-password",
    (_, { arg }: { arg: { token: string; password: string } }) => {
      const { token, password } = arg;
      return resetPassword(password, token);
    }
  );

  return {
    user: data,
    isLoading: isMutating,
    isError: !!error,
    mutateResetPassword: trigger,
  };
};
