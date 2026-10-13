import Link from "next/link";

export default function WebsiteUrlCard({ websiteUrl }) {
    return (
        <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="size-5"
                    >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3 12h18" />
                        <path d="M12 3a15 15 0 0 1 0 18" />
                        <path d="M12 3a15 15 0 0 0 0 18" />
                    </svg>
                </div>

                <div className="min-w-0 flex-1">
                    <h2 className="text-base font-bold text-white">
                        Your Website URL
                    </h2>

                    <p className="mt-0.5 text-xs text-slate-400">
                        Copy and add this exact URL into your Google Business Profile &quot;Website&quot; field.
                    </p>

                    {websiteUrl ? (
                        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-slate-800/80 bg-slate-900/60 p-3.5 sm:flex-row sm:items-center sm:justify-between">
                            <Link
                                href={websiteUrl}
                                target="_blank"
                                className="break-all text-xs sm:text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                                {websiteUrl}
                            </Link>

                            <span className="shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold uppercase text-emerald-400">
                                Live URL
                            </span>
                        </div>
                    ) : (
                        <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-400">
                            Your Docxio website has not been published yet. Publish your website before completing this step.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}