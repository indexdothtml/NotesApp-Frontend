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
import { userSignupService, userLoginService } from "@/services/authServices";
import { useAuth } from "@/hooks/useAuth";

type FormValues = {
  name: string;
  password: string;
};

type SignupCardProps = {
  email: string;
};

export function SignupCard({ email }: SignupCardProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const { dispatchLogin } = useAuth();

  const handleServiceCall: SubmitHandler<FormValues> = async ({
    name,
    password,
  }) => {
    const response = await userSignupService(name, email, password);

    if (response.success) {
      const response = await userLoginService(email, password);

      if (response.success) {
        toast.success("Account Created Successfully!", {
          position: "top-center",
        });
        dispatchLogin(response.data);
        navigate("/notes");
      } else {
        navigate("/login");
      }
    } else {
      toast.error("Account Creation Failed!", { position: "top-center" });
    }
  };

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
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                readOnly={true}
                value={email}
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
            disabled={isSubmitting}
          >
            {isSubmitting && <Spinner />}
            {isSubmitting ? "Creating account..." : "Create account"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
