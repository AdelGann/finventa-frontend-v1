import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type ImageUploadFieldProps = {
  label?: string;
  id?: string;
  name?: string;
  accept?: string;
  onChange?: (file: File | null) => void;
  className?: string;
};

export const ImageUploadField = ({
  label = "Imagen",
  id = "image-upload",
  name = "image",
  accept = "image/*",
  onChange,
  className,
}: ImageUploadFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange?.(file);
  };

  return (
    <div className="grid w-full items-center gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type="file"
        accept={accept}
        onChange={handleChange}
        className={cn("w-full", className)}
      />
    </div>
  );
};
