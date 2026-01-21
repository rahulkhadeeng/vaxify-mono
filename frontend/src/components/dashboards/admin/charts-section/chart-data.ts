export type MetricKey =
  | "appointments"
  | "pendingApprovals"
  | "hospitals"
  | "users";

export const metrics: {
  key: MetricKey;
  label: string;
  value: number;
  format: (v: number) => string;
  isNegative?: boolean;
}[] = [
  {
    key: "appointments",
    label: "Total Appointments",
    value: 684,
    format: (v: number) => v.toLocaleString(),
  },
  {
    key: "pendingApprovals",
    label: "Pending Approvals",
    value: 10,
    format: (v: number) => v.toString(),
    isNegative: true, // lower pending approvals is better
  },
  {
    key: "hospitals",
    label: "Hospitals Onboarded",
    value: 28,
    format: (v: number) => v.toLocaleString(),
  },
  {
    key: "users",
    label: "Active Users",
    value: 224,
    format: (v: number) => v.toLocaleString(),
  },
];

export const platformData = [
  {
    date: "2026-01-01",
    appointments: 28,
    pendingApprovals: 14,
    hospitals: 6,
    users: 92,
  },
  {
    date: "2026-01-02",
    appointments: 12,
    pendingApprovals: 13,
    hospitals: 6,
    users: 74,
  },
  {
    date: "2026-01-03",
    appointments: 22,
    pendingApprovals: 12,
    hospitals: 7,
    users: 88,
  },
  {
    date: "2026-01-04",
    appointments: 31,
    pendingApprovals: 11,
    hospitals: 8,
    users: 110,
  },
  {
    date: "2026-01-05",
    appointments: 38,
    pendingApprovals: 11,
    hospitals: 9,
    users: 128,
  },
  {
    date: "2026-01-06",
    appointments: 9,
    pendingApprovals: 13,
    hospitals: 8,
    users: 65,
  },
  {
    date: "2026-01-07",
    appointments: 34,
    pendingApprovals: 12,
    hospitals: 9,
    users: 120,
  },
  {
    date: "2026-01-08",
    appointments: 42,
    pendingApprovals: 10,
    hospitals: 10,
    users: 145,
  },
  {
    date: "2026-01-09",
    appointments: 14,
    pendingApprovals: 12,
    hospitals: 9,
    users: 78,
  },
  {
    date: "2026-01-10",
    appointments: 26,
    pendingApprovals: 11,
    hospitals: 10,
    users: 98,
  },
  {
    date: "2026-01-11",
    appointments: 29,
    pendingApprovals: 10,
    hospitals: 10,
    users: 104,
  },
  {
    date: "2026-01-12",
    appointments: 47,
    pendingApprovals: 9,
    hospitals: 12,
    users: 160,
  },
  {
    date: "2026-01-13",
    appointments: 27,
    pendingApprovals: 10,
    hospitals: 11,
    users: 112,
  },
  {
    date: "2026-01-14",
    appointments: 11,
    pendingApprovals: 12,
    hospitals: 11,
    users: 70,
  },
  {
    date: "2026-01-15",
    appointments: 19,
    pendingApprovals: 11,
    hospitals: 12,
    users: 86,
  },
  {
    date: "2026-01-16",
    appointments: 28,
    pendingApprovals: 10,
    hospitals: 13,
    users: 102,
  },
  {
    date: "2026-01-17",
    appointments: 55,
    pendingApprovals: 8,
    hospitals: 14,
    users: 190,
  },
  {
    date: "2026-01-18",
    appointments: 39,
    pendingApprovals: 9,
    hospitals: 14,
    users: 158,
  },
];

export const pieData = [
  { name: "Completed", value: 512 },
  { name: "Scheduled", value: 118 },
  { name: "Cancelled", value: 54 },
];
