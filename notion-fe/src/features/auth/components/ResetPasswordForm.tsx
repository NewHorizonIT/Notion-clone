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
    newPassword: z.string().min(5, "Mật khẩu phải có ít nhất 5 ký tự"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

export type resetPasswordData = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const router = useRouter();
  const { reset, isLoading } = useResetPassword();
  const form = useForm<resetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: resetPasswordData) => {
    if (!token) {
      toast.error("Liên kết đặt lại mật khẩu không hợp lệ");
      return;
    }

    try {
      await reset({ token, password: data.newPassword });
      toast.success("Đặt lại mật khẩu thành công");
      router.replace("/login");
    } catch {
      toast.error("Đặt lại mật khẩu thất bại");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-3xl text-white font-bold">Đặt lại mật khẩu</h2>
        <FormFieldCustom
          control={form.control}
          name="newPassword"
          label="Mật khẩu mới"
          type="password"
          placeholder="Nhập mật khẩu mới"
          icon={<Lock />}
        />

        <FormFieldCustom
          control={form.control}
          name="confirmPassword"
          label="Xác nhận mật khẩu"
          type="password"
          icon={<Lock />}
        />
        <Button
          type="submit"
          className="w-full cursor-pointer"
          variant={"default"}
          disabled={isLoading}
        >
          {isLoading ? "Đang xử lý..." : "Xác nhận"}
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
