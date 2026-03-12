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
  name: string;
  username: string;
  email: string;
  password: string;
};

export function SignupPage() {
  const { register, handleSubmit } = useForm<FormValues>();

  const handleServiceCall: SubmitHandler<FormValues> = (data) =>
    console.log(data);
  //TODO: call api service for login.

  return (
    <form onSubmit={handleSubmit(handleServiceCall)}>
      <Card className="w-full max-w-sm m-auto mt-10">
        <CardHeader>
          <CardTitle>Create new account</CardTitle>
          <CardDescription>
            Enter below details to create your new account.
          </CardDescription>
          <CardAction>
            <Button variant="link" className="cursor-pointer">
              <Link to="/login">Login</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Virat Kohli"
                {...register("name", { required: true })}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="virat#K18"
                {...register("username", { required: true })}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email", { required: true })}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
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
            Create account
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
