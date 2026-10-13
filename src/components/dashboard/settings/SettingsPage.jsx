"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AccountSection } from "./AccountSection";
import { DangerZoneSection } from "./DangerZoneSection";
import { NotificationsSection } from "./NotificationsSection";
import { ProfileDetailsSection } from "./ProfileDetailsSection";
import { SecuritySection } from "./SecuritySection";
import { SettingsHeader } from "./SettingsHeader";
import { SettingsNav } from "./SettingsNav";
import { fetchSettings } from "./settings-api";

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState("account");
  const {
    data: settings,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["account-settings"],
    queryFn: fetchSettings,
  });

  return (
    <main className="dashboard-page mx-auto min-h-full w-full max-w-360 p-4 pb-12 text-slate-200 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
      <SettingsHeader />
      {isLoading ? (
        <p className="mt-6 text-sm text-slate-400" role="status">
          Loading account settings...
        </p>
      ) : null}
      {isError ? (
        <div role="alert" className="mt-6 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-400">
          {error.message}
        </div>
      ) : null}
      {settings ? (
      <div className="mt-6 grid grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-12 lg:gap-8">
        <SettingsNav activeSection={activeSection} onSectionChange={setActiveSection} />
        <div className="space-y-6 lg:col-span-9 lg:space-y-8">
          <AccountSection
            user={settings}
          />
          <ProfileDetailsSection
            user={settings}
          />
          <SecuritySection />
          <NotificationsSection
            preferences={settings.notificationPreferences}
          />
          <DangerZoneSection email={settings.email} />
        </div>
      </div>
      ) : null}
    </main>
  );
}
