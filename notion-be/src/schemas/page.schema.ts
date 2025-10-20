import * as z from "zod";

// Schema and type of create page input
export const createPageSchema = z
  .object({
    title: z
      .string()
      .min(1, "Title is required")
      .max(100, "Title too long")
      .default("New Page"),
    description: z.string().max(500, "Description too long").optional(),
    workspaceId: z.string().uuid(),
  })
  .strict();

export type CreatePageData = z.infer<typeof createPageSchema>;

// Schema and type of update page input
export const updatePageSchema = z
  .object({
    title: z.string().min(1).max(100).optional(),
    description: z.string().max(500).optional(),
  })
  .strict();

export type UpdatePageData = z.infer<typeof updatePageSchema>;
