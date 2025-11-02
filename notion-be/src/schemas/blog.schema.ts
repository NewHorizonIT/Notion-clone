import * as z from "zod";

const createBlockSchema = z
  .object({
    pageId: z.string(),
    parentId: z.string().optional(),
    type: z.string(),
    content: z.json().optional(),
    orderIndex: z.number().default(0),
  })
  .strict();

export type CreateBlockData = z.infer<typeof createBlockSchema>;

const updateBlockSchema = z
  .object({
    pageId: z.string().optional(),
    parentId: z.string().optional(),
    content: z.string().optional(),
    orderIndex: z.number().optional(),
  })
  .strict();

export type UpdateBlockData = z.infer<typeof updateBlockSchema>;
