import api from "@/shared/lib/axios";
import { LoginData, SignupData } from "./validator";
import { ApiResponse, AuthPayload, AuthToken, User } from "./types";

// API Endpoints

/**
 * Login user
 */
export const loginUser = (credentials: LoginData) =>
  api
    .post<ApiResponse<AuthPayload>>("/auth/login", credentials)
    .then((res) => res.data);

/**
 * Register new user
 */
export const registerUser = (userData: SignupData) =>
  api
    .post<ApiResponse<AuthPayload>>("/auth/register", userData)
    .then((res) => res.data);

/**
 * Request password reset email
 */
export const forgetPassword = (email: string) =>
  api
    .post<ApiResponse<{ email: string }>>("/auth/forget-password", { email })
    .then((res) => res.data);

/**
 * Reset password with token
 */
export const resetPassword = (password: string, token: string) =>
  api
    .post<
      ApiResponse<{ user: User }>
    >("/auth/reset-password", { password }, { params: { token } })
    .then((res) => res.data);

/**
 * Logout user
 */
export const logoutUser = () =>
  api.post<ApiResponse<null>>("/auth/logout").then((res) => res.data);

/**
 * Get current user info
 */
export const getCurrentUser = () =>
  api.get<ApiResponse<{ user: User }>>("/auth/me").then((res) => res.data);

/**
 * Refresh access token
 */
export const refreshToken = () =>
  api
    .post<ApiResponse<AuthToken>>("/auth/refresh-token")
    .then((res) => res.data);
