import Link from "next/link";
import { ArrowRight, Check, Clock3, Globe2, Sparkles } from "lucide-react";
import SubdomainInputForm from "./SubdomainInputForm";

const highlights = [
  "No coding needed",
  "Doctor-focused templates",
  "Your practice details, your way",
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-border/70 bg-[#f7faff]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_18%,rgba(37,99,235,0.13),transparent_38%),radial-gradient(ellipse_at_8%_85%,rgba(14,165,233,0.08),transparent_34%)]"
      />
      <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-soft border border-secondary/20 text-secondary text-xs font-bold tracking-wide uppercase mb-6" bis_skin_checked="1"><span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>15-Day Free Trial · No Card Required</div>
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-heading sm:text-5xl lg:text-[3.7rem]">
            Doctor Website Builder in Bangladesh
            <br/>
            <span class="font-serif font-normal italic text-secondary">Ready in 2 Minutes</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-muted sm:text-lg">
            Create a professional doctor website without hiring a developer.
            Choose a design, add your clinic details, and make it easier for
            patients to find your practice and appointment options.
          </p>
          <div className="mt-8 max-w-xl rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)]">
            <SubdomainInputForm />
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Check a Docxio web address, then create your account to build your
            site. A 15-day trial starts when you create your website.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 sm:text-sm"
              >
                <Check aria-hidden="true" className="size-4 text-emerald-600" />
                {highlight}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200 pt-6">
            <Link
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-blue-900"
              href="/templates"
            >
              Explore website designs
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <span className="text-xs text-slate-400">Six styles · Light and dark</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-200/70 via-cyan-100/40 to-indigo-200/70 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-[0_35px_90px_-38px_rgba(15,23,42,0.42)] sm:p-4">
            <div className="flex items-center justify-between rounded-t-2xl border-b border-slate-100 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-rose-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-[10px] text-slate-500 sm:text-xs">
                <Globe2 aria-hidden="true" className="size-3.5 text-blue-600" />
                dr-yourname.docxio.com
              </div>
              <span className="size-6" aria-hidden="true" />
            </div>
            <div className="overflow-hidden rounded-b-xl bg-[#f7f9fc]">
              <div className="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-blue-700 text-sm font-bold text-white">
                    D
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Doctor Name</p>
                    <p className="text-[10px] text-slate-500">Medical Specialty</p>
                  </div>
                </div>
                <span className="rounded-lg bg-blue-700 px-3 py-2 text-[10px] font-bold text-white sm:text-xs">
                  Appointment
                </span>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-[1.05fr_0.95fr] sm:p-7">
                <div className="flex flex-col justify-center">
                  <span className="w-fit rounded-full bg-blue-100 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-blue-800">
                    Your practice
                  </span>
                  <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                    Care that starts with a clear connection.
                  </h2>
                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    Introduce your practice, share useful clinic information,
                    and help visitors find the next step.
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold text-slate-600">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                      <Sparkles aria-hidden="true" className="size-3.5" />
                    </span>
                    A layout you can make your own
                  </div>
                </div>
                <div className="relative flex min-h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-100 p-4">
                  <div className="absolute -right-8 -top-8 size-32 rounded-full border-[18px] border-white/50" />
                  <div className="absolute -bottom-10 -left-6 size-36 rounded-full bg-blue-200/50 blur-sm" />
                  <div className="relative w-full rounded-xl border border-white/80 bg-white/90 p-4 shadow-lg backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                        Dr
                      </div>
                      <div className="min-w-0">
                        <div className="h-2.5 w-28 rounded-full bg-slate-800/90" />
                        <div className="mt-2 h-2 w-20 rounded-full bg-slate-300" />
                      </div>
                    </div>
                    <div className="mt-5 space-y-2">
                      <div className="h-2 w-full rounded-full bg-slate-200" />
                      <div className="h-2 w-5/6 rounded-full bg-slate-200" />
                      <div className="h-2 w-2/3 rounded-full bg-slate-200" />
                    </div>
                    <div className="mt-5 flex gap-2">
                      <span className="rounded-md bg-blue-700 px-3 py-1.5 text-[9px] font-bold text-white">
                        View services
                      </span>
                      <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[9px] font-bold text-slate-600">
                        Clinic details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 bg-white px-2 py-3 text-center">
                {["Profile", "Clinic hours", "Booking options"].map((item) => (
                  <span key={item} className="px-1 text-[9px] font-semibold text-slate-500 sm:text-[10px]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-7">
            <span className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <Clock3 aria-hidden="true" className="size-5" />
            </span>
            <span>
              <span className="block text-xs font-bold text-slate-900">About 2 minutes</span>
              <span className="block text-[10px] text-slate-500">to get your website started</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
