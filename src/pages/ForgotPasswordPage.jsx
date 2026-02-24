import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";

import AuthLayout from "../layouts/AuthLayout.jsx";

function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  // TDDO: Call forgot password api service.

  return (
    <AuthLayout headerText="Forgot Password?">
      <form onClick={handleSubmit(onSubmit)} className="input-form-style">
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

        <Button variant="outlined" type="submit" disabled={errors.email}>
          Send
        </Button>
      </form>
    </AuthLayout>
  );
}

export default ForgotPasswordPage;
