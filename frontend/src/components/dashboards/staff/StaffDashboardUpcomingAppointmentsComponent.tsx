import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRight, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

const StaffDashboardUpcomingAppointmentsComponent = () => {
  return (
    <Card className="lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Appointments</CardTitle>

        <div className="flex items-center gap-2">
          <Link to="/staff/appointments">
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer active:scale-95 transition-all group"
            >
              View all
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-all duration-300" />
            </Button>
          </Link>
        </div>
      </CardHeader>

      <CardContent className="">
        <div className="relative overflow-x-auto border rounded-md">
          <Table>
            <TableHeader>
              <TableRow className="border-b">
                <TableHead className="text-muted-foreground font-medium">
                  Patient
                </TableHead>
                <TableHead className="text-muted-foreground font-medium">
                  Date
                </TableHead>
                <TableHead className="text-muted-foreground font-medium">
                  Time
                </TableHead>
                <TableHead className="text-muted-foreground font-medium">
                  Vaccine
                </TableHead>
                <TableHead className="text-muted-foreground font-medium">
                  Status
                </TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>

            <TableBody>
              {upcomingAppointments.map((item) => (
                <TableRow
                  key={item.id}
                  className="border-b last:border-0 hover:bg-muted/40 transition-colors"
                >
                  <TableCell className="py-4 font-medium">
                    {item.patient}
                  </TableCell>

                  <TableCell className="py-4">{item.date}</TableCell>
                  <TableCell className="py-4">{item.time}</TableCell>
                  <TableCell className="py-4">{item.vaccine}</TableCell>
                  <TableCell className="py-4">{item.status}</TableCell>
                  <TableCell className="py-4 text-right">
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default StaffDashboardUpcomingAppointmentsComponent;

const upcomingAppointments = [
  {
    id: 1,
    patient: "Rahul Sharma",
    date: "22-01-2026",
    time: "10:00 AM",
    vaccine: "Covishield",
    status: "Scheduled",
  },
  {
    id: 2,
    patient: "Anita Verma",
    date: "22-01-2026",
    time: "11:30 AM",
    vaccine: "Covaxin",
    status: "Scheduled",
  },
  {
    id: 3,
    patient: "Mohit Kumar",
    date: "22-01-2026",
    time: "02:00 PM",
    vaccine: "Covishield",
    status: "Scheduled",
  },
  {
    id: 4,
    patient: "Neha Singh",
    date: "23-01-2026",
    time: "09:30 AM",
    vaccine: "Covaxin",
    status: "Scheduled",
  },
];
