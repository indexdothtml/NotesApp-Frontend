import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { AnimatedTextLogo } from "@/components/animated-text-logo";
import { MainLayout } from "@/layouts/main-layout";
import { useAuth } from "@/hooks/useAuth";
import { useNotes } from "@/hooks/useNotes";
import { getCurrentUser } from "@/services/authServices";
import { getAllNotesFolders } from "@/services/notesServices";

export function App() {
  const { dispatchLogin, dispatchLogout } = useAuth();

  const { dispatchSetFolders, dispatchUnsetFolders } = useNotes();

  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const [isDataFetchingDone, setIsDataFetchingDone] = useState(false);

  useEffect(() => {
    (async function () {
      const response = await getCurrentUser();

      if (response.success) {
        const foldersResponse = await getAllNotesFolders(response.data.id);

        if (foldersResponse.success) {
          dispatchSetFolders(foldersResponse.data);
        } else {
          dispatchUnsetFolders();

          toast.error(
            "Failed to fetch your folders, please refresh and try again.",
            { position: "top-center" },
          );
        }

        dispatchLogin(response.data);
      } else {
        dispatchLogout();
        toast.error("Session expired, please login again.", {
          position: "top-center",
        });
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
