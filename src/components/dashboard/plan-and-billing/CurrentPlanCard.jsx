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
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-[18px] text-[#10B981]">check_circle</span>
      <span className="text-sm text-foreground">{label}</span>
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
    ? "border-red-200 bg-red-50 text-red-700"
    : statusLabel === "Trial expiry unavailable"
      ? "border-amber-200 bg-amber-50 text-amber-800"
      : "border-[#10B981]/20 bg-[#10B981]/10 text-[#065F46]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-6",
        "shadow-[0px_4px_12px_rgba(0,0,0,0.03)]",
        "group lg:col-span-4",
        className
      )}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-200/40 blur-2xl transition-transform duration-500 group-hover:scale-110" />

      <div className="relative z-10 flex flex-col">
        {/* Card header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Your Plan</h3>
            <div className="mt-1">
              <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${statusClass}`}>
                {statusLabel}
              </span>
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
          </div>
        </div>

        <div className="mb-6">
          <span className="text-[32px] font-bold tracking-tight text-foreground">
            {isPro ? `Pro: ${plan?.name ?? "Plan unavailable"}` : hasStartedFreeTrial ? "Free trial" : "Free plan"}
          </span>
          {isPro && plan ? (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              ৳{plan.amount.toLocaleString("en-US")} for {plan.durationMonths}{" "}
              {plan.durationMonths === 1 ? "month" : "months"}.
            </p>
          ) : (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {isPro
                ? "The subscription term could not be identified. Contact support if you recently made a payment."
                : hasStartedFreeTrial
                  ? "Your free 15-day trial lets you explore the website builder and publish your practice website."
                  : "Your free plan gives you access to the core doctor profile and website features."}
            </p>
          )}

          <div className="mt-4 space-y-3 rounded-xl bg-muted/40 p-4 text-sm">
            <div className="flex items-start justify-between gap-4">
              <span className="text-muted-foreground">
                {isExpired ? "Expired on" : "Expires on"}
              </span>
              <span className="text-right font-semibold text-foreground">
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
              <p className="border-t border-border pt-3 text-xs text-muted-foreground">
                Your 15-day trial starts when you create your website.
              </p>
            ) : null}
          </div>
        </div>

        {/* Feature list */}
        <div className="mt-auto space-y-3 border-t border-border pt-5">
          {planFeatures.map((f) => (
            <PlanFeature key={f} label={f} />
          ))}
        </div>
      </div>
    </div>
  );
}
