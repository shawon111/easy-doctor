"use client";

export function SettingsHeader() {
  return (
    <header className="mb-6">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
        Practice Preferences
      </div>
      <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Settings</h1>
      <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
        Manage your profile details, notification preferences, credentials, and practice security.
      </p>
    </header>
  );
}
