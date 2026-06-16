"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

type ToastVariant = "success" | "error" | "default";

type Toast = {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
};

type ToastContextValue = {
  toast: (toast: Omit<Toast, "id">) => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback((newToast: Omit<Toast, "id">) => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current, { id, ...newToast }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 4200);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed right-4 top-20 z-[80] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3 sm:right-6">
        <AnimatePresence initial={false}>
          {toasts.map((item) => {
            const Icon = item.variant === "error" ? XCircle : CheckCircle2;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                className={cn(
                  "rounded-2xl border bg-card/95 p-4 shadow-premium backdrop-blur-xl",
                  item.variant === "error" ? "border-destructive/30" : "border-accent/25"
                )}
                role="status"
                aria-live="polite"
              >
                <div className="flex gap-3">
                  <Icon className={cn("mt-0.5 h-5 w-5", item.variant === "error" ? "text-destructive" : "text-accent")} />
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    {item.description ? <p className="mt-1 text-sm text-muted-foreground">{item.description}</p> : null}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
}
