export function PageHeader() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        Google Presence
      </h1>
      <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
        Manage how your practice appears in Google search results. Edit page titles and
        descriptions to attract more patients.
      </p>
    </div>
  );
}
