import { useNavigate, useParams, Navigate } from "react-router";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  userResetPasswordService,
  userValidatePasswordResetTokenService,
} from "@/services/authServices";

type FormValues = {
  newPassword: string;
  confirmNewPassword: string;
};

export function ResetPasswordPage() {
  const { token } = useParams();

  const [isTokenValid, setIsTokenValid] = useState(false);

  const [isValidating, setIsValidating] = useState(true);

  const navigate = useNavigate();

  // Validate request of user (vaidate user reset password token) before giving access to update password form.
  useEffect(() => {
    (async function () {
      setIsValidating(true);

      toast.info("Please wait, we are validating your request.", {
        position: "top-center",
      });

      if (!token) {
        setIsValidating(false);

        setIsTokenValid(false);

        return;
      }

      const response = await userValidatePasswordResetTokenService(token);

      if (response.success) {
        toast.error("You can proceed to update your password.", {
          position: "top-center",
        });

        setIsTokenValid(true);
      } else {
        setIsTokenValid(false);
      }

      setIsValidating(false);
    })();
  }, []);

  // Show message to user if token is invaid and navigate to login page.
  if (!isValidating && !isTokenValid) {
    toast.error("Sorry, we cannot proceed your request. Validation failed!", {
      position: "top-center",
    });
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  // Password update handler.
  const handleServiceCall: SubmitHandler<FormValues> = async ({
    newPassword,
    confirmNewPassword,
  }) => {
    if (newPassword !== confirmNewPassword) {
      toast.error("Password do not match", { position: "top-center" });
      return;
    }

    const response = await userResetPasswordService(newPassword);

    if (response.success) {
      toast.success("Password Updated Successfully!", {
        position: "top-center",
      });

      navigate("/login");
    } else {
      toast.error("Password Update Failed!", { position: "top-center" });
    }
  };

  // Return response as per state.
  return (
    <>
      {isValidating && <Spinner className="size-8 m-auto mt-20" />}
      {!isValidating && !isTokenValid && <Navigate to="/login" />}
      {!isValidating && isTokenValid && (
        <form onSubmit={handleSubmit(handleServiceCall)}>
          <Card className="w-full max-w-sm m-auto mt-10">
            <CardHeader>
              <CardTitle>Reset password</CardTitle>
              <CardDescription>Enter your new password below.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    {...register("newPassword", { required: true })}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="confirmNewPassword">
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirmNewPassword"
                    type="password"
                    {...register("confirmNewPassword", {
                      required: true,
                    })}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button
                type="submit"
                variant="default"
                className="w-full cursor-pointer hover:bg-accent-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting && <Spinner />}
                {isSubmitting ? "Resetting Password..." : "Reset"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      )}
    </>
  );
}
