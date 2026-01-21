import * as React from "react";
import { Pie, PieChart, Label, Cell } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import { pieData } from "./chart-data";

const chartConfig = {
  value: {
    label: "Appointments",
  },
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
  const totalAppointments = React.useMemo(() => {
    return pieData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  type StatusKey = Exclude<keyof typeof chartConfig, "value">;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Appointment Status</CardTitle>
        <CardDescription>Overall distribution</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-62.5"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={chartConfig[entry.name as StatusKey].color}
                />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalAppointments.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          Appointments
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-1 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total appointment status breakdown
        </div>
      </CardFooter>
    </Card>
  );
}
