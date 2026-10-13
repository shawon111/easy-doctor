import { requireUser } from "@/lib/requireUser";
import { cn } from "@/lib/utils";
import { PLANS } from "@/lib/payment/plans";
import { isWebsiteActive } from "@/lib/subscription";

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

function PlanFeature({ label }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="material-symbols-outlined text-[16px] text-emerald-400">check_circle</span>
      <span className="text-xs text-slate-300 font-medium">{label}</span>
    </div>
  );
}

const FREE_PLAN_FEATURES = [
  "Digital Profile",
  "Professional website",
  "Website editing",
  "Analytics",
  "Free templates",
  "Google optimization",
  "Whatsapp booking",
  "Appointment booking",
  "Free subdomain",
];

const PRO_PLAN_FEATURES = [
  "Digital Profile",
  "Professional website",
  "Website editing",
  "Analytics",
  "Free templates",
  "Google optimization",
  "Whatsapp booking",
  "Appointment booking",
  "Free subdomain",
  "Custom domain",
]

export async function CurrentPlanCard({ className }) {
  const user = await requireUser();
  const userLevel = user?.userLevel;
  const isPro = userLevel === "pro";
  const plan = isPro ? PLANS[user?.subscription] : null;
  const hasExpiryValue = user?.expiresAt !== null && user?.expiresAt !== undefined && user?.expiresAt !== "";
  const planFeatures = isPro ? PRO_PLAN_FEATURES : FREE_PLAN_FEATURES;
  const expiresAt = hasExpiryValue ? new Date(user.expiresAt) : null;
  const hasValidExpiry = Boolean(expiresAt && Number.isFinite(expiresAt.getTime()));
  const isExpired = hasValidExpiry && !isWebsiteActive(expiresAt);
  const hasInvalidExpiry = hasExpiryValue && !hasValidExpiry;
  const hasStartedFreeTrial = !isPro && Boolean(user?.websiteCreated || hasExpiryValue);
  const statusLabel = isExpired
    ? isPro
      ? "Pro plan expired"
      : "Free trial expired"
    : isPro
      ? "Active"
      : hasStartedFreeTrial
        ? hasInvalidExpiry || !hasValidExpiry
          ? "Trial expiry unavailable"
          : "Free trial active"
        : "Free plan";
  const statusClass = isExpired
    ? "border-rose-500/30 bg-rose-500/10 text-rose-400"
    : statusLabel === "Trial expiry unavailable"
      ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
      : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6",
        "shadow-sm",
        "group lg:col-span-4",
        className
      )}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/5 blur-2xl transition-transform duration-500 group-hover:scale-125" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Card header */}
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Your Plan</h3>
            <div className="mt-1">
              <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${statusClass}`}>
                {statusLabel}
              </span>
            </div>
          </div>
          <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
          </div>
        </div>

        <div className="mb-6">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {isPro ? `Pro: ${plan?.name ?? "Plan unavailable"}` : hasStartedFreeTrial ? "Free trial" : "Free plan"}
          </span>
          {isPro && plan ? (
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              ৳{plan.amount.toLocaleString("en-US")} for {plan.durationMonths}{" "}
              {plan.durationMonths === 1 ? "month" : "months"}.
            </p>
          ) : (
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              {isPro
                ? "The subscription term could not be identified. Contact support if you recently made a payment."
                : hasStartedFreeTrial
                  ? "Your free trial gives you full access to explore the website builder and publish your practice website."
                  : "Your free plan gives you access to the core doctor profile and website features."}
            </p>
          )}

          <div className="mt-4 space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/60 p-3.5 text-xs">
            <div className="flex items-start justify-between gap-4">
              <span className="text-slate-400">
                {isExpired ? "Expired on" : "Expires on"}
              </span>
              <span className="text-right font-semibold text-white">
                {hasValidExpiry ? (
                  <time dateTime={expiresAt.toISOString()}>{formatDate(expiresAt)}</time>
                ) : hasInvalidExpiry ? (
                  "Unable to determine"
                ) : isPro ? (
                  "No expiry date recorded"
                ) : (
                  hasStartedFreeTrial ? "No expiry date recorded" : "Not started"
                )}
              </span>
            </div>
            {!isPro && !hasStartedFreeTrial ? (
              <p className="border-t border-slate-800/80 pt-2 text-[11px] text-slate-400">
                Your trial starts when you create your website.
              </p>
            ) : null}
          </div>
        </div>

        {/* Feature list */}
        <div className="mt-auto space-y-2.5 border-t border-slate-800/80 pt-4">
          {planFeatures.map((f) => (
            <PlanFeature key={f} label={f} />
          ))}
        </div>
      </div>
    </div>
  );
}
