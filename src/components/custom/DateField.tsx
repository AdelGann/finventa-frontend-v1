import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  label?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  id?: string;
  className?: string;
  buttonClassName?: string;
}

export const DateField: React.FC<DatePickerProps> = ({
  label = "Elegir Fecha",
  value,
  onChange,
  id = "date",
  className = "w-full",
  buttonClassName = "w-full justify-between font-normal",
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (date: Date | undefined) => {
    if (onChange) onChange(date);
    setOpen(false);
  };

  return (
    <div className={cn(`flex flex-col gap-3`, className)}>
      {label && (
        <Label htmlFor={id} className="px-1">
          {label}
        </Label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" id={id} className={buttonClassName}>
            {value ? value.toLocaleDateString() : "Escoger Fecha"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <CalendarUI
            mode="single"
            selected={value}
            captionLayout="dropdown"
            onSelect={handleSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
