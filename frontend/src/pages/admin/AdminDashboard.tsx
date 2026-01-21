import AdminDashboardChartsSection from "@/components/dashboards/admin/charts-section/AdminDashboardChartsSection";
import AdminDashboardSecondSection from "@/components/dashboards/admin/second-section/AdminDashboardSecondSection";
import AdminDashboardStatsGrid from "@/components/dashboards/admin/AdminDashboardStatsGrid";

const AdminDashboard = () => {
  return (
    <div>
      {/* header */}
      <div className="mb-10">
        <h1 className="text-lg font-semibold">Admin Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Platform-level overview and system management
        </p>
      </div>

      {/*  */}
      <AdminDashboardStatsGrid />

      {/*  */}
      <AdminDashboardSecondSection />

      {/*  */}
      <AdminDashboardChartsSection />
    </div>
  );
};

export default AdminDashboard;
