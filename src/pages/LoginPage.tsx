import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

import AuthLayout from "../layouts/AuthLayout.tsx";

type FormValues = {
  identifier: string;
  password: string;
};

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => console.log(`data : ${data}`);
  //TODO: call api service for login.

  return (
    <AuthLayout headerText="Login">
      <form onSubmit={handleSubmit(onSubmit)} className="input-form-style">
        <div className="usernameoremailfield input-form-field-style">
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

        <div className="passwordfield input-form-field-style">
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
          <NavLink to="/signup" className="text-xs">
            create account?
          </NavLink>

          <NavLink to="/forgotPassword" className="text-xs">
            forgot password?
          </NavLink>
        </div>

        <Button
          variant="outlined"
          type="submit"
          disabled={
            errors.identifier === undefined || errors.password === undefined
          }
        >
          Login
        </Button>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
