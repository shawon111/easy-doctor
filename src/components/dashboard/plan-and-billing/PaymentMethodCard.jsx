"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PaymentMethodCard({ className }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6",
        "shadow-[0px_4px_12px_rgba(0,0,0,0.03)]",
        "md:flex-row md:items-center md:justify-between",
        "lg:col-span-12",
        className
      )}
    >
      <div className="flex items-start gap-3 sm:items-center sm:gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
          <span className="material-symbols-outlined text-[24px] text-muted-foreground">
            credit_card
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">Payment Method</p>
          <p className="text-sm text-muted-foreground">Visa ending in 4242 • Expires 12/25</p>
        </div>
      </div>

      <Button variant="link" className="h-auto w-fit p-0 text-sm font-medium text-primary">
        Update Method
      </Button>
    </div>
  );
}
