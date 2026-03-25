import { createBrowserRouter } from "react-router";

import { App } from "@/app";
import { ProtectedRoute } from "@/components/protected-route";
import { RootErrorBoundary } from "@/components/error-boundary";
import { LandingPage } from "@/pages/landing-page";
import { LoginPage } from "@/pages/auth/login-page";
import { SignupPage } from "@/pages/auth/signup-page";
import { ForgotPasswordPage } from "@/pages/auth/forgot-password-page";
import { ResetPasswordPage } from "@/pages/auth/reset-password-page";
import { AllNotesPage } from "@/pages/notes/all-notes-page";
import { ShowNotePage } from "@/pages/notes/show-note-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    ErrorBoundary: RootErrorBoundary,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/resetPassword/:token",
        element: <ResetPasswordPage />,
      },
      {
        path: "/notes",
        element: (
          <ProtectedRoute>
            <AllNotesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/notes/:noteId",
        element: (
          <ProtectedRoute>
            <ShowNotePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
