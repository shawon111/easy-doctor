"use client";

import { cn } from "@/lib/utils";

export function StatCard({ icon, label, value, badge, className }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm transition-all hover:border-slate-700/80",
        className
      )}
    >
      <div className="relative z-10 mb-3 flex items-start justify-between">
        <div className="size-9 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-[20px]">{icon}</span>
        </div>
        {badge}
      </div>

      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
      <p className="text-2xl font-extrabold tracking-tight text-white">{value}</p>
    </div>
  );
}
