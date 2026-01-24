import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import PasswordInput from "./PasswordInput";
import { useAuth } from "@/auth/useAuth";

// zod schema
const signInSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z
    .string()
    .min(1, "Please enter your email")
    .min(8, "Password must be at least 8 characters"),
});

type SignInSchemaType = z.infer<typeof signInSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (formData: SignInSchemaType) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      await login(formData.email, formData.password);

      toast.success("Logged in successfully", {
        style: {
          backgroundColor: "#e7f9ed",
          color: "#0f7a28",
        },
      });

      console.log(formData);
    } catch (error) {
      console.log("Sign in error: ", error);

      toast.error("Login failed. Please try again.", {
        style: {
          backgroundColor: "#ffe5e5",
          color: "#b00000",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>

        <CardDescription>
          Enter your credentials below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="">
              Email
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="w-full"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <PasswordInput
              id="password"
              className="w-full"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* submit button */}
          <Button
            type="submit"
            className="w-full cursor-pointer transition-all"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <LoaderCircle className="animate-spin" />
                Signing In...
              </span>
            ) : (
              "Sign In"
            )}
          </Button>

          {/* divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>

            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">
                Or continue with
              </span>
            </div>
          </div>
        </form>

        {/* social logins */}
        <div className="grid grid-cols-2 gap-5">
          <Button
            className="cursor-pointer active:scale-95 transition-all"
            variant="outline"
            disabled={isLoading}
          >
            <FaGoogle className="mr-2" />
            Google
          </Button>

          <Button
            className="cursor-pointer active:scale-95 transition-all"
            variant="outline"
            disabled={isLoading}
          >
            <FaGithub className="mr-2" />
            Github
          </Button>
        </div>
      </CardContent>

      <CardFooter className="pt-2 flex justify-center">
        <p className="text-sm text-slate-600">
          Don't have an account ?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
