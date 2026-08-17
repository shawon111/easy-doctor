"use client";

import { Switch } from "@/components/ui/switch";

const NOTIFICATIONS = [
  {
    id: "email-notifications",
    title: "Email Notifications",
    description: "Receive daily summaries and critical alerts via email.",
  },
  {
    id: "appointment-reminders",
    title: "Appointment Reminders",
    description: "Get notified 15 minutes before an upcoming consultation.",
  },
];

export function NotificationsSection() {
  return (
    <section
      id="notifications"
      className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6"
    >
      <h2 className="mb-3 text-lg font-semibold text-[#0F172A] sm:mb-4">Notifications</h2>
      <div className="divide-y divide-[#E2E8F0]">
        {NOTIFICATIONS.map(({ id, title, description }) => (
          <div key={id} className="flex items-start justify-between gap-4 py-4">
            <div>
              <label htmlFor={id} className="text-sm font-medium text-[#0F172A]">
                {title}
              </label>
              <p className="mt-1 text-sm text-[#64748B]">{description}</p>
            </div>
            <Switch
              id={id}
              defaultChecked
              aria-label={title}
              className="mt-0.5 data-checked:bg-[#0066FF] data-unchecked:bg-[#C2C6D8]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
