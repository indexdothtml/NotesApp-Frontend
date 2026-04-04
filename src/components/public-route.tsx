import { type ReactNode } from "react";

import { AllNotesPage } from "@/pages/notes/all-notes-page";
import { useAuth } from "@/hooks/useAuth";

type PublicRouteProps = {
  children: ReactNode;
};

export function PublicRoute({ children }: PublicRouteProps) {
  const { isAuthenticated } = useAuth();

  const Comp: ReactNode = isAuthenticated ? <AllNotesPage /> : children;

  return Comp;
}
