import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputFieldProps extends React.ComponentProps<"input"> {
  label?: string;
  labelClassName?: string;
}

export const InputField = ({
  label,
  labelClassName,
  className,
  ...rest
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label children={label} className={labelClassName} />}
      <Input className={cn("w-full", className)} {...rest} />
    </div>
  );
};
