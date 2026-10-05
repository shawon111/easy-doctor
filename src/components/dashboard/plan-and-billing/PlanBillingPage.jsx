import { PageHeader } from "./PageHeader";
import { CurrentPlanCard } from "./CurrentPlanCard";
import { ComparePlansTable } from "./ComparePlansTable";
import { PaymentMethodCard } from "./PaymentMethodCard";
import { ProPricingOptions } from "./ProPricingOptions";

export function PlanBillingPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] space-y-6 p-4 pb-12 sm:space-y-8 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
      <PageHeader />
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12">
        <CurrentPlanCard />
        <ComparePlansTable />
        <ProPricingOptions />
        <PaymentMethodCard />
      </div>
    </div>
  );
}
