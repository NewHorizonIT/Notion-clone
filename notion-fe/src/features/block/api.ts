import api from "@/shared/lib/axios";
import {
  BlockResponse,
  BlocksResponse,
  CreateBlockData,
  UpdateBlockData,
} from "./types";

// API Endpoints

/**
 * Create a new block
 */
export const createBlock = (data: CreateBlockData) =>
  api.post<BlockResponse>("/blocks", data).then((res) => res.data);

/**
 * Get all blocks of a page
 */
export const getBlocksByPage = (pageId: string) =>
  api.get<BlocksResponse>(`/blocks/pages/${pageId}`).then((res) => res.data);

/**
 * Get block by ID
 */
export const getBlockById = (blockId: string) =>
  api.get<BlockResponse>(`/blocks/${blockId}`).then((res) => res.data);

/**
 * Get children blocks of a parent block
 */
export const getChildrenBlocks = (parentBlockId: string) =>
  api
    .get<BlocksResponse>(`/blocks/${parentBlockId}/children`)
    .then((res) => res.data);

/**
 * Update a block
 */
export const updateBlock = (blockId: string, data: UpdateBlockData) =>
  api.put<BlockResponse>(`/blocks/${blockId}`, data).then((res) => res.data);

/**
 * Soft delete a block
 */
export const deleteBlock = (blockId: string) =>
  api.delete<BlockResponse>(`/blocks/${blockId}`).then((res) => res.data);

/**
 * Batch create blocks
 */
export const batchCreateBlocks = (pageId: string, blocks: CreateBlockData[]) =>
  api
    .post<BlocksResponse>("/blocks/batch", { pageId, blocks })
    .then((res) => res.data);

/**
 * Batch update blocks
 */
export const batchUpdateBlocks = (
  blocks: Array<{ id: string } & UpdateBlockData>,
) =>
  api
    .patch<BlocksResponse>("/blocks/batch", { blocks })
    .then((res) => res.data);
