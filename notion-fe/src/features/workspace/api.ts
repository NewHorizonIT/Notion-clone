import api from "@/shared/lib/axios";
import { CreateWorkspaceData } from "./validator";

// Types
export interface Workspace {
  id: string;
  name: string;
  ownerId: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateWorkspaceResponse {
  statusCode: number;
  message: string;
  data: Workspace;
}

export interface GetWorkspacesResponse {
  statusCode: number;
  message: string;
  data: Workspace[];
}

export interface GetWorkspaceResponse {
  statusCode: number;
  message: string;
  data: Workspace;
}

export interface UpdateWorkspaceResponse {
  statusCode: number;
  message: string;
  data: Workspace;
}

// API Endpoints
/**
 * Create a new workspace
 * @param workspaceData - Workspace name
 * @returns Created workspace data
 */
export const createWorkspace = (workspaceData: CreateWorkspaceData) =>
  api.post("/workspaces", workspaceData).then((res) => res.data);

/**
 * Get list of all workspaces for the current user
 * @returns List of workspaces
 */
export const getListWorkspace = () =>
  api.get("/workspaces").then((res) => res.data);

/**
 * Get detail of a specific workspace by ID
 * @param id - Workspace ID
 * @returns Workspace detail
 */
export const getDetailWorkspace = (id: string) =>
  api.get(`/workspaces/${id}`).then((res) => res.data);

/**
 * Update a workspace
 * @param id - Workspace ID
 * @param workspaceData - Updated workspace data (name)
 * @returns Updated workspace data
 */
export const updateWorkspace = (
  id: string,
  workspaceData: Partial<CreateWorkspaceData>
) => api.put(`/workspaces/${id}`, workspaceData).then((res) => res.data);
