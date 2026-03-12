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
  email: string;
};

export function ForgotPasswordPage() {
  const { register, handleSubmit } = useForm<FormValues>();

  const handleServiceCall: SubmitHandler<FormValues> = (data) =>
    console.log(data);

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
          >
            Send
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
