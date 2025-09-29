import express, { Request, Response } from "express";
import { container } from "tsyringe";
import AuthController from "../controllers/authController";
import { validateBody } from "../middlewares";
import { UserLoginSchema, UserRegisterSchema } from "../schemas/userSchema";
import { authenticate } from "../middlewares/authentication";

const authRouter = express.Router();

const authController = container.resolve(AuthController);

// Register Routes
authRouter.post(
  "/auth/register",
  validateBody(UserRegisterSchema),
  authController.resgister,
);

authRouter.use(authenticate);
// Login Routes
authRouter.post(
  "/auth/login",
  validateBody(UserLoginSchema),
  authController.login,
);

// Handle Refresh Token Routes
authRouter.post("/auth/refresh-token", authController.handleRefreshToken);

// Logout
authRouter.post("/auth/logout", authController.logout);

export default authRouter;
