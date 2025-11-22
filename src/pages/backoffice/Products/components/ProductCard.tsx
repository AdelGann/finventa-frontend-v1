import { Button } from "@/components/ui/button";
import { Minus, Pencil, Plus, ImageOff } from "lucide-react";

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
    <div className="min-w-0 border border-muted dark:border-white/10 rounded-lg shadow-sm p-4 bg-card">
      {/* Header */}
      <div className="flex justify-between items-start mb-3 gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="uppercase text-sm font-semibold truncate">{title}</h3>
          <p className="text-xs text-muted-foreground truncate">
            {description || "Sin descripción"}
          </p>
        </div>
        {onEdit && (
          <Button variant="outline" size="icon" className="flex-shrink-0" onClick={() => onEdit(data)}>
            <Pencil className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Image */}
      <div className="w-full aspect-[4/3] bg-muted/10 rounded-md flex items-center justify-center overflow-hidden mb-3">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center text-muted-foreground">
            <ImageOff className="w-8 h-8 mb-1" />
            <span className="text-xs">Sin imagen</span>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="text-sm font-medium text-center mb-3">
        <span className="uppercase text-muted-foreground text-xs">Precio: </span>
        <span className="text-primary font-semibold">${price.toFixed(2)}</span>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 flex-shrink-0"
          onClick={() => onDecrease?.(data)}
        >
          <Minus className="w-4 h-4" />
        </Button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-14 h-8 text-center text-sm font-medium border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          min="0"
        />
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 flex-shrink-0"
          onClick={() => onIncrease?.(data)}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
