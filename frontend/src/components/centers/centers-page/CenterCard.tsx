import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { type Center } from "@/constants/centers-mock-data";

type Props = {
  center: Center;
};

export default function CenterCard({ center }: Props) {
  return (
    <Link to={`/centers/${center.id}`}>
      <Card className="group flex flex-col transition-all duration-300 ease-out border-dashed hover:-translate-y-1 hover:shadow-md rounded-sm">
        <CardHeader className="space-y-2">
          <CardTitle className="text-base font-medium">{center.name}</CardTitle>

          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{center.address}</span>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
