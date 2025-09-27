import { Request, Response } from "express";
import AuthService from "../services/authService";
import { UserLoginData, UserRegisterData } from "../schemas/userSchema";
import { injectable } from "tsyringe";
import CacheService from "../services/cacheService";
import { ErrorResponse, SuccessResponse } from "../response/response";
import { ErrorCodes, StatusCodes } from "../response";
import { JwtPayload, validateToken } from "../utils";

@injectable()
export default class AuthController {
  constructor(
    private authService: AuthService,
    private cacheSerive: CacheService,
  ) {}
  public resgister = async (req: Request, res: Response): Promise<void> => {
    const data: UserRegisterData = req.body;
    // Step 1: Call Auth service create User
    const newUser = await this.authService.registerAccount(data);

    // Step 2: Cache Refresh token into Redis
    const deviceId = req.headers["x-device-id"] as string | undefined;
    const keyCache = `${newUser.user.id}:${deviceId}`;
    const isCached = await this.cacheSerive.set(
      keyCache,
      newUser.token.refreshToken,
    );

    if (!isCached) {
      throw new ErrorResponse({
        message: "Register unSuccess",
        error: ErrorCodes.DATA_INVALID,
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    // Step 3: Save Refresh Token into cookie
    res.cookie("refresh_token", newUser.token.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Step 4: return response for user
    new SuccessResponse({
      message: "Register Success",
      statusCode: StatusCodes.CREATED,
      data: newUser,
    }).send(res);
  };

  public login = async (req: Request, res: Response): Promise<void> => {
    const data: UserLoginData = req.body;

    // Step 1: Call AuthService service login
    const user = await this.authService.login(data);
    // Step 2: Cache Refresh token into Redis
    const deviceId = req.headers["x-device-id"] as string | undefined;
    const keyCache = `${user.user.id}:${deviceId}`;
    const isCached = await this.cacheSerive.set(
      keyCache,
      user.token.refreshToken,
    );

    if (!isCached) {
      throw new ErrorResponse({
        message: "Login unSuccess",
        error: ErrorCodes.DATA_INVALID,
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    // Step 3: Save Refresh Token into cookie
    res.cookie("refresh_token", user.token.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Step 4: return response for user
    new SuccessResponse({
      message: "Login Success",
      statusCode: StatusCodes.CREATED,
      data: user,
    }).send(res);
  };

  public handleRefreshToken = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    // Step 1: Get Token in cookie and validate
    const refreshToken = req.cookies["refresh_token"];
    const user: JwtPayload | null = validateToken(refreshToken);

    if (!user) {
      throw new ErrorResponse({
        message: "Handle RefreshToken unSuccess",
        error: ErrorCodes.DATA_INVALID,
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }

    // Step 2: get token in Redis
    const deviceId = req.headers["x-device-id"] as string | undefined;
    const keyCache = `${user?.userId}:${deviceId}`;
    const refreshTokenInCache = await this.cacheSerive.get(keyCache);

    // Step 3: Call AuthService method handleRefreshToken
    const newTokenPair = this.authService.handleRefreshToken(
      refreshToken,
      refreshTokenInCache,
      user,
    );

    if (!newTokenPair) {
      throw new ErrorResponse({
        message: "Handle RefreshToken unSuccess",
        error: ErrorCodes.DATA_INVALID,
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }

    const isCached = await this.cacheSerive.set(
      keyCache,
      newTokenPair.refreshToken,
    );

    if (!isCached) {
      throw new ErrorResponse({
        message: "Handle RefreshToken unSuccess",
        error: ErrorCodes.DATA_INVALID,
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }

    res.cookie("refresh_token", newTokenPair.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    new SuccessResponse({
      message: "Handle RefreshToken",
      statusCode: StatusCodes.OK,
      data: {
        accessToken: newTokenPair.accessToken,
        refreshToken: newTokenPair.refreshToken,
      },
    }).send(res);
  };
}
