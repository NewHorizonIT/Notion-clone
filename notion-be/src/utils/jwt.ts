import jwt from "jsonwebtoken";
import config from "../config";

const JWT_SECRET: string = config.jwt.secret as string;
const JWT_EXPIRES_IN = config.jwt.expiresIn;

export interface JwtPayload {
  userId: string;
  email: string;
  [key: string]: any;
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
    return null;
  }
}
