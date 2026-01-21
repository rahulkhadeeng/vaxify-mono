import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Avvvatars from "avvvatars-react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const StaffDashboardRecentVaccinationsCardComponent = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Vaccinations</CardTitle>

        <Link to="/staff/appointments">
          <Button
            variant="outline"
            size="sm"
            className="cursor-pointer active:scale-95 transition-all group"
          >
            View all
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-all duration-300" />
          </Button>
        </Link>
      </CardHeader>

      <CardContent className="space-y-4">
        {recentVaccinations.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between pb-5 border-b border-dashed last:border-none"
          >
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={""} />

                <AvatarFallback>
                  <Avvvatars value={item.patient} style="shape" />
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="text-sm font-medium">{item.patient}</p>
                <p className="text-xs text-muted-foreground">{item.vaccine}</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">{item.date}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// Mock data
const recentVaccinations = [
  {
    id: 1,
    patient: "Suresh Patel",
    vaccine: "Covishield",
    date: "21-01-2026",
  },
  {
    id: 2,
    patient: "Pooja Mehta",
    vaccine: "Covaxin",
    date: "21-01-2026",
  },
  {
    id: 3,
    patient: "Amit Kumar",
    vaccine: "Covishield",
    date: "20-01-2026",
  },
  {
    id: 4,
    patient: "Kiran Rao",
    vaccine: "Covaxin",
    date: "20-01-2026",
  },
];
