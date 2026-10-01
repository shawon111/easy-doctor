export function MyWebsiteHeader() {
    return (
        <header className="mb-6">
            <p className="text-sm font-medium text-primary">Website overview</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                My Website
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Your published website, public URL, template, and doctor profile
                details.
            </p>
        </header>
    );
}
