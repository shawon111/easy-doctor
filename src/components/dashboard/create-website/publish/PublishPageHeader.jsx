import React from "react";

import { Rocket } from "lucide-react";

const PublishPageHeader = () => {
    return (
        <header className="mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Final Verification
            </div>
            <div className="mt-1.5 flex items-center gap-3.5">
                <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                    <Rocket className="size-5" />
                </div>
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                        Review &amp; Publish Website
                    </h1>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-400">
                        Confirm your configuration before generating public access for patients.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default PublishPageHeader;