import { NextFunction, Request, Response } from "express";
import { ErrorCodes, ReasonPhrases, StatusCodes } from "../response";
import { validateToken } from "../utils/jwt";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      error: ErrorCodes.INVALID_TOKEN,
      message: ReasonPhrases.UNAUTHORIZED,
    });
  }
  const token = authHeader.split(" ")[1];
  const payload = validateToken(token);
  if (!payload) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      error: ErrorCodes.INVALID_TOKEN,
      message: ReasonPhrases.UNAUTHORIZED,
      StatusCodes: StatusCodes.UNAUTHORIZED,
    });
  }
  (req as any).user = payload;
  next();
}
