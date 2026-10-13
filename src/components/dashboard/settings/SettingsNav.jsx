"use client";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#account",       label: "Account",      danger: false },
  { href: "#profile-details", label: "Professional & Practice", danger: false },
  { href: "#security",      label: "Security",     danger: false },
  { href: "#notifications", label: "Notifications",danger: false },
  { href: "#danger",        label: "Danger Zone",  danger: true  },
];

export function SettingsNav({ activeSection = "account", onSectionChange }) {
  return (
    <div className="min-w-0 lg:col-span-3">
      <nav className="sticky top-20 z-10 flex gap-1 overflow-x-auto rounded-xl bg-slate-950/80 border border-slate-800/80 p-1 lg:block lg:space-y-1 lg:overflow-visible lg:bg-transparent lg:border-0 lg:p-0">
        {NAV_ITEMS.map(({ href, label, danger }) => {
          const id = href.replace("#", "");
          const isActive = activeSection === id;
          return (
            <a
              key={href}
              href={href}
              onClick={() => onSectionChange?.(id)}
              className={cn(
                "block shrink-0 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all",
                danger
                  ? "text-rose-400 hover:bg-rose-500/10"
                  : isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
              )}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
