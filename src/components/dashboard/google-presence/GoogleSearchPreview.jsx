"use client";

export function GoogleSearchPreview({
  url = process.env.NEXT_PUBLIC_BASE_DOMAIN || "your-doctor-site.com",
  title = "Doctor Name | Medical Specialty",
  description = "A clear, patient-friendly summary of the information on this page.",
}) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">Google Search Preview</h2>
        <span className="material-symbols-outlined text-slate-500 text-[20px]" title="Desktop view">
          desktop_windows
        </span>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 shadow-inner">
        <div className="flex max-w-[620px] flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-0.5 text-xs text-slate-300 font-mono">
              <span className="material-symbols-outlined text-[13px] text-emerald-400">public</span>
              https://{url}
            </span>
          </div>
          <h3 className="cursor-pointer text-base sm:text-lg font-bold leading-snug text-indigo-400 hover:text-indigo-300 hover:underline transition-colors sm:truncate">
            {title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
