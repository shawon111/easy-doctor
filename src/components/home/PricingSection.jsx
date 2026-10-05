import Link from "next/link";
import { PLANS } from "@/lib/payment/plans";

const PRICING_OPTIONS = [
  {
    key: "monthly",
    description: "A flexible way to get your practice online.",
    cadence: "/ month",
  },
  {
    key: "sixMonth",
    description: "Six months of uninterrupted access for your practice.",
    cadence: "/ 6 months",
    savings: "Save ৳200 vs. monthly",
  },
  {
    key: "yearly",
    description: "Best value for building a lasting online presence.",
    cadence: "/ year",
    savings: "Save ৳1,000 vs. monthly",
    featured: true,
  },
];

const FEATURE_GROUPS = [
  {
    icon: "language",
    title: "Your professional website",
    features: [
      "A dedicated, mobile-friendly doctor website",
      "6 physician-designed templates in light and dark styles",
      "Doctor profile with photo, qualifications, and BMDC details",
      "Chamber locations, visiting hours, and directions",
      "Free Docxio subdomain or connect your own custom domain",
      "HTTPS security for your published website",
    ],
  },
  {
    icon: "event_available",
    title: "Patient connection & appointments",
    features: [
      "Online appointment requests from your website",
      "WhatsApp and phone contact options for patients",
      "Appointment list, recent activity, and monthly totals",
      "Multiple chambers and appointment schedules",
    ],
  },
  {
    icon: "travel_explore",
    title: "Visibility & control",
    features: [
      "Edit your website content from a self-service dashboard",
      "Page titles, descriptions, social previews, and SEO controls",
      "Structured medical profile data for search engines",
      "Google Business setup guidance and Google presence tools",
      "Account, profile, security, and notification settings",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="border-b border-slate-border bg-surface-subtle py-24 lg:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-secondary/20 bg-secondary-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
            Transparent Physician Billing
          </span>
          <h2 className="mb-4 mt-4 text-3xl font-extrabold tracking-tight text-slate-heading sm:text-4xl lg:text-5xl">
            Simple Pricing, Built for Doctors.
          </h2>
          <p className="text-base leading-relaxed text-slate-muted sm:text-lg">
            Start with a 15-day free trial, then choose the Pro plan duration
            that works for your practice. No card is needed to start.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {PRICING_OPTIONS.map((option) => {
            const plan = PLANS[option.key];

            return (
              <article
                key={option.key}
                className={`relative flex flex-col justify-between rounded-2xl bg-white p-8 transition-all hover:shadow-elevated lg:p-10 ${
                  option.featured
                    ? "border-2 border-secondary shadow-window ring-4 ring-secondary/10"
                    : "border border-slate-border shadow-subtle"
                }`}
              >
                {option.featured ? (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-secondary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
                    Best Value
                  </span>
                ) : null}

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-secondary">
                    {plan.name} Pro
                  </span>
                  <div className="mb-4 mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
                      ৳{plan.amount.toLocaleString("en-US")}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      {option.cadence}
                    </span>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600">
                    {option.description}
                  </p>
                  <p className="mb-8 rounded-xl bg-surface-subtle px-4 py-3 text-sm font-medium text-slate-700">
                    Includes every Docxio Pro feature listed below.
                  </p>
                </div>

                <div>
                  <Link
                    className={`block w-full rounded-xl px-4 py-3.5 text-center text-sm font-bold transition-colors ${
                      option.featured
                        ? "bg-secondary text-white shadow-md hover:bg-secondary-hover"
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    }`}
                    href="/register"
                  >
                    Start Free Trial
                  </Link>
                  {option.savings ? (
                    <p className="mt-2 text-center text-xs font-medium text-emerald-700">
                      {option.savings}
                    </p>
                  ) : (
                    <p className="mt-2 text-center text-xs text-slate-500">
                      Billed monthly
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
              Everything your practice needs
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-heading sm:text-3xl">
              All the Docxio tools for your practice, in one place.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-muted sm:text-base">
              Every Pro billing duration includes the complete set of features
              to create your website, connect with patients, and manage your
              online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {FEATURE_GROUPS.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-slate-border bg-white p-6 shadow-subtle sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-secondary-soft text-secondary">
                    <span className="material-symbols-outlined text-[21px]">{group.icon}</span>
                  </span>
                  <h4 className="text-base font-bold text-slate-heading">{group.title}</h4>
                </div>
                <ul className="mt-5 space-y-3.5">
                  {group.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                      <span className="material-symbols-outlined mt-0.5 shrink-0 text-[18px] text-emerald-600">
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
