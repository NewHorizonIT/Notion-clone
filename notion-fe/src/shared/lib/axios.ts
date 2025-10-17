import axios from "axios";
import getDeviceId from "../utils/getDeviceId";
import useAuthStore from "../store/useAuthStore";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY,
  },
});

api.interceptors.request.use((config) => {
  // Set up device id for request
  const deviceId = getDeviceId();

  config.headers["X-Device-ID"] = deviceId;
  const token = useAuthStore.getState().token; // ⚡ Lấy token trực tiếp từ Zustand
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         // Gọi refresh token API
//         const { data } = await axios.post(`${baseURLApi}/auth/refresh-token`);

//         // Cập nhật header với token mới
//         originalRequest.headers[
//           "Authorization"
//         ] = `Bearer ${data.access_token}`;

//         // Retry request cũ với token mới
//         return api(originalRequest);
//       } catch (refreshError) {
//         // Nếu refresh token cũng lỗi, xử lý logout hoặc thông báo user
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
