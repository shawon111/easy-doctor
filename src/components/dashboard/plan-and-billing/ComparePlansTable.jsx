"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  { label: "Digital Profile",         free: true,  pro: true,  ultra: true  },
  { label: "Custom Domain",           free: false, pro: true,  ultra: true  },
  { label: "SEO Optimization",        free: false, pro: true,  ultra: true  },
  { label: "WhatsApp Booking",        free: false, pro: true,  ultra: true  },
  { label: "Automated SMS Reminders", free: false, pro: false, ultra: true  },
];

export function ComparePlansTable({ className }) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-border bg-card",
        "shadow-[0px_4px_12px_rgba(0,0,0,0.03)]",
        "lg:col-span-8",
        className
      )}
    >
      {/* Card header */}
      <div className="border-b border-border bg-muted/30 p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-foreground">Compare Plans</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Find the perfect tier for your growing practice.
        </p>
      </div>

      {/* Scrollable table */}
      <div className="flex-1 overflow-x-auto p-4 sm:p-6">
        <table className="min-w-[620px] w-full border-collapse text-left text-sm">
          <thead>
            <tr>
              {/* Features column */}
              <th className="w-[40%] border-b border-border px-4 pb-4 pt-2 font-semibold text-foreground">
                Features
              </th>

              <th className="w-[20%] border-b border-border px-4 pb-4 pt-2 text-center font-semibold text-muted-foreground">
                Free
              </th>

              <th className="relative w-[20%] border-b-2 border-primary px-4 pb-4 pt-2 text-center font-semibold text-primary">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-primary-foreground">
                  Current
                </span>
                Pro
              </th>

              <th className="w-[20%] border-b border-border px-4 pb-4 pt-2 text-center font-semibold text-orange-700">
                Ultra
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Feature rows */}
            {FEATURES.map((row) => (
              <tr key={row.label} className="group transition-colors hover:bg-muted/40">
                <td className="border-b border-border/50 px-4 py-3 font-medium text-foreground">
                  {row.label}
                </td>
                <td className="border-b border-border/50 px-4 py-3 text-center">
                  <CheckIcon supported={row.free} />
                </td>
                <td className="border-b border-border/50 bg-blue-50/50 px-4 py-3 text-center group-hover:bg-blue-50">
                  <CheckIcon supported={row.pro} highlight />
                </td>
                <td className="border-b border-border/50 px-4 py-3 text-center">
                  <CheckIcon supported={row.ultra} />
                </td>
              </tr>
            ))}

            <tr className="group transition-colors hover:bg-muted/40">
              <td className="px-4 py-4" />

              <td className="px-4 py-4 text-center">
                <div className="text-sm font-semibold text-foreground">Free</div>
              </td>

              <td className="bg-blue-50/50 px-4 py-4 text-center group-hover:bg-blue-50">
                <div className="text-sm font-bold text-primary">৳4,500/yr</div>
              </td>

              <td className="px-4 py-4 text-center">
                <div className="mb-2 text-sm font-bold text-orange-700">৳9,000/yr</div>
                <Button
                  size="sm"
                  className="w-full bg-orange-100 text-orange-700 hover:bg-orange-200"
                >
                  Upgrade
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
