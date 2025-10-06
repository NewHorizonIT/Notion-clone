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
import { useRouter } from "next/navigation";
import { useModalStore } from "@/shared/store/useModalStore";

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { openModal } = useModalStore();
  const router = useRouter();
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isLoading, isError, mutateUser } = useLogin();

  const onSubmit = (data: LoginData) => {
    mutateUser(data);
    if (isError) {
      toast.error("Login failed");
    }
    toast.success("Login Success");
    router.push("/");
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
          <p
            className="text-primary text-base cursor-pointer"
            onClick={() => openModal("forget-password")}
          >
            Forget passowrd?
          </p>
        </div>
        <Button type="submit" className="w-full cursor-pointer">
          {isLoading ? "...Loading" : "Login"}
        </Button>
        <div className="text-white">
          You haven&apos;t registered?{" "}
          <Link href={"/sign-up"} className="text-primary">
            Create Accont
          </Link>
        </div>
      </form>
    </Form>
  );
}
