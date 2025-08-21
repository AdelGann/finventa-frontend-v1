import { Tabs } from "@/components/custom/Tabs"
import { tabs_content, tabs_trigger } from "./data/tabs.data"

export const CompanyInfo = () => {
  return (
    <div className="">
      <Tabs
        defaultValue="stats"
        className="p-[1px] sm:p-0"
        tabsTrigger={tabs_trigger}
        tabsContent={tabs_content}
      />
    </div>
  )
}

