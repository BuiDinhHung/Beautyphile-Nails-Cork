import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,#f48fa4_0%,#f7b7c6_48%,#bfeaf1_100%)] px-5 text-white shadow-[0_16px_40px_rgba(244,143,164,0.28)] hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(191,234,241,0.36)]",
        secondary:
          "border border-gold-200 bg-white/70 px-5 text-ink-800 backdrop-blur-xl hover:-translate-y-0.5 hover:border-rose-300 hover:bg-white/90",
        ghost:
          "px-3 text-ink-700 hover:bg-blush-50/80 hover:text-rose-400",
        icon:
          "size-11 border border-gold-200 bg-white/80 text-ink-800 backdrop-blur-xl hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-400",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-7 text-base",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
