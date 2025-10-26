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

export function AddClient() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="" variant={"outline"}>
          + Agregar Cliente
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl w-full">
        <DialogHeader>
          <DialogTitle>Agregar Nuevo Cliente</DialogTitle>
          <DialogDescription>
            Asegúrate de ingresar datos precisos para facilitar el seguimiento y
            la toma de decisiones comerciales.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            <InputField label="Nombre Completo" />
            <InputField label="C.I." />
            <InputField label="Email" />
            <InputField label="Teléfono" />
          </div>
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
