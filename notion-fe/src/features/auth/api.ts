import api from "@/shared/lib/axios";
import { LoginData, SignupData } from "./validator";

export const loginUser = (credentials: LoginData) =>
  api.post("/auth/login", credentials).then((res) => res.data);

export const registerUser = (userData: SignupData) =>
  api.post("/auth/register", userData).then((res) => res.data);
