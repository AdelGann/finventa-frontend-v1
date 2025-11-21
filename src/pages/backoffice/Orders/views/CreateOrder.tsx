import { InputField } from "@/components/custom/InputField";
import SelectField from "@/components/custom/SelectField";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface OrderProduct {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export function CreateOrder() {
  const [products, setProducts] = useState<OrderProduct[]>([]);

  const addProduct = () => {
    setProducts([
      ...products,
      { id: crypto.randomUUID(), name: "", quantity: 1, price: 0 },
    ]);
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const updateProduct = (id: string, field: keyof OrderProduct, value: string | number) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const totalAmount = products.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>+ Nueva Orden</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Crear Nueva Orden</DialogTitle>
          <DialogDescription>
            Complete los detalles de la orden para registrarla en el sistema.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        
        <div className="grid gap-4 py-4">
          {/* Cliente y Estado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectField
              label="Cliente"
              options={[
                { value: "1", label: "María González" },
                { value: "2", label: "Carlos Pérez" },
                { value: "3", label: "Ana Rodríguez" },
              ]}
            />
            <SelectField
              label="Estado"
              options={[
                { value: "pending", label: "Pendiente" },
                { value: "paid", label: "Pagado" },
                { value: "incomplete", label: "Incompleto" },
              ]}
            />
          </div>

          <Separator />

          {/* Productos */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium">Productos</h4>
              <Button size="sm" variant="outline" onClick={addProduct}>
                <Plus className="w-4 h-4 mr-2" /> Agregar Producto
              </Button>
            </div>

            {products.map((product, index) => (
              <div key={product.id} className="flex gap-2 items-end">
                <div className="flex-1">
                  <InputField
                    label={index === 0 ? "Producto" : ""}
                    placeholder="Nombre del producto"
                    value={product.name}
                    onChange={(e) => updateProduct(product.id, "name", e.target.value)}
                  />
                </div>
                <div className="w-24">
                  <InputField
                    label={index === 0 ? "Cant." : ""}
                    type="number"
                    min={1}
                    value={product.quantity}
                    onChange={(e) =>
                      updateProduct(product.id, "quantity", parseInt(e.target.value) || 0)
                    }
                  />
                </div>
                <div className="w-32">
                  <InputField
                    label={index === 0 ? "Precio" : ""}
                    type="number"
                    min={0}
                    value={product.price}
                    onChange={(e) =>
                      updateProduct(product.id, "price", parseFloat(e.target.value) || 0)
                    }
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mb-0.5 text-destructive hover:text-destructive/90"
                  onClick={() => removeProduct(product.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}

            {products.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm border border-dashed rounded-lg">
                No hay productos agregados
              </div>
            )}
          </div>

          <Separator />

          {/* Totales */}
          <div className="flex justify-end items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">Total:</span>
            <span className="text-2xl font-bold">${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancelar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button">Guardar Orden</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
