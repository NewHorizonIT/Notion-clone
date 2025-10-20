import { injectable } from "tsyringe";
import PageRepo from "../repositories/page.repo";
import { CreatePageData, UpdatePageData } from "../schemas/page.schema";
import { Page } from "../generated/prisma/";
import { ErrorResponse } from "../response/response";
import { StatusCodes } from "../response/httpStatus";

// Define Message Error
const NOT_FOUND_PAGE = "Not found page";
@injectable()
class PageService {
  constructor(private pageRepo: PageRepo) {}

  // Create new Page
  async createPage(userID: string, data: CreatePageData): Promise<Page> {
    return this.pageRepo.createPage(userID, data);
  }

  /**
   * Get page By ID
   * Success return Page
   * Error throw 404
   */
  async getPageByID(pageID: string): Promise<Page> {
    const page = await this.pageRepo.getPageByID(pageID);
    if (!page) {
      throw new ErrorResponse({
        message: NOT_FOUND_PAGE,
        error: "Not found page",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }
    return page;
  }

  /**
   * Get pages of workspace
   * Success return pages
   * Error throw 404
   */
  async getPagesByWorkspaceID(workspaceID: string): Promise<Page[]> {
    return this.pageRepo.getPagesByWorkspaceID(workspaceID);
  }

  /**
   * Lấy danh sách page đã xóa mềm (trash)
   */
  async getTrashedPages(workspaceID: string): Promise<Page[]> {
    return this.pageRepo.getTrashedPages(workspaceID);
  }

  /**
   * Cập nhật page theo ID. Nếu không tìm thấy thì throw lỗi
   */
  async updatePageByID(pageID: string, data: UpdatePageData): Promise<Page> {
    return await this.pageRepo.updatePageByID(pageID, data);
  }

  /**
   * Xóa mềm page. Nếu không tồn tại thì throw lỗi
   */
  async softDeletePage(pageID: string): Promise<Page> {
    return await this.pageRepo.softDeletePage(pageID);
  }

  /**
   * Khôi phục page đã xóa mềm
   */
  async restorePage(pageID: string): Promise<Page> {
    return await this.pageRepo.restorePage(pageID);
  }

  /**
   * Xóa cứng page khỏi DB
   */
  async hardDeletePage(pageID: string): Promise<Page> {
    return await this.pageRepo.hardDeletePage(pageID);
  }

  // Search Page
  async searchPage(title: string): Promise<Page[]> {
    return await this.pageRepo.searchPageByTitle(title);
  }
}

export default PageService;
