"use client";

import { WebsitePageItem } from "./WebsitePageItem";

const PAGES = [
  { key: "site", icon: "language", label: "Site SEO", slug: "All pages", status: "live" },
  { key: "home", icon: "home", label: "Home", slug: "/index", status: "live" },
  { key: "about", icon: "info", label: "About", slug: "/about" },
  { key: "services", icon: "medical_services", label: "Services", slug: "/services" },
  { key: "appointment", icon: "calendar_month", label: "Book Appointment", slug: "/appointment", status: "needs-review" },
];
export function WebsitePagesList({ activeKey = "site", onSelect }) {
  return (
    <div className="lg:col-span-4 overflow-hidden rounded-2xl border border-border bg-card shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
      <div className="border-b border-border bg-muted/30 p-4">
        <h2 className="text-lg font-semibold text-foreground">Website Pages</h2>
      </div>
      <div className="flex flex-col divide-y divide-border/50">
        {PAGES.map((page) => (
          <WebsitePageItem
            key={page.slug}
            {...page}
            active={page.key === activeKey}
            onClick={() => onSelect?.(page.key)}
          />
        ))}
      </div>
    </div>
  );
}
