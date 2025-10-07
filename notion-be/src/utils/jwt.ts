import jwt from "jsonwebtoken";
import config from "../config";
import logger from "./logger";

const JWT_SECRET: string = config.jwt.secret as string;

export interface JwtPayload {
  userId: string;
  email: string;
  [key: string]: unknown;
}

export function generateAccessToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "20m" });
}

export function generateRefreshToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function validateToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (err) {
    logger.error("validate token err: ", err);
    return null;
  }
}
