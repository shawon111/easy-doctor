import Link from "next/link";

export function GooglePresenceCard({ user }) {
  return (
    <div className="xl:col-span-2 flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm sm:p-6">
      <div>
        <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Search Appearance</h3>
              <p className="text-xs text-slate-400">
                Review titles, bio, and descriptions patients see across Google Search.
              </p>
            </div>
          </div>
          <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
            user.websiteCreated
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
              : "bg-slate-800 text-slate-400 border border-slate-700/60"
          }`}>
            <span className={`size-1.5 rounded-full ${user.websiteCreated ? "bg-emerald-400" : "bg-slate-500"}`} />
            {user.websiteCreated ? "SEO Engine Active" : "Website Required"}
          </span>
        </div>

        <div className="mb-5 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:mb-6 sm:p-4.5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Managed Search Parameters</p>
          <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-slate-400">
            Keep your practice page titles, chamber locations, and clinical specializations synchronized so search engines deliver verified information to prospective patients.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-3 rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[18px] text-indigo-400">tips_and_updates</span>
          <p className="text-xs font-medium text-slate-300">Keep your practice metadata fresh for maximum local ranking.</p>
        </div>
        <Link
          href={user.websiteCreated ? "/dashboard/google-presence" : "/dashboard/website/create"}
          className="inline-flex min-h-9 w-full items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-xs font-bold text-white shadow-md shadow-indigo-600/20 transition sm:w-auto"
        >
          {user.websiteCreated ? "Review SEO Settings" : "Create Your Website"}
        </Link>
      </div>
    </div>
  );
}
