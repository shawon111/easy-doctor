import Link from "next/link";
import { ArrowLeft, CircleCheck, CircleX } from "lucide-react";

const resultContent = {
  success: {
    Icon: CircleCheck,
    iconClassName: "bg-emerald-100 text-emerald-700",
    title: "Payment successful",
    description:
      "Thank you for your payment. Your plan details will be available in your billing dashboard.",
    primaryLabel: "Go to dashboard",
    primaryHref: "/dashboard",
    secondaryLabel: "View billing",
    secondaryHref: "/dashboard/billing",
  },
  cancel: {
    Icon: CircleX,
    iconClassName: "bg-amber-100 text-amber-700",
    title: "Payment canceled",
    description:
      "Your checkout was canceled and your plan has not been changed. You can return to billing whenever you're ready.",
    primaryLabel: "Return to billing",
    primaryHref: "/dashboard/billing",
    secondaryLabel: "Back to dashboard",
    secondaryHref: "/dashboard",
  },
  failed: {
    Icon: CircleX,
    iconClassName: "bg-red-100 text-red-700",
    title: "Payment failed",
    description:
      "We couldn't verify your payment. You have not been charged through this confirmation. Please check your billing page or try again.",
    primaryLabel: "Return to billing",
    primaryHref: "/dashboard/billing",
    secondaryLabel: "Back to dashboard",
    secondaryHref: "/dashboard",
  },
};

export default function PaymentResultPage({ status }) {
  const result = resultContent[status];
  const { Icon } = result;

  return (
    <main className="flex min-h-svh items-center justify-center bg-slate-50 px-4 py-12">
      <section
        className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10"
        aria-labelledby="payment-result-title"
      >
        <div
          className={`mx-auto flex size-16 items-center justify-center rounded-full ${result.iconClassName}`}
        >
          <Icon aria-hidden="true" size={32} strokeWidth={2} />
        </div>
        <h1
          id="payment-result-title"
          className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {result.title}
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          {result.description}
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            href={result.primaryHref}
          >
            {result.primaryLabel}
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            href={result.secondaryHref}
          >
            <ArrowLeft aria-hidden="true" size={16} />
            {result.secondaryLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
