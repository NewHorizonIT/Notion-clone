import z from "zod";
import type { User } from "../generated/prisma";

export const UserLoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Length password more than 5"),
});

export const UserRegisterSchema = UserLoginSchema.extend({
  name: z.string().min(1, "Name is required"),
});

export const userResetPassword = z.object({
  password: z.string().min(5, "Length password more than 5"),
});

export type PublicUser = Omit<User, "passwordHash">;

export interface UserResponseDTO {
  user: PublicUser;
}

export interface UserResponseAuthDTO extends UserResponseDTO {
  token: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface UserResponseToken {
  accessToken?: string;
  refreshToken?: string;
}

export interface UserEmailDTO {
  token?: string;
  userId?: string;
}

export type UserRegisterData = z.infer<typeof UserRegisterSchema>;
export type UserLoginData = z.infer<typeof UserLoginSchema>;
