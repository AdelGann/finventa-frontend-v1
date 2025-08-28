import React from "react";
import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

export interface PieChartDataItem {
  value: number;
  name: string;
  color?: string;
}

export interface PieChartProps {
  title?: string;
  className?: string;
  subtitle?: string;
  data: PieChartDataItem[];
  radius?: [string, string];
  showTotalInCenter?: boolean;
}

const PieChart: React.FC<PieChartProps> = ({
  title = "Título del gráfico",
  subtitle = "",
  className,
  data,
  radius = ["40%", "70%"],
  showTotalInCenter = true,
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const extractedColors: string[] = data
    .map((item) => item.color)
    .filter((color): color is string => typeof color === "string");

  const option: EChartsOption = {
    title: {
      text: title,
      subtext: subtitle,
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    color: extractedColors.length > 0 ? extractedColors : undefined,
    series: [
      {
        type: "pie",
        radius,
        avoidLabelOverlap: false,
        label: showTotalInCenter
          ? {
              show: true,
              position: "center",
              formatter: `{a|Total}\n{b|${total}}`,
              rich: {
                a: { fontSize: 14, color: "#999" },
                b: { fontSize: 20, fontWeight: "bold", color: "#333" },
              },
            }
          : { show: false },
        labelLine: { show: false },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        data,
      },
    ],
  };

  return <ReactECharts option={option} className={className} />;
};

export default PieChart;
