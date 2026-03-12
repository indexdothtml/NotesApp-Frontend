import { Link } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";

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

type FormValues = {
  identifier: string;
  password: string;
};

export function LoginPage() {
  const { register, handleSubmit } = useForm<FormValues>();

  const handleServiceCall: SubmitHandler<FormValues> = (data) =>
    console.log(`data : ${data}`);
  //TODO: call api service for login.

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
            className="w-full cursor-pointer hover:bg-accent-foreground"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
