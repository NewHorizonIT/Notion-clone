import { Router } from "express";
import { container } from "tsyringe";
import BlockController from "../controllers/block.controller";
import { asyncHandler } from "../utils/asyncHandler";

const blockRouter = Router();
const blockController = container.resolve(BlockController);

// POST - /blocks - create new block
blockRouter.post("/", asyncHandler(blockController.createBlock));
// GET - /blocks/pages/:id - Get block of page
blockRouter.get("/pages/:id", asyncHandler(blockController.getBlockOfPage));
// GET - /blocks/:id/children - Get block children of parent block
blockRouter.get(
  "/:id/children",
  asyncHandler(blockController.getChildrenBlocksOfParent),
);
// GET - /blocks/:id - Get block by ID
blockRouter.get("/:id", asyncHandler(blockController.getBlockByID));
// PUT - /blocks/:id - Update block
blockRouter.put("/:id", asyncHandler(blockController.updateBlock));
// DELETE - /blocks/:id - Delete soft block
blockRouter.delete("/:id", asyncHandler(blockController.deleteBlock));
// PATCH - /blocks/:id/move - Move block
// PATCH - /blocks/:id/restore - Restore block

export default blockRouter;
