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
import { Link, useNavigate } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import PasswordInput from "./PasswordInput";
// import { registerRequest } from "../../lib/auth";

// zod schema
const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Please enter your full name")
      .min(4, "Name is too short")
      .max(40, "Name is too long"),

    email: z.email("Please enter a valid email"),

    password: z
      .string()
      .min(1, "Please enter password")
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string().min(1, "Please confirm password"),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpSchemaType = z.infer<typeof signUpSchema>;

const RegisterForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (formData: SignUpSchemaType) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      //   await registerRequest(
      //     formData.fullName,
      //     formData.email,
      //     formData.password
      //   );

      console.log("Form submitted:", formData);

      toast.success("Registered successfully, please sign in", {
        style: {
          backgroundColor: "#e7f9ed",
          color: "#0f7a28",
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 500));

      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);

      toast.error("Register failed. Please try again.", {
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
        <CardTitle>Create an account</CardTitle>

        <CardDescription>
          Enter your details below to create your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>

            <Input
              id="fullName"
              type="text"
              placeholder="Name"
              className="w-full"
              {...register("fullName")}
            />

            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>

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
              placeholder="*******"
              className="w-full"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* confirm password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>

            <PasswordInput
              id="confirmPassword"
              placeholder="*******"
              className="w-full"
              {...register("confirmPassword")}
            />

            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer mt-5"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <LoaderCircle className="animate-spin mr-2" />
                Creating your account...
              </span>
            ) : (
              <span>Create Account</span>
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="pt-2 flex justify-center">
        <p className="text-sm text-slate-600">
          Already have an account ?
          <Link
            to="/login"
            className="pl-1 text-blue-600 hover:underline transition-all"
          >
            Sign In
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;
