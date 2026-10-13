import { cn } from "@/lib/utils";
import { requireUser } from "@/lib/requireUser";

function CheckIcon({ supported, highlight }) {
  if (supported) {
    return (
      <span
        className={cn(
          "material-symbols-outlined text-[18px]",
          highlight ? "text-primary" : "text-[#10B981]"
        )}
        style={highlight ? { fontVariationSettings: "'FILL' 1" } : undefined}
      >
        {highlight ? "check_circle" : "check"}
      </span>
    );
  }
  return (
    <span className="material-symbols-outlined text-[18px] text-muted-foreground">remove</span>
  );
}

const FEATURES = [
  { label: "Digital Profile", free: true, pro: true },
  { label: "Professional Website", free: true, pro: true },
  { label: "Website editing", free: true, pro: true },
  { label: "Analytics", free: true, pro: true },
  { label: "Free templates", free: true, pro: true },
  { label: "Google optimization", free: true, pro: true },
  { label: "WhatsApp Booking", free: true, pro: true },
  { label: "Appointment Booking", free: true, pro: true },
  { label: "Free Subdomain", free: true, pro: true },
  { label: "Custom Domain", free: false, pro: true },
];

export async function ComparePlansTable({ className }) {
  const user = await requireUser();
  const { userLevel } = user;
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80",
        "shadow-sm",
        "lg:col-span-8",
        className
      )}
    >
      {/* Card header */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 p-4 sm:p-5">
        <h3 className="text-base font-bold text-white">Compare Plans</h3>
        <p className="mt-0.5 text-xs text-slate-400">
          Find the ideal tier for your expanding digital practice.
        </p>
      </div>

      {/* Scrollable table */}
      <div className="flex-1 overflow-x-auto p-4 sm:p-5">
        <table className="min-w-[580px] w-full border-collapse text-left text-xs">
          <thead>
            <tr>
              {/* Features column */}
              <th className="w-[44%] border-b border-slate-800/80 px-4 pb-3 pt-2 font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                Features
              </th>

              <th className="relative w-[28%] border-b border-slate-800/80 px-4 pb-3 pt-2 text-center font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                {
                  userLevel === "free" && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-slate-800 border border-slate-700/60 px-2 py-0.5 text-[9px] font-bold uppercase text-slate-300">
                    Current
                  </span>
                }
                Free Trial · 15 days
              </th>

              <th className="relative w-[28%] border-b-2 border-indigo-500 bg-indigo-950/20 px-4 pb-3 pt-2 text-center font-bold uppercase tracking-wider text-indigo-400 text-[10px]">
                {
                  userLevel === "pro" && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-2 py-0.5 text-[9px] font-bold uppercase text-white shadow-sm">
                    Current
                  </span>
                }
                Pro
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Feature rows */}
            {FEATURES.map((row) => (
              <tr key={row.label} className="group transition-colors hover:bg-slate-900/40">
                <td className="border-b border-slate-800/60 px-4 py-3 font-medium text-slate-300">
                  {row.label}
                </td>
                <td className="border-b border-slate-800/60 px-4 py-3 text-center">
                  <CheckIcon supported={row.free} />
                </td>
                <td className="border-b border-slate-800/60 bg-indigo-950/10 px-4 py-3 text-center group-hover:bg-indigo-950/20">
                  <CheckIcon supported={row.pro} highlight />
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}
