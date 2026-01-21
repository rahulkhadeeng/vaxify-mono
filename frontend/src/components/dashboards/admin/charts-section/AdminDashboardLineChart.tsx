import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from "@/components/ui/chart";
import type { Payload } from "recharts/types/component/DefaultLegendContent";
import { metrics, platformData, type MetricKey } from "./chart-data";

export default function AdminPlatformMetricsChart() {
  const [selectedMetric, setSelectedMetric] =
    useState<MetricKey>("appointments");

  return (
    <Card className="w-full col-span-12 xl:col-span-8 p-0">
      {/* Metric Selector  */}
      <CardHeader className="p-0">
        <div className="grid @2xl:grid-cols-2 @3xl:grid-cols-4 grow border-b">
          {metrics.map((metric) => {
            return (
              <button
                key={metric.key}
                onClick={() => setSelectedMetric(metric.key)}
                className={cn(
                  "cursor-pointer flex-1 text-start p-4 last:border-b-0 border-b @2xl:border-b @2xl:even:border-e @3xl:border-b-0 @3xl:border-e @3xl:last:border-e-0 transition-all",
                  selectedMetric === metric.key && "bg-muted/50",
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    {metric.label}
                  </span>
                </div>

                <div className="text-2xl font-bold">
                  {metric.format(metric.value)}
                </div>
              </button>
            );
          })}
        </div>
      </CardHeader>

      {/* Chart */}
      <CardContent className="px-2.5 py-6">
        <ChartContainer
          config={chartConfig}
          className="w-full overflow-visible [&_.recharts-curve.recharts-tooltip-cursor]:stroke-initial"
        >
          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={platformData}
                margin={{
                  top: 20,
                  right: 20,
                  left: 5,
                  bottom: 20,
                }}
                style={{ overflow: "visible" }}
              >
                {/* SVG Effects */}
                <defs>
                  <pattern
                    id="dotGrid"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="10" cy="10" r="1" fill="var(--input)" />
                  </pattern>

                  <filter
                    id="lineShadow"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feDropShadow
                      dx="4"
                      dy="6"
                      stdDeviation="25"
                      floodColor={`${chartConfig[selectedMetric as keyof typeof chartConfig].color}60`}
                    />
                  </filter>

                  <filter
                    id="dotShadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feDropShadow
                      dx="2"
                      dy="2"
                      stdDeviation="3"
                      floodColor="rgba(0,0,0,0.5)"
                    />
                  </filter>
                </defs>

                {/* Axes */}
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  tickMargin={10}
                  tickFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  tickMargin={10}
                  tickCount={6}
                  tickFormatter={(value) => {
                    const metric = metrics.find(
                      (m) => m.key === selectedMetric,
                    );
                    return metric ? metric.format(value) : value.toString();
                  }}
                />

                {/* Tooltip  */}
                <ChartTooltip
                  content={<CustomTooltip active={false} payload={[]} />}
                  cursor={{
                    strokeDasharray: "3 3",
                    stroke: "#9ca3af",
                  }}
                />

                {/* Dotted Background */}
                <rect
                  x="60px"
                  y="-20px"
                  width="calc(100% - 75px)"
                  height="calc(100% - 10px)"
                  fill="url(#dotGrid)"
                  style={{ pointerEvents: "none" }}
                />

                {/* Line */}
                <Line
                  type="monotone"
                  dataKey={selectedMetric}
                  stroke={
                    chartConfig[selectedMetric as keyof typeof chartConfig]
                      .color
                  }
                  strokeWidth={2}
                  filter="url(#lineShadow)"
                  dot={false}
                  activeDot={{
                    r: 6,
                    fill: chartConfig[
                      selectedMetric as keyof typeof chartConfig
                    ].color,
                    stroke: "white",
                    strokeWidth: 2,
                    filter: "url(#dotShadow)",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function CustomTooltip({
  active,
  payload,
}: {
  active: boolean;
  payload: Payload[];
}) {
  if (active && payload?.length) {
    const entry = payload[0];
    const metric = metrics.find((m) => m.key === entry.dataKey);

    if (!metric) return null;

    return (
      <div className="rounded-lg border bg-popover p-3 shadow-sm min-w-30">
        <div className="flex items-center gap-2 text-sm">
          <div
            className="size-1.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground">{metric.label}:</span>
          <span className="font-semibold">{metric.format(entry.value)}</span>
        </div>
      </div>
    );
  }

  return null;
}

const chartConfig = {
  appointments: {
    label: "Appointments",
    color: "#6366F1", // Indigo 500
  },
  pendingApprovals: {
    label: "Pending Approvals",
    color: "#F59E0B", // Amber 500
  },
  hospitals: {
    label: "Hospitals",
    color: "#10B981", // Emerald 500
  },
  users: {
    label: "Active Users",
    color: "#0EA5E9", // Sky 500
  },
} satisfies ChartConfig;
