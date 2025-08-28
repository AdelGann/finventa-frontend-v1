import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

export interface LineChartDataPoint {
  timestamp: number;
  value: number;
}

export interface LineChartProps {
  title?: string;
  subtitle?: string;
  className?: string;
  data: LineChartDataPoint[];
  timeGranularity?: "day" | "month" | "year";
}

const LineChart: React.FC<LineChartProps> = ({
  title = "Ingresos",
  subtitle = "",
  className,
  data,
  timeGranularity = "day",
}) => {
  const formatTime = echarts.time.format;

  const intervalMap: Record<"day" | "month" | "year", number> = {
    day: 1000 * 60 * 60 * 24,
    month: 1000 * 60 * 60 * 24 * 30,
    year: 1000 * 60 * 60 * 24 * 365,
  };

  const labelFormat =
    timeGranularity === "day"
      ? "{yyyy}-{MM}-{dd}"
      : timeGranularity === "month"
        ? "{yyyy}-{MM}"
        : "{yyyy}";

  const option: echarts.EChartsOption = {
    useUTC: true,
    title: {
      text: title,
      subtext: subtitle,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: (params: any) => {
        const point = Array.isArray(params) ? params[0] : params;
        const dateStr = formatTime(point.value[0], labelFormat, true);
        return `${dateStr}<br/>${point.seriesName ?? "Valor"}: ${point.value[1]}`;
      },
    },
    xAxis: {
      type: "time",
      interval: intervalMap[timeGranularity],
      axisLabel: {
        formatter: (value: number) => formatTime(value, labelFormat, true),
      },
    },
    yAxis: {
      type: "value",
      min: "dataMin",
    },
    series: [
      {
        type: "line",
        symbolSize: 6,
        data: data.map((point) => [point.timestamp, point.value]),
        smooth: false,
        lineStyle: {
          width: 2,
        },
      },
    ],
  };

  return <ReactECharts option={option} className={className}/>;
};

export default LineChart;
