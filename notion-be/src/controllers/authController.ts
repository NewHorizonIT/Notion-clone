import { Request, Response } from "express";
import AuthService from "../services/authService";
import { UserLoginData, UserRegisterData } from "../schemas/userSchema";
import { injectable } from "tsyringe";
import CacheService from "../services/cacheService";
import { ErrorResponse, SuccessResponse } from "../response/response";
import { ErrorCodes, StatusCodes } from "../response";

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
}
