import { SEO } from "@/components/custom/SEO";
import { BuildingIcon, InfoIcon } from "lucide-react";
import { Tabs } from "@/components/custom/Tabs";
import { Separator } from "@/components/ui/separator";
import { tabs_trigger } from "./data/tabs.trigger";
import { tabs_content } from "./data/tabs.content";

const Org = () => {
  return (
    <div>
      <SEO
        title="Organización"
        description="Información sobre la organización de la que eres miembro"
      />
      <div className="flex flex-col gap-2 pb-6 px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 p-2">
            <BuildingIcon className="text-amber-300 dark:text-indigo-500 w-8 h-8" />
          </div>
          <h2 className="text-2xl font-semibold">Org Lorem Ipsum</h2>
        </div>
        <div className="flex items-center gap-2">
          <InfoIcon className="text-yellow-400 w-4 h-4" />
          <p className="text-[12px] text-gray-500">
            Más funcionalidades están en camino...
          </p>
        </div>
        <Separator className="my-2 w-full" />
      </div>
      <div>
        <Tabs
          defaultValue="stats"
          className="p-[1px] sm:p-0"
          tabsTrigger={tabs_trigger}
          tabsContent={tabs_content}
        />
      </div>
    </div>
  );
};
export default Org;
