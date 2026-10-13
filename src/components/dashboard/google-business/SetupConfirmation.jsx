export default function SetupConfirmation({
    websiteUrl,
    action,
}) {
    return (
        <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-8 shadow-sm">
            <div className="max-w-2xl">
                <h2 className="text-base sm:text-lg font-bold text-white">
                    Finished Adding Your Website to Google?
                </h2>

                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-400">
                    Once you have saved your clinical website URL in Google Business Profile, confirm here to mark this setup step as complete.
                </p>

                <form action={action} className="mt-5">
                    <button
                        type="submit"
                        disabled={!websiteUrl}
                        className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                    >
                        I&apos;ve Added My Website to Google
                    </button>
                </form>

                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                    This step tracks your onboarding setup. Google reviews profile changes independently.
                </p>
            </div>
        </section>
    );
}