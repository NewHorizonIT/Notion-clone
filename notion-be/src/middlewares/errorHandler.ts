// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../response/response";

export function errorHandler(
  err: Error | ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(err);

  if (err instanceof ErrorResponse) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  // Lỗi không xác định
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
}
