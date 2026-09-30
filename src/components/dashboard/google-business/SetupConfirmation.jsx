export default function SetupConfirmation({
    websiteUrl,
    action,
}) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="max-w-2xl">
                <h2 className="text-lg font-bold text-slate-900">
                    Finished adding your website?
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                    Once you have saved your website URL in Google
                    Business Profile, confirm it here to mark this
                    step as completed.
                </p>

                <form action={action} className="mt-5">
                    <button
                        type="submit"
                        disabled={!websiteUrl}
                        className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                    >
                        I&apos;ve added my website
                    </button>
                </form>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                    This confirmation is based on your response.
                    Docxio does not verify the Google profile automatically.
                </p>
            </div>

        </section>
    );
}