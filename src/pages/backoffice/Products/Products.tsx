import { Boxes } from "lucide-react";
import { SEO } from "@/components/custom/SEO";
import { Title } from "@/components/shared/backoffice/Title";
import { ProductsView } from "./views/ProductsView";

const Products = () => {
  return (
    <div>
      <SEO title="Gestión de Productos - FINVENTA" description="" />
      <Title title="Gestión de Productos" Icon={Boxes} />
      <ProductsView />
    </div>
  );
};
export default Products;
