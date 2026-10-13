"use client";

import { cn } from "@/lib/utils";

export function AppointmentStatCard({ label, value, icon, badge, badgeCaption, className }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm sm:p-6",
        "group flex flex-col justify-between",
        className
      )}
    >
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-indigo-500/5 blur-2xl transition-transform duration-500 group-hover:scale-125" />
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
          <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{value}</h3>
        </div>
        <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
          <span className="material-symbols-outlined text-[22px]">{icon}</span>
        </div>
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-2">
        {badge}
        {badgeCaption && (
          <span className="font-mono text-xs text-slate-400">{badgeCaption}</span>
        )}
      </div>
    </div>
  );
}
