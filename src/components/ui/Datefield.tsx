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

interface DatePickerProps {
  label?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  id?: string;
  className?: string;
  buttonClassName?: string;
}

export const DateField: React.FC<DatePickerProps> = ({
  label = "Select date",
  value,
  onChange,
  id = "date",
  className = "",
  buttonClassName = "w-48 justify-between font-normal",
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (date: Date | undefined) => {
    if (onChange) onChange(date);
    setOpen(false);
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <Label htmlFor={id} className="px-1">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" id={id} className={buttonClassName}>
            {value ? value.toLocaleDateString() : "Select date"}
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
