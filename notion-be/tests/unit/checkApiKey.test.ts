import { describe, it, expect, vi, beforeEach } from "vitest";
import checkApiKey from "../../src/middlewares/checkApiKey";
import config from "../../src/config";
import { StatusCodes } from "../../src/response/httpStatus";
import ErrorCodes from "../../src/response/errorCodes";
import { ErrorResponse } from "../../src/response/response";

function mockReq(options: any = {}) {
  return {
    headers: options.headers || {},
    query: options.query || {},
    body: options.body || {},
  } as any;
}

function mockRes() {
  return {} as any;
}

describe("checkApiKey middleware", () => {
  let next: any;
  beforeEach(() => {
    next = vi.fn();
  });

  it("should call next() if API key is valid in header", () => {
    const req = mockReq({ headers: { "x-api-key": config.api.key } });
    const res = mockRes();
    expect(() => checkApiKey(req, res, next)).not.toThrow();
    expect(next).toHaveBeenCalled();
  });

  it("should call next() if API key is valid in query", () => {
    const req = mockReq({ query: { apiKey: config.api.key } });
    const res = mockRes();
    expect(() => checkApiKey(req, res, next)).not.toThrow();
    expect(next).toHaveBeenCalled();
  });

  it("should call next() if API key is valid in body", () => {
    const req = mockReq({ body: { apiKey: config.api.key } });
    const res = mockRes();
    expect(() => checkApiKey(req, res, next)).not.toThrow();
    expect(next).toHaveBeenCalled();
  });

  it("should throw ErrorResponse if API key is missing", () => {
    const req = mockReq();
    const res = mockRes();
    expect(() => checkApiKey(req, res, next)).toThrowError(ErrorResponse);
    try {
      checkApiKey(req, res, next);
    } catch (err: any) {
      expect(err.statusCode).toBe(StatusCodes.UNAUTHORIZED);
      expect(err.error).toBe(ErrorCodes.INVALID_TOKEN);
    }
    expect(next).not.toHaveBeenCalled();
  });

  it("should throw ErrorResponse if API key is invalid", () => {
    const req = mockReq({ headers: { "x-api-key": "wrong-key" } });
    const res = mockRes();
    expect(() => checkApiKey(req, res, next)).toThrowError(ErrorResponse);
    try {
      checkApiKey(req, res, next);
    } catch (err: any) {
      expect(err.statusCode).toBe(StatusCodes.UNAUTHORIZED);
      expect(err.error).toBe(ErrorCodes.INVALID_TOKEN);
    }
    expect(next).not.toHaveBeenCalled();
  });
});
