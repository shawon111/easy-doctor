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
      <nav className="sticky top-2 z-10 flex gap-1 overflow-x-auto rounded-xl bg-[#F4F7FA] p-1 lg:top-24 lg:block lg:space-y-1 lg:overflow-visible lg:bg-transparent lg:p-0">
        {NAV_ITEMS.map(({ href, label, danger }) => {
          const id = href.replace("#", "");
          const isActive = activeSection === id;
          return (
            <a
              key={href}
              href={href}
              onClick={() => onSectionChange?.(id)}
              className={cn(
                "block shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors lg:rounded-r lg:rounded-l-none lg:px-4",
                danger
                  ? "text-[#BA1A1A] hover:bg-[#FFDAD6]"
                  : isActive
                  ? "border-l-2 border-[#0066FF] bg-[#E5F0FF] font-medium text-[#0066FF]"
                  : "text-[#555F6C] hover:bg-[#E0E3E6] hover:text-[#0F172A]"
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
