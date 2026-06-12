import "reflect-metadata";
import express from "express";
import request from "supertest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { errorHandler } from "../../src/middlewares";
import { WorkspaceRole } from "../../src/generated/prisma";
import workspaceRouter from "../../src/router/workspace.router";

vi.mock("../../src/middlewares/authentication", () => ({
  authenticate: (req: any, _res: any, next: any) => {
    req.user = { userId: "owner-id" };
    next();
  },
}));

vi.mock("../../src/controllers/workspace.controller", () => ({
  default: class WorkSpaceController {
    createWorkspace = (_req: any, res: any) => res.status(201).json({});
    getWorkspacesOfUser = (_req: any, res: any) => res.status(200).json({});
    getWorkspaceById = (_req: any, res: any) => res.status(200).json({});
    updateWorkspace = (_req: any, res: any) => res.status(200).json({});
    deleteSoftWorkspace = (_req: any, res: any) => res.status(200).json({});
  },
}));

vi.mock("../../src/middlewares/hasAccessWorkspace", () => ({
  HasAccessWorkspace: class HasAccessWorkspace {
    execute = (_req: any, _res: any, next: any) => next();
  },
}));

vi.mock("../../src/controllers/workspaceMember.controller", () => ({
  default: class WorkspaceMemberController {
    getWorkspaceMembers = (_req: any, res: any) =>
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Get workspace members successfully",
        data: [
          {
            id: "member-id",
            workspaceId: "workspace-id",
            userId: "member-id",
            roleId: "MEMBER",
            createdAt: new Date().toISOString(),
            members: {
              id: "member-id",
              username: "Member",
              email: "member@example.com",
              isActive: true,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          },
        ],
        error: null,
      });

    inviteWorkspaceMember = (req: any, res: any) =>
      res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Invite member successfully",
        data: {
          id: "member-id",
          workspaceId: "workspace-id",
          userId: req.body.userId,
          roleId: req.body.role ?? "MEMBER",
          createdAt: new Date().toISOString(),
          members: {
            id: req.body.userId,
            username: "Member",
            email: "member@example.com",
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        },
        error: null,
      });

    removeWorkspaceMember = (_req: any, res: any) =>
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Remove workspace member successfully",
        data: null,
        error: null,
      });

    updateWorkspaceMemberRole = (req: any, res: any) =>
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Update workspace member role successfully",
        data: {
          id: "member-id",
          workspaceId: "workspace-id",
          userId: req.params.userId,
          roleId: req.body.role,
          createdAt: new Date().toISOString(),
          members: {
            id: req.params.userId,
            username: "Member",
            email: "member@example.com",
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        },
        error: null,
      });
  },
}));

describe("Workspace member APIs", () => {
  let app: express.Express;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use("/workspaces", workspaceRouter);
    app.use(errorHandler);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("gets workspace members", async () => {
    const res = await request(app).get("/workspaces/workspace-id/members");

    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(1);
  });

  it("invites a workspace member", async () => {
    const res = await request(app)
      .post("/workspaces/workspace-id/invite")
      .send({ userId: "550e8400-e29b-41d4-a716-446655440001", role: "ADMIN" });

    expect(res.status).toBe(201);
    expect(res.body.data.userId).toBe("550e8400-e29b-41d4-a716-446655440001");
  });

  it("removes a workspace member", async () => {
    const res = await request(app).delete(
      "/workspaces/workspace-id/members/member-id",
    );

    expect(res.status).toBe(200);
    expect(res.body.data).toBeNull();
  });

  it("updates a workspace member role", async () => {
    const res = await request(app)
      .patch("/workspaces/workspace-id/members/member-id/role")
      .send({ role: "ADMIN" });

    expect(res.status).toBe(200);
    expect(res.body.data.roleId).toBe("ADMIN");
  });
});
