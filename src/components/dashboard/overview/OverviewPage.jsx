import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Circle,
  Clock3,
  Globe2,
  MapPin,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsGrid } from "./StatsGrid";
import { GooglePresenceCard } from "./GooglePresenceCard";
import { RecentAppointments } from "./RecentAppointments";

const formatDate = () =>
  new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

const getGreeting = () => {
  const hour = Number(
    new Intl.DateTimeFormat("en", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: "Asia/Dhaka",
    }).format(new Date())
  );

  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

const formatAccessDate = (value) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeZone: "Asia/Dhaka",
  }).format(date);
};

function SetupChecklist({ user }) {
  const steps = [
    {
      label: "Create your doctor website",
      description: "Choose a template and add your practice details.",
      complete: user.websiteCreated === true,
      href: user.websiteCreated ? "/dashboard/my-website" : "/dashboard/website/create",
      action: user.websiteCreated ? "View website" : "Create website",
      icon: Globe2,
    },
    {
      label: "Add your practice locations",
      description: "Keep chamber details and visit information up to date.",
      complete: Boolean(user.clinicAddress?.length),
      href: "/dashboard/settings",
      action: user.clinicAddress?.length ? "Review details" : "Add locations",
      icon: MapPin,
    },
    {
      label: "Set up your Google Business Profile",
      description: "Follow the setup guide to help patients find your practice.",
      complete: user.googleBusinessSetup === true,
      href: "/dashboard/google-business",
      action: user.googleBusinessSetup ? "View guide" : "Set up profile",
      icon: Search,
    },
  ];
  const completedCount = steps.filter((step) => step.complete).length;

  return (
    <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Essential Next Steps
          </div>
          <h2 className="mt-1.5 text-lg font-extrabold tracking-tight text-white">
            Set up your digital practice
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Complete your onboarding checklist to maximize patient visibility.
          </p>
        </div>
        <span className="w-fit rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs font-semibold text-slate-300 font-mono">
          {completedCount} / {steps.length} Complete
        </span>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <article
              key={step.label}
              className="flex min-w-0 flex-col rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 transition-all hover:border-slate-700/80"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-indigo-400 border border-slate-700/60 shadow-sm">
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                {step.complete ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-400">
                    <Check className="size-3" aria-hidden="true" />
                    Done
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-400">
                    <Circle className="size-2.5" aria-hidden="true" />
                    To do
                  </span>
                )}
              </div>
              <h3 className="mt-3 text-sm font-bold text-white">{step.label}</h3>
              <p className="mt-1 min-h-10 text-xs leading-relaxed text-slate-400">
                {step.description}
              </p>
              <Link
                href={step.href}
                className="mt-3.5 inline-flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-800/90 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition-all hover:border-indigo-500/60 hover:bg-indigo-600 hover:text-white"
              >
                <span>{step.action}</span>
                <ArrowRight className="size-3.5 text-slate-300 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function QuickActions() {
  const actions = [
    {
      label: "Edit website",
      description: "Update your bio, services and chamber schedules",
      href: "/dashboard/website/edit",
      icon: Settings2,
    },
    {
      label: "Appointments",
      description: "Review incoming patient bookings and dates",
      href: "/dashboard/appointments/manage",
      icon: CalendarDays,
    },
    {
      label: "Plan & billing",
      description: "Manage subscription renewal and pro features",
      href: "/dashboard/billing",
      icon: Clock3,
    },
  ];

  return (
    <section aria-labelledby="quick-actions-heading">
      <div className="mb-3">
        <h2 id="quick-actions-heading" className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Quick Actions
        </h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {actions.map(({ label, description, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="group flex items-center gap-3.5 rounded-xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-sm transition hover:border-slate-700 hover:bg-slate-900/60"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">{label}</span>
              <span className="mt-0.5 block text-[11px] text-slate-400 truncate">{description}</span>
            </span>
            <ArrowRight
              className="size-3.5 shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export async function OverviewPage({ user }) {
  const firstName = user.name?.trim().split(/\s+/)[0] || "Doctor";
  const accessDate = formatAccessDate(user.expiresAt);

  return (
    <main className="dashboard-page max-w-7xl mx-auto space-y-6">
      <section className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 p-6 sm:p-8 border border-slate-800/80 shadow-lg">
        <div className="pointer-events-none absolute -right-16 -top-28 -z-10 size-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              {formatDate()}
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {getGreeting()}, Dr. {firstName}
            </h1>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
              Your practice workspace is active. Manage patient bookings, keep your medical profile updated, and expand your digital healthcare presence.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Button asChild className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20">
                <Link href={user.websiteCreated ? "/dashboard/my-website" : "/dashboard/website/create"}>
                  {user.websiteCreated ? "Open Website Hub" : "Create My Website"}
                  <ArrowRight className="ml-1.5 size-3.5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 text-xs font-semibold"
              >
                <Link href="/dashboard/appointments/manage">Manage Appointments</Link>
              </Button>
            </div>
          </div>

          <div className="w-full rounded-xl border border-slate-800/80 bg-slate-900/60 p-4.5 backdrop-blur xl:max-w-xs">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Account Tier
                </p>
                <p className="mt-1 text-lg font-extrabold text-white">
                  {user.userLevel === "pro" ? "Pro Plan" : user.expiresAt ? "Free Trial" : "Free Account"}
                </p>
              </div>
              <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Sparkles className="size-4" aria-hidden="true" />
              </span>
            </div>
            <p className="mt-2.5 text-xs text-slate-400">
              {accessDate
                ? `Active through ${accessDate}.`
                : "Manage subscription and explore Pro features anytime."}
            </p>
            <Link
              href="/dashboard/billing"
              className="mt-3.5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-bold text-slate-100 shadow-sm transition-all hover:border-indigo-500/50 hover:bg-slate-700 hover:text-white"
            >
              View Plan Details <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

        <StatsGrid user={user} />

        {!user.websiteCreated && (
          <section className="flex flex-col gap-4 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-950 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 shadow-sm">
            <div className="flex gap-3.5 items-center">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                <Globe2 className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-bold text-white text-base">Your doctor website is one step away</h2>
                <p className="mt-0.5 text-xs sm:text-sm text-slate-400">
                  Choose a design, add your details, and review your site before sharing it.
                </p>
              </div>
            </div>
            <Button asChild className="shrink-0 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20">
              <Link href="/dashboard/website/create">
                Start website setup <ArrowRight className="ml-1.5 size-3.5" aria-hidden="true" />
              </Link>
            </Button>
          </section>
        )}

        <SetupChecklist user={user} />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
          <GooglePresenceCard user={user} />
          <RecentAppointments />
        </div>

        <QuickActions />
    </main>
  );
}
