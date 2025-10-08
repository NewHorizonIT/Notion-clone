import * as express from "express";
import { validateBody } from "../middlewares";
import { CreateWorkSpaceSchema } from "../schemas/workspace.schema";
import { container } from "tsyringe";
import WorkSpaceController from "../controllers/workspace.controller";
const workspaceRouter = express.Router();

const workspaceController = container.resolve(WorkSpaceController);

// POST workspaces → Create workspace
workspaceRouter.post(
  "/",
  validateBody(CreateWorkSpaceSchema),
  workspaceController.createWorkspace,
);

// GET workspaces → Get list workspace of user
workspaceRouter.get("/", workspaceController.getWorkspacesOfUser);

// GET workspaces/:id → Get detail workspace
workspaceRouter.get("/:id", workspaceController.getWorkspaceById);

//PUT /api/workspaces/:id → update workspace
workspaceRouter.put("/:id", workspaceController.updateWorkspace);

// DELETE /api/workspaces/:id → delete workspace
// workspaceRouter.delete("/:id");

// POST /api/workspaces/:id/invite → invite member to workspace
// workspaceRouter.post("/:id/invite");

export default workspaceRouter;
