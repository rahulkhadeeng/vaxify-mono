import { CheckCircle, XCircle, Building2, UserPlus } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AdminDashboardRecentActivity() {
  return (
    <Card className="col-span-12 lg:col-span-4">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {activities.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>
                  <Icon className={`h-4 w-4 ${item.iconColor}`} />
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <p className="text-sm font-medium">{item.action}</p>
                <p className="text-xs text-muted-foreground">{item.target}</p>
              </div>

              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

const activities = [
  {
    id: 1,
    action: "Hospital approved",
    target: "City Care Hospital",
    icon: CheckCircle,
    iconColor: "text-green-600",
    time: "10 hours ago",
  },
  {
    id: 2,
    action: "Hospital rejected",
    target: "Sunrise Health Clinic",
    icon: XCircle,
    iconColor: "text-red-600",
    time: "1 day ago",
  },
  {
    id: 3,
    action: "User registered",
    target: "Rahul Pawar",
    icon: UserPlus,
    iconColor: "text-indigo-600",
    time: "2 day ago",
  },
  {
    id: 4,
    action: "New hospital registered",
    target: "Hope Multispeciality",
    icon: Building2,
    iconColor: "text-blue-600",
    time: "1 week ago",
  },
];
