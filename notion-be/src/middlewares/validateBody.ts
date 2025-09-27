import { NextFunction, Request, RequestHandler, Response } from "express";
import z from "zod";
import { ErrorResponse } from "../response/response";
import ErrorCodes from "../response/errorCodes";
import { StatusCodes } from "../response/httpStatus";

export function validateBody(schema: z.ZodSchema<any>): RequestHandler {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      throw new ErrorResponse({
        message: ErrorCodes.DATA_INVALID,
        statusCode: StatusCodes.BAD_REQUEST,
        error: result.error.message,
      });
    }
    req.body = result.data;
    next();
  };
}
