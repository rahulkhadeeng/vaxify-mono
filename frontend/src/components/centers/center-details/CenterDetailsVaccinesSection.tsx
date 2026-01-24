import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { CenterData } from "./types";

interface Props {
  center: CenterData;
}

const CenterDetailsVaccinesSection = ({ center }: Props) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-medium">Available Vaccines</h2>
      </CardHeader>

      <CardContent className="space-y-4">
        {center.vaccines.map((v, i) => (
          <div key={i}>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                {v.available ? (
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                ) : (
                  <XCircle className="text-muted-foreground w-5 h-5" />
                )}
                <span className="font-medium">{v.name}</span>
              </div>

              {v.available ? (
                <div className="px-3 py-1.5 bg-emerald-50 border border-emerald-200/50 text-emerald-700 text-xs font-medium rounded-full hover:bg-emerald-100 transition-all duration-500">
                  Available
                </div>
              ) : (
                <div className="px-3 py-1.5 bg-neutral-50 border border-neutral-200/50 text-neutral-400 text-xs font-medium rounded-full">
                  Out of stock
                </div>
              )}
            </div>
            {i < center.vaccines.length - 1 && <Separator className="mt-1" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CenterDetailsVaccinesSection;
