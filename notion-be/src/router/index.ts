import { Router } from "express";
import authRouter from "./authRouter";
import { checkApiKey } from "../middlewares";
import workspaceRouter from "./workspace.router";

const router = Router();

router.use(checkApiKey);

router.use(authRouter);
router.use("/workspaces", workspaceRouter);

export default router;
