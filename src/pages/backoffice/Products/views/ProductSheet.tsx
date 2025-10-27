import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { InputField } from "@/components/custom/InputField";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ImagePreviewUpload } from "@/components/custom/ImagePreviewUpload";
import { ProductData } from "../components/ProductCard";
import SelectField from "@/components/custom/SelectField";

export const ProductSheet = ({
  state,
  setState,
  data,
}: {
  state: boolean;
  setState: (e: boolean) => void;
  data: ProductData;
}) => {
  const handleImageChange = (file: File | null) => {
    console.log("Imagen seleccionada:", file?.name);
  };

  return (
    <Sheet open={state} onOpenChange={setState}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Editar Producto</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col justify-between p-3 h-full">
          {/* Imagen */}
          <div>
            <div className="mb-4">
              <ImagePreviewUpload
                imageUrl={data.imageUrl}
                onImageChange={handleImageChange}
              />
            </div>

            {/* Título */}
            <div>
              <InputField label="Título" defaultValue={data.title} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Separator className="my-4" />
            {/* Descripción */}
            <div>
              <InputField label="Descripción" defaultValue={data.description} />
            </div>

            <Separator className="my-4" />
            {/* Cantidad y Precio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <InputField
                label="Cantidad"
                type="number"
                defaultValue={data.quantity}
              />
              <InputField
                label="Precio"
                type="number"
                defaultValue={data.price}
              />
            </div>
            <Separator className="my-4" />
            <div>
              <SelectField label="Estado:" options={[]} />
            </div>
            <Separator className="my-4" />
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setState(false)}>
              Cancelar
            </Button>
            <Button variant="default">Guardar Cambios</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
