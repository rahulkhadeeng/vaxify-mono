import { Card, CardHeader, CardContent } from "@/components/ui/card";
import type { CenterData } from "./types";

interface Props {
  center: CenterData;
}

const CenterDetailsInfoSection = ({ center }: Props) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-medium">Facilities & Features</h2>
      </CardHeader>

      <CardContent className="grid md:grid-cols-2 gap-4">
        {center.features.map((feature, i) => (
          <div key={i} className="flex gap-3 text-sm text-muted-foreground">
            <span>•</span>
            <span>{feature}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CenterDetailsInfoSection;
