export function MyWebsiteHeader() {
    return (
        <header className="dashboard-heading mb-0">
            <p className="dashboard-eyebrow">Website overview</p>
            <h1 className="relative z-10 mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                My Website
            </h1>
            <p className="relative z-10 mt-2 max-w-2xl text-sm text-muted-foreground">
                Your published website, public URL, template, and doctor profile
                details.
            </p>
        </header>
    );
}
