import { RateLimiterRedis } from "rate-limiter-flexible";
import { redis } from "../utils";
import { NextFunction, Request, Response } from "express";

const rateLimmiter = new RateLimiterRedis({
  storeClient: redis,
  points: 100,
  duration: 60,
  blockDuration: 60,
});

const rateLimiterMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await rateLimmiter.consume(req.ip || "unknown");
    next();
  } catch (err) {
    res.status(429).json({ message: "Too many requests" });
  }
};

export default rateLimiterMiddleware;
