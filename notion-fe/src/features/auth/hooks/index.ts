import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import {
  loginUser,
  registerUser,
  resetPassword,
  logoutUser,
  getCurrentUser,
} from "../api";
import { LoginData, SignupData } from "../validator";
import useAuthStore from "@/shared/store/useAuthStore";
import { useCallback } from "react";

export const useLogin = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/auth/login",
    (_, { arg }: { arg: LoginData }) => loginUser(arg),
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
    (_, { arg }: { arg: SignupData }) => registerUser(arg),
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
    },
  );

  return {
    user: data,
    isLoading: isMutating,
    isError: !!error,
    mutateResetPassword: trigger,
  };
};

export const useLogout = () => {
  const handleLogout = useAuthStore((state) => state.handleLogout);

  const { trigger, error, isMutating } = useSWRMutation("/auth/logout", () =>
    logoutUser(),
  );

  const logout = useCallback(async () => {
    try {
      await trigger();
      handleLogout();
    } catch (err) {
      // Still logout locally even if API fails
      handleLogout();
      throw err;
    }
  }, [trigger, handleLogout]);

  return {
    isLoading: isMutating,
    isError: !!error,
    logout,
  };
};

export const useCurrentUser = () => {
  const token = useAuthStore((state) => state.token);

  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(token ? "/auth/me" : null, () => getCurrentUser(), {
    revalidateOnFocus: false,
  });

  return {
    user: data?.data,
    isLoading,
    isError: !!error,
    refetch,
    error,
  };
};
