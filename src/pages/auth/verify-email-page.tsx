import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import { Link } from "react-router";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { toast } from "sonner";
import { useState } from "react";

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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Countdown } from "@/components/countdown";
import { SignupCard } from "@/components/signup-card";
import { sendOTP, getOTPStatus, verifyOTP } from "@/services/authServices";

type FormValue = {
  email: string;
  otp: string;
};

export function VerifyEmailPage() {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { isSubmitting, isValid },
  } = useForm<FormValue>();

  const [startCountdown, setStartCountdown] = useState(false);

  const [countdown, setCountdown] = useState(60);

  const [isSending, setIsSending] = useState(false);

  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleSendOTP = async (email: string) => {
    setIsSending(true);

    const otpStatusResponse = await getOTPStatus(email);

    if (otpStatusResponse.success && otpStatusResponse.validTill > 0) {
      toast.success(
        `OTP is already sent and valid till next ${otpStatusResponse.validTill / 1000} seconds. You can send new OTP after timer ends.`,
        {
          position: "top-center",
        },
      );
      setCountdown(otpStatusResponse.validTill / 1000);
      setStartCountdown(true);
    } else {
      const response = await sendOTP(email);

      if (response.success) {
        toast.success(`OTP is send to ${email} email address.`, {
          position: "top-center",
        });
        setCountdown(response.validTill / 1000);
        setStartCountdown(true);
      } else {
        toast.error(response.error, {
          position: "top-center",
        });
        setStartCountdown(false);
      }
    }

    setIsSending(false);
  };

  const handleVerifyOTP: SubmitHandler<FormValue> = async ({ email, otp }) => {
    const response = await verifyOTP(otp);

    if (response.success) {
      toast.success("Email is verified successfully!", {
        position: "top-center",
      });
      setIsEmailVerified(true);
    } else {
      toast.error("OTP does not match!", { position: "top-center" });
      setIsEmailVerified(false);
    }
  };

  if (isEmailVerified) {
    return <SignupCard email={getValues("email")} />;
  } else {
    return (
      <form onSubmit={handleSubmit(handleVerifyOTP)}>
        <Card className="w-full max-w-sm m-auto mt-10">
          <CardHeader>
            <CardTitle>Verify your email</CardTitle>
            <CardDescription>
              Please verify your email before entering other details.
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
                <Label htmlFor="identifier">Email</Label>
                <div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    {...register("email", { required: true })}
                  />

                  <Button
                    variant="ghost"
                    type="button"
                    aria-label="send otp"
                    className="w-full cursor-pointer hover:bg-accent-foreground"
                    disabled={!isValid || startCountdown}
                    onClick={() => handleSendOTP(getValues("email"))}
                  >
                    {isSending && <Spinner />}
                    {isSending ? "Sending..." : "Send OTP"}
                  </Button>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <div className="flex items-center gap-4">
                  <Controller
                    name="otp"
                    control={control}
                    render={({ field }) => (
                      <InputOTP
                        id="otp"
                        maxLength={6}
                        pattern={REGEXP_ONLY_DIGITS}
                        value={field.value}
                        onChange={field.onChange}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    )}
                  />

                  {startCountdown && (
                    <Countdown
                      start={true}
                      setStartCountdown={setStartCountdown}
                      countdown={countdown}
                    />
                  )}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              variant="default"
              aria-label="Verify otp"
              disabled={isSubmitting || !isValid}
              className="w-full cursor-pointer hover:bg-accent-foreground"
            >
              {isSubmitting && <Spinner />}
              {isSubmitting ? "Verifying..." : "Verify OTP"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    );
  }
}
