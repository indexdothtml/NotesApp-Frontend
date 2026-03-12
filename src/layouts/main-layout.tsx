import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import { NavBar } from "@/components/navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Toaster />
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </>
  );
}
