import { Router } from "express";
import authRouter from "./authRouter";
import workspaceRouter from "./workspace.router";
import pageRouter from "./page.router";
import blockRouter from "./block.router";

const router = Router();

router.use("/blocks", blockRouter);
router.use(authRouter);
router.use("/workspaces", workspaceRouter);
router.use("/pages", pageRouter);

export default router;
