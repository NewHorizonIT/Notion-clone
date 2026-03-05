import axios from "axios";
import getDeviceId from "../utils/getDeviceId";
import useAuthStore from "../store/useAuthStore";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY,
  },
  withCredentials: true, // Enable cookies for refresh token
});

api.interceptors.request.use((config) => {
  // Set up device id for request
  const deviceId = getDeviceId();

  config.headers["X-Device-ID"] = deviceId;
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const deviceId = getDeviceId();
        const { data } = await axios.post(
          `${API_BASE_URL}/auth/refresh-token`,
          {},
          {
            headers: {
              "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY,
              "X-Device-ID": deviceId,
            },
            withCredentials: true,
          },
        );

        // Update access token in zustand
        const newToken = data.data?.accessToken || data.accessToken;
        useAuthStore.getState().setToken(newToken);

        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

        // Retry original request with new token
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed, logout user
        useAuthStore.getState().handleLogout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
