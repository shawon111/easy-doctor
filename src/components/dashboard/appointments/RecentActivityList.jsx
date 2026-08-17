"use client";

import { Button } from "@/components/ui/button";
import { ActivityItem } from "./ActivityItem";

const DEFAULT_ACTIVITIES = [
  { icon: "forum", title: "WhatsApp booking click", time: "Today, 10:42 AM" },
  { icon: "forum", title: "WhatsApp booking click", time: "Yesterday, 03:15 PM" },
  { icon: "call",  title: "Direct Call click",      time: "Oct 24, 09:30 AM" },
  { icon: "forum", title: "WhatsApp booking click", time: "Oct 22, 11:05 AM" },
];

export function RecentActivityList({ activities = DEFAULT_ACTIVITIES, onViewAll }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between border-b border-muted px-4 py-4 sm:px-6 sm:py-5">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <Button
          variant="link"
          className="h-auto p-0 text-sm font-medium text-primary"
          onClick={onViewAll}
        >
          View All
        </Button>
      </div>
      <div className="divide-y divide-muted">
        {activities.map((item, idx) => (
          <ActivityItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
