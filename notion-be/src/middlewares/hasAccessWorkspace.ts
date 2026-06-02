import { injectable } from "tsyringe";
import { ErrorResponse } from "../response/response";
import WorkspaceMemberService from "../services/workspaceMember.service";
import { NextFunction, Request, Response } from "express";
import WorkspaceService from "../services/workspace.service";

@injectable()
export class HasAccessWorkspace {
  constructor(private workspaceService: WorkspaceService) {}
  execute = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const userId = req.user?.userId as string;

    if (!userId) {
      throw new ErrorResponse({
        message: "Unauthorized",
        error: "UNAUTHORIZED",
        statusCode: 401,
      });
    }
    const workspaceId = req.params.workspaceId as string;
    console.log(
      "🚀 ~ file: hasAccessWorkspace.ts:28 ~ HasAccessWorkspace ~ execute ~ workspaceId:",
      workspaceId,
    );
    if (!workspaceId) {
      throw new ErrorResponse({
        message: "Workspace ID is required",
        error: "WORKSPACE_ID_REQUIRED",
        statusCode: 400,
      });
    }

    const hasAccess =
      await this.workspaceService.ensureUserHasAccessToWorkspace(
        workspaceId,
        userId,
      );

    if (!hasAccess) {
      throw new ErrorResponse({
        message: "Forbidden",
        error: "FORBIDDEN",
        statusCode: 403,
      });
    }

    next();
  };
}
