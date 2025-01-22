import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary rounded-[12px] text-[1rem] font-semibold  text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        bannerFirstBtn:" px-[15px] py-[9px] bg-transparent text-[#16191c] rounded-2xl border border-[#16191c]",
        ghostBtn:" px-[15px] py-[9px] bg-transparent text-white rounded-2xl border border-white",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        affiliate: "bg-[#1ebfbf] border-2 border-[#16191c] text-[#16191c]  text-[1rem] font-semibold leading-[1] tracking-[0] mb-0 flex items-center justify-center text-center rounded-[12px] cursor-pointer transition-transform duration-300 ease-in-out shadow-none hover:translate-x-[-2.5px] hover:translate-y-[-2.5px] hover:shadow-[4px_4px_0_#16191c] hover:bg-[#1ebfbf] hover:border-[#16191c] hover:text-[#16191c]"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
