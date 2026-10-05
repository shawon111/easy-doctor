import { PLANS } from "@/lib/payment/plans";

const OPTIONS = [
  {
    key: "monthly",
    cadence: "Billed monthly",
    icon: "calendar_month",
  },
  {
    key: "sixMonth",
    cadence: "One payment every 6 months",
    icon: "date_range",
    saving: "Save ৳200",
  },
  {
    key: "yearly",
    cadence: "One payment per year",
    icon: "event_available",
    saving: "Save ৳1,000",
    featured: true,
  },
];

export function ProPricingOptions() {
  return (
    <section className="space-y-5 lg:col-span-12" aria-labelledby="pro-pricing-title">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Choose your billing duration
          </p>
          <h2 id="pro-pricing-title" className="mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            One Pro plan. Three ways to pay.
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          All options include the same Pro features.
        </p>
      </div>

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
            </article>
          );
        })}
      </div>
    </section>
  );
}
