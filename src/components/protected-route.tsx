import type { ReactNode } from "react";

import { useAuth } from "@/hooks/useAuth";
import { LoginPage } from "@/pages/auth/login-page";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  const Comp: ReactNode = isAuthenticated ? children : <LoginPage />;

  return Comp;
}
