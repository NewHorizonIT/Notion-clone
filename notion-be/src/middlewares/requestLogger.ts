import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

// Custom request logger
export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;

    if (["/favicon.ico", "/healthz"].includes(req.path)) return;

    const logLevel =
      res.statusCode >= 500 ? "error" : res.statusCode >= 400 ? "warn" : "info";

    logger.log({
      level: logLevel,
      message: `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`,
    });
  });

  next();
}
