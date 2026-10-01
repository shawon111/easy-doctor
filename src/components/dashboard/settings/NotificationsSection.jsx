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
              checked={Boolean(preferences[id])}
              disabled={preferenceMutation.isPending}
              onCheckedChange={(checked) => handlePreferenceChange(id, checked)}
              aria-label={title}
              className="mt-0.5 data-checked:bg-[#0066FF] data-unchecked:bg-[#C2C6D8]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
