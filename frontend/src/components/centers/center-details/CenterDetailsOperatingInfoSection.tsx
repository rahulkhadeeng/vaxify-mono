import { Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { CenterData } from "./types";

interface Props {
  center: CenterData;
}

const CenterDetailsOperatingInfoSection = ({ center }: Props) => {
  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Operating Hours</span>
          </div>

          <Separator />

          <div>
            <p className="text-xs text-muted-foreground">Mon – Fri</p>
            <p className="font-medium">{center.operatingHours.weekdays}</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Sat – Sun</p>
            <p className="font-medium">{center.operatingHours.weekends}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-5">
          <div className="flex gap-3">
            <Phone className="w-4 h-4" />
            <span>{center.phone}</span>
          </div>

          <div className="flex gap-3">
            <Mail className="w-4 h-4" />
            <span className="break-all">{center.email}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CenterDetailsOperatingInfoSection;
