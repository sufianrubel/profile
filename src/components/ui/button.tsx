import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg" | "icon";

export function buttonVariants({
  variant = "default",
  size = "md",
  className
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  const variants: Record<ButtonVariant, string> = {
    default:
      "bg-primary text-primary-foreground shadow-lg shadow-blue-600/20 hover:bg-blue-500 focus-visible:ring-primary",
    secondary:
      "bg-accent/10 text-foreground ring-1 ring-accent/30 hover:bg-accent/20 focus-visible:ring-accent",
    ghost: "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
    outline:
      "border border-border bg-background/60 text-foreground hover:bg-muted focus-visible:ring-primary"
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "h-9 rounded-full px-4 text-sm",
    md: "h-11 rounded-full px-5 text-sm",
    lg: "h-12 rounded-full px-6 text-base",
    icon: "h-10 w-10 rounded-full p-0"
  };

  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button ref={ref} type={type} className={buttonVariants({ variant, size, className })} {...props} />
  )
);
Button.displayName = "Button";
