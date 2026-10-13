import { Globe2 } from "lucide-react";

export default function DomainHeader() {
    return (
        <header className="mb-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                DNS & Branding
            </div>
            <div className="mt-1 flex items-center gap-3.5">
                <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                    <Globe2 className="size-5" />
                </div>
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                        Custom Domain
                    </h1>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-400">
                        Connect and verify your clinical domain (e.g. drsmith.com) with automated SSL.
                    </p>
                </div>
            </div>
        </header>
    );
}