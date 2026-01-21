import { StaffAppointmentStatusPie } from "./charts/StaffAppointmentStatusPie";
import { StaffAppointmentsTrendLine } from "./charts/StaffAppointmentsTrendLine";

export default function StaffDashboardChartsSection() {
  return (
    <div className="grid gap-4 grid-cols-12">
      {/* Appointments Trend Line Chart */}
      <StaffAppointmentsTrendLine />

      {/*  */}
      <StaffAppointmentStatusPie />
    </div>
  );
}
