import { z } from "zod";
import { BlockType } from "../types";

export const createBlockSchema = z.object({
  pageId: z.string().uuid("Invalid page ID"),
  type: z.nativeEnum(BlockType),
  parentId: z.string().uuid("Invalid parent ID").optional().nullable(),
  position: z.number().int().min(0).optional(),
  content: z.record(z.any()).optional(),
});

export const updateBlockSchema = z.object({
  type: z.nativeEnum(BlockType).optional(),
  content: z.record(z.any()).optional(),
  position: z.number().int().min(0).optional(),
});

export type CreateBlockFormData = z.infer<typeof createBlockSchema>;
export type UpdateBlockFormData = z.infer<typeof updateBlockSchema>;
