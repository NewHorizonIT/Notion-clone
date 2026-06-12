import { injectable } from "tsyringe";
import {
  PrismaClient,
  WorkspaceMember,
  WorkspaceRole,
} from "../generated/prisma";

export type WorkspaceMemberWithUser = WorkspaceMember & {
  members: {
    id: string;
    username: string;
    email: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
};

@injectable()
class WorkspaceMemberRepo {
  constructor(private readonly prisma: PrismaClient) {}

  // Create member in workspace
  async createWorkspaceMember(
    workspaceId: string,
    userId: string,
    role: WorkspaceRole = WorkspaceRole.MEMBER,
  ) {
    return this.prisma.workspaceMember.create({
      data: {
        workspaceId: workspaceId,
        userId: userId,
        roleId: role,
      },
    });
  }

  // Get member by workspace and user
  async getWorkspaceMemberByWorkspaceAndUser(
    workspaceId: string,
    userId: string,
  ) {
    return this.prisma.workspaceMember.findUnique({
      where: {
        workspaceId_userId: {
          workspaceId,
          userId,
        },
      },
      include: {
        members: true,
      },
    });
  }

  // Get list member of workspace
  async getWorkspaceMembers(workspaceId: string) {
    return this.prisma.workspaceMember.findMany({
      where: {
        workspaceId: workspaceId,
      },
      include: {
        members: true,
      },
    });
  }

  // Remove member from workspace
  async removeMemberFromWorkspace(workspaceId: string, userId: string) {
    return this.prisma.workspaceMember.delete({
      where: {
        workspaceId_userId: {
          workspaceId,
          userId,
        },
      },
    });
  }

  // Update role of member in workspace
  async updateRoleOfMemberInWorkspace(
    workspaceId: string,
    userId: string,
    role: WorkspaceRole,
  ) {
    return this.prisma.workspaceMember.update({
      where: {
        workspaceId_userId: {
          workspaceId,
          userId,
        },
      },
      data: {
        roleId: role,
      },
    });
  }

  // Check if user is member of workspace
  async isUserMemberOfWorkspace(workspaceId: string, userId: string) {
    const member = await this.getWorkspaceMemberByWorkspaceAndUser(
      workspaceId,
      userId,
    );
    return !!member;
  }
}
export default WorkspaceMemberRepo;
