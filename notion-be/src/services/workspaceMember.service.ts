import { injectable } from "tsyringe";
import WorkspaceMemberRepo from "../repositories/workspaceMember.repo";
import { ErrorResponse } from "../response/response";
import { StatusCodes } from "../response";

@injectable()
class WorkspaceMemberService {
  constructor(private workspaceMemberRepo: WorkspaceMemberRepo) {}

  // Invite member to workspace
  public async inviteMemberToWorkspace(
    workspaceId: string,
    userId: string,
  ): Promise<unknown> {
    // Step 1: check if user is already a member of the workspace
    const isMember = await this.workspaceMemberRepo.isUserMemberOfWorkspace(
      workspaceId,
      userId,
    );
    if (isMember) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "User is already a member of the workspace",
        error: "Bad Request",
      });
    }

    // Step 2: invite member to workspace
    const member = await this.workspaceMemberRepo.inviteMemberToWorkspace(
      workspaceId,
      userId,
    );
    if (!member) {
      throw new ErrorResponse({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "Failed to invite member to workspace",
        error: "Internal Server Error",
      });
    }

    return member;
  }

  // Remove member from workspace
  public async removeMemberFromWorkspace(
    workspaceId: string,
    userId: string,
  ): Promise<unknown> {
    // Step 1: check if user is a member of the workspace
    const isMember = await this.workspaceMemberRepo.isUserMemberOfWorkspace(
      workspaceId,
      userId,
    );
    if (!isMember) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "User is not a member of the workspace",
        error: "Bad Request",
      });
    }

    // Step 2: remove member from workspace
    const result = await this.workspaceMemberRepo.removeMemberFromWorkspace(
      workspaceId,
      userId,
    );
    if (result.count === 0) {
      throw new ErrorResponse({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "Failed to remove member from workspace",
        error: "Internal Server Error",
      });
    }

    return result;
  }

  // update role of member in workspace
  public async updateRoleOfMemberInWorkspace(
    workspaceId: string,
    userId: string,
    role: string,
  ): Promise<unknown> {
    // Step 1: check if user is a member of the workspace
    const isMember = await this.workspaceMemberRepo.isUserMemberOfWorkspace(
      workspaceId,
      userId,
    );
    if (!isMember) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "User is not a member of the workspace",
        error: "Bad Request",
      });
    }

    // Step 2: update role of member in workspace
    const result = await this.workspaceMemberRepo.updateRoleOfMemberInWorkspace(
      workspaceId,
      userId,
      role as any,
    );
    if (result.count === 0) {
      throw new ErrorResponse({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "Failed to update role of member in workspace",
        error: "Internal Server Error",
      });
    }

    return result;
  }

  // Get list member of workspace
  public async getListMemberOfWorkspace(workspaceId: string): Promise<unknown> {
    const members =
      await this.workspaceMemberRepo.getListMemberOfWorkspace(workspaceId);
    return members;
  }
}

export default WorkspaceMemberService;
