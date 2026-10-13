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
    <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          Subscription & Licensing
        </div>
        <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Plan &amp; Billing
        </h2>
        <p className="mt-1.5 max-w-2xl text-xs sm:text-sm text-slate-400">
          Manage your practice membership, renew clinical access, and upgrade portal capabilities.
        </p>
      </div>

      <Button
        type="button"
        onClick={() => setIsUpgradeDialogOpen(true)}
        className="flex w-full items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20 sm:w-fit"
      >
        <span className="material-symbols-outlined text-[18px]">
          {isExtendingPlan ? "autorenew" : "rocket_launch"}
        </span>
        {isExtendingPlan ? "Extend My Pro Plan" : "Upgrade to Pro"}
      </Button>

      <Dialog open={isUpgradeDialogOpen} onOpenChange={setIsUpgradeDialogOpen}>
        <DialogContent className="w-[calc(100vw-2rem)] max-h-[90vh] max-w-5xl gap-6 overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950 p-5 text-slate-100 shadow-2xl sm:w-[calc(100vw-4rem)] sm:max-w-5xl sm:p-8">
          <DialogHeader className="pr-8">
            <DialogTitle className="text-xl font-extrabold text-white sm:text-2xl">
              {isExtendingPlan ? "Extend your Pro plan" : "Choose your Pro plan"}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-slate-400">
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
