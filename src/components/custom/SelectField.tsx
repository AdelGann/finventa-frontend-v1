import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Label } from "../ui/label";

import Loader from "./Loader";
import { cn } from "@/lib/utils";

interface SelectFieldProps
  extends React.ComponentProps<typeof SelectPrimitive.Root> {
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  className?: string;
  contentClassName?: string;
  options:
    | { [key: string]: string }[]
    | Record<string, { [key: string]: string }[]>;
  option_name?: string;
  option_value?: string;
  isLoading?: boolean;
}

const SelectField = ({
  label,
  labelClassName = "text-sm font-medium",
  className,
  contentClassName,
  options,
  option_name = "name",
  option_value = "value",
  placeholder,
  isLoading = false,
  ...rest
}: SelectFieldProps) => {
  const data_options = Array.isArray(options)
    ? [{ label: null, options }]
    : Object.entries(options).map(([key, value]) => ({
        label: key,
        options: value,
      }));

  return (
    <div className="flex flex-col gap-2">
      <Label className={labelClassName}>{label}</Label>
      <Select {...rest}>
        <SelectTrigger className={cn("w-full", className)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className={contentClassName}>
          {!isLoading ? (
            data_options.map(({ label, options }, key) => (
              <SelectGroup key={key}>
                {label ? <SelectLabel key={key}>{label}</SelectLabel> : null}
                {options.map((item, key) => (
                  <SelectItem value={item[option_value]} key={`item-${key}`}>
                    {item[option_name]}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))
          ) : (
            <Loader divClassName="flex items-center justify-center" />
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;
