import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/features/auth/types";

type AuthState = {
  hasHydrated: boolean;
  isLogin: boolean;
  token: string | null;
  user: User | null;
};

type AuthAction = {
  setHasHydrated: (status: boolean) => void;
  setToken: (token: string) => void;
  setIsLogin: (status: boolean) => void;
  setUser: (user: User) => void;
  setAuth: (token: string, user: User) => void;
  handleLogout: () => void;
};

const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      hasHydrated: false,
      isLogin: false,
      token: null,
      user: null,
      setHasHydrated: (status: boolean) => set({ hasHydrated: status }),
      setIsLogin: (status: boolean) => set({ isLogin: status }),
      setToken: (token: string) => set({ token: token, isLogin: true }),
      setUser: (user: User) => set({ user }),
      setAuth: (token: string, user: User) =>
        set({ token, user, isLogin: true }),
      handleLogout: () => set({ isLogin: false, user: null, token: null }),
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        // Guard against stale persisted shape where isLogin=true but token is missing.
        if (state?.isLogin && !state.token) {
          state.handleLogout();
        }
        state?.setHasHydrated(true);
      },
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        isLogin: state.isLogin,
      }),
    },
  ),
);

export default useAuthStore;
