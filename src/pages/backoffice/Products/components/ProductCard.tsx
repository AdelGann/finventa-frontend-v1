import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Pencil, Plus, ImageOff } from "lucide-react";
import { InputField } from "@/components/custom/InputField";

export type ProductData = {
  id: string;
  title: string;
  description?: string;
  price: number;
  imageUrl?: string;
  quantity: number;
};

type ProductCardProps = {
  data: ProductData;
  onEdit?: (product: ProductData) => void;
  onIncrease?: (product: ProductData) => void;
  onDecrease?: (product: ProductData) => void;
  onQuantityChange?: (product: ProductData, newQuantity: number) => void;
};

export const ProductCard = ({
  data,
  onEdit,
  onIncrease,
  onDecrease,
  onQuantityChange,
}: ProductCardProps) => {
  const { title, description, price, imageUrl, quantity } = data;

  const handleInputChange = (value: string) => {
    const parsed = parseInt(value);
    if (!isNaN(parsed) && parsed >= 0) {
      onQuantityChange?.(data, parsed);
    }
  };

  return (
    <div className="max-w-[280px] border border-muted dark:border-white/10 rounded-lg shadow-sm p-4 bg-background transition-all duration-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="uppercase text-sm font-semibold">{title}</h3>
          <p className="text-xs text-muted-foreground">
            {description || "Sin descripción"}
          </p>
        </div>
        {onEdit && (
          <Button variant="outline" size="icon" onClick={() => onEdit(data)}>
            <Pencil className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Image */}
      <div className="w-full h-[140px] bg-muted/10 rounded-md flex items-center justify-center overflow-hidden mb-3">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex flex-col items-center text-muted-foreground">
            <ImageOff className="w-8 h-8 mb-1" />
            <span className="text-xs">Imagen no disponible</span>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="text-sm font-medium text-center mb-2">
        <span className="uppercase text-muted-foreground">Precio:</span>{" "}
        <span className="text-primary">${price.toFixed(2)}</span>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between px-4 py-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onDecrease?.(data)}
        >
          <Minus className="w-4 h-4" />
        </Button>
        <InputField
          value={quantity.toString()}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-12 text-center text-sm font-medium"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={() => onIncrease?.(data)}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <Separator className="mt-4" />
    </div>
  );
};
