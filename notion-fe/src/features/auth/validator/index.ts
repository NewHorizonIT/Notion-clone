import { z } from "zod";
export const loginSchema = z.object({
  email: z.string().email("Email không hợp lệ").trim(),
  password: z.string().min(5, "Mật khẩu không được dưới 5 kí tự").trim(),
});

export const signupSchema = loginSchema.extend({
  name: z.string().min(5, "Tên phải trên 5 kí tự").trim(),
});

export const resetPasswordSchema = z.object({
  email: z.string().email("Email không hợp lê"),
});

export const forgetPasswordSchema = z.object({
  password: z.string().min(5, "Mật khẩu không được dưới 5 kí tự").trim(),
});

export type LoginData = z.infer<typeof loginSchema>;
export type SignupData = z.infer<typeof signupSchema>;
export type ForgetPasswordData = z.infer<typeof forgetPasswordSchema>;
export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
