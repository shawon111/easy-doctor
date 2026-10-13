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
    <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-sm lg:col-span-4">
      <div className="border-b border-slate-800/80 bg-slate-900/60 px-4 py-3.5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">Website Pages</h2>
      </div>
      <div className="flex flex-col divide-y divide-slate-800/60">
        {PAGES.map((page) => {
          const { key: pageKey, ...pageProps } = page;
          return (
            <WebsitePageItem
              key={page.slug}
              {...pageProps}
              active={pageKey === activeKey}
              onClick={() => onSelect?.(pageKey)}
            />
          );
        })}
      </div>
    </div>
  );
}
