"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProPricingOptions } from "./ProPricingOptions";

export function PageHeader({ isPro, hasExpiryDate }) {
  const [isUpgradeDialogOpen, setIsUpgradeDialogOpen] = useState(false);
  const isExtendingPlan = isPro && hasExpiryDate;

  return (
    <header className="dashboard-heading flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="relative z-10">
        <p className="dashboard-eyebrow">Subscription</p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Plan &amp; Billing
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Manage your subscription, view billing history, and upgrade your portal capabilities.
        </p>
      </div>

      <Button
        type="button"
        onClick={() => setIsUpgradeDialogOpen(true)}
        className="relative z-10 flex w-full items-center gap-2 rounded-xl bg-slate-950 text-white shadow-lg shadow-slate-950/10 hover:bg-blue-950 sm:w-fit"
      >
        <span className="material-symbols-outlined text-[20px]">
          {isExtendingPlan ? "autorenew" : "rocket_launch"}
        </span>
        {isExtendingPlan ? "Extend My Pro Plan" : "Upgrade Plan"}
      </Button>

      <Dialog open={isUpgradeDialogOpen} onOpenChange={setIsUpgradeDialogOpen}>
        <DialogContent className="w-[calc(100vw-2rem)] max-h-[90vh] max-w-5xl gap-6 overflow-y-auto p-5 sm:w-[calc(100vw-4rem)] sm:max-w-5xl sm:p-8">
          <DialogHeader className="pr-8">
            <DialogTitle className="text-xl font-semibold text-foreground sm:text-2xl">
              {isExtendingPlan ? "Extend your Pro plan" : "Choose your Pro plan"}
            </DialogTitle>
            <DialogDescription>
              {isExtendingPlan
                ? "Keep your Pro benefits going. Choose how long you’d like to extend your subscription."
                : "Compare the billing durations and select the option that works for you."}
            </DialogDescription>
          </DialogHeader>
          <ProPricingOptions
            showHeader={false}
            isPro={isPro}
            hasExpiryDate={hasExpiryDate}
          />
        </DialogContent>
      </Dialog>
    </header>
  );
}
