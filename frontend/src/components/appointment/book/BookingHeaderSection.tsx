import { MapPin, CalendarCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { type Center } from "@/constants/centers-mock-data";

type Props = {
  center: Center;
};

export default function BookingHeaderSection({ center }: Props) {
  return (
    <Card className="border-dashed">
      <CardContent className="px-4 sm:px-6 transition-all">
        <div className="flex flex-col sm:flex-row sm:justify-between transition-all">
          {/* icon + name */}
          <div className="flex items-center gap-3 ">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted">
              <CalendarCheck className="h-4 w-4 text-muted-foreground" />
            </div>

            <h1 className="text-base sm:text-lg font-semibold leading-tight transition-all">
              {center.name}
            </h1>
          </div>

          {/* address */}
          <div className="ml-14 sm:ml-0 flex items-start gap-2 rounded-md py-2 text-sm text-muted-foreground lg:max-w-[45%] ">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />

            <span className="leading-relaxed wrap-break-word">
              {center.address}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
