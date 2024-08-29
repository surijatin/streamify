"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../../components-shadcn/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components-shadcn/ui/chart";

const chartConfig = {
  totalUsers: {
    label: "Total Users",
    color: "hsl(var(--chart-1))",
  },
  activeUsers: {
    label: "Active Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function LineChartComponent({
  data,
}: {
  data: Array<Record<string, any>>;
}) {
  return (
    <Card className="w-96 rounded-2xl h-full bg-white">
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
        <CardDescription>
          Growth of users over the past 12 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const [month, year] = value.split(" ");
                return `${month.slice(0, 3)}'${year.slice(-2)}`;
              }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="totalUsers"
              type="natural"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={true}
            />
            <Line
              dataKey="activeUsers"
              type="monotone"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FE9A3C]"></div>
            <span>Total Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#145365]"></div>
            <span>Active Users</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
