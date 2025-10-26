import { InputField } from "@/components/custom/InputField";
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
import { ImageUploadField } from "@/components/custom/ImageUploadField";

export function CreateProduct() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+ Agregar Producto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl w-full">
        <DialogHeader>
          <DialogTitle>Agregar Nuevo Producto</DialogTitle>
          <DialogDescription>
            Completa los campos para registrar un nuevo producto en el sistema.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
            <InputField label="Nombre del Producto" />
            <InputField label="Descripción" />
            <InputField label="Precio" type="number" />
            <InputField label="Stock" type="number" />
          </div>
          <ImageUploadField label="Subir Imagen" className="" />
        </div>
        <Separator />
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cerrar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" variant="default">
              Guardar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
