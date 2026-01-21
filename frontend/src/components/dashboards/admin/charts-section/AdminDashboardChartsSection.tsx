import AdminPlatformMetricsChart from "./AdminDashboardLineChart";

const AdminDashboardChartsSection = () => {
  return (
    <div className="mt-5 grid grid-cols-12">
      {/* <AdminDashboardLineChart /> */}

      <AdminPlatformMetricsChart />
    </div>
  );
};

export default AdminDashboardChartsSection;
