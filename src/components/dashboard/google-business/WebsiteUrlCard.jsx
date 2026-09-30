import Link from "next/link";

export default function WebsiteUrlCard({ websiteUrl }) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                    >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3 12h18" />
                        <path d="M12 3a15 15 0 0 1 0 18" />
                        <path d="M12 3a15 15 0 0 0 0 18" />
                    </svg>
                </div>

                <div className="min-w-0 flex-1">

                    <h2 className="font-semibold text-slate-900">
                        Your website URL
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        This is the URL you need to add to your Google
                        Business Profile.
                    </p>

                    {websiteUrl ? (
                        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">

                            <Link
                                href={websiteUrl}
                                target="_blank"
                                className="break-all text-sm font-medium text-blue-600 hover:text-blue-700"
                            >
                                {websiteUrl}
                            </Link>

                            <span className="shrink-0 text-xs font-medium text-slate-400">
                                Your website
                            </span>

                        </div>
                    ) : (
                        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                            Your Docxio website has not been published yet.
                            Publish your website before completing this step.
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}