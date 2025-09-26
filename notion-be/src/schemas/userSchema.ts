import z from "zod";

export const UserRegisterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Length password more than 5"),
});

export type UserRegisterData = z.infer<typeof UserRegisterSchema>;
