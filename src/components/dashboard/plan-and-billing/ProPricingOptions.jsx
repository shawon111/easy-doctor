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
              className={`relative overflow-hidden rounded-2xl border p-5 transition hover:border-slate-700/80 sm:p-6 ${
                option.featured
                  ? "border-indigo-500/40 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-slate-900 shadow-md ring-1 ring-indigo-500/20"
                  : "border-slate-800/80 bg-slate-950/80 shadow-sm"
              }`}
            >
              {option.featured ? (
                <span className="absolute right-4 top-4 rounded-full bg-indigo-600 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                  Recommended
                </span>
              ) : null}

              <div className="flex items-center gap-3">
                <span className={`flex size-10 items-center justify-center rounded-xl border ${
                  option.featured
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-sm shadow-indigo-600/30"
                    : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                }`}>
                  <span className="material-symbols-outlined text-[20px]">{option.icon}</span>
                </span>
                <div>
                  <h3 className="font-bold text-white text-sm">{plan.name}</h3>
                  <p className="text-[11px] text-slate-400">{option.cadence}</p>
                </div>
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  ৳{plan.amount.toLocaleString("en-US")}
                </span>
                {option.saving ? (
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-400">
                    {option.saving}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-xs text-slate-400">
                ৳{(plan.amount / plan.durationMonths).toFixed(2)} / month, billed for {plan.durationMonths}{" "}
                {plan.durationMonths === 1 ? "month" : "months"}
              </p>
              <button
                type="button"
                className={`mt-5 inline-flex min-h-10 w-full items-center justify-center rounded-xl px-4 py-2.5 text-xs font-bold transition-all disabled:cursor-not-allowed disabled:opacity-60 shadow-md ${
                  option.featured
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20"
                    : "border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
                }`}
                onClick={() => startCheckout(option.key)}
                disabled={pendingPlan !== null}
              >
                {pendingPlan === option.key
                  ? "Preparing checkout..."
                  : `${isExtendingPlan ? "Extend" : "Choose"} ${plan.name} →`}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
