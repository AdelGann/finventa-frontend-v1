import { SEO } from "@/components/custom/SEO";
import { BuildingIcon } from "lucide-react";
import { Tabs } from "@/components/custom/Tabs";
import { tabs_trigger } from "./data/tabs.trigger";
import { tabs_content } from "./data/tabs.content";
import { Title } from "@/components/shared/backoffice/Title";

const Org = () => {
  return (
    <div>
      <SEO
        title="Organización"
        description="Información sobre la organización de la que eres miembro"
      />
      <Title title="Org Lorem Ipsum" Icon={BuildingIcon} />
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
