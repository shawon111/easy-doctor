import React from "react";

import { Globe } from "lucide-react";

const SubdomainPageHeader = () => {
    return (
        <header className="mb-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Practice URL Setup
            </div>
            <div className="mt-1.5 flex items-center gap-3.5">
                <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                    <Globe className="size-5" />
                </div>
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                        Choose Your Website Address
                    </h1>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-400">
                        Patients will use this link to access your clinical services and schedule consultations.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default SubdomainPageHeader;