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

type SignupInput = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const form = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignupInput) => {
    console.log("Signup data", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-3xl text-white font-bold">Signup to NotionClone</h2>
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
        >
          Signup
        </Button>
        <div className="text-white">
          You have registered?{" "}
          <Link href={"/login"} className="text-primary">
            Login account
          </Link>
        </div>
      </form>
    </Form>
  );
}
