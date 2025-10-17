import api from "@/shared/lib/axios";
import { CreateWorkspaceData } from "./validator";

export const createWorkspace = (workspaceData: CreateWorkspaceData) =>
  api.post("/workspaces", workspaceData).then((res) => res.data);

export const getListWorkspace = () =>
  api.get("/workspaces").then((res) => res.data);

export const getDetailWorkspace = (id: string) =>
  api.get(`/workspace/${id}`).then((res) => res.data);
