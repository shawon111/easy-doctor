"use client";

import { Button } from "@/components/ui/button";

export function PageHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Plan &amp; Billing
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Manage your subscription, view billing history, and upgrade your portal capabilities.
        </p>
      </div>

      <Button className="flex w-full items-center gap-2 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 sm:w-fit">
        <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
        Upgrade Plan
      </Button>
    </div>
  );
}
