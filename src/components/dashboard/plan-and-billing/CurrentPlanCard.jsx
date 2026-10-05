import { Button } from "@/components/ui/button";
import { requireUser } from "@/lib/requireUser";
import { cn } from "@/lib/utils";
import { PLANS } from "@/lib/payment/plans";

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
  // get user info
  const user = await requireUser();
  const { userLevel } = user;
  // select plan features
  let planFeatures = FREE_PLAN_FEATURES;
  if(userLevel === "pro"){
    planFeatures = PRO_PLAN_FEATURES
  }else{
    planFeatures = FREE_PLAN_FEATURES
  }
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
              <span className="inline-flex items-center rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#065F46]">
                Active
              </span>
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <span className="text-[32px] font-bold tracking-tight text-foreground">
            {userLevel === "free" ? "Free Trial" : "Pro"}
          </span>
          {userLevel === "free" ? (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Your 15-day trial gives you time to build and explore your website.
              No card is needed to get started.
            </p>
          ) : (
            <>
              <p className="mt-2 text-sm text-muted-foreground">
                Available Pro plans (starting at ৳{PLANS.monthly.amount.toLocaleString("en-US")} per month):
              </p>
              <div className="mt-4 space-y-2 rounded-xl bg-muted/40 p-3 text-sm">
                {Object.entries(PLANS).map(([key, plan]) => (
                  <div key={key} className="flex items-center justify-between gap-3">
                    <span className="text-muted-foreground">{plan.name}</span>
                    <span className="font-semibold text-foreground">
                      ৳{plan.amount.toLocaleString("en-US")}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
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
