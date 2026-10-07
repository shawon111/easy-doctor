import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

export default function InfoPageLayout({
  badge,
  title,
  intro,
  overviewItems = [],
  videoGuide = false,
  children,
}) {
  return (
    <div className="min-h-screen bg-white text-slate-body antialiased">
      <Header />

      <main className="bg-slate-50">
        <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="grid items-end gap-10 lg:grid-cols-[1.55fr_0.9fr]">
              <div>
                <span className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                  {badge}
                </span>
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-heading sm:text-5xl lg:text-6xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-muted sm:text-lg">
                  {intro}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">At a glance</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  {overviewItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {videoGuide && (
          <section className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
            <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Video guide</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Walkthrough coming soon</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
                  <span className="material-symbols-outlined text-[18px] text-secondary">play_circle</span>
                  Video guide placeholder
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-4xl px-6 pb-20 pt-6 lg:px-8 lg:pb-24">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
            <div className="space-y-8 text-slate-700">{children}</div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
