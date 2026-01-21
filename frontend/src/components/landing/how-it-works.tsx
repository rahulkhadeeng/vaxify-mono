import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ClipboardList, Upload, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

export function HowItWorks() {
  return (
    <section className="py-16 md:py-32">
      <div className="@container mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            How Vaxify Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Simple, secure, and designed for real-world vaccination workflows.
          </p>
        </div>

        {/* Cards */}
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          
          {/* Step 1 */}
          <Card
            className="
              group relative rounded-xl bg-muted
              border border-transparent

              /* inner gray depth */
              shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.05)]

              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:border-indigo-600/30
              hover:shadow-[0_25px_45px_-15px_rgba(79,70,229,0.45)]
            "
          >
            <CardHeader className="pb-3">
              <CardDecorator>
                <ClipboardList className="size-6" />
              </CardDecorator>
              <h3 className="mt-6 font-medium transition-colors group-hover:text-indigo-600">
                Register & Schedule
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Create your profile and schedule vaccinations in seconds.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card
            className="
              group relative rounded-xl bg-muted
              border border-transparent

              shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.05)]

              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:border-indigo-600/30
              hover:shadow-[0_25px_45px_-15px_rgba(79,70,229,0.45)]
            "
          >
            <CardHeader className="pb-3">
              <CardDecorator>
                <Upload className="size-6" />
              </CardDecorator>
              <h3 className="mt-6 font-medium transition-colors group-hover:text-indigo-600">
                Upload Records
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Securely upload vaccination records with instant validation.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card
            className="
              group relative rounded-xl bg-muted
              border border-transparent

              shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.05)]

              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:border-indigo-600/30
              hover:shadow-[0_25px_45px_-15px_rgba(79,70,229,0.45)]
            "
          >
            <CardHeader className="pb-3">
              <CardDecorator>
                <ShieldCheck className="size-6" />
              </CardDecorator>
              <h3 className="mt-6 font-medium transition-colors group-hover:text-indigo-600">
                Verify & Track
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Track status and verify authenticity anytime, anywhere.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}

/* Icon + grid decorator */
const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    {/* grid background */}
    <div className="absolute inset-0 [--border:black] dark:[--border:white]
      bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),
          linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
      bg-[size:24px_24px] opacity-10"
    />

    {/* icon container with hover glow */}
    <div
      className="
        bg-background absolute inset-0 m-auto
        flex size-12 items-center justify-center
        border rounded-md
        transition-all duration-300
        group-hover:border-indigo-600/40
        group-hover:shadow-[0_0_0_6px_rgba(79,70,229,0.08)]
      "
    >
      {children}
    </div>
  </div>
);
