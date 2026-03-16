"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, loginSchema } from "../validator";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import { Form } from "@/shared/components/ui/form";
import FormFieldCustom from "./FormFieldCustom";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useLogin } from "../hooks";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useModalStore } from "@/shared/store/useModalStore";
import useAuthStore from "@/shared/store/useAuthStore";

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { openModal } = useModalStore();
  const { setAuth } = useAuthStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isLoading, login } = useLogin();

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await login(data);
      setAuth(response.data.token.accessToken, response.data.user);
      toast.success("Login success");
      const redirectPath = searchParams.get("redirect") || "/";
      router.replace(redirectPath);
    } catch {
      toast.error("Login failed");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-2xl text-white font-bold">Login to NotionClone</h2>
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
        <div className="flex justify-end">
          <button
            type="button"
            className="text-primary text-base cursor-pointer"
            onClick={() => openModal("forget-password")}
          >
            Forgot password?
          </button>
        </div>
        <Button type="submit" className="w-full cursor-pointer">
          {isLoading ? "Loading..." : "Login"}
        </Button>
        <div className="text-white">
          You haven&apos;t registered?{" "}
          <Link href={"/sign-up"} className="text-primary">
            Create Account
          </Link>
        </div>
      </form>
    </Form>
  );
}
