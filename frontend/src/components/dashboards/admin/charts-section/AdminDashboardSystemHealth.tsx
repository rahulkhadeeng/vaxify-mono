"use client";

import { PieChart, Pie, Cell } from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { pieData } from "./chart-data";

const chartConfig = {
  Completed: {
    label: "Completed",
    color: "#10B981", // emerald
  },
  Scheduled: {
    label: "Scheduled",
    color: "#6366F1", // indigo
  },
  Cancelled: {
    label: "Cancelled",
    color: "#EF4444", // red
  },
} satisfies ChartConfig;

export default function AdminAppointmentStatusPie() {
  const total = pieData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Appointment Status</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center">
        <ChartContainer config={chartConfig} className="h-65 w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />

            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
              stroke="transparent"
            >
              {pieData.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={
                    chartConfig[entry.name as keyof typeof chartConfig].color
                  }
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>

        {/* Center Summary */}
        <div className="mt-4 text-center">
          <div className="text-2xl font-semibold">{total.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">
            Total Appointments
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
