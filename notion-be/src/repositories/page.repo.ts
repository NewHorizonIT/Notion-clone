import { injectable } from "tsyringe";
import { PrismaClient, Page } from "../generated/prisma";
import { CreatePageData, UpdatePageData } from "../schemas/page.schema";

@injectable()
class PageRepo {
  constructor(private readonly prisma: PrismaClient) {}

  async createPage(userID: string, pageData: CreatePageData): Promise<Page> {
    return this.prisma.page.create({ data: { userId: userID, ...pageData } });
  }

  async getPageByID(pageID: string): Promise<Page | null> {
    return this.prisma.page.findFirst({
      where: { id: pageID, isDeleted: false },
    });
  }

  async getPagesByWorkspaceID(workspaceID: string): Promise<Page[]> {
    return this.prisma.page.findMany({
      where: { workspaceId: workspaceID, isDeleted: false },
    });
  }

  async getTrashedPages(workspaceID: string): Promise<Page[]> {
    return this.prisma.page.findMany({
      where: { workspaceId: workspaceID, isDeleted: true },
    });
  }

  async updatePageByID(pageID: string, data: UpdatePageData): Promise<Page> {
    return this.prisma.page.update({
      where: { id: pageID },
      data,
    });
  }

  async softDeletePage(pageID: string): Promise<Page> {
    return this.prisma.page.update({
      where: { id: pageID },
      data: { isDeleted: true },
    });
  }

  async restorePage(pageID: string): Promise<Page> {
    return this.prisma.page.update({
      where: { id: pageID },
      data: { isDeleted: false },
    });
  }

  async hardDeletePage(pageID: string): Promise<Page> {
    return this.prisma.page.delete({
      where: { id: pageID },
    });
  }

  async searchPageByTitle(keySearch: string): Promise<Page[]> {
    return this.prisma.page.findMany({
      where: {
        isDeleted: false,
        title: {
          contains: keySearch,
          mode: "insensitive",
        },
      },
    });
  }
}

export default PageRepo;
