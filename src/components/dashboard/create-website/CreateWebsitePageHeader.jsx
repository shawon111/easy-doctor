import React from 'react';

import { LayoutTemplate } from "lucide-react";

const CreateWebsitePageHeader = () => {
    return (
        <header className="mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Template Selection
            </div>
            <div className="mt-1.5 flex items-center gap-3.5">
                <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                    <LayoutTemplate className="size-5" />
                </div>
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                        Create Your Professional Website
                    </h1>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-400">
                        Select a clinically verified design to establish your digital medical practice.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default CreateWebsitePageHeader;