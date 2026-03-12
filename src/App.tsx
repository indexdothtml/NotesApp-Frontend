import { Outlet } from "react-router";

import { MainLayout } from "@/layouts/main-layout";

export function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
