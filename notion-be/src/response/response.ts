import { Response } from "express";
import { ReasonPhrases, StatusCodes } from "./httpStatus";

export class ErrorResponse extends Error {
  public readonly statusCode: number;
  public readonly error: string;
  constructor({
    message = "Error",
    statusCode = StatusCodes.NOT_FOUND,
    error = ReasonPhrases.NOT_FOUND,
  }) {
    super(message);
    this.error = error;
    this.statusCode = statusCode;
  }
}

export class SuccessResponse<T> {
  private readonly statusCode: number;
  private readonly data: T;
  private readonly message: string;

  constructor({
    statusCode = StatusCodes.OK,
    message = ReasonPhrases.OK,
    data,
  }: {
    statusCode?: number;
    message?: string;
    data: T;
  }) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }

  public send(res: Response): Response {
    return res.status(this.statusCode).json({
      success: true,
      statusCode: this.statusCode,
      message: this.message,
      data: this.data,
      error: null,
    });
  }
}
