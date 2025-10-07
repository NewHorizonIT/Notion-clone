import "reflect-metadata";
import { describe, it, expect, vi, beforeEach } from "vitest";
import AuthService from "../../src/services/authService";
import { ErrorResponse } from "../../src/response/response";
import * as utils from "../../src/utils";
const comparePassword = utils.comparePassword as any;

const mockUserRepo = () => ({
  checkEmailIsExist: vi.fn(),
  createUser: vi.fn(),
  getUserByEmail: vi.fn(),
  updateUserById: vi.fn(),
});

const userData = {
  id: "user-id",
  username: "Test User",
  email: "test@example.com",
  passwordHash: "hashed-password",
};

vi.mock("../../src/utils/index", () => {
  return {
    hashPassword: vi.fn(async (pw) => "hashed-" + pw),
    comparePassword: vi.fn(async (pw, hash) => hash === "hashed-" + pw),
    generateAccessToken: vi.fn(() => "access-token"),
    generateRefreshToken: vi.fn(() => "refresh-token"),
  };
});

describe("AuthService", () => {
  let service: AuthService;
  let repo: ReturnType<typeof mockUserRepo>;

  beforeEach(() => {
    repo = mockUserRepo();
    service = new AuthService(repo as any);
    vi.clearAllMocks();
  });

  describe("registerAccount", () => {
    it("should throw if email exists", async () => {
      repo.checkEmailIsExist.mockResolvedValue(true);
      await expect(
        service.registerAccount({
          name: "A",
          email: "a@a.com",
          password: "123",
        }),
      ).rejects.toThrowError(ErrorResponse);
    });

    it("should create user and return tokens", async () => {
      repo.checkEmailIsExist.mockResolvedValue(false);
      repo.createUser.mockResolvedValue(userData);

      const result = await service.registerAccount({
        name: "A",
        email: "test@example.com",
        password: "123",
      });

      expect(result.token.accessToken).toBe("access-token");
      expect(result.token.refreshToken).toBe("refresh-token");
      expect(result.user).toEqual(userData);
    });
  });

  describe("login", () => {
    it("should throw if user not found", async () => {
      repo.getUserByEmail.mockResolvedValue(null);
      await expect(
        service.login({ email: "notfound@example.com", password: "123" }),
      ).rejects.toThrowError(ErrorResponse);
    });

    it("should throw if password invalid", async () => {
      repo.getUserByEmail.mockResolvedValue(userData);
      comparePassword.mockResolvedValue(false);
      await expect(
        service.login({ email: "test@example.com", password: "wrong" }),
      ).rejects.toThrowError(ErrorResponse);
    });

    it("should return tokens and user if login success", async () => {
      repo.getUserByEmail.mockResolvedValue(userData);
      comparePassword.mockResolvedValue(true);
      const result = await service.login({
        email: "test@example.com",
        password: "123",
      });
      expect(result.token.accessToken).toBe("access-token");
      expect(result.token.refreshToken).toBe("refresh-token");
      expect(result.user).toEqual(userData);
    });
  });

  describe("handleRefreshToken", () => {
    it("should throw if refresh token not match", () => {
      expect(() =>
        service.handleRefreshToken("a", "b", { userId: "id", email: "e" }),
      ).toThrowError(ErrorResponse);
    });
    it("should return new tokens if match", () => {
      const result = service.handleRefreshToken("token", "token", {
        userId: "id",
        email: "e",
      });
      expect(result.accessToken).toBe("access-token");
      expect(result.refreshToken).toBe("refresh-token");
    });
  });

  describe("resetPassword", () => {
    it("should throw if updateUserById returns falsy", async () => {
      repo.updateUserById.mockResolvedValue(null);
      await expect(service.resetPassword("id", "pw")).rejects.toThrowError(
        ErrorResponse,
      );
    });
    it("should return newUser if updateUserById success", async () => {
      repo.updateUserById.mockResolvedValue(userData);
      const result = await service.resetPassword("id", "pw");
      expect(result.user).toEqual(userData);
    });
  });
});
