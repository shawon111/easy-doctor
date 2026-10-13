"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Switch } from "@/components/ui/switch";
import { saveNotificationPreference } from "./settings-api";

const NOTIFICATIONS = [
  {
    id: "emailNotifications",
    title: "Email Notifications",
    description: "Choose your preference for account and service notices sent by email.",
  },
  {
    id: "appointmentReminders",
    title: "Appointment Reminders",
    description: "Choose your preference for appointment reminder notifications.",
  },
];

export function NotificationsSection({ preferences }) {
  const queryClient = useQueryClient();
  const preferenceMutation = useMutation({
    mutationFn: saveNotificationPreference,
    onMutate: async (preference) => {
      await queryClient.cancelQueries({ queryKey: ["account-settings"] });
      const previousSettings = queryClient.getQueryData(["account-settings"]);
      queryClient.setQueryData(["account-settings"], (current) => ({
        ...current,
        notificationPreferences: {
          ...current.notificationPreferences,
          ...preference,
        },
      }));
      return { previousSettings };
    },
    onSuccess: (updatedSettings) => {
      queryClient.setQueryData(["account-settings"], updatedSettings);
    },
    onError: (error, _preference, context) => {
      if (context?.previousSettings) {
        queryClient.setQueryData(["account-settings"], context.previousSettings);
      }
      toast.error(error.message || "Unable to save notification preference.");
    },
  });

  function handlePreferenceChange(id, checked) {
    preferenceMutation.mutate({ [id]: checked });
  }

  return (
    <section
      id="notifications"
      className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-sm"
    >
      <h2 className="mb-3.5 text-base sm:text-lg font-bold text-white">Notifications &amp; Alerts</h2>
      <div className="divide-y divide-slate-800/80">
        {NOTIFICATIONS.map(({ id, title, description }) => (
          <div key={id} className="flex items-start justify-between gap-4 py-4">
            <div>
              <label htmlFor={id} className="text-xs sm:text-sm font-bold text-white cursor-pointer">
                {title}
              </label>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">{description}</p>
            </div>
            <Switch
              id={id}
              checked={Boolean(preferences[id])}
              disabled={preferenceMutation.isPending}
              onCheckedChange={(checked) => handlePreferenceChange(id, checked)}
              aria-label={title}
              className="mt-0.5 data-checked:bg-indigo-600 data-unchecked:bg-slate-800"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
