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
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
            <Sparkles className="size-4" aria-hidden="true" />
            A few useful next steps
          </div>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
            Set up your online practice
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Pick up where you left off. You can come back to these steps any time.
          </p>
        </div>
        <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
          {completedCount} of {steps.length} complete
        </span>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <article
              key={step.label}
              className="flex min-w-0 flex-col rounded-xl border border-slate-200 bg-slate-50/70 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                {step.complete ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    <Check className="size-3.5" aria-hidden="true" />
                    Done
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                    <Circle className="size-3" aria-hidden="true" />
                    To do
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-semibold text-slate-950">{step.label}</h3>
              <p className="mt-1 min-h-10 text-sm leading-5 text-slate-600">
                {step.description}
              </p>
              <Button
                asChild
                variant="ghost"
                className="mt-3 w-fit justify-start px-0 text-blue-700 hover:bg-transparent hover:text-blue-800"
              >
                <Link href={step.href}>
                  {step.action}
                  <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                </Link>
              </Button>
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
      description: "Update your profile and practice details",
      href: "/dashboard/website/edit",
      icon: Settings2,
    },
    {
      label: "Appointments",
      description: "Review bookings and manage your schedule",
      href: "/dashboard/appointments/manage",
      icon: CalendarDays,
    },
    {
      label: "Plan & billing",
      description: "Check your plan and renewal options",
      href: "/dashboard/billing",
      icon: Clock3,
    },
  ];

  return (
    <section aria-labelledby="quick-actions-heading">
      <div className="mb-3">
        <h2 id="quick-actions-heading" className="text-lg font-bold tracking-tight text-slate-950">
          Quick actions
        </h2>
        <p className="mt-1 text-sm text-slate-600">Jump straight to a task.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {actions.map(({ label, description, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-slate-950">{label}</span>
              <span className="mt-0.5 block text-sm text-slate-600">{description}</span>
            </span>
            <ArrowRight
              className="size-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-700"
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
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-[1440px] space-y-6 p-4 pb-12 sm:space-y-8 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-5 py-6 text-white shadow-lg sm:px-8 sm:py-8 lg:px-10">
          <div className="pointer-events-none absolute -right-16 -top-28 -z-10 size-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 size-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="flex flex-col gap-7 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-sm font-medium text-blue-200">
                <span className="size-2 rounded-full bg-emerald-400" />
                {formatDate()}
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {getGreeting()}, {firstName}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Your practice hub is ready. Check appointments, keep your website current, and
                take the next step toward helping patients find you.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-white text-slate-950 hover:bg-blue-50">
                  <Link href={user.websiteCreated ? "/dashboard/my-website" : "/dashboard/website/create"}>
                    {user.websiteCreated ? "View my website" : "Create my website"}
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/dashboard/appointments/manage">Manage appointments</Link>
                </Button>
              </div>
            </div>
            <div className="w-full rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur sm:p-5 xl:max-w-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                    Account plan
                  </p>
                  <p className="mt-1 text-xl font-bold">
                    {user.userLevel === "pro" ? "Pro" : user.expiresAt ? "Free trial" : "Free account"}
                  </p>
                </div>
                <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-blue-100">
                  <Sparkles className="size-5" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-3 text-sm leading-5 text-slate-300">
                {accessDate
                  ? `Current access through ${accessDate}.`
                  : "See your current plan and available options at any time."}
              </p>
              <Link
                href="/dashboard/billing"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-blue-200"
              >
                View plan details <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <StatsGrid user={user} />

        {!user.websiteCreated && (
          <section className="flex flex-col gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                <Globe2 className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-bold text-slate-950">Your doctor website is one step away</h2>
                <p className="mt-1 text-sm leading-5 text-slate-700">
                  Choose a design, add your details, and review your site before sharing it.
                </p>
              </div>
            </div>
            <Button asChild className="shrink-0">
              <Link href="/dashboard/website/create">
                Start website setup <ArrowRight className="ml-2 size-4" aria-hidden="true" />
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
      </div>
    </main>
  );
}
