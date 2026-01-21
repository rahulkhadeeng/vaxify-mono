import * as React from "react";
import { TrendingUp } from "lucide-react";
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

const chartConfig = {
  Scheduled: {
    label: "Scheduled",
    color: "#3b82f6", // Direct hex, not CSS var
  },
  Completed: {
    label: "Completed",
    color: "#10b981", // Direct hex
  },
  Cancelled: {
    label: "Cancelled",
    color: "#ef4444", // Direct hex
  },
} satisfies ChartConfig;

export function StaffAppointmentStatusPie() {
  const total = React.useMemo(
    () => data.reduce((sum, d) => sum + d.value, 0),
    [],
  );

  return (
    <Card className="flex flex-col col-span-12 lg:col-span-4">
      <CardHeader className="items-center pb-0">
        <CardTitle>Appointment Status</CardTitle>
        <CardDescription>Current distribution</CardDescription>
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
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              strokeWidth={5}
              stroke="none" // Removes grey stroke
              strokeLinecap="round" // Optional: smooth edges
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    chartConfig[entry.name as keyof typeof chartConfig]
                      ?.color as string
                  }
                />
              ))}
              {/* Center text */}
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
                          {total.toLocaleString()}
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

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 4.3% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Scheduled vs completed vs cancelled
        </div>
      </CardFooter>
    </Card>
  );
}

const data = [
  { name: "Scheduled", value: 80 },
  { name: "Completed", value: 122 },
  { name: "Cancelled", value: 32 },
];
