import z from "zod";

export const CreateWorkSpaceSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type WorkSpaceData = z.infer<typeof CreateWorkSpaceSchema>;

export interface WorkSpaceResponse {
  id: string;
  name: string;
  ownerId: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkSpaceListResponse {
  workspaces: WorkSpaceResponse[];
}
