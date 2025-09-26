import "reflect-metadata";
import "./container";

import express from "express";
import { requestLogger } from "./middlewares/requestLogger";
import router from "./router";
import "./utils/redis";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler";
import { ErrorRequestHandler } from "express";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.get("/", (req, res, next) => {
  res.json("hello world");
});

// Setup Router
app.use("/api/v1", router);

app.use(errorHandler as ErrorRequestHandler);

app.listen(8080, () => {
  console.log("server is running 8080");
});

export default app;
