import "reflect-metadata";
import "./container";

import express from "express";
import { requestLogger } from "./middlewares/requestLogger";
import router from "./router";
import "./utils/redis";
import cookieParser from "cookie-parser";
import { ErrorRequestHandler } from "express";
import { errorHandler } from "./middlewares";
import { corsOptions } from "./config/cors";
import cors from "cors";
import logger from "./utils/logger";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use(requestLogger);

// Setup Router
app.use("/api/v1", router);

app.use(errorHandler as ErrorRequestHandler);

app.listen(8080, () => {
  logger.info("Server is running", "https:locahost:8080");
});

export default app;
