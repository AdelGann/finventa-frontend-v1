import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#333344] text-white shadow-xs hover:bg-[#2a2a3a]",
        destructive:
          "bg-[#EF4444] text-white shadow-xs hover:bg-[#DC2626] focus-visible:ring-[#DC2626]/20 dark:focus-visible:ring-[#DC2626]/40",
        outline:
          "border border-[#333344] bg-transparent text-[#333344] shadow-xs hover:bg-[#F3F4F6]",
        secondary:
          "bg-[#F3F4F6] text-[#333344] shadow-xs hover:bg-[#E5E7EB]",
        ghost:
          "text-[#333344] hover:bg-[#F3F4F6]",
        link: "text-[#333344] underline-offset-4 hover:underline",
        header: "shadow-xs bg-input/0 text-black dark:text-white dark:bg-input/5 dark:hover:bg-input/30 hover:bg-input/30", // intacto
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
