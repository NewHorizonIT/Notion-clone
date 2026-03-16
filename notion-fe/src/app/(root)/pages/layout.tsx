"use client";

import { RequireAuth } from "@/features/auth/components/AuthGuards";
import { Sidebar } from "@/shared/components/layout/Sidebar";
import { Topbar } from "@/shared/components/layout/Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Topbar />
          {children}
        </main>
      </div>
    </RequireAuth>
  );
}
