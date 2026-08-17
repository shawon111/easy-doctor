"use client";

import { WebsiteBanner } from "./WebsiteBanner";
import { GreetingHeader } from "./GreetingHeader";
import { StatsGrid } from "./StatsGrid";
import { GooglePresenceCard } from "./GooglePresenceCard";
import { WhatsAppActivityCard } from "./WhatsAppActivityCard";

export function OverviewPage() {
  return (
    <div className="flex flex-1 flex-col min-h-screen">
      <WebsiteBanner />
      <div className="mx-auto w-full max-w-[1440px] flex-1 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
        <GreetingHeader name="Dr. Ahmed" />
        <StatsGrid />
        <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
          <GooglePresenceCard />
          <WhatsAppActivityCard />
        </div>
      </div>
    </div>
  );
}
