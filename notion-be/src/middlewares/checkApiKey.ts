import { Request, Response, NextFunction } from "express";
import config from "../config";
import { StatusCodes } from "../response/httpStatus";
import ErrorCodes from "../response/errorCodes";

export default function checkApiKey(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const apiKey =
    req.headers["x-api-key"] || req.query.apiKey || req.body.apiKey;
  if (!apiKey || apiKey !== config.api.key) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      error: ErrorCodes.INVALID_TOKEN,
      message: "Invalid or missing API key",
    });
  }
  next();
}
