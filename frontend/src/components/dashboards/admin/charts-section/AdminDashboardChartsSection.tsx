import AdminQuickActions from "./AdminDashboardQuickActions";
import AdminAppointmentStatusPie from "./AdminDashboardAppointmentsStatus";
import AdminPlatformMetricsChart from "./AdminPlatformMetricsChart";

const AdminDashboardChartsSection = () => {
  return (
    <div className="mt-5 grid grid-cols-12 gap-5">
      {/*  */}
      <AdminPlatformMetricsChart />

      {/*  */}
      <div className="grid gap-5 col-span-4">
        <AdminAppointmentStatusPie />

        <AdminQuickActions />
      </div>
    </div>
  );
};

export default AdminDashboardChartsSection;
