"use client";

import { WebsitePageItem } from "./WebsitePageItem";

const PAGES = [
  { icon: "home",              label: "Home",              slug: "/index",       active: true,  status: "live"          },
  { icon: "info",              label: "About the Practice", slug: "/about"                                              },
  { icon: "medical_services",  label: "Services",           slug: "/services"                                           },
  { icon: "calendar_month",    label: "Book Appointment",   slug: "/appointment",             status: "needs-review"   },
];
export function WebsitePagesList({ activeIndex = 0, onSelect }) {
  return (
    <div className="lg:col-span-4 overflow-hidden rounded-2xl border border-border bg-card shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
      <div className="border-b border-border bg-muted/30 p-4">
        <h2 className="text-lg font-semibold text-foreground">Website Pages</h2>
      </div>
      <div className="flex flex-col divide-y divide-border/50">
        {PAGES.map((page, i) => (
          <WebsitePageItem
            key={page.slug}
            {...page}
            active={i === activeIndex}
            onClick={() => onSelect?.(i)}
          />
        ))}
      </div>
    </div>
  );
}
