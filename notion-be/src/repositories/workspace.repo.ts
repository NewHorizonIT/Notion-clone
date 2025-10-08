import { injectable } from "tsyringe";
import { PrismaClient } from "../generated/prisma";
import { createSlug } from "../utils";

@injectable()
class WorkSpaceRepo {
  constructor(private readonly prisma: PrismaClient) {}

  // Create workspace
  public async createWorkspace(name: string, ownerId: string) {
    const workspace = await this.prisma.workSpace.create({
      data: {
        name: name,
        ownerId: ownerId,
        slug: createSlug(name),
      },
    });
    return workspace;
  }

  // Get workspace by id
  public async getWorkspaceById(id: string) {
    const workspace = await this.prisma.workSpace.findUnique({
      where: { id },
      include: {
        pages: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
    return workspace;
  }

  // Get list workspace of user
  public async getWorkspacesOfUser(userId: string) {
    const workspaces = await this.prisma.workSpace.findMany({
      where: {
        ownerId: userId,
      },
    });
    return workspaces;
  }

  // Update workspace
  public async updateWorkspace(id: string, name: string) {
    const workspace = await this.prisma.workSpace.update({
      where: { id },
      data: { name, slug: createSlug(name) },
    });
    return workspace;
  }

  // Delete workspace
  public async deleteWorkspace(id: string) {
    const workspace = await this.prisma.workSpace.delete({
      where: { id },
    });
    return workspace;
  }
}
export default WorkSpaceRepo;
