import { MoreVertical } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function AdminDashboardPendingHospitals() {
  return (
    <Card className="col-span-12 lg:col-span-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Pending Hospital Approvals</CardTitle>

        <Link to="/admin/hospitals?status=pending">
          <Button
            variant="outline"
            size="sm"
            className="cursor-pointer active:scale-95 transition-all"
          >
            View All
          </Button>
        </Link>
      </CardHeader>

      <CardContent className="">
        <div className="relative overflow-x-auto border rounded-md">
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead>Hospital</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Requested On</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {pendingHospitals.map((hospital) => (
                <TableRow key={hospital.id}>
                  <TableCell className="font-medium">{hospital.name}</TableCell>

                  <TableCell>{hospital.location}</TableCell>

                  <TableCell>{hospital.requestedOn}</TableCell>

                  <TableCell>
                    <Badge variant="secondary">{hospital.status}</Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

const pendingHospitals = [
  {
    id: 1,
    name: "City Care Hospital",
    location: "Pune, Maharashtra",
    requestedOn: "2026-01-18",
    status: "Pending",
  },
  {
    id: 2,
    name: "Green Valley Medical Center",
    location: "Pune, Maharashtra",
    requestedOn: "2026-01-19",
    status: "Pending",
  },
  {
    id: 3,
    name: "Sunrise Health Clinic",
    location: "Pune, Maharashtra",
    requestedOn: "2026-01-20",
    status: "Pending",
  },
];
