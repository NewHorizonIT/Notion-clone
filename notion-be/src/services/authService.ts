import { injectable } from "tsyringe";
import { UserRegisterData, UserLoginData } from "../schemas/userSchema";
import UserRepo from "../repositories/userRepo";
import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  hashPassword,
  JwtPayload,
} from "../utils";
import { v4 as uuidv4 } from "uuid";
import { ErrorResponse } from "../response/response";
import { ErrorCodes, StatusCodes } from "../response";
@injectable()
export default class AuthService {
  constructor(private userRepo: UserRepo) {}
  async registerAccount(data: UserRegisterData): Promise<any> {
    // Step 1: Get data of new User
    const { name, email, password } = data;

    // Step 2: Check email haven't registered
    const isExist = await this.userRepo.checkEmailIsExist(email);

    if (isExist) {
      throw new ErrorResponse({
        message: "Register unSuccess",
        error: ErrorCodes.EMAIL_EXISTS,
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    // Step 3: Hash password

    const passwordHashed = await hashPassword(password);
    // Step 4: Create new User and save in database
    const userId = uuidv4();
    const newUser = await this.userRepo.createUser({
      userId,
      name,
      password: passwordHashed,
      email,
    });

    if (!newUser) {
      throw new ErrorResponse({
        message: "Register unSuccess",
        error: ErrorCodes.USER_NOT_FOUND,
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    // Step 4: Create Access Token and Refresh Token
    const claimsJWT: JwtPayload = { userId: newUser.id, email: newUser.email };

    const accessToken = generateAccessToken(claimsJWT);
    const refreshToken = generateRefreshToken(claimsJWT);
    if (!accessToken || !refreshToken) {
      throw new ErrorResponse({
        message: "Register unSuccess",
        error: ErrorCodes.INVALID_TOKEN,
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    // Step 5: return data
    return {
      token: {
        accessToken,
        refreshToken,
      },
      user: newUser,
    };
  }

  async login(data: UserLoginData): Promise<any> {
    const { email, password } = data;
    // Step 1: Get User by Email
    const user = await this.userRepo.getUserByEmail(email);

    if (!user) {
      throw new ErrorResponse({
        message: "Login Unsuccess",
        error: ErrorCodes.USER_NOT_FOUND,
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }
    // Step 2: Check password invalid
    const isCompare = await comparePassword(password, user.passwordHash);

    if (!isCompare) {
      throw new ErrorResponse({
        message: "Login Unsuccess",
        error: ErrorCodes.DATA_INVALID,
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }
    // Step 3: Generate accesstoken and refreshtoken
    const claimsJWT: JwtPayload = {
      userId: user.id,
      email: user.email,
    };
    const refreshToken = generateRefreshToken(claimsJWT);
    const accessToken = generateAccessToken(claimsJWT);

    if (!refreshToken || !refreshToken) {
      throw new ErrorResponse({
        message: "Login Unsuccess",
        error: ErrorCodes.INVALID_TOKEN,
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }
    // Step 4: Return Object data for controller

    return {
      token: {
        accessToken,
        refreshToken,
      },
      user,
    };
  }

  handleRefreshToken(
    refreshToken: string,
    refreshTokenInCache: string,
    user: JwtPayload,
  ): any {
    // Step 1: Compare two token
    if (refreshToken !== refreshTokenInCache) {
      throw new ErrorResponse({
        message: "Handle RefreshToken unsuccess",
        error: ErrorCodes.INVALID_TOKEN,
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }

    // Step 2: Create New Access Token and Refresh Token
    const claimJWT: JwtPayload = {
      userId: user.userId,
      email: user.email,
    };
    const newRefreshToken = generateRefreshToken(claimJWT);
    const newAccessToken = generateAccessToken(claimJWT);

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }
}
