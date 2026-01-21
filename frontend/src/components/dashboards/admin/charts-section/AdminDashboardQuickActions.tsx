import { ClipboardCheck, CalendarX2, Package } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

interface Action {
  label: string;
  description: string;
  icon: React.ElementType;
  onClick: () => void;
}

export default function AdminQuickActions() {
  const actions: Action[] = [
    {
      label: "Review Hospital Approvals",
      description: "Approve or reject pending hospital requests",
      icon: ClipboardCheck,
      onClick: () => {
        // navigate("/admin/hospitals?status=pending")
      },
    },
    {
      label: "Resolve Appointment Conflicts",
      description: "Fix overbooked or invalid appointments",
      icon: CalendarX2,
      onClick: () => {
        // navigate("/admin/appointments/conflicts")
      },
    },
    {
      label: "View Low Stock Alerts",
      description: "Hospitals running low on vaccines",
      icon: Package,
      onClick: () => {
        // navigate("/admin/stock/alerts")
      },
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Button
              key={action.label}
              variant="outline"
              className="h-auto items-start justify-start gap-3 p-4 text-left cursor-pointer active:scale-95 transition-all"
              onClick={action.onClick}
            >
              <div className="mt-1 rounded-md bg-muted p-2">
                <Icon className="h-4 w-4" />
              </div>

              <div>
                <p className="text-sm font-medium">{action.label}</p>
                <p className="text-xs text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
