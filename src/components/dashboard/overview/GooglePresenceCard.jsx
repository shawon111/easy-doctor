import Link from "next/link";

export function GooglePresenceCard({ user }) {
  return (
    <div className="xl:col-span-2 flex flex-col justify-between rounded-2xl border border-border bg-card p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6">
      <div>
        <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary">
              <span className="material-symbols-outlined">search</span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">Search appearance</h3>
              <p className="text-sm text-muted-foreground">
                Review the titles and descriptions patients may see in search.
              </p>
            </div>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
            {user.websiteCreated ? "SEO settings available" : "Website needed first"}
          </span>
        </div>

        <div className="mb-5 rounded-xl border border-border bg-muted/40 p-4 sm:mb-6 sm:p-5">
          <p className="text-sm font-semibold text-foreground">What you can manage</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Update page titles and descriptions to accurately represent your services and practice.
            Search engines decide how and when pages appear in results.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-3 rounded-xl border border-sky-200/50 bg-sky-50/60 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">tips_and_updates</span>
          <p className="text-sm font-medium text-foreground">Keep your search details accurate.</p>
        </div>
        <Link
          href={user.websiteCreated ? "/dashboard/google-presence" : "/dashboard/website/create"}
          className="inline-flex min-h-10 w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
        >
          {user.websiteCreated ? "Review SEO settings" : "Create your website"}
        </Link>
      </div>
    </div>
  );
}
