import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

const userRegisterSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),

    phone: z
      .string()
      .regex(/^(\+91)?[6-9]\d{9}$/, "Enter a valid Indian phone number"),

    email: z.email("Enter a valid email"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(20),

    confirmPassword: z.string(),

    address: z.string().min(10, "Address is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type UserRegisterForm = z.infer<typeof userRegisterSchema>;

const RegisterUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterForm>({
    resolver: zodResolver(userRegisterSchema),
  });

  const onSubmit = async (formData: UserRegisterForm) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

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

    console.log(formData);
  };

  return (
    <Card className="">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-center">Register as User</CardTitle>

        <p className="text-sm text-center text-slate-500">
          Create an account to book vaccination appointments
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>First Name</Label>

              <Input placeholder="John" {...register("firstName")} />

              {errors.firstName && (
                <p className="text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Last Name</Label>

              <Input placeholder="Doe" {...register("lastName")} />

              {errors.lastName && (
                <p className="text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* email */}
          <div className="space-y-2">
            <Label>Email</Label>

            <Input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* phone */}
          <div className="space-y-2">
            <Label>Phone Number</Label>

            <Input placeholder="+91XXXXXXXXXX" {...register("phone")} />

            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* address */}
          <div className="space-y-2">
            <Label>Address</Label>

            <Input placeholder="City, State" {...register("address")} />

            {errors.address && (
              <p className="text-sm text-red-500">{errors.address.message}</p>
            )}
          </div>

          {/* password */}
          <div className="space-y-2">
            <Label>Password</Label>

            <Input
              type="password"
              placeholder="••••••••"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* confirm password */}
          <div className="space-y-2">
            <Label>Confirm Password</Label>

            <Input
              type="password"
              placeholder="••••••••"
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
            className="w-full cursor-pointer"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <LoaderCircle className="animate-spin" />
                Creating...
              </span>
            ) : (
              "Create Account"
            )}
          </Button>

          <p className="text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterUser;
