import * as express from "express";
import { validateBody } from "../middlewares";
import { CreateWorkSpaceSchema } from "../schemas/workspace.schema";
import { container } from "tsyringe";
import WorkSpaceController from "../controllers/workspace.controller";
import { authenticate } from "../middlewares/authentication";
import { HasAccessWorkspace } from "../middlewares/hasAccessWorkspace";
const workspaceRouter = express.Router();

const workspaceController = container.resolve(WorkSpaceController);
const hasAccessWorkspace = container.resolve(HasAccessWorkspace);

workspaceRouter.use(authenticate);

// POST workspaces → Create workspace
workspaceRouter.post(
  "/",
  validateBody(CreateWorkSpaceSchema),
  workspaceController.createWorkspace,
);

// GET workspaces → Get list workspace of user
workspaceRouter.get("/", workspaceController.getWorkspacesOfUser);

// GET workspaces/:id → Get detail workspace
workspaceRouter.get(
  "/:workspaceId",
  hasAccessWorkspace.execute,
  workspaceController.getWorkspaceById,
);

//PUT /api/workspaces/:workspaceId → update workspace
workspaceRouter.put("/:workspaceId", workspaceController.updateWorkspace);

// DELETE /api/v1/workspaces/:workspaceId → delete workspace
workspaceRouter.delete(
  "/:workspaceId",
  workspaceController.deleteSoftWorkspace,
);

// POST /api/workspaces/:workspaceId/invite → invite member to workspace
// workspaceRouter.post("/:workspaceId/invite");

export default workspaceRouter;
