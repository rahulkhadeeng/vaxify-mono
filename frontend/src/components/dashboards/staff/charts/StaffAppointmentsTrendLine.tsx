import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

import { Badge } from "@/components/ui/badge";
import type { Payload } from "recharts/types/component/DefaultLegendContent";

const chartConfig = {
  value: {
    label: "Appointments",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

export const StaffAppointmentsTrendLine = () => {
  const total = appointmentsData.reduce((sum, d) => sum + d.value, 0);
  const last = appointmentsData.at(-1)?.value ?? 0;
  const prev = appointmentsData.at(-2)?.value ?? 0;

  const growth = prev > 0 ? (((last - prev) / prev) * 100).toFixed(1) : "0";

  return (
    <Card className="col-span-12 lg:col-span-8">
      <CardHeader className="pb-4">
        <CardTitle>Appointments Trend</CardTitle>
      </CardHeader>

      <CardContent className="px-0">
        {/* Stats */}
        <div className="mb-8 px-5">
          <div className="mb-2 text-xs text-muted-foreground">
            Current period
          </div>

          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold">{total}</div>

            <Badge variant="outline" className="gap-1">
              <TrendingUp className="size-3" />
              {growth}%
            </Badge>
          </div>
        </div>

        {/* Chart */}
        <ChartContainer
          config={chartConfig}
          className="h-80 w-full ps-1.5 pe-2.5 overflow-visible"
        >
          <ComposedChart data={appointmentsData}>
            <defs>
              <linearGradient
                id="appointmentsGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.2}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-value)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 12"
              vertical={false}
              className="stroke-muted"
            />

            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              className="text-xs text-muted-foreground"
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              domain={[0, "dataMax + 20"]}
              className="text-xs text-muted-foreground"
            />

            <ChartTooltip
              content={<AppointmentsTooltip active={false} payload={[]} />}
              cursor={{ stroke: "var(--color-value)", strokeWidth: 1 }}
            />

            <Area
              dataKey="value"
              type="linear"
              fill="url(#appointmentsGradient)"
              stroke="transparent"
            />

            <Line
              dataKey="value"
              type="linear"
              stroke="var(--color-value)"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "var(--color-value)",
                stroke: "white",
                strokeWidth: 2,
              }}
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

function AppointmentsTooltip({
  active,
  payload,
}: {
  active: boolean;
  payload: Payload[];
}) {
  if (active && payload?.length) {
    return (
      <div className="rounded-lg bg-popover p-3 shadow-md">
        <div className="mb-1 text-xs text-muted-foreground">Appointments</div>
        <div className="text-sm font-semibold">{payload[0].value}</div>
      </div>
    );
  }
  return null;
}

const appointmentsData = [
  { period: "JAN", value: 120 },
  { period: "FEB", value: 135 },
  { period: "MAR", value: 110 },
  { period: "APR", value: 180 },
  { period: "MAY", value: 195 },
  { period: "JUN", value: 240 },
  { period: "JUL", value: 200 },
  { period: "AUG", value: 215 },
  { period: "SEP", value: 260 },
  { period: "OCT", value: 275 },
  { period: "NOV", value: 295 },
  { period: "DEC", value: 310 },
];
