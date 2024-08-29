"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../components-shadcn/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components-shadcn/ui/chart";

const chartConfig = {
  streamCount: {
    label: "Stream Count",
    color: "#ff0",
  },
  label: {
    color: "#000",
  },
} satisfies ChartConfig;

export function BarChartComponent({
  data,
}: {
  data: Array<Record<string, any>>;
}) {
  return (
    <Card className="w-96 rounded-2xl h-full bg-white">
      <CardHeader>
        <CardTitle>Top 5 Streams</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="songName"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <XAxis dataKey="streamCount" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="streamCount"
              layout="vertical"
              fill="hsl(var(--chart-1))"
              radius={4}
            >
              <LabelList
                dataKey="songName"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="streamCount"
                position="insideRight"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => value.toLocaleString()}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Top streams for the current month
        </div>
        <div className="flex gap-2 font-medium leading-none">August 2024</div>
      </CardFooter>
    </Card>
  );
}
