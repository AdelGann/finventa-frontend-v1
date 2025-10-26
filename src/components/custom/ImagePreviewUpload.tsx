import { useRef, useState } from "react";
import { ImageOff } from "lucide-react";

type ImagePreviewUploadProps = {
  imageUrl?: string;
  onImageChange?: (file: File | null) => void;
};

export const ImagePreviewUpload = ({
  imageUrl,
  onImageChange,
}: ImagePreviewUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(imageUrl || null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageChange?.(file);
    }
  };

  return (
    <div
      className="w-full h-[140px] bg-muted/10 rounded-md flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={() => inputRef.current?.click()}
    >
      {preview ? (
        <img
          src={preview}
          alt="Vista previa"
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="flex flex-col items-center text-muted-foreground">
          <ImageOff className="w-8 h-8 mb-1" />
          <span className="text-xs">Imagen no disponible</span>
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};
