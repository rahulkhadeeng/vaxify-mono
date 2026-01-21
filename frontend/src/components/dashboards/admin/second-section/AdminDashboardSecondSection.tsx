import AdminDashboardPendingHospitals from "./AdminDashboardPendingHospitals";
import AdminDashboardRecentActivity from "./AdminDashboardRecentActivity";

const AdminDashboardSecondSection = () => {
  return (
    <div className="grid grid-cols-12 gap-5 mt-5">
      <AdminDashboardPendingHospitals />

      <AdminDashboardRecentActivity />
    </div>
  );
};

export default AdminDashboardSecondSection;
