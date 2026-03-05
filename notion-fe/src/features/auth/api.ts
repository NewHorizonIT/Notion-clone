import api from "@/shared/lib/axios";
import { LoginData, SignupData } from "./validator";

// Types
export interface User {
  id: string;
  username: string;
  email: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  statusCode: number;
  message: string;
  data: {
    token: {
      accessToken: string;
      refreshToken: string;
    };
    user: User;
  };
}

export interface UserResponse {
  statusCode: number;
  message: string;
  data: User;
}

// API Endpoints

/**
 * Login user
 */
export const loginUser = (credentials: LoginData) =>
  api.post<AuthResponse>("/auth/login", credentials).then((res) => res.data);

/**
 * Register new user
 */
export const registerUser = (userData: SignupData) =>
  api.post<AuthResponse>("/auth/register", userData).then((res) => res.data);

/**
 * Request password reset email
 */
export const forgetPassword = (email: string) =>
  api.post("/auth/forget-password", { email }).then((res) => res.data);

/**
 * Reset password with token
 */
export const resetPassword = (password: string, token: string) =>
  api
    .post("/auth/reset-password", { password }, { params: { token } })
    .then((res) => res.data);

/**
 * Logout user
 */
export const logoutUser = () =>
  api.post("/auth/logout").then((res) => res.data);

/**
 * Get current user info
 */
export const getCurrentUser = () =>
  api.get<UserResponse>("/auth/me").then((res) => res.data);

/**
 * Refresh access token
 */
export const refreshToken = () =>
  api.post("/auth/refresh-token").then((res) => res.data);
