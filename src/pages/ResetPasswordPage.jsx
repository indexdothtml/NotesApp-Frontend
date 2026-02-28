import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";

import AuthLayout from "../layouts/AuthLayout.jsx";

function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  // Note: Call reset password api service.

  return (
    <AuthLayout headerText="Reset Password">
      <form onClick={handleSubmit(onSubmit)} className="input-form-style">
        <div className="newPassword input-form-field-style">
          <TextField
            id="newPassword"
            label="New Password"
            type="password"
            variant="outlined"
            {...register("newPassowrd", { required: true })}
          />
          {
            <span
              className={`${errors.newPassowrd ? "visible" : "invisible"} text-xs text-red-400`}
            >
              Password is required.
            </span>
          }
        </div>

        <Button variant="outlined" type="submit" disabled={errors.newPassowrd}>
          Reset
        </Button>
      </form>
    </AuthLayout>
  );
}

export default ResetPasswordPage;
