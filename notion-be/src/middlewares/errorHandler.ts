// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../response/response";
import logger from "../utils/logger";

export default function errorHandler(
  err: Error | ErrorResponse,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  logger.error("[Error]: ", err);

  if (err instanceof ErrorResponse) {
    res.status(err.statusCode || 500).json({
      error: err.error || "error",
      message: err.message,
    });
  }
}
