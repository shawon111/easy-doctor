export default function GoogleBusinessHeader() {
    return (
        <header className="mb-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Local Discovery & Search
            </div>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Google Business Profile
            </h1>
            <p className="mt-1.5 max-w-2xl text-xs sm:text-sm text-slate-400">
                Connect your Docxio website to your Google Business Profile so patients nearby can discover and book consultations directly.
            </p>
        </header>
    );
}