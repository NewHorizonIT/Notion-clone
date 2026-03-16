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
import { mutate } from "swr";

export const useLogin = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    "/auth/login",
    (_, { arg }: { arg: LoginData }) => loginUser(arg),
  );

  const login = useCallback(
    async (payload: LoginData) => {
      const result = await trigger(payload);
      mutate("/auth/me");
      return result;
    },
    [trigger],
  );

  return {
    isLoading: isMutating,
    isError: !!error,
    login,
  };
};

export const useRegister = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    "/auth/register",
    (_, { arg }: { arg: SignupData }) => registerUser(arg),
  );

  const register = useCallback(
    async (payload: SignupData) => {
      const result = await trigger(payload);
      mutate("/auth/me");
      return result;
    },
    [trigger],
  );

  return {
    isLoading: isMutating,
    isError: !!error,
    register,
  };
};

export const useResetPassword = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    "/auth/reset-password",
    (_, { arg }: { arg: { token: string; password: string } }) => {
      const { token, password } = arg;
      return resetPassword(password, token);
    },
  );

  const reset = useCallback(
    async (payload: { token: string; password: string }) => {
      return trigger(payload);
    },
    [trigger],
  );

  return {
    isLoading: isMutating,
    isError: !!error,
    reset,
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
      mutate("/auth/me", null, false);
    } catch (err) {
      // Still logout locally even if API fails
      handleLogout();
      mutate("/auth/me", null, false);
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
  const isLogin = useAuthStore((state) => state.isLogin);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(
    hasHydrated && isLogin ? "/auth/me" : null,
    () => getCurrentUser(),
    {
      revalidateOnFocus: false,
    },
  );

  return {
    user: data?.data?.user,
    isLoading,
    isError: !!error,
    refetch,
    error,
  };
};
