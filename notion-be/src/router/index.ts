import { Router } from "express";
import authRouter from "./authRouter";
import { checkApiKey } from "../middlewares";

const router = Router();

router.use(checkApiKey);

router.use(authRouter);

export default router;
