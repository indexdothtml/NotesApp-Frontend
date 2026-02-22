import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "./index.css";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Error from "./components/Error.jsx";
import router from "./routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ErrorBoundary>
  </StrictMode>,
);
