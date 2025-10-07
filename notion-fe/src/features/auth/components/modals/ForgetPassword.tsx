"use client";
import { BaseModal } from "@/shared/components/layout/BaseModal";
import { Button } from "@/shared/components/ui/button";
import { useState } from "react";
import { forgetPassword } from "../../api";
import { toast } from "sonner";

export function ForgetPasswordModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    forgetPassword(email);
    toast.success("Send email Success");
    onOpenChange(false);
  };

  return (
    <BaseModal
      open={open}
      onOpenChange={onOpenChange}
      title="Nhập email tài khoản"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded-md p-2"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" className="w-full">
          Gửi link reset password
        </Button>
      </form>
    </BaseModal>
  );
}
