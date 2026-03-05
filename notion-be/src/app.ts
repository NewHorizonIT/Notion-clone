import "reflect-metadata";
import "./container";

import express from "express";
import { requestLogger } from "./middlewares/requestLogger";
import router from "./router";
import "./utils/redis";
import cookieParser from "cookie-parser";
import { ErrorRequestHandler } from "express";
import { checkApiKey, errorHandler } from "./middlewares";
import { corsOptions } from "./config/cors";
import cors from "cors";
import logger from "./utils/logger";
import rateLimiterMiddleware from "./middlewares/rateLimiter";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use(requestLogger);
app.use(rateLimiterMiddleware);

// Swagger Documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Notion Clone API Documentation",
  }),
);

// Swagger JSON endpoint
app.get("/api-docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// Setup Router
app.use("/api/v1", checkApiKey, router);

app.use(errorHandler as ErrorRequestHandler);

app.listen(4000, () => {
  logger.info("Server is running", "https://localhost:4000");
});

export default app;
