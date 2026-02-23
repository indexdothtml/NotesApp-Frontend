import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(`data : ${data}`);
  //TODO: call api service for login.

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
        <h2 className="text-xl font-bold mb-2">Login</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center gap-4 bg-inherit w-fit p-8 rounded-md"
        >
          <div className="usernameoremailfield flex flex-col gap-1">
            <TextField
              id="usernameOrEmailInput"
              label="Username or Email"
              variant="outlined"
              {...register("identifier", { required: true })}
            />
            {
              <span
                className={`${errors.identifier ? "visible" : "invisible"} text-xs text-red-400`}
              >
                Username or Email is required.
              </span>
            }
          </div>

          <div className="passwordfield flex flex-col gap-1">
            <TextField
              id="passwordInput"
              label="Password"
              type="password"
              variant="outlined"
              {...register("password", { required: true })}
            />
            {
              <span
                className={`${errors.password ? "visible" : "invisible"} text-xs text-red-400`}
              >
                Password is required
              </span>
            }
          </div>

          <div className="moreLinks flex justify-between w-full">
            <NavLink to="#" className="text-xs">
              create account?
            </NavLink>

            <NavLink to="#" className="text-xs">
              forgot password?
            </NavLink>
          </div>

          <Button
            variant="outlined"
            type="submit"
            disabled={errors.identifier || errors.password}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default LoginPage;
