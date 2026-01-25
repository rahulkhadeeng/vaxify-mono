import { MapPinOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function CenterNotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] px-4 sm:px-6 flex items-center justify-center transition-all">
      <Card className="w-full max-w-sm sm:max-w-md border-dashed transition-all">
        <CardContent className="pt-8 sm:pt-10 pb-6 sm:pb-8 text-center space-y-5 sm:space-y-6 transition-all">
          {/* icon */}
          <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-muted transition-all">
            <MapPinOff className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
          </div>

          {/* content */}
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-semibold">
              Center not found
            </h2>
            <p className="text-sm text-muted-foreground">
              The vaccination center you’re looking for doesn’t exist or may
              have been removed.
            </p>
          </div>

          {/* go back btn */}
          <Button
            variant="ghost"
            className="gap-2 group cursor-pointer active:scale-95 transition-all"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft
              className="ms-0 opacity-70 transition-transform group-hover:-translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Go back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
