import {
  LayoutDashboard,
  Hospital,
  Calendar,
  Users,
  BarChart,
  User,
} from "lucide-react";

export const NAVIGATION = {
  user: [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Centers",
      path: "/centers",
      icon: Hospital,
    },
    {
      label: "My Appointments",
      path: "/my-appointments",
      icon: Calendar,
    },
    {
      label: "Profile",
      path: "/profile",
      icon: User,
    },
  ],

  staff: [
    {
      label: "Dashboard",
      path: "/staff/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Manage Centers",
      path: "/staff/centers/manage",
      icon: Hospital,
    },
    {
      label: "All Appointments",
      path: "/staff/appointments",
      icon: Calendar,
    },
    {
      label: "Profile",
      path: "/staff/profile",
      icon: User,
    },
  ],

  admin: [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Hospitals",
      path: "/admin/hospitals",
      icon: Hospital,
    },
    {
      label: "Users",
      path: "/admin/users",
      icon: Users,
    },
    {
      label: "Analytics",
      path: "/admin/analytics",
      icon: BarChart,
    },
    {
      label: "Profile",
      path: "/admin/profile",
      icon: User,
    },
  ],
} as const;
