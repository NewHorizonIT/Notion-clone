import { Request, Response } from "express";
import { injectable } from "tsyringe";
import PageService from "../services/page.service";
import { ErrorResponse, SuccessResponse } from "../response/response";
import { StatusCodes } from "../response";

@injectable()
class PageController {
  constructor(private pageService: PageService) {}

  // POST /pages
  createPage = async (req: Request, res: Response): Promise<void> => {
    const userID = req.user.userId;
    if (!userID) {
      throw new ErrorResponse({
        message: "UserID is not exists",
        statusCode: StatusCodes.UNAUTHORIZED,
        error: "UNAUTHORIZED",
      });
    }
    const page = await this.pageService.createPage(userID, req.body);
    new SuccessResponse({
      statusCode: 201,
      message: "Page created successfully",
      data: page,
    }).send(res);
  };

  // GET /pages/:id
  getPageByID = async (req: Request, res: Response): Promise<void> => {
    const page = await this.pageService.getPageByID(req.params.id);
    new SuccessResponse({
      data: page,
    }).send(res);
  };

  // GET /workspaces/:workspaceId/pages
  getPagesByWorkspaceID = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const pages = await this.pageService.getPagesByWorkspaceID(
      req.params.workspaceId,
    );
    new SuccessResponse({
      data: pages,
    }).send(res);
  };

  // GET /workspaces/:workspaceId/pages/trash
  getTrashedPages = async (req: Request, res: Response): Promise<void> => {
    const pages = await this.pageService.getTrashedPages(
      req.params.workspaceId,
    );
    new SuccessResponse({
      data: pages,
    }).send(res);
  };

  // PUT /pages/:id
  updatePageByID = async (req: Request, res: Response): Promise<void> => {
    const page = await this.pageService.updatePageByID(req.params.id, req.body);
    new SuccessResponse({
      message: "Page updated successfully",
      data: page,
    }).send(res);
  };

  // DELETE /pages/:id (soft delete)
  softDeletePage = async (req: Request, res: Response): Promise<void> => {
    const page = await this.pageService.softDeletePage(req.params.id);
    new SuccessResponse({
      message: "Page moved to trash",
      data: page,
    }).send(res);
  };

  // PATCH /pages/:id/restore
  restorePage = async (req: Request, res: Response): Promise<void> => {
    const page = await this.pageService.restorePage(req.params.id);
    new SuccessResponse({
      message: "Page restored from trash",
      data: page,
    }).send(res);
  };

  // DELETE /pages/:id/hard (hard delete)
  hardDeletePage = async (req: Request, res: Response): Promise<void> => {
    const page = await this.pageService.hardDeletePage(req.params.id);
    new SuccessResponse({
      message: "Page permanently deleted",
      data: page,
    }).send(res);
  };

  // Search pages by title
  searchPagesByTitle = async (req: Request, res: Response): Promise<void> => {
    const title = req.query.title as string;

    const pages = await this.pageService.searchPage(title);
    new SuccessResponse({
      statusCode: StatusCodes.OK,
      data: pages,
      message: "Search pages Success",
    }).send(res);
  };
}

export default PageController;
