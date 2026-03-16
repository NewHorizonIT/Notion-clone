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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await forgetPassword(email);
      toast.success("Đã gửi email đặt lại mật khẩu");
      onOpenChange(false);
      setEmail("");
    } catch {
      toast.error("Gửi email đặt lại mật khẩu thất bại");
    } finally {
      setIsSubmitting(false);
    }
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
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Đang gửi..." : "Gửi liên kết đặt lại mật khẩu"}
        </Button>
      </form>
    </BaseModal>
  );
}
