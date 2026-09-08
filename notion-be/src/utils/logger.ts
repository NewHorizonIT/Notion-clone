import winston from "winston";
import fs from "fs";
import path from "path";
import config from "../config";
import DailyRotateFile from "winston-daily-rotate-file";

// Tạo thư mục logs nếu chưa tồn tại
const logDir = path.join(__dirname, "../../logs");
fs.mkdirSync(logDir, { recursive: true });

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json(),
);

const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    const metaString = Object.keys(meta).length
      ? JSON.stringify(meta, null, 2)
      : "";
    return `${timestamp} [${level}]: ${message} ${metaString}`;
  }),
);

const rotateOptions = {
  zippedArchive: true,
  datePattern: "YYYY-MM-DD",
  maxSize: config.logger.maxSize || "10m",
  maxFiles: config.logger.maxFiles || "14d",
};

const logger = winston.createLogger({
  format: logFormat,
  level: config.logger.level || "warn",
  transports:
    process.env.NODE_ENV === "production"
      ? [
          new DailyRotateFile({
            filename:
              config.logger.file || path.join(logDir, "application-%DATE%.log"),
            level: config.logger.level || "info",
            ...rotateOptions,
          }),
          new DailyRotateFile({
            filename:
              config.logger.errorFile || path.join(logDir, "error-%DATE%.log"),
            level: "error",
            ...rotateOptions,
          }),
        ]
      : [
          new winston.transports.Console({
            format: consoleFormat,
            level: config.logger.level || "debug",
          }),
        ],
});

export default logger;
