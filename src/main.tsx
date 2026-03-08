import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store/store.ts";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import Error from "./components/Error.tsx";
import router from "./routes.tsx";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <ThemeProvider theme={theme} defaultMode="dark">
        <CssBaseline />
        <ReduxProvider store={store}>
          <RouterProvider router={router} />
        </ReduxProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
);
