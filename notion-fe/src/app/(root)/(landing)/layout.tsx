import Footer from "@/shared/components/layout/Footer";
import Header from "@/shared/components/layout/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
