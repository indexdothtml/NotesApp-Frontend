import { useNavigate } from "react-router";
import { useEffect } from "react";
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
import { userResetPasswordService } from "@/services/authServices";

type FormValues = {
  newPassword: string;
  confirmNewPassword: string;
};

export function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const handleServiceCall: SubmitHandler<FormValues> = async ({
    newPassword,
  }) => {
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

  const password = watch("newPassword");

  useEffect(() => {
    toast.error("Password do not match", { position: "top-center" });
  }, [errors.confirmNewPassword]);

  return (
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
              <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
              <Input
                id="confirmNewPassword"
                type="password"
                {...register("confirmNewPassword", {
                  required: true,
                  validate: (value) => value === password,
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
  );
}
