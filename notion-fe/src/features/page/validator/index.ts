import { z } from "zod";

export const createPageSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  workspaceId: z.string().uuid("Invalid workspace ID"),
});

export const updatePageSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
});

export type CreatePageFormData = z.infer<typeof createPageSchema>;
export type UpdatePageFormData = z.infer<typeof updatePageSchema>;
