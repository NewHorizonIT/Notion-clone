import express from "express";
import { requestLogger } from "./middlewares/requestLogger";

const app = express();

app.use(requestLogger);

app.get("/", (req, res, next) => {
  res.json("hello world");
});

app.listen(8080, () => {
  console.log("server is running 8080");
});

export default app;
