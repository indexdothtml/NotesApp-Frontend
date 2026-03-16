import { Link } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { userForgotPasswordService } from "@/services/authServices";

type FormValues = {
  email: string;
};

export function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const handleServiceCall: SubmitHandler<FormValues> = async ({ email }) => {
    const response = await userForgotPasswordService(email);

    if (response.success) {
      toast.info("You will receive password reset link on this email.", {
        position: "top-center",
      });
    } else {
      toast.error("Failed to sent password reset link on this email.", {
        position: "top-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleServiceCall)}>
      <Card className="w-full max-w-sm m-auto mt-10">
        <CardHeader>
          <CardTitle>Forgot password</CardTitle>
          <CardDescription>
            Forgot your password? enter your registered email below.
          </CardDescription>
          <CardAction>
            <Button variant="link" className="cursor-pointer">
              <Link to="/login">Login</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register("email", { required: true })}
            />
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
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
