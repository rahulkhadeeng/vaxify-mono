import { MapPin, Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CenterData } from "./types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/useAuth";
import { toast } from "sonner";

interface Props {
  center: CenterData;
}

const CenterDetailsHeaderSection = ({ center }: Props) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClick = () => {
    const path = `/appointments/book/${center.id}`;

    if (!isAuthenticated) {
      toast.warning("Login Required", {
        style: {
          backgroundColor: "#fffbeb",
          color: "#92400e",
        },
      });

      setTimeout(() => {
        toast.info("Redirecting to login page…", {
          style: {
            backgroundColor: "#eff6ff",
            color: "#1e40af",
          },
        });
      }, 1000);

      setTimeout(() => {
        navigate("/login", {
          state: { from: path },
        });
      }, 2500);

      return;
    }

    navigate(path);
  };

  return (
    <div className="mb-12 lg:mb-16">
      <div className="flex flex-col md:flex-row lg:items-start lg:justify-between gap-8 mb-8 transition-all">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight mb-4 lg:mb-5 transition-all">
            {center.name}
          </h1>

          <div className="flex items-start gap-2 text-muted-foreground mb-5 lg:mb-6">
            <MapPin className="w-4 h-4 mt-1 shrink-0" />
            <span className="text-sm sm:text-base">{center.address}</span>
          </div>

          <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
            {center.availableSlots} slots available today
          </Badge>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mt-10">
            {center.description}
          </p>
        </div>

        <Card className="sm:w-[80%] md:w-75 transition-all">
          <CardContent className="p-6 sm:p-8 text-center">
            <Calendar className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4" />

            <h3 className="font-medium mb-2">Ready to get vaccinated?</h3>

            <p className="text-sm text-muted-foreground mb-6">
              Book your appointment in seconds
            </p>

            <Button
              className="md:w-full cursor-pointer active:scale-95 transition-all duration-300 group"
              onClick={handleClick}
            >
              Book Appointment
              <ChevronRight className="w-4 h-4 ml-1 mb-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CenterDetailsHeaderSection;
