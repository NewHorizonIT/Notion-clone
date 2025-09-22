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
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(), // chỉ format console khác nếu muốn
      ),
    }),
  ],
});

export default logger;
