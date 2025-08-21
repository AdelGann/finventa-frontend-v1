import { lazy } from "react";
import { SuspenseWrapper } from "@/components/custom/Suspense-wrapper";

const Stats = lazy(() => import("../content/Stats"));
const Members = lazy(() => import("../content/Members"));

export const tabs_content = [
  {
    value: "stats",
    className: "",
    children: (
      <SuspenseWrapper>
        <Stats />
      </SuspenseWrapper>
    ),
  },
  {
    value: "employees",
    className: "",
    children: (
      <SuspenseWrapper>
        <Members />
      </SuspenseWrapper>
    ),
  }
];
