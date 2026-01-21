import {
  CalendarCheck,
  ShieldCheck,
  FileCheck,
  ListChecks,
  MapPin,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="space-y-6 px-3 sm:px-4 lg:px-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Your vaccination overview
          </p>
        </div>

        {/* <Link to="/appointments/book"> */}
        <Button className="w-full sm:w-auto cursor-pointer active:scale-95 transition-all">
          Book Appointment
        </Button>
        {/* </Link> */}
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Upcoming Appointment */}
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div>
              <CardDescription>Upcoming Appointment</CardDescription>
              <CardTitle className="text-lg sm:text-xl">22 Jan 2026</CardTitle>
            </div>
            <CalendarCheck className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
          </CardHeader>
          <CardFooter>
            <Badge variant="secondary">Scheduled</Badge>
          </CardFooter>
        </Card>

        {/* Vaccination Status */}
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div>
              <CardDescription>Vaccination Status</CardDescription>
              <CardTitle className="text-lg sm:text-xl">
                Partially Vaccinated
              </CardTitle>
            </div>
            <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
          </CardHeader>
          <CardFooter className="text-xs sm:text-sm text-muted-foreground">
            1 of 2 doses completed
          </CardFooter>
        </Card>

        {/* Total Appointments */}
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div>
              <CardDescription>Total Appointments</CardDescription>
              <CardTitle className="text-lg sm:text-xl">3</CardTitle>
            </div>
            <ListChecks className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
          </CardHeader>
          <CardFooter className="text-xs sm:text-sm text-muted-foreground">
            Past & upcoming appointments
          </CardFooter>
        </Card>

        {/* Certificate Status */}
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div>
              <CardDescription>Vaccination Certificate</CardDescription>
              <CardTitle className="text-lg sm:text-xl">
                Not Available
              </CardTitle>
            </div>
            <FileCheck className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
          </CardHeader>
          <CardFooter className="text-xs sm:text-sm text-muted-foreground">
            Available after full vaccination
          </CardFooter>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Recent Appointments */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              Recent Appointments
            </CardTitle>
            <CardDescription>Your latest vaccination activity</CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            {[
              {
                center: "City Health Center",
                date: "22 Jan 2026",
                status: "Scheduled",
              },
              {
                center: "Community Clinic",
                date: "12 Nov 2025",
                status: "Completed",
              },
              {
                center: "Urban Care Hospital",
                date: "05 Sep 2025",
                status: "Completed",
              },
            ].map((appt, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-md border p-3"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{appt.center}</p>
                    <p className="text-xs text-muted-foreground">{appt.date}</p>
                  </div>
                </div>

                <Badge
                  className="w-fit"
                  variant={
                    appt.status === "Completed" ? "outline" : "secondary"
                  }
                >
                  {appt.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Quick Actions</CardTitle>
            <CardDescription>What would you like to do next?</CardDescription>
          </CardHeader>

          <CardContent className="">
            {QuickActionItems.map((item, idx) => (
              <Link to={item.link} key={idx}>
                <Button
                  variant="outline"
                  className="w-full cursor-pointer active:scale-95 transition-all mb-3"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const QuickActionItems = [
  {
    name: "Book Appointments",
    link: "/appointments/book",
  },
  {
    name: "View Appointments",
    link: "/my-appointments",
  },
  {
    name: "Find Centers",
    link: "/centers",
  },
];
