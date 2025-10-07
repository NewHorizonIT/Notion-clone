import dotenv from "dotenv";

dotenv.config();

interface AppConfig {
  host: string;
  port: number;
  name: string;
  env: string;
}

interface DatabaseConfig {
  user: string;
  password: string;
  host: string;
  port: number;
  name: string;
  url: string;
}

interface RedisConfig {
  host: string;
  port: number;
  password?: string;
  db: number;
}

interface LoggerConfig {
  level: string;
  file: string;
  errorFile: string;
  maxSize: string;
  maxFiles: string;
}

interface JwtConfig {
  secret: string;
  expiresIn: string;
}

interface ApiConfig {
  key: string;
}

interface Config {
  app: AppConfig;
  database: DatabaseConfig;
  redis: RedisConfig;
  logger: LoggerConfig;
  jwt: JwtConfig;
  api: ApiConfig;
}

function loadEnv(env: string, defaultValue: string): string {
  return process.env[env] || defaultValue;
}

function loadConfig(prefix: string): Config {
  return {
    app: {
      host: loadEnv(`${prefix}_APP_HOST`, "localhost"),
      port: Number(loadEnv(`${prefix}_APP_PORT`, "4000")),
      name: loadEnv(`${prefix}_APP_NAME`, "notion-clone"),
      env: loadEnv("NODE_ENV", "development"),
    },
    database: {
      user: loadEnv(`${prefix}_DB_USER`, "dev"),
      password: loadEnv(`${prefix}_DB_PASSWORD`, "devpassword"),
      host: loadEnv(`${prefix}_DB_HOST`, "localhost"),
      port: Number(loadEnv(`${prefix}_DB_PORT`, "5431")),
      name: loadEnv(`${prefix}_DB_NAME`, "notion_db"),
      url: loadEnv("DATABASE_URL", ""),
    },
    redis: {
      host: loadEnv(`${prefix}_REDIS_HOST`, "localhost"),
      port: Number(loadEnv(`${prefix}_REDIS_PORT`, "6379")),
      password: loadEnv(`${prefix}_REDIS_PASSWORD`, ""),
      db: Number(loadEnv(`${prefix}_REDIS_DB`, "0")),
    },
    logger: {
      level: loadEnv(`${prefix}_LOGGER_LEVEL`, "info"),
      file: loadEnv(`${prefix}_LOGGER_FILE`, "logs/combined.log"),
      errorFile: loadEnv(`${prefix}_LOGGER_ERROR_FILE`, "logs/error.log"),
      maxSize: loadEnv(`${prefix}_LOGGER_MAX_SIZE`, "10m"),
      maxFiles: loadEnv(`${prefix}_LOGGER_MAX_FILES`, "14d"),
    },
    jwt: {
      secret: loadEnv(`${prefix}_JWT_SECRET`, "your_jwt_secret"),
      expiresIn: loadEnv(`${prefix}_JWT_EXPIRES_IN`, "1d"),
    },
    api: {
      key: loadEnv(`${prefix}_API_KEY`, "your_default_api_key"),
    },
  };
}

const prefix = process.env.NODE_ENV === "development" ? "DEV" : "PRO";

const config = loadConfig(prefix);

export default config;
