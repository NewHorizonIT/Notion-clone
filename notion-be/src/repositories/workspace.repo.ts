import { injectable } from "tsyringe";
import { PrismaClient, WorkspaceRole } from "../generated/prisma";
import { createSlug } from "../utils";

@injectable()
class WorkSpaceRepo {
  constructor(private readonly prisma: PrismaClient) {}

  // Create workspace
  public async createWorkspace(name: string, ownerId: string) {
    return this.prisma.$transaction(async (tx) => {
      const workspace = await tx.workSpace.create({
        data: {
          name: name,
          ownerId: ownerId,
          slug: createSlug(name),
        },
      });

      await tx.workspaceMember.create({
        data: {
          workspaceId: workspace.id,
          userId: ownerId,
          roleId: WorkspaceRole.OWNER,
        },
      });

      return workspace;
    });
  }

  // Get workspace by id
  public async getWorkspaceById(id: string, userId: string) {
    const workspace = await this.prisma.workSpace.findFirst({
      where: { id, ownerId: userId },
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

  // Find workspace by id
  public async findWorkspaceById(id: string) {
    return this.prisma.workSpace.findUnique({
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

  // Detele soft workspace
  public async deleteSoftWorkspace(id: string) {
    const workspace = await this.prisma.workSpace.update({
      where: { id },
      data: { deletedAt: new Date() },
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
