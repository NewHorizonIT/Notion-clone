import { injectable } from "tsyringe";
import WorkspaceMemberRepo, {
  WorkspaceMemberWithUser,
} from "../repositories/workspaceMember.repo";
import { ErrorResponse } from "../response/response";
import { StatusCodes } from "../response";
import { WorkspaceRole } from "../generated/prisma";
import WorkspaceRepo from "../repositories/workspace.repo";
import UserRepo from "../repositories/userRepo";
import {
  InviteWorkspaceMemberData,
  UpdateWorkspaceMemberRoleData,
} from "../schemas/workspaceMember.schema";

@injectable()
class WorkspaceMemberService {
  constructor(
    private workspaceMemberRepo: WorkspaceMemberRepo,
    private workspaceRepo: WorkspaceRepo,
    private userRepo: UserRepo,
  ) {}

  private async getWorkspaceOrThrow(workspaceId: string) {
    const workspace = await this.workspaceRepo.findWorkspaceById(workspaceId);
    if (!workspace) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: "Workspace not found",
        error: "Not Found",
      });
    }

    return workspace;
  }

  private async getWorkspaceMemberOrThrow(
    workspaceId: string,
    userId: string,
  ): Promise<WorkspaceMemberWithUser> {
    const member =
      await this.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser(
        workspaceId,
        userId,
      );

    if (!member) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: "Workspace member not found",
        error: "Not Found",
      });
    }

    return member;
  }

  private assertOwnerRole(
    workspaceOwnerId: string,
    requesterUserId: string,
    currentRole?: WorkspaceRole,
  ): void {
    if (
      workspaceOwnerId === requesterUserId ||
      currentRole === WorkspaceRole.OWNER
    ) {
      return;
    }

    throw new ErrorResponse({
      statusCode: StatusCodes.FORBIDDEN,
      message: "Only workspace owner can perform this action",
      error: "FORBIDDEN",
    });
  }

  private ensureMutableMember(
    workspaceOwnerId: string,
    targetUserId: string,
    targetRole: WorkspaceRole,
  ): void {
    if (
      workspaceOwnerId === targetUserId ||
      targetRole === WorkspaceRole.OWNER
    ) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "OWNER role cannot be modified",
        error: "Bad Request",
      });
    }
  }

  // Get list member of workspace
  public async getListMemberOfWorkspace(
    workspaceId: string,
    requesterUserId: string,
  ): Promise<WorkspaceMemberWithUser[]> {
    const workspace = await this.getWorkspaceOrThrow(workspaceId);
    const requesterMember =
      await this.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser(
        workspaceId,
        requesterUserId,
      );

    if (!requesterMember && workspace.ownerId !== requesterUserId) {
      throw new ErrorResponse({
        statusCode: StatusCodes.FORBIDDEN,
        message: "Access denied",
        error: "FORBIDDEN",
      });
    }

    return this.workspaceMemberRepo.getWorkspaceMembers(workspaceId);
  }

  // Invite member to workspace
  public async inviteMemberToWorkspace(
    workspaceId: string,
    requesterUserId: string,
    payload: InviteWorkspaceMemberData,
  ): Promise<WorkspaceMemberWithUser> {
    const workspace = await this.getWorkspaceOrThrow(workspaceId);
    this.assertOwnerRole(workspace.ownerId, requesterUserId);

    if (payload.role === WorkspaceRole.OWNER) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "OWNER role cannot be assigned through invite API",
        error: "Bad Request",
      });
    }

    const targetUser = await this.userRepo.getUserById(payload.userId);
    if (!targetUser) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: "User not found",
        error: "Not Found",
      });
    }

    const existingMember =
      await this.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser(
        workspaceId,
        payload.userId,
      );

    if (existingMember) {
      throw new ErrorResponse({
        statusCode: StatusCodes.CONFLICT,
        message: "User is already a member of the workspace",
        error: "Conflict",
      });
    }

    const member = await this.workspaceMemberRepo.createWorkspaceMember(
      workspaceId,
      payload.userId,
      payload.role,
    );

    return this.getWorkspaceMemberOrThrow(workspaceId, member.userId);
  }

  // Remove member from workspace
  public async removeMemberFromWorkspace(
    workspaceId: string,
    requesterUserId: string,
    targetUserId: string,
  ): Promise<void> {
    const workspace = await this.getWorkspaceOrThrow(workspaceId);
    this.assertOwnerRole(workspace.ownerId, requesterUserId);

    const targetMember =
      await this.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser(
        workspaceId,
        targetUserId,
      );

    if (!targetMember) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: "Workspace member not found",
        error: "Not Found",
      });
    }

    this.ensureMutableMember(
      workspace.ownerId,
      targetUserId,
      targetMember.roleId,
    );

    await this.workspaceMemberRepo.removeMemberFromWorkspace(
      workspaceId,
      targetUserId,
    );
  }

  // Update role of member in workspace
  public async updateRoleOfMemberInWorkspace(
    workspaceId: string,
    requesterUserId: string,
    targetUserId: string,
    payload: UpdateWorkspaceMemberRoleData,
  ): Promise<WorkspaceMemberWithUser> {
    const workspace = await this.getWorkspaceOrThrow(workspaceId);
    this.assertOwnerRole(workspace.ownerId, requesterUserId);

    if (payload.role === WorkspaceRole.OWNER) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "OWNER role cannot be assigned through change-role API",
        error: "Bad Request",
      });
    }

    const targetMember =
      await this.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser(
        workspaceId,
        targetUserId,
      );

    if (!targetMember) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: "Workspace member not found",
        error: "Not Found",
      });
    }

    this.ensureMutableMember(
      workspace.ownerId,
      targetUserId,
      targetMember.roleId,
    );

    await this.workspaceMemberRepo.updateRoleOfMemberInWorkspace(
      workspaceId,
      targetUserId,
      payload.role,
    );

    return this.getWorkspaceMemberOrThrow(workspaceId, targetUserId);
  }

  // Check if user is member of workspace
  public async isUserMemberOfWorkspace(
    workspaceId: string,
    userId: string,
  ): Promise<boolean> {
    const isMember = await this.workspaceMemberRepo.isUserMemberOfWorkspace(
      workspaceId,
      userId,
    );
    return isMember;
  }
}

export default WorkspaceMemberService;
