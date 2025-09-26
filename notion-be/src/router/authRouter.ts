import express, { Request, Response } from "express";
import { container } from "tsyringe";
import AuthController from "../controllers/authController";
import { validateBody } from "../middlewares";
import { UserRegisterSchema } from "../schemas/userSchema";

const authRouter = express.Router();

const authController = container.resolve(AuthController);

// Register Routes
authRouter.post(
  "/auth/register",
  validateBody(UserRegisterSchema),
  authController.resgister,
);

// Login Routes
// authRouter.post("/login");

// Handle Refresh Token Routes
// authRouter.post("/refresh-token");

// Reset Password Routes
// authRouter.post("/reset-password");

export default authRouter;
