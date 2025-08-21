import { SEO } from "@/components/custom/SEO";
import { CompanyInfo } from "./views/tabs/CompanyInfo";
import { BuildingIcon, InfoIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Company = () => {
  return (
    <div>
      <SEO
        title="Compañía"
        description="Información sobre la compañía de la que eres miembro"
      />
      <div className="flex flex-col gap-2 pb-6 px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded shadow border p-2">
            <BuildingIcon className="text-amber-300 dark:text-indigo-500 w-8 h-8" />
          </div>
          <h2 className="text-2xl font-semibold">Compañía Lorem Ipsum</h2>
        </div>
        <div className="flex items-center gap-2">
          <InfoIcon className="text-yellow-400 w-4 h-4" />
          <p className="text-[12px] text-gray-500">Más funcionalidades están en camino...</p>
        </div>
        <Separator className="my-2 w-full" />
      </div>
      <div>
        <CompanyInfo />
      </div>
    </div>
  )
}
export default Company;
