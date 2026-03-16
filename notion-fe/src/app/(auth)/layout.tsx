"use client";

import { GuestOnly } from "@/features/auth/components/AuthGuards";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GuestOnly>
      <div className="auth-container">
        <div className="auth-form">{children}</div>
      </div>
    </GuestOnly>
  );
}
