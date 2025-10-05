import express from "express";
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

// Login Routes
authRouter.post(
  "/auth/login",
  validateBody(UserLoginSchema),
  authController.login,
);

// Reset password
authRouter.post("/auth/reset-password", authController.resetPassword);

// Forget Password
authRouter.post("/auth/forget-password", authController.forgetPassword);

// Handle Refresh Token Routes
authRouter.post("/auth/refresh-token", authController.handleRefreshToken);

authRouter.use(authenticate);
// Logout
authRouter.post("/auth/logout", authController.logout);

export default authRouter;
