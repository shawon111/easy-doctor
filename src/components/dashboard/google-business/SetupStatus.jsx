export default function SetupStatus({ isCompleted }) {
    if (isCompleted) {
        return (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 shadow-sm sm:p-6">
                <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="size-5"
                        >
                            <path
                                d="m5 12 4 4L19 6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                            <h2 className="text-base font-bold text-white">
                                Google Business setup completed
                            </h2>

                            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold uppercase text-emerald-400">
                                Synced
                            </span>
                        </div>

                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300">
                            Your Docxio website is registered to your official Google Business Profile. Local patients can click straight through to your consultation portal.
                        </p>

                        <a
                            href="https://business.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                            Open Google Business Profile
                            <span>↗</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                            Setup Pending
                        </span>
                    </div>

                    <h2 className="mt-2 text-lg font-extrabold text-white">
                        Connect your website with Google
                    </h2>

                    <p className="mt-1 max-w-xl text-xs sm:text-sm text-slate-400">
                        Add your Docxio website link to your Google Business Profile to boost local clinic ranking and patient trust.
                    </p>
                </div>

                <a
                    href="https://business.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-600/20 transition-all"
                >
                    Open Google Business
                    <span>↗</span>
                </a>
            </div>
        </div>
    );
}