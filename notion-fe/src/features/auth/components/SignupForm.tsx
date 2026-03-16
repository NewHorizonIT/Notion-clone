"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../validator";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import { Form } from "@/shared/components/ui/form";
import FormFieldCustom from "./FormFieldCustom";
import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRegister } from "../hooks";
import { toast } from "sonner";
import useAuthStore from "@/shared/store/useAuthStore";

type SignupInput = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const form = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { register, isLoading } = useRegister();
  const onSubmit = async (data: SignupInput) => {
    try {
      const response = await register(data);
      setAuth(response.data.token.accessToken, response.data.user);
      toast.success("Đăng ký thành công");
      router.replace("/");
    } catch {
      toast.error("Đăng ký thất bại");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-3xl text-white font-bold">Đăng ký NotionClone</h2>
        <FormFieldCustom
          control={form.control}
          name="name"
          label="Tên đăng nhập"
          placeholder="Tên của bạn"
          icon={<User />}
        />
        <FormFieldCustom
          control={form.control}
          name="email"
          label="Email"
          placeholder="you@example.com"
          type="email"
          icon={<Mail />}
        />
        <FormFieldCustom
          control={form.control}
          name="password"
          label="Mật khẩu"
          type="password"
          icon={<Lock />}
        />
        <Button
          type="submit"
          className="w-full cursor-pointer"
          variant={"default"}
          disabled={isLoading}
        >
          {isLoading ? "Đang xử lý..." : "Đăng ký"}
        </Button>
        <div className="text-white">
          Bạn đã có tài khoản?{" "}
          <Link href={"/login"} className="text-primary">
            Đăng nhập
          </Link>
        </div>
      </form>
    </Form>
  );
}
