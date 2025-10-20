// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../response/response";
import logger from "../utils/logger";

export default function errorHandler(
  err: Error | ErrorResponse,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  logger.error({
    message: "Error captured",
    error: {
      name: err.name,
      message: err.message,
      stack: err.stack?.split("\n"),
    },
    request: {
      method: req.method,
      path: req.path,
    },
    timestamp: new Date().toISOString(),
  });

  if (err instanceof ErrorResponse) {
    res.status(err.statusCode || 500).json({
      error: err.error || "error",
      message: err.message,
    });
    return;
  }
  res.status(500).json({
    error: "INTERNAL_SERVER_ERROR",
    message: err.message || "An unexpected error occurred",
  });
}
