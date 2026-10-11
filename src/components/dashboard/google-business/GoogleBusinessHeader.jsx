export default function GoogleBusinessHeader() {
    return (
        <header className="dashboard-heading">
            <p className="dashboard-eyebrow">Local discovery</p>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Google Business Profile
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                        Add your Docxio website to your Google Business
                        Profile so patients can easily find your website.
                    </p>
                </div>
            </div>
        </header>
    );
}