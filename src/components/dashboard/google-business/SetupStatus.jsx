export default function SetupStatus({ isCompleted }) {
    if (isCompleted) {
        return (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
                <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-6 w-6 text-emerald-600"
                        >
                            <path
                                d="m5 12 4 4L19 6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-lg font-semibold text-emerald-900">
                                Google Business setup completed
                            </h2>

                            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                                Completed
                            </span>
                        </div>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-emerald-800">
                            You have confirmed that your Docxio website
                            has been added to your Google Business Profile.
                        </p>

                        <a
                            href="https://business.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
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
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                <div>
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />

                        <span className="text-sm font-medium text-amber-700">
                            Setup pending
                        </span>
                    </div>

                    <h2 className="mt-3 text-xl font-bold text-slate-900">
                        Connect your website with Google
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                        Add your Docxio website to your existing Google
                        Business Profile.
                    </p>
                </div>

                <a
                    href="https://business.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                    Open Google Business
                    <span>↗</span>
                </a>

            </div>
        </div>
    );
}