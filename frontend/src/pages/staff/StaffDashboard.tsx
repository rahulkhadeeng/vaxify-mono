import StaffStatsGrid from "@/components/dashboards/staff/StaffDashboardStatsGrid";
import StaffAppointmentsSection from "@/components/dashboards/staff/StaffDashboardAppointmentsSection";
import StaffDashboardChartsSection from "@/components/dashboards/staff/StaffDashboardChartsSection";

export default function StaffDashboard() {
  return (
    <div className="space-y-6 overflow-hidden">
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

      {/*  */}
      <StaffAppointmentsSection />

      {/* Charts */}
      <StaffDashboardChartsSection />
    </div>
  );
}
