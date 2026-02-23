import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { store } from "./store/store.js";
import { Provider as ReduxProvider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Error from "./components/Error.jsx";
import router from "./routes.jsx";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </ReduxProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
);
