import { injectable } from "tsyringe";
import { UserRegisterData } from "../schemas/userSchema";
import UserRepo from "../repositories/userRepo";
import {
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
  async registerAccount(data: UserRegisterData) {
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
}
