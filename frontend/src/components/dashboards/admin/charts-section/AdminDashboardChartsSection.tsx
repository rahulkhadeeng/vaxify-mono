import AdminAppointmentStatusPie from "./AdminDashboardSystemHealth";
import AdminPlatformMetricsChart from "./AdminPlatformMetricsChart";

const AdminDashboardChartsSection = () => {
  return (
    <div className="mt-5 grid grid-cols-12 gap-5">
      {/*  */}
      <AdminPlatformMetricsChart />

      {/*  */}
      <div className="col-span-4">
        <AdminAppointmentStatusPie />
      </div>
    </div>
  );
};

export default AdminDashboardChartsSection;
