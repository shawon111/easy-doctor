export function MyWebsiteHeader() {
    return (
        <header className="mb-0">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Digital Practice
            </div>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                My Website
            </h1>
            <p className="mt-1.5 max-w-2xl text-xs sm:text-sm text-slate-400">
                Manage your published website, live URL, design template, and public doctor profile.
            </p>
        </header>
    );
}
