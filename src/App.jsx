import { Outlet } from "react-router";
import { useEffect } from "react";

import MainLayout from "./layouts/MainLayout.jsx";
import useAuth from "./hooks/useAuth.js";

function App() {
  const { dispatchLogin } = useAuth();

  // TEMPORORY FOR DEV PURPOSE
  useEffect(() => {
    dispatchLogin({ _id: "234" });
  }, []);

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
