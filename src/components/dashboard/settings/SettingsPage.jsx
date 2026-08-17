"use client";

import { useState } from "react";
import { AccountSection } from "./AccountSection";
import { DangerZoneSection } from "./DangerZoneSection";
import { NotificationsSection } from "./NotificationsSection";
import { SecuritySection } from "./SecuritySection";
import { SettingsHeader } from "./SettingsHeader";
import { SettingsNav } from "./SettingsNav";

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState("account");

  return (
    <main className="mx-auto min-h-full w-full max-w-[1180px] bg-[#F4F7FA] p-4 pb-12 text-[#0F172A] sm:p-6 sm:pb-16 md:p-8 md:pb-20">
      <SettingsHeader />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-12 lg:gap-8">
        <SettingsNav activeSection={activeSection} onSectionChange={setActiveSection} />
        <div className="space-y-6 lg:col-span-9 lg:space-y-8">
          <AccountSection />
          <SecuritySection />
          <NotificationsSection />
          <DangerZoneSection />
        </div>
      </div>
    </main>
  );
}
