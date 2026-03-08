import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

import AuthLayout from "../layouts/AuthLayout.tsx";

type FormValues = {
  fullName: string;
  username: string;
  email: string;
  password: string;
};

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => console.log(data);
  //TODO: Call register new user api service.

  return (
    <AuthLayout headerText="Create Account">
      <form onSubmit={handleSubmit(onSubmit)} className="input-form-style">
        <div className="fullname input-form-field-style">
          <TextField
            id="fullname"
            label="Fullname"
            variant="outlined"
            {...register("fullName", { required: true })}
          />
          {
            <span
              className={`${errors.fullName ? "visible" : "invisible"} text-xs text-red-400`}
            >
              Name is required.
            </span>
          }
        </div>

        <div className="username input-form-field-style">
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            {...register("username", { required: true })}
          />
          {
            <span
              className={`${errors.username ? "visible" : "invisible"} text-xs text-red-400`}
            >
              Username is required.
            </span>
          }
        </div>

        <div className="email input-form-field-style">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            {...register("email", { required: true })}
          />
          {
            <span
              className={`${errors.email ? "visible" : "invisible"} text-xs text-red-400`}
            >
              Email address is required.
            </span>
          }
        </div>

        <div className="password input-form-field-style">
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            {...register("password", { required: true })}
          />
          {
            <span
              className={`${errors.password ? "visible" : "invisible"} text-xs text-red-400`}
            >
              Password is required.
            </span>
          }
        </div>

        <div className="moreLinks flex justify-end w-full">
          <NavLink to="/login" className="text-xs">
            already have account?
          </NavLink>
        </div>

        <Button
          variant="outlined"
          type="submit"
          disabled={
            (errors.fullName ||
              errors.username ||
              errors.email ||
              errors.password) === undefined
          }
        >
          Create
        </Button>
      </form>
    </AuthLayout>
  );
}

export default SignupPage;
