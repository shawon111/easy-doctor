import Link from "next/link";

export default function FreeTrialSection() {
  return (
    <section className="border-b border-slate-border bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-secondary/15 bg-gradient-to-br from-secondary-soft via-white to-slate-50 px-6 py-10 shadow-subtle sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">
              <span className="material-symbols-outlined text-[16px]">celebration</span>
              Your practice, online
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-heading sm:text-4xl">
              Try Docxio free for 15 days.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-muted sm:text-lg">
              Build and explore your professional doctor website before you
              choose a Pro plan. No credit card required to get started.
            </p>
          </div>
          <div className="relative mt-7 flex shrink-0 flex-col items-start gap-3 sm:flex-row sm:items-center lg:mt-0 lg:flex-col lg:items-stretch">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-secondary-hover"
              href="/register"
            >
              Start Your Free Trial
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
              No card. No commitment.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
