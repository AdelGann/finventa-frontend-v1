import { useState } from "react";
import { PaginationControls } from "@/components/custom/PaginationControls";
import { ProductCard, ProductData } from "./ProductCard";
import { ProductSheet } from "../views/ProductSheet";

export const ProductsColumn = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [product, setProduct] = useState<ProductData>({
    id: "",
    price: 0,
    quantity: 0,
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleEdit = (product: ProductData) => {
    setProduct(product);
    setSheetOpen(true);
  };

  const handleIncrease = (product: ProductData) => {
    console.log("Aumentar cantidad:", product);
  };

  const handleDecrease = (product: ProductData) => {
    console.log("Disminuir cantidad:", product);
  };

  return (
    <div className="px-3 pt-5 py-1">
      <div className="grid grid-cols-1 w-[230px] xs:w-[280px] md:w-auto md:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 mb-6 max-w-screen-xl mx-auto">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            data={product}
            onEdit={handleEdit}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onQuantityChange={(updatedProduct, newQuantity) => {
              console.log(
                "Cantidad modificada:",
                updatedProduct.title,
                "→",
                newQuantity,
              );
            }}
          />
        ))}
      </div>
      <PaginationControls
        currentPage={2}
        totalPages={10}
        onPageChange={(page) => console.log("Ir a página:", page)}
      />
      <ProductSheet data={product} setState={setSheetOpen} state={sheetOpen} />
    </div>
  );
};

const productsData: ProductData[] = [
  {
    id: "p1",
    title: "Café Premium",
    description: "250g en grano",
    price: 50,
    quantity: 2,
    imageUrl: "", // sin imagen
  },
  {
    id: "p2",
    title: "Té Verde",
    description: "Caja de 20 sobres",
    price: 30,
    quantity: 1,
    imageUrl:
      "https://media.admagazine.com/photos/618a6151be961b98e9f0991c/master/w_1600%2Cc_limit/85139.jpg",
  },
  {
    id: "p3",
    title: "Galletas Artesanales",
    description: "Paquete de 12 unidades",
    price: 40,
    quantity: 3,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-5pG_6Z6UynKVuINoElMlUUs6uWnyjHFuQ&s",
  },
  {
    id: "p4",
    title: "Chocolate Oscuro",
    description: "Barra 70% cacao",
    price: 35,
    quantity: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1hRdoAgqLG8PCX9jUXeblP8UOz6370kOzA&s",
  },
  {
    id: "p5",
    title: "Pan Integral",
    description: "500g artesanal",
    price: 25,
    quantity: 2,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCHzuwL7jLnZaY_Tp8nGCGGiSZTyeGWEQgA&s",
  },
  {
    id: "p6",
    title: "Mermelada de Fresa",
    description: "Frasco de 250g",
    price: 28,
    quantity: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBl7pSKI-7W3wWFxz5Jdp1JV8o76stSFvuGw&s", // sin imagen
  },
];
