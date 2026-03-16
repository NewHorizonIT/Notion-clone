import api from "@/shared/lib/axios";
import {
  PageResponse,
  PagesResponse,
  CreatePageData,
  UpdatePageData,
} from "./types";

// API Endpoints

/**
 * Create a new page
 */
export const createPage = (data: CreatePageData) =>
  api.post<PageResponse>("/pages", data).then((res) => res.data);

/**
 * Get all pages in a workspace
 */
export const getPagesByWorkspace = (workspaceId: string) =>
  api
    .get<PagesResponse>(`/pages/workspace/${workspaceId}`)
    .then((res) => res.data);

/**
 * Get trashed pages in a workspace
 */
export const getTrashedPages = (workspaceId: string) =>
  api
    .get<PagesResponse>(`/pages/workspaces/${workspaceId}/trash`)
    .then((res) => res.data);

/**
 * Get page by ID
 */
export const getPageById = (id: string) =>
  api.get<PageResponse>(`/pages/${id}`).then((res) => res.data);

/**
 * Update page
 */
export const updatePage = (id: string, data: UpdatePageData) =>
  api.put<PageResponse>(`/pages/${id}`, data).then((res) => res.data);

/**
 * Soft delete page (move to trash)
 */
export const deletePage = (id: string) =>
  api.delete<PageResponse>(`/pages/${id}`).then((res) => res.data);

/**
 * Restore page from trash
 */
export const restorePage = (id: string) =>
  api.patch<PageResponse>(`/pages/${id}/restore`).then((res) => res.data);

/**
 * Permanently delete page
 */
export const hardDeletePage = (id: string) =>
  api.delete<PageResponse>(`/pages/${id}/hard`).then((res) => res.data);

/**
 * Search pages by title
 */
export const searchPages = (title: string) =>
  api
    .get<PagesResponse>("/pages/search", { params: { title } })
    .then((res) => res.data);
