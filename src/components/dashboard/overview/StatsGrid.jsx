import { requireUser } from "@/lib/requireUser";
import { StatCard } from "./StatCard";

export async function StatsGrid() {
  const user = await requireUser();
  const { websiteCreated, userLevel } = user;
  console.log("website created", websiteCreated)
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:gap-6 lg:grid-cols-3">

      {
        websiteCreated ? <StatCard
          icon="public"
          label="Website Status"
          value="Online"
          accentColor="[#10B981]"
          badge={
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#10B981]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#10B981]" />
              Live
            </span>
          }
        /> : <StatCard
          icon="lock"
          label="Website Status"
          value="Offline"
          accentColor="[#10B981]"
          badge={
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff002b]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#ff002b]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff002b]" />
              Not Created Yet
            </span>
          }
        />
      }

      <StatCard
        icon="leaderboard"
        label="Account Type"
        value={userLevel === "free" ? "Trial" : "Premium"}
        accentColor="primary"
        badge={
          <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#10B981]">
            {userLevel}
          </span>
        }
      />

      <StatCard
        icon="event_available"
        label="Appointments"
        value="32"
        accentColor="destructive"
        badge={
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            This Month
          </span>
        }
      />
    </div>
  );
}
