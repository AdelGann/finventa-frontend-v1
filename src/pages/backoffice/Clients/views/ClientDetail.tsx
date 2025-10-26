import { IdCard, Mail, Phone, ShoppingCart, User } from "lucide-react";
import { Title } from "@/components/shared/backoffice/Title";
import { SEO } from "@/components/custom/SEO";
import { ClientOrderTable } from "../components/ClientOrdersTable";
import { ProductPurchaseStats } from "../components/ProductPurchaseStats";
import { Separator } from "@/components/ui/separator";
import { ClientStats } from "../components/ClientStats";

export const ClientDetail = () => {
  return (
    <div>
      <SEO title="Detalle del Cliente - FINVENTA" description="" />
      <Title
        title="Detalle del Cliente - Adel Gannem"
        Icon={User}
        showWarning={false}
        children={
          <div className="flex flex-col gap-3 px-1">
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-3 uppercase text-gray-700 dark:text-gray-200 text-[11px]">
                <IdCard />V - 13415250
              </label>
              <label className="flex items-center gap-3 uppercase text-gray-700 dark:text-gray-200 text-[11px]">
                <Mail />
                adelgann@gmail.com
              </label>
              <label className="flex items-center gap-3 uppercase text-gray-700 dark:text-gray-200 text-[11px]">
                <Phone />
                +58 424 757 5758
              </label>
              <label className="flex items-center gap-3 uppercase text-gray-700 dark:text-gray-200 text-[11px]">
                <ShoppingCart />
                Última Compra: 15/10/2025
              </label>
            </div>
          </div>
        }
      />
      <ClientStats />
      <Separator className="!my-10" />
      <ClientOrderTable />
      <Separator className="!my-10" />
      <ProductPurchaseStats />
    </div>
  );
};
export default ClientDetail;
