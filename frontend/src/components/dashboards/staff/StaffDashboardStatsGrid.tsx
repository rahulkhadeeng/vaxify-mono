import { CalendarDays, ClipboardList, Hospital, Syringe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function StaffStatsGrid() {
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
    <Card className="p-6">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>

          <p className="text-2xl font-semibold">{value}</p>

          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>

        {/* Right Icon */}
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
    title: "Total Appointments",
    value: 2350,
    subtitle: "All scheduled appointments",
    icon: CalendarDays,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "New Bookings",
    value: 145,
    subtitle: "Booked in current period",
    icon: ClipboardList,
    iconBg: "bg-green-100 text-green-600",
  },
  {
    title: "Vaccinations Today",
    value: 89,
    subtitle: "Completed today",
    icon: Syringe,
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    title: "Active Centers",
    value: 5,
    subtitle: "Currently operational",
    icon: Hospital,
    iconBg: "bg-orange-100 text-orange-600",
  },
] as const;
