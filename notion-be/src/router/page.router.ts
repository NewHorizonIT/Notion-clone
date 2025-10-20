import { Router } from "express";
import { container } from "tsyringe";
import PageController from "../controllers/page.controller";
import { asyncHandler } from "../utils/asyncHandler";
import { validateBody } from "../middlewares";
import { createPageSchema } from "../schemas/page.schema";
import { authenticate } from "../middlewares/authentication";

const pageRouter = Router();
const pageController = container.resolve(PageController);

pageRouter.use(authenticate);
// POST /pages
pageRouter.post(
  "/",
  validateBody(createPageSchema),
  asyncHandler(pageController.createPage),
);

// GET /search - Search page by title
pageRouter.get("/search", pageController.searchPagesByTitle);

// GET /workspaces/:workspaceId/pages
pageRouter.get(
  "/workspace/:workspaceId",
  asyncHandler(pageController.getPagesByWorkspaceID),
);

// GET /workspaces/:workspaceId/pages/trash
pageRouter.get(
  "/workspaces/:workspaceId/trash",
  asyncHandler(pageController.getTrashedPages),
);

// GET /pages/:id
pageRouter.get("/:id", asyncHandler(pageController.getPageByID));

// PUT /pages/:id
pageRouter.put("/:id", asyncHandler(pageController.updatePageByID));

// DELETE /pages/:id (soft delete)
pageRouter.delete("/:id", asyncHandler(pageController.softDeletePage));

// PATCH /pages/:id/restore
pageRouter.patch("/:id/restore", asyncHandler(pageController.restorePage));

// DELETE /pages/:id/hard (hard delete)
pageRouter.delete("/:id/hard", asyncHandler(pageController.hardDeletePage));

export default pageRouter;
