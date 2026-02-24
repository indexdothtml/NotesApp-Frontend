import { Box, Paper } from "@mui/material";

function AuthLayout(Props) {
  const { headerText = "", children } = Props;

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
