import z from "zod";

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

export interface UserRsponseDTO {
  user: Record<string, string | number>;
}

export interface UserResponseRegisterDTO extends UserRsponseDTO {
  token?: {
    accessToken?: string;
    refreshToken?: string;
  };
}

export type UserRegisterData = z.infer<typeof UserRegisterSchema>;
export type UserLoginData = z.infer<typeof UserLoginSchema>;
