"use client";

import { PLANS } from "@/lib/payment/plans";
import { useState } from "react";

const OPTIONS = [
  {
    key: "monthly",
    cadence: "One payment for 1 month",
    icon: "calendar_month",
  },
  {
    key: "sixMonth",
    cadence: "One payment for 6 months",
    icon: "date_range",
    saving: "Save ৳200",
  },
  {
    key: "yearly",
    cadence: "One payment for 12 months",
    icon: "event_available",
    saving: "Save ৳1,000",
    featured: true,
  },
];

export function ProPricingOptions({
  showHeader = true,
  isPro = false,
  hasExpiryDate = false,
}) {
  const isExtendingPlan = isPro && hasExpiryDate;
  const [pendingPlan, setPendingPlan] = useState(null);
  const [error, setError] = useState("");

  async function startCheckout(planKey) {
    setPendingPlan(planKey);
    setError("");

    try {
      const response = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planKey }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || result.error || "Unable to start checkout. Please try again.");
      }

      const paymentUrl = result.data?.payment_url;
      if (typeof paymentUrl !== "string" || !paymentUrl) {
        throw new Error("The payment provider did not return a checkout link. Please try again.");
      }

      window.location.assign(paymentUrl);
    } catch (checkoutError) {
      setError(checkoutError.message || "Unable to start checkout. Please try again.");
      setPendingPlan(null);
    }
  }

  return (
    <section
      className="space-y-5 lg:col-span-12"
      aria-labelledby={showHeader ? "pro-pricing-title" : undefined}
      aria-label={showHeader ? undefined : "Available Pro plans"}
    >
      {showHeader ? (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {isExtendingPlan ? "Keep your Pro benefits" : "Choose your billing duration"}
            </p>
            <h2 id="pro-pricing-title" className="mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {isExtendingPlan ? "Extend your Pro plan" : "One Pro plan. Three ways to pay."}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {isExtendingPlan
              ? "Choose a billing duration to add it to your current subscription."
              : "All options include the same Pro features."}
          </p>
        </div>
      ) : null}

      {error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {OPTIONS.map((option) => {
          const plan = PLANS[option.key];

          return (
            <article
              key={option.key}
              className={`relative overflow-hidden rounded-2xl border p-5 transition-shadow hover:shadow-md sm:p-6 ${
                option.featured
                  ? "border-primary/30 bg-gradient-to-br from-primary/[0.06] via-card to-card shadow-sm ring-1 ring-primary/10"
                  : "border-border bg-card shadow-[0px_4px_12px_rgba(0,0,0,0.03)]"
              }`}
            >
              {option.featured ? (
                <span className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  Best value
                </span>
              ) : null}

              <div className="flex items-center gap-3">
                <span className={`flex size-10 items-center justify-center rounded-xl ${
                  option.featured ? "bg-primary text-primary-foreground" : "bg-muted text-primary"
                }`}>
                  <span className="material-symbols-outlined text-[20px]">{option.icon}</span>
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">{option.cadence}</p>
                </div>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-foreground">
                  ৳{plan.amount.toLocaleString("en-US")}
                </span>
                {option.saving ? (
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    {option.saving}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                ৳{(plan.amount / plan.durationMonths).toFixed(2)} per month, billed for {plan.durationMonths}{" "}
                {plan.durationMonths === 1 ? "month" : "months"}
              </p>
              <button
                type="button"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                onClick={() => startCheckout(option.key)}
                disabled={pendingPlan !== null}
              >
                {pendingPlan === option.key
                  ? "Preparing checkout..."
                  : `${isExtendingPlan ? "Extend" : "Choose"} ${plan.name}`}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
