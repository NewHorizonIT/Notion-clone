"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import FormFieldCustom from "./FormFieldCustom";
import { Lock } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useResetPassword } from "../hooks";
import { Form } from "@/shared/components/ui/form";

const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(5, "password min 5 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type resetPasswordData = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") as string;
  const router = useRouter();
  const { mutateResetPassword, isError } = useResetPassword();
  const form = useForm<resetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: resetPasswordData) => {
    await mutateResetPassword({ token, password: data.newPassword });
    if (isError) {
      toast.error("Reset password fail");
    }
    toast.success("Reset password Success");
    router.push("/login");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-3xl text-white font-bold">Reset password</h2>
        <FormFieldCustom
          control={form.control}
          name="newPassword"
          label="New Password"
          type="password"
          placeholder="new password"
          icon={<Lock />}
        />

        <FormFieldCustom
          control={form.control}
          name="confirmPassword"
          label="Confirm password"
          type="password"
          icon={<Lock />}
        />
        <Button
          type="submit"
          className="w-full cursor-pointer"
          variant={"default"}
        >
          Reset
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
