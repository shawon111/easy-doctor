"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ACTIVITY_ITEMS = [
  { title: "Booking inquiry initiated", source: "Via Website Homepage", time: "10:42 AM" },
  { title: "Booking inquiry initiated", source: "Via Services Page", time: "Yesterday" },
  { title: "Booking inquiry initiated", source: "Via Google Profile Link", time: "Yesterday" },
  { title: "Booking inquiry initiated", source: "Via Contact Page", time: "Oct 24" },
];

function ActivityItem({ title, source, time }) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-xl border border-transparent p-3",
        "transition-colors hover:border-border hover:bg-muted/40"
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
        <span className="material-symbols-outlined">chat</span>
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">{title}</p>
        <p className="truncate text-sm text-muted-foreground">{source}</p>
      </div>

      <span className="mt-1 shrink-0 font-mono text-xs text-muted-foreground">{time}</span>
    </div>
  );
}

export function WhatsAppActivityCard({ items = ACTIVITY_ITEMS }) {
  return (
    <div className="flex h-[400px] flex-col rounded-2xl border border-border bg-card p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6">
      <div className="mb-4 flex items-center justify-between sm:mb-6">
        <h3 className="text-base font-semibold text-foreground">Recent WhatsApp Clicks</h3>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-primary">
          <span className="material-symbols-outlined">more_vert</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col gap-1 overflow-y-auto pr-1">
        {items.map((item, idx) => (
          <ActivityItem key={idx} {...item} />
        ))}
      </div>
      <Button
        variant="ghost"
        className="mt-4 w-full font-medium text-primary hover:bg-secondary hover:text-primary"
      >
        View All Activity
      </Button>
    </div>
  );
}
