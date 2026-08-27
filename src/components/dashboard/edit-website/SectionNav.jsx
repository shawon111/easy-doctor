"use client";

import { cn } from "@/lib/utils";

const SECTION_ITEMS = [
  "Basic Information",
  "About",
  "Services",
  "Chambers",
  "Contact",
  "Social Links",
];

const SectionNav = ({ active, onChange }) => {
  return (
    <div className="shrink-0 border-b border-border bg-card p-4">
      <h2 className="mb-4 text-lg font-semibold text-foreground">Edit Sections</h2>
      <div className="flex gap-2 overflow-x-auto pb-2 snap-x">
        {SECTION_ITEMS.map((item) => {
          const isActive = active === item;
          return (
            <button
              key={item}
              type="button"
              onClick={() => onChange(item)}
              className={cn(
                "shrink-0 snap-start rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors",
                isActive
                  ? "bg-secondary-container font-bold text-primary"
                  : "border border-border text-muted-foreground hover:bg-muted"
              )}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SectionNav;