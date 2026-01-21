import { Hospital, UserCheck, Users, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function AdminDashboardStatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  subtitle: string;
  icon: React.ElementType;
  iconBg: string;
}

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg,
}: StatCardProps) {
  return (
    <Card className="p-6 ">
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold">{value.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>

        {/* right icon */}
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full",
            iconBg,
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </Card>
  );
}

const stats = [
  {
    title: "Total Hospitals",
    value: 28,
    subtitle: "Registered on platform",
    icon: Hospital,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Pending Approvals",
    value: 7,
    subtitle: "Awaiting verification",
    icon: UserCheck,
    iconBg: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Total Users",
    value: 224,
    subtitle: "Citizens registered",
    icon: Users,
    iconBg: "bg-green-100 text-green-600",
  },
  {
    title: "Active Centers",
    value: 40,
    subtitle: "Operational vaccination centers",
    icon: Building2,
    iconBg: "bg-purple-100 text-purple-600",
  },
];
