import { injectable } from "tsyringe";
import { PrismaClient } from "../generated/prisma";
import { WorkspaceRole } from "../generated/prisma";
@injectable()
class WorkspaceMemberRepo {
  constructor(private readonly prisma: PrismaClient) {}

  // Invite member to workspace
  async inviteMemberToWorkspace(workspaceId: string, userId: string) {
    return this.prisma.workspaceMember.create({
      data: {
        workspaceId: workspaceId,
        userId: userId,
      },
    });
  }

  // Get list member of workspace
  async getListMemberOfWorkspace(workspaceId: string) {
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
    return this.prisma.workspaceMember.deleteMany({
      where: {
        workspaceId: workspaceId,
        userId: userId,
      },
    });
  }

  // Update role of member in workspace
  async updateRoleOfMemberInWorkspace(
    workspaceId: string,
    userId: string,
    role: WorkspaceRole,
  ) {
    return this.prisma.workspaceMember.updateMany({
      where: {
        workspaceId: workspaceId,
        userId: userId,
      },
      data: {
        roleId: role,
      },
    });
  }

  // Check if user is member of workspace
  async isUserMemberOfWorkspace(workspaceId: string, userId: string) {
    const member = await this.prisma.workspaceMember.findFirst({
      where: {
        workspaceId: workspaceId,
        userId: userId,
      },
    });
    return !!member;
  }
}
export default WorkspaceMemberRepo;
