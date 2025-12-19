import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const staffRegisterSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),

    phone: z
      .string()
      .regex(/^(\+91)?[6-9]\d{9}$/, "Enter a valid Indian phone number"),

    email: z.email("Enter a valid email address"),

    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),

    hospitalName: z.string().min(2, "Hospital name is required"),
    hospitalAddress: z.string().min(5, "Hospital address is required"),
    hospitalRegistrationId: z
      .string()
      .min(3, "Hospital registration ID is required"),

    document: z.any().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type StaffRegisterForm = z.infer<typeof staffRegisterSchema>;

const RegisterStaff = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StaffRegisterForm>({
    resolver: zodResolver(staffRegisterSchema),
  });

  const onSubmit = async (data: StaffRegisterForm) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      toast.success("Registration submitted for approval");

      console.log(data);
    } catch {
      toast.error("Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="pb-6">
        <CardTitle className="text-xl text-center">
          Hospital Staff Registration
        </CardTitle>

        <p className="text-sm text-center text-muted-foreground">
          Register your hospital to manage vaccination centers
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* staff details */}
          <section className="space-y-6">
            <h3 className="text-sm font-semibold text-foreground">
              Staff Details
            </h3>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label>First Name</Label>

                <Input {...register("firstName")} />

                {errors.firstName && (
                  <p className="text-sm text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Last Name</Label>

                <Input {...register("lastName")} />

                {errors.lastName && (
                  <p className="text-sm text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Email</Label>

              <Input type="email" {...register("email")} />

              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Phone Number</Label>

              <Input placeholder="+91XXXXXXXXXX" {...register("phone")} />

              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label>Password</Label>

                <Input type="password" {...register("password")} />

                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Confirm Password</Label>

                <Input type="password" {...register("confirmPassword")} />

                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* hospital details */}
          <section className="space-y-6">
            <h3 className="text-sm font-semibold text-foreground">
              Hospital Details
            </h3>

            <div className="space-y-2">
              <Label>Hospital Name</Label>

              <Input {...register("hospitalName")} />

              {errors.hospitalName && (
                <p className="text-sm text-red-500">
                  {errors.hospitalName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Hospital Address</Label>

              <Input {...register("hospitalAddress")} />

              {errors.hospitalAddress && (
                <p className="text-sm text-red-500">
                  {errors.hospitalAddress.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Hospital Registration ID</Label>

              <Input {...register("hospitalRegistrationId")} />

              {errors.hospitalRegistrationId && (
                <p className="text-sm text-red-500">
                  {errors.hospitalRegistrationId.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Verification Document</Label>

              <Input
                type="file"
                accept=".pdf,.jpg,.png"
                {...register("document")}
              />

              <p className="text-xs text-muted-foreground">
                Upload hospital registration proof or authorization letter
              </p>
            </div>
          </section>

          {/* submit */}
          <Button
            type="submit"
            className="w-full cursor-pointer"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <LoaderCircle className="animate-spin" />
                Submitting...
              </span>
            ) : (
              "Submit for Approval"
            )}
          </Button>

          {/* approval note */}
          <div className="flex items-start gap-2 rounded-md border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm text-amber-700">
              <strong>Note:</strong> Your account will remain in an approval
              phase until verified by the system administrator.
            </p>
          </div>

          {/*  */}
          <p className="text-center text-sm text-muted-foreground">
            Already registered?{" "}
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

export default RegisterStaff;
