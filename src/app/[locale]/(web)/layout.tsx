import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import type { ReactNode } from "react";

export default function WebLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
