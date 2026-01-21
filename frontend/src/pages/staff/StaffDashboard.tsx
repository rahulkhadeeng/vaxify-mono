"use client";

import StaffStatsGrid from "@/components/dashboards/staff/StaffDashboardStatsGrid";

export default function StaffDashboard() {
  return (
    <div className="space-y-6">
      {/* page header */}
      <div>
        <h1 className="text-2xl font-semibold mb-2">
          Hospital Staff Dashboard
        </h1>

        <p className="text-sm text-muted-foreground">
          Overview of vaccination activity and appointments
        </p>
      </div>

      {/* stats grid */}
      <StaffStatsGrid />
    </div>
  );
}
