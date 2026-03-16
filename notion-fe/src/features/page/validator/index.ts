import { z } from "zod";

export const createPageSchema = z.object({
  title: z.string().trim().min(1).optional(),
  description: z.string().trim().optional(),
  workspaceId: z.string().uuid("Invalid workspace ID"),
});

export const updatePageSchema = z.object({
  title: z.string().trim().min(1).optional(),
  description: z.string().trim().optional(),
});

export type CreatePageFormData = z.infer<typeof createPageSchema>;
export type UpdatePageFormData = z.infer<typeof updatePageSchema>;
