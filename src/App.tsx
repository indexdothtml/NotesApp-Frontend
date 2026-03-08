import { Outlet } from "react-router";
import { useEffect } from "react";

import MainLayout from "./layouts/MainLayout.tsx";
import useAuth from "./hooks/useAuth.ts";

function App() {
  const { dispatchLogin } = useAuth();

  // TEMPORORY FOR DEV PURPOSE
  useEffect(() => {
    dispatchLogin({
      _id: "123",
      email: "test@email.com",
      fullName: "test test",
      username: "test123",
      createdAt: "2026-01-05T10:00:00",
      updatedAt: "2026-02-10T14:30:00",
    });
  }, []);

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
