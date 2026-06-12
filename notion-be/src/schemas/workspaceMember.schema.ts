import z from "zod";
import { WorkspaceRole } from "../generated/prisma";

export const InviteWorkspaceMemberSchema = z.object({
  userId: z.string().uuid("User ID must be a valid UUID"),
  role: z
    .enum([WorkspaceRole.OWNER, WorkspaceRole.ADMIN, WorkspaceRole.MEMBER])
    .default(WorkspaceRole.MEMBER),
});

export const UpdateWorkspaceMemberRoleSchema = z.object({
  role: z.enum([
    WorkspaceRole.OWNER,
    WorkspaceRole.ADMIN,
    WorkspaceRole.MEMBER,
  ]),
});

export type InviteWorkspaceMemberData = z.infer<
  typeof InviteWorkspaceMemberSchema
>;

export type UpdateWorkspaceMemberRoleData = z.infer<
  typeof UpdateWorkspaceMemberRoleSchema
>;

export interface WorkspaceMemberUserResponse {
  id: string;
  username: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkspaceMemberResponse {
  id: string;
  workspaceId: string;
  userId: string;
  roleId: WorkspaceRole;
  createdAt: Date;
  members: WorkspaceMemberUserResponse;
}
