import { injectable } from "tsyringe";
import WorkSpaceRepo from "../repositories/workspace.repo";
import { WorkSpaceResponse } from "../schemas/workspace.schema";
import { ErrorResponse } from "../response/response";
import { StatusCodes } from "../response";

@injectable()
class WorkspaceService {
  constructor(private workspaceRepo: WorkSpaceRepo) {}

  // Create workspace
  public async createWorkspace(
    name: string,
    ownerId: string,
  ): Promise<WorkSpaceResponse> {
    // Step 1: check if workspace with the same name already exists for the user
    const existingWorkspaces =
      await this.workspaceRepo.getWorkspacesOfUser(ownerId);
    const nameExists = existingWorkspaces.some(
      (workspace) => workspace.name === name,
    );
    if (nameExists) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "Workspace with the same name already exists",
        error: "Bad Request",
      });
    }

    // Step 2: create workspace
    const workspace = await this.workspaceRepo.createWorkspace(name, ownerId);

    return workspace as WorkSpaceResponse;
  }

  // Get workspace by id
  public async getWorkspaceById(id: string, userId: string): Promise<any> {
    const workspace = await this.workspaceRepo.getWorkspaceById(id, userId);
    if (!workspace) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: "Workspace not found",
        error: "Not Found",
      });
    }
    return workspace;
  }

  // Get list workspace of user
  public async getWorkspacesOfUser(
    userId: string,
  ): Promise<WorkSpaceResponse[]> {
    const workspaces = await this.workspaceRepo.getWorkspacesOfUser(userId);
    return workspaces as WorkSpaceResponse[];
  }

  // Update workspace
  public async updateWorkspace(
    newName: string,
    id: string,
    userId: string,
  ): Promise<WorkSpaceResponse> {
    // Step 1: check if workspace exists
    const existingWorkspace = await this.workspaceRepo.getWorkspaceById(
      id,
      userId,
    );
    if (!existingWorkspace) {
      throw new ErrorResponse({
        statusCode: StatusCodes.NOT_FOUND,
        message: "Workspace not found",
        error: "Not Found",
      });
    }
    // Step 2: check if new name is different from the current name
    if (existingWorkspace.name === newName) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "New name must be different from the current name",
        error: "Bad Request",
      });
    }
    // Step 3: check if workspace with the same name already exists for the user
    const existingWorkspaces = await this.workspaceRepo.getWorkspacesOfUser(
      existingWorkspace.ownerId,
    );
    const nameExists = existingWorkspaces.some(
      (workspace) => workspace.name === newName,
    );
    if (nameExists) {
      throw new ErrorResponse({
        statusCode: StatusCodes.BAD_REQUEST,
        message: "Workspace with the same name already exists",
        error: "Bad Request",
      });
    }
    // Step 4: update workspace
    const updatedWorkspace = await this.workspaceRepo.updateWorkspace(
      id,
      newName,
    );
    return updatedWorkspace as WorkSpaceResponse;
  }
}

export default WorkspaceService;
