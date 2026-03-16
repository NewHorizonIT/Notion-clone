import api from "@/shared/lib/axios";
import { CreateWorkspaceData } from "./validator";
import { ApiResponse, Workspace } from "./types";

// API Endpoints
/**
 * Create a new workspace
 * @param workspaceData - Workspace name
 * @returns Created workspace data
 */
export const createWorkspace = (workspaceData: CreateWorkspaceData) =>
  api
    .post<ApiResponse<Workspace>>("/workspaces", workspaceData)
    .then((res) => res.data);

/**
 * Get list of all workspaces for the current user
 * @returns List of workspaces
 */
export const getListWorkspace = () =>
  api.get<ApiResponse<Workspace[]>>("/workspaces").then((res) => res.data);

/**
 * Get detail of a specific workspace by ID
 * @param id - Workspace ID
 * @returns Workspace detail
 */
export const getDetailWorkspace = (id: string) =>
  api.get<ApiResponse<Workspace>>(`/workspaces/${id}`).then((res) => res.data);

/**
 * Update a workspace
 * @param id - Workspace ID
 * @param workspaceData - Updated workspace data (name)
 * @returns Updated workspace data
 */
export const updateWorkspace = (
  id: string,
  workspaceData: Partial<CreateWorkspaceData>,
) =>
  api
    .put<ApiResponse<Workspace>>(`/workspaces/${id}`, workspaceData)
    .then((res) => res.data);
