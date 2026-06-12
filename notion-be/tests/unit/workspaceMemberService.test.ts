import "reflect-metadata";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../src/repositories/workspaceMember.repo", () => ({
  default: class WorkspaceMemberRepo {},
}));
vi.mock("../../src/repositories/workspace.repo", () => ({
  default: class WorkspaceRepo {},
}));
vi.mock("../../src/repositories/userRepo", () => ({
  default: class UserRepo {},
}));
vi.mock("../../src/generated/prisma", () => ({
  WorkspaceRole: {
    OWNER: "OWNER",
    ADMIN: "ADMIN",
    MEMBER: "MEMBER",
  },
}));

import WorkspaceMemberService from "../../src/services/workspaceMember.service";
import { ErrorResponse } from "../../src/response/response";
import { WorkspaceRole } from "../../src/generated/prisma";

const makeRepos = () => ({
  workspaceMemberRepo: {
    createWorkspaceMember: vi.fn(),
    getWorkspaceMemberByWorkspaceAndUser: vi.fn(),
    getWorkspaceMembers: vi.fn(),
    removeMemberFromWorkspace: vi.fn(),
    updateRoleOfMemberInWorkspace: vi.fn(),
    isUserMemberOfWorkspace: vi.fn(),
  },
  workspaceRepo: {
    findWorkspaceById: vi.fn(),
  },
  userRepo: {
    getUserById: vi.fn(),
  },
});

const workspace = {
  id: "workspace-id",
  ownerId: "owner-id",
  name: "Workspace",
  slug: "workspace",
  createdAt: new Date(),
  deletedAt: null,
  pages: [],
};

const member = {
  id: "member-id",
  workspaceId: "workspace-id",
  userId: "member-id",
  roleId: WorkspaceRole.MEMBER,
  createdAt: new Date(),
  members: {
    id: "member-id",
    username: "Member",
    email: "member@example.com",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

const ownerMember = {
  ...member,
  userId: "owner-id",
  roleId: WorkspaceRole.OWNER,
};

describe("WorkspaceMemberService", () => {
  let service: WorkspaceMemberService;
  let repos: ReturnType<typeof makeRepos>;

  beforeEach(() => {
    repos = makeRepos();
    service = new WorkspaceMemberService(
      repos.workspaceMemberRepo as any,
      repos.workspaceRepo as any,
      repos.userRepo as any,
    );
    vi.clearAllMocks();
  });

  it("throws 404 when workspace does not exist", async () => {
    repos.workspaceRepo.findWorkspaceById.mockResolvedValue(null);

    const expected: Partial<ErrorResponse> = {
      statusCode: 404,
      message: "Workspace not found",
    };

    await expect(
      service.getListMemberOfWorkspace("workspace-id", "user-id"),
    ).rejects.toMatchObject(expected);
  });

  it("throws 403 when requester is not a workspace member", async () => {
    repos.workspaceRepo.findWorkspaceById.mockResolvedValue(workspace);
    repos.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser.mockResolvedValue(
      null,
    );

    const expected: Partial<ErrorResponse> = {
      statusCode: 403,
    };

    await expect(
      service.getListMemberOfWorkspace("workspace-id", "user-id"),
    ).rejects.toMatchObject(expected);
  });

  it("invites a member when requester is owner and user exists", async () => {
    repos.workspaceRepo.findWorkspaceById.mockResolvedValue(workspace);
    repos.userRepo.getUserById.mockResolvedValue({ id: "new-user" });
    repos.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser.mockResolvedValue(
      null,
    );
    repos.workspaceMemberRepo.createWorkspaceMember.mockResolvedValue({
      ...member,
      userId: "new-user",
      roleId: WorkspaceRole.ADMIN,
    });
    repos.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser.mockResolvedValueOnce(
      null,
    );
    repos.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser.mockResolvedValueOnce(
      {
        ...member,
        userId: "new-user",
        roleId: WorkspaceRole.ADMIN,
      },
    );

    const result = await service.inviteMemberToWorkspace(
      "workspace-id",
      "owner-id",
      {
        userId: "new-user",
        role: WorkspaceRole.ADMIN,
      },
    );

    expect(
      repos.workspaceMemberRepo.createWorkspaceMember,
    ).toHaveBeenCalledWith("workspace-id", "new-user", WorkspaceRole.ADMIN);
    expect(result.userId).toBe("new-user");
  });

  it("throws 409 when inviting an existing member", async () => {
    repos.workspaceRepo.findWorkspaceById.mockResolvedValue(workspace);
    repos.userRepo.getUserById.mockResolvedValue({ id: "member-id" });
    repos.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser.mockResolvedValue(
      member,
    );

    const expected: Partial<ErrorResponse> = {
      statusCode: 409,
      message: "User is already a member of the workspace",
    };

    await expect(
      service.inviteMemberToWorkspace("workspace-id", "owner-id", {
        userId: "member-id",
        role: WorkspaceRole.MEMBER,
      }),
    ).rejects.toMatchObject(expected);
  });

  it("throws 400 when assigning OWNER through invite", async () => {
    repos.workspaceRepo.findWorkspaceById.mockResolvedValue(workspace);
    repos.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser.mockResolvedValue(
      null,
    );
    repos.userRepo.getUserById.mockResolvedValue({ id: "new-user" });

    const expected: Partial<ErrorResponse> = {
      statusCode: 400,
    };
    await expect(
      service.inviteMemberToWorkspace("workspace-id", "owner-id", {
        userId: "new-user",
        role: WorkspaceRole.OWNER,
      }),
    ).rejects.toMatchObject(expected);
  });

  it("throws 400 when removing or updating the owner", async () => {
    repos.workspaceRepo.findWorkspaceById.mockResolvedValue(workspace);
    repos.workspaceMemberRepo.getWorkspaceMemberByWorkspaceAndUser.mockResolvedValue(
      ownerMember,
    );

    const expected: Partial<ErrorResponse> = {
      statusCode: 400,
    };

    await expect(
      service.removeMemberFromWorkspace("workspace-id", "owner-id", "owner-id"),
    ).rejects.toMatchObject(expected);

    await expect(
      service.updateRoleOfMemberInWorkspace(
        "workspace-id",
        "owner-id",
        "owner-id",
        {
          role: WorkspaceRole.ADMIN,
        },
      ),
    ).rejects.toMatchObject(expected);
  });
});
