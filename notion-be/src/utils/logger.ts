import winston from "winston";
import fs from "fs";
import path from "path";

// Tạo thư mục logs nếu chưa tồn tại
const logDir = "logs";
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

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

const logger = winston.createLogger({
  level: "info",
  format: logFormat, // 👈 Áp dụng format chung cho tất cả transport
  transports: [
    // 👇 Log ra file toàn bộ
    new winston.transports.File({
      filename: path.join(logDir, "combined.log"),
    }),

    // 👇 Log ra file chỉ lỗi
    new winston.transports.File({
      filename: path.join(logDir, "error.log"),
      level: "error",
    }),

    // 👇 Log ra console
    new winston.transports.Console({
      format: consoleFormat,
    }),
  ],
});

export default logger;
