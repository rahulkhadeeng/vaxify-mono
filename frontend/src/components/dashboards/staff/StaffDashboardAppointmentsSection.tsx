import StaffDashboardUpcomingAppointmentsComponent from "./StaffDashboardUpcomingAppointmentsComponent";
import { StaffDashboardRecentVaccinationsCardComponent } from "./StaffDashboardRecentVaccinationsCardComponent";

export default function StaffAppointmentsSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {/* Upcoming Appointments */}
      <StaffDashboardUpcomingAppointmentsComponent />

      {/* Recent Vaccinations */}
      <StaffDashboardRecentVaccinationsCardComponent />
    </div>
  );
}
