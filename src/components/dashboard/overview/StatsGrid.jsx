import { StatCard } from "./StatCard";
import { AppointmentStatsCard } from "./AppointmentStatsCard";

export function StatsGrid({ user }) {
  const { websiteCreated, userLevel } = user;
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:gap-6 lg:grid-cols-3">

      {
        websiteCreated ? <StatCard
          icon="public"
          label="Website Status"
          value="Website created"
          accentColor="[#10B981]"
          badge={
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#10B981]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#10B981]" />
              Created
            </span>
          }
        /> : <StatCard
          icon="lock"
          label="Website Status"
          value="Not set up"
          accentColor="[#10B981]"
          badge={
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff002b]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#ff002b]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff002b]" />
              Next step
            </span>
          }
        />
      }

      <StatCard
        icon="leaderboard"
        label="Account Type"
        value={userLevel === "free" ? "Free" : "Pro"}
        accentColor="primary"
        badge={
          <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#10B981]">
            Account
          </span>
        }
      />

      <AppointmentStatsCard />
    </div>
  );
}
