import { PageHeader } from "./PageHeader";
import { CurrentPlanCard } from "./CurrentPlanCard";
import { ComparePlansTable } from "./ComparePlansTable";
import { PaymentMethodCard } from "./PaymentMethodCard";
import { ProPricingOptions } from "./ProPricingOptions";
import { requireUser } from "@/lib/requireUser";

export async function PlanBillingPage() {
  const user = await requireUser();
  const isPro = user?.userLevel === "pro";
  const hasExpiryDate =
    user?.expiresAt !== null &&
    user?.expiresAt !== undefined &&
    user?.expiresAt !== "" &&
    Number.isFinite(new Date(user.expiresAt).getTime());

  return (
    <div className="mx-auto w-full max-w-[1440px] space-y-6 p-4 pb-12 sm:space-y-8 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
      <PageHeader isPro={isPro} hasExpiryDate={hasExpiryDate} />
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12">
        <CurrentPlanCard />
        <ComparePlansTable />
        <ProPricingOptions isPro={isPro} hasExpiryDate={hasExpiryDate} />
        <PaymentMethodCard />
      </div>
    </div>
  );
}
