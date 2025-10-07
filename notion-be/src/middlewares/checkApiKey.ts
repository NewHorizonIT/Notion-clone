import { Request, Response, NextFunction } from "express";
import config from "../config";
import { StatusCodes } from "../response/httpStatus";
import ErrorCodes from "../response/errorCodes";
import { ErrorResponse } from "../response/response";

export default function checkApiKey(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const apiKey =
    req.headers["x-api-key"] || req.query.apiKey || req.body.apiKey;
  if (!apiKey || apiKey !== config.api.key) {
    throw new ErrorResponse({
      message: "APIKEY INVALID",
      statusCode: StatusCodes.UNAUTHORIZED,
      error: ErrorCodes.INVALID_TOKEN,
    });
  }
  next();
}
