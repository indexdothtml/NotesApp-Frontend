import { Box, Paper } from "@mui/material";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  headerText?: string;
  children: ReactNode;
}

function AuthLayout({ headerText = "", children }: AuthLayoutProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100vw",
          height: "85vh",
        },
      }}
    >
      <Paper
        elevation={3}
        className="flex flex-col justify-center items-center"
      >
        {headerText !== "" && (
          <h2 className="text-xl font-bold mb-2">{headerText}</h2>
        )}

        {children}
      </Paper>
    </Box>
  );
}

export default AuthLayout;
