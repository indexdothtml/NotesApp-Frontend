import { createBrowserRouter } from "react-router";

import { App } from "@/app";
import { ProtectedRoute } from "@/components/protected-route";
import { PublicRoute } from "@/components/public-route";
import { ErrorBoundary } from "@/components/error-boundary";
import { LandingPage } from "@/pages/landing-page";
import { LoginPage } from "@/pages/auth/login-page";
import { VerifyEmailPage } from "@/pages/auth/verify-email-page";
import { ForgotPasswordPage } from "@/pages/auth/forgot-password-page";
import { ResetPasswordPage } from "@/pages/auth/reset-password-page";
import { AllNotesPage } from "@/pages/notes/all-notes-page";
import { ShowNotePage } from "@/pages/notes/show-note-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <VerifyEmailPage />
          </PublicRoute>
        ),
      },
      {
        path: "/forgotPassword",
        element: (
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        ),
      },
      {
        path: "/resetPassword/:token",
        element: (
          <PublicRoute>
            <ResetPasswordPage />
          </PublicRoute>
        ),
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
