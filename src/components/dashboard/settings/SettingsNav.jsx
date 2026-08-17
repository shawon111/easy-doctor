"use client";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#account",       label: "Account",      danger: false },
  { href: "#security",      label: "Security",     danger: false },
  { href: "#notifications", label: "Notifications",danger: false },
  { href: "#danger",        label: "Danger Zone",  danger: true  },
];

export function SettingsNav({ activeSection = "account", onSectionChange }) {
  return (
    <div className="hidden lg:block lg:col-span-3">
      <nav className="sticky top-24 space-y-1">
        {NAV_ITEMS.map(({ href, label, danger }) => {
          const id = href.replace("#", "");
          const isActive = activeSection === id;
          return (
            <a
              key={href}
              href={href}
              onClick={() => onSectionChange?.(id)}
              className={cn(
                "block rounded-r px-4 py-2 text-sm transition-colors",
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
