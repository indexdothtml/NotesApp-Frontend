import { Link, useNavigate } from "react-router";
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
import { userLoginService } from "@/services/authServices";
import { useAuth } from "@/hooks/useAuth";

type FormValues = {
  identifier: string;
  password: string;
};

export function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const { dispatchLogin } = useAuth();

  const handleServiceCall: SubmitHandler<FormValues> = async ({
    identifier,
    password,
  }) => {
    const response = await userLoginService(identifier, password);

    if (response.success) {
      toast.success("Login Successful!", { position: "top-center" });
      dispatchLogin(response.data);
      navigate("/notes");
    } else {
      toast.error("Login Failed!", { position: "top-center" });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleServiceCall)}>
      <Card className="w-full max-w-sm m-auto mt-10">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email or username below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link" className="cursor-pointer">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="identifier">Email/Username</Label>
              <Input
                id="identifier"
                type="text"
                placeholder="m@example.com"
                {...register("identifier", { required: true })}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgotPassword"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            variant="default"
            aria-label="Login"
            disabled={isSubmitting}
            className="w-full cursor-pointer hover:bg-accent-foreground"
          >
            {isSubmitting && <Spinner />}
            {isSubmitting ? "Fetching details..." : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
