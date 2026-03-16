"use client";

import useAuthStore from "@/shared/store/useAuthStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function RequireAuth({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const hasHydrated = useAuthStore((state) => state.hasHydrated);
  const isLogin = useAuthStore((state) => state.isLogin);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    if (!isLogin) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [hasHydrated, isLogin, router, pathname]);

  if (!hasHydrated || !isLogin) {
    return null;
  }

  return <>{children}</>;
}

export function GuestOnly({ children }: AuthGuardProps) {
  const router = useRouter();
  const hasHydrated = useAuthStore((state) => state.hasHydrated);
  const isLogin = useAuthStore((state) => state.isLogin);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    if (isLogin) {
      router.replace("/pages");
    }
  }, [hasHydrated, isLogin, router]);

  if (!hasHydrated || isLogin) {
    return null;
  }

  return <>{children}</>;
}
