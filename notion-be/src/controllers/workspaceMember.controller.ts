import { Request, Response } from "express";
import { injectable } from "tsyringe";
import WorkspaceMemberService from "../services/workspaceMember.service";
import { ErrorResponse, SuccessResponse } from "../response/response";
import { StatusCodes } from "../response";
import {
  InviteWorkspaceMemberSchema,
  UpdateWorkspaceMemberRoleSchema,
} from "../schemas/workspaceMember.schema";

@injectable()
export default class WorkspaceMemberController {
  constructor(
    private readonly workspaceMemberService: WorkspaceMemberService,
  ) {}

  public getWorkspaceMembers = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const requesterUserId = req.user?.userId as string;
    if (!requesterUserId) {
      throw new ErrorResponse({
        message: "Unauthorized",
        error: "UNAUTHORIZED",
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }

    const members = await this.workspaceMemberService.getListMemberOfWorkspace(
      req.params.id,
      requesterUserId,
    );

    new SuccessResponse({
      statusCode: StatusCodes.OK,
      message: "Get workspace members successfully",
      data: members,
    }).send(res);
  };

  public inviteWorkspaceMember = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const requesterUserId = req.user?.userId as string;
    if (!requesterUserId) {
      throw new ErrorResponse({
        message: "Unauthorized",
        error: "UNAUTHORIZED",
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }

    const payload = InviteWorkspaceMemberSchema.parse(req.body);
    const member = await this.workspaceMemberService.inviteMemberToWorkspace(
      req.params.id,
      requesterUserId,
      payload,
    );

    new SuccessResponse({
      statusCode: StatusCodes.CREATED,
      message: "Invite member successfully",
      data: member,
    }).send(res);
  };

  public removeWorkspaceMember = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const requesterUserId = req.user?.userId as string;
    if (!requesterUserId) {
      throw new ErrorResponse({
        message: "Unauthorized",
        error: "UNAUTHORIZED",
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }

    await this.workspaceMemberService.removeMemberFromWorkspace(
      req.params.id,
      requesterUserId,
      req.params.userId,
    );

    new SuccessResponse({
      statusCode: StatusCodes.OK,
      message: "Remove workspace member successfully",
      data: null,
    }).send(res);
  };

  public updateWorkspaceMemberRole = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const requesterUserId = req.user?.userId as string;
    if (!requesterUserId) {
      throw new ErrorResponse({
        message: "Unauthorized",
        error: "UNAUTHORIZED",
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }

    const payload = UpdateWorkspaceMemberRoleSchema.parse(req.body);
    const member =
      await this.workspaceMemberService.updateRoleOfMemberInWorkspace(
        req.params.id,
        requesterUserId,
        req.params.userId,
        payload,
      );

    new SuccessResponse({
      statusCode: StatusCodes.OK,
      message: "Update workspace member role successfully",
      data: member,
    }).send(res);
  };
}
