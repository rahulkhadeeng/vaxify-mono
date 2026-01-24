import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { type Center } from "@/constants/centers-mock-data";
import { cn } from "@/lib/utils";

type Props = {
  center: Center;
};

export default function CenterCard({ center }: Props) {
  return (
    <Link to={`/centers/${center.id}`} className="block group">
      <Card
        className={cn(
          "relative overflow-hidden rounded-xl p-4 transition-all duration-500",
          "border border-border/60 bg-background",
          "hover:-translate-y-0.5",
          "hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]",
        )}
      >
        {/* on hover texture */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className={cn(
              "absolute inset-0",
              "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.025)_1px,transparent_1px)]",
              "bg-size-[4px_4px]",
            )}
          />
        </div>

        {/* card content */}
        <div className="relative flex flex-col gap-5">
          {/* Header */}
          <div className="flex items-start justify-between">
            <h3 className="text-[15px] font-medium tracking-tight">
              {center.name}
            </h3>
          </div>

          {/* address */}
          <div className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{center.address}</span>
          </div>

          {/* footer */}
          <div className="flex items-center justify-end pt-1 mt-10">
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground duration-500">
              Explore →
            </span>
          </div>
        </div>

        {/* gradient border on hover */}
        <div className="absolute inset-0 -z-10 rounded-xl p-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-br from-transparent via-border/20 to-transparent" />
      </Card>
    </Link>
  );
}
