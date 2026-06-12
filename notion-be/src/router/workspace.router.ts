import * as express from "express";
import { validateBody } from "../middlewares";
import { CreateWorkSpaceSchema } from "../schemas/workspace.schema";
import {
  InviteWorkspaceMemberSchema,
  UpdateWorkspaceMemberRoleSchema,
} from "../schemas/workspaceMember.schema";
import { container } from "tsyringe";
import WorkSpaceController from "../controllers/workspace.controller";
import { authenticate } from "../middlewares/authentication";
import { HasAccessWorkspace } from "../middlewares/hasAccessWorkspace";
import WorkspaceMemberController from "../controllers/workspaceMember.controller";
const workspaceRouter = express.Router();

const workspaceController = container.resolve(WorkSpaceController);
const hasAccessWorkspace = container.resolve(HasAccessWorkspace);
const workspaceMemberController = container.resolve(WorkspaceMemberController);

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

// GET /workspaces/:id/members -> Get workspace members
workspaceRouter.get(
  "/:id/members",
  workspaceMemberController.getWorkspaceMembers,
);

// POST /workspaces/:id/invite -> Invite workspace member
workspaceRouter.post(
  "/:id/invite",
  validateBody(InviteWorkspaceMemberSchema),
  workspaceMemberController.inviteWorkspaceMember,
);

// DELETE /workspaces/:id/members/:userId -> Remove workspace member
workspaceRouter.delete(
  "/:id/members/:userId",
  workspaceMemberController.removeWorkspaceMember,
);

// PATCH /workspaces/:id/members/:userId/role -> Update workspace member role
workspaceRouter.patch(
  "/:id/members/:userId/role",
  validateBody(UpdateWorkspaceMemberRoleSchema),
  workspaceMemberController.updateWorkspaceMemberRole,
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
