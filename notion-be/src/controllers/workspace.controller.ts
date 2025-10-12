import { injectable } from "tsyringe";
import WorkspaceService from "../services/workspace.service";
import { Request, Response } from "express";
import { ErrorResponse, SuccessResponse } from "../response/response";
import { StatusCodes } from "../response";

@injectable()
class WorkSpaceController {
  constructor(private readonly workSpaceRepo: WorkspaceService) {}

  // Create workspace
  public createWorkspace = async (req: Request, res: Response) => {
    //Step 1: get data from request
    const { name } = req.body;
    const ownerId = req.user.userId as string;

    // Step 2: Check ownerId exists
    if (!ownerId) {
      throw new ErrorResponse({
        statusCode: StatusCodes.UNAUTHORIZED,
        message: "Unauthorized",
        error: "Unauthorized",
      });
    }

    //Step 2: create workspace
    const workspace = await this.workSpaceRepo.createWorkspace(name, ownerId);

    new SuccessResponse({
      statusCode: StatusCodes.CREATED,
      message: "Create workspace successfully",
      data: workspace,
    }).send(res);
  };

  // Get list workspace of user
  public getWorkspacesOfUser = async (req: Request, res: Response) => {
    // Step 1: get userId from request
    const userId = req.user.userId as string;
    if (!userId) {
      throw new ErrorResponse({
        statusCode: StatusCodes.UNAUTHORIZED,
        message: "Unauthorized",
        error: "Unauthorized",
      });
    }

    // Step 3: get list workspace of user
    const workspaces = await this.workSpaceRepo.getWorkspacesOfUser(userId);

    new SuccessResponse({
      statusCode: StatusCodes.OK,
      message: "Get list workspace successfully",
      data: workspaces,
    }).send(res);
  };

  // Get detail workspace
  public getWorkspaceById = async (req: Request, res: Response) => {
    // Step 1: get id from request
    const { id } = req.params;
    const userId = req.user.userId as string;
    if (!userId) {
      throw new ErrorResponse({
        statusCode: StatusCodes.UNAUTHORIZED,
        message: "Unauthorized",
        error: "Unauthorized",
      });
    }

    // Step 2: get workspace by id
    const workspace = await this.workSpaceRepo.getWorkspaceById(id, userId);
    if (!workspace) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: "Workspace not found",
        error: "Not Found",
      });
    }

    new SuccessResponse({
      statusCode: StatusCodes.OK,
      message: "Get workspace successfully",
      data: workspace,
    }).send(res);
  };

  // Update workspace
  public updateWorkspace = async (req: Request, res: Response) => {
    // Step 1: get id from request
    const { id } = req.params;
    const { name } = req.body;
    const userId = req.user.userId as string;
    if (!userId) {
      throw new ErrorResponse({
        statusCode: StatusCodes.UNAUTHORIZED,
        message: "Unauthorized",
        error: "Unauthorized",
      });
    }

    // Step 2: update workspace
    const workspace = await this.workSpaceRepo.updateWorkspace(
      name,
      id,
      userId,
    );
    if (!workspace) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: "Workspace not found",
        error: "Not Found",
      });
    }

    new SuccessResponse({
      statusCode: StatusCodes.OK,
      message: "Update workspace successfully",
      data: workspace,
    }).send(res);
  };
}

export default WorkSpaceController;
