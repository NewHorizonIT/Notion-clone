import z from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().min(1, "Name is required").max(255, "Name is too long"),
});

export type CreateWorkspaceData = z.infer<typeof createWorkspaceSchema>;
