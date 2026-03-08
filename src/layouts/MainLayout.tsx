import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useColorScheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  LightMode,
  DarkMode,
  Laptop,
} from "@mui/icons-material";
import { useNavigate, NavLink } from "react-router";
import type { ReactNode } from "react";

import LeftSideDrawer from "../components/LeftSideDrawer.tsx";
import useAuth from "../hooks/useAuth.ts";
import useLeftDrawer from "../hooks/useLeftDrawer.ts";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const { mode, setMode } = useColorScheme();

  const { dispatchOpenDrawer } = useLeftDrawer();

  if (!mode) {
    setMode("dark");
  }

  const toggleTheme = () => {
    if (mode === "dark") {
      setMode("light");
    }

    if (mode === "light") {
      setMode("dark");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          {isAuthenticated && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={dispatchOpenDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">Notes</NavLink>
          </Typography>
          <IconButton aria-label="Toggle dark mode" onClick={toggleTheme}>
            {mode === "dark" ? (
              <LightMode />
            ) : mode === "light" ? (
              <DarkMode />
            ) : (
              <Laptop />
            )}
          </IconButton>
          {isAuthenticated ? (
            <Button color="inherit">Logout</Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <LeftSideDrawer />
      {children}
    </Box>
  );
}

export default MainLayout;
