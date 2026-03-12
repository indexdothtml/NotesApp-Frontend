import { createBrowserRouter } from "react-router";

import { App } from "@/app";
import { ProtectedRoute } from "@/components/protected-route";
import { LoginPage } from "@/pages/auth/login-page";
import { SignupPage } from "@/pages/auth/signup-page";
import { ForgotPasswordPage } from "@/pages/auth/forgot-password-page";
import { ResetPasswordPage } from "@/pages/auth/reset-password-page";
import { AllNotes } from "@/pages/notes/all-notes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        path: "/resetPassword",
        element: (
          <ProtectedRoute>
            <ResetPasswordPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/notes",
        element: (
          // <ProtectedRoute>
          <AllNotes />
          // </ProtectedRoute>
        ),
      },
    ],
  },
]);
