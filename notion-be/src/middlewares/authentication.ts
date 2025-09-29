import { NextFunction, Request, Response } from "express";
import { ErrorCodes, ReasonPhrases, StatusCodes } from "../response";
import { validateToken } from "../utils/jwt";
import { ErrorResponse } from "../response/response";

export function authenticate(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ErrorResponse({
      error: ErrorCodes.INVALID_TOKEN,
      message: ReasonPhrases.UNAUTHORIZED,
    });
  }
  const token = authHeader.split(" ")[1];
  const payload = validateToken(token);
  if (!payload) {
    throw new ErrorResponse({
      error: ErrorCodes.INVALID_TOKEN,
      message: ReasonPhrases.UNAUTHORIZED,
      statusCode: StatusCodes.UNAUTHORIZED,
    });
  }
  req.user = payload;
  next();
}
