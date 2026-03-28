import { Outlet } from "react-router";
import { useEffect, useState } from "react";

import { AnimatedTextLogo } from "@/components/animated-text-logo";
import { MainLayout } from "@/layouts/main-layout";
import { useAuth } from "@/hooks/useAuth";
import { getCurrentUser } from "@/services/authServices";

export function App() {
  const { dispatchLogin, dispatchLogout } = useAuth();

  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const [isDataFetchingDone, setIsDataFetchingDone] = useState(false);

  useEffect(() => {
    (async function () {
      const response = await getCurrentUser();

      if (response.success) {
        dispatchLogin(response.data);
      } else {
        dispatchLogout();
      }

      setIsDataFetchingDone(true);
    })();
  }, []);

  return (
    <>
      {isAnimationDone && isDataFetchingDone ? (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ) : (
        <AnimatedTextLogo text="Notiva" onComplete={setIsAnimationDone} />
      )}
    </>
  );
}
