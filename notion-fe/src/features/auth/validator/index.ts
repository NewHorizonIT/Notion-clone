import { z } from "zod";
export const loginSchema = z.object({
  email: z.string().email("Email không hợp lệ").trim(),
  password: z.string().min(5, "Mật khẩu không được dưới 5 kí tự").trim(),
});

export const signupSchema = loginSchema.extend({
  name: z.string().min(5, "Tên phải trên 5 kí tự").trim(),
});

export type LoginData = z.infer<typeof loginSchema>;
export type SignupData = z.infer<typeof signupSchema>;
