import Redis from "ioredis";
import config from "../config";
import logger from "./logger";

const redis = new Redis({
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
  db: config.redis.db,
});

redis.on("connect", () => {
  logger.info("[Redis] Connected");
});

redis.on("error", (err) => {
  logger.error("[Redis] Error", err);
});

export default redis;
