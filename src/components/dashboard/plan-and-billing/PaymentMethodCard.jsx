import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PaymentMethodCard({ className }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6",
        "shadow-sm",
        "md:flex-row md:items-center md:justify-between",
        "lg:col-span-12",
        className
      )}
    >
      <div className="flex items-start gap-3.5 sm:items-center sm:gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
          <span className="material-symbols-outlined text-[22px]">
            credit_card
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-white">Payment Method & Gateways</p>
          <p className="text-xs text-slate-400">Supports bKash, Nagad, Rocket, credit & debit cards via encrypted SSLCommerz gateway.</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 text-[10px] font-bold uppercase text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Gateway Connected
        </span>
      </div>
    </div>
  );
}
