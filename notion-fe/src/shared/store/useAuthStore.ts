import { create } from "zustand";

type AuthState = {
  isLogin: boolean;
  token: string | null;
  user: Record<string, string | number> | null;
};

type AuthAction = {
  setToken: (token: string) => void;
  setIsLogin: (status: boolean) => void;
  setUser: (user: Record<string, string | number>) => void;
  handleLogout: () => void;
};

const useAuthStore = create<AuthState & AuthAction>((set) => ({
  isLogin: false,
  token: null,
  user: null,
  setIsLogin: (status: boolean) => set({ isLogin: status }),
  setToken: (token: string) => set({ token: token }),
  setUser: (user: Record<string, string | number>) => set({ user }),
  handleLogout: () => set({ isLogin: false, user: null, token: null }),
}));

export default useAuthStore;
