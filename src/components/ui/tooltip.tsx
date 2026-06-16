import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TooltipProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

export function Tooltip({ label, children, className }: TooltipProps) {
  return (
    <span className={cn("group relative inline-flex", className)}>
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-10 left-1/2 z-30 -translate-x-1/2 rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground opacity-0 shadow-premium transition group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {label}
      </span>
    </span>
  );
}
