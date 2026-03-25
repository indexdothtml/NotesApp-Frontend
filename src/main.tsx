import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { Provider as ReduxProvider } from "react-redux";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { store } from "@/store/store";
import { router } from "@/routes";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <ReduxProvider store={store}>
          <RouterProvider router={router} />
        </ReduxProvider>
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>,
);
