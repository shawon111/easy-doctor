import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const slugify = (value) =>
    value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const BrowserPreviewCard = ({ subdomain }) => {
    const slug = slugify(subdomain) || "your-practice";

    return (
        <Card className="rounded-2xl border border-slate-800/80 bg-slate-950/80 overflow-hidden p-0 shadow-sm">
            <CardContent className="flex flex-col items-center p-5 sm:p-6">
                <h3 className="mb-3.5 w-full text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                    Browser Preview
                </h3>

                {/* Browser mockup */}
                <div className="w-full rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-sm">
                    <div className="flex items-center gap-2.5 border-b border-slate-800 bg-slate-900 px-3 py-2.5">
                        <div className="flex shrink-0 gap-1.5">
                            <div className="size-2.5 rounded-full bg-rose-500/80" />
                            <div className="size-2.5 rounded-full bg-amber-500/80" />
                            <div className="size-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="flex flex-1 items-center gap-2 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 px-3 py-1 shadow-inner">
                            <span className="material-symbols-outlined shrink-0 text-[13px] text-emerald-400">
                                lock
                            </span>
                            <span className="w-full truncate text-left font-mono text-xs text-white">
                                {slug}
                                <span className="text-slate-400">.{process.env.NEXT_PUBLIC_BASE_DOMAIN}</span>
                            </span>
                        </div>
                    </div>

                    {/* Mock page content area */}
                    <div className="flex h-28 w-full flex-col items-center justify-center gap-2 bg-slate-950/40 p-4">
                        <div className="mb-1 size-10 rounded-full border border-slate-800 bg-slate-800/70" />
                        <div className="h-2 w-28 rounded-full bg-slate-800/80" />
                        <div className="h-1.5 w-16 rounded-full bg-slate-800/60" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default BrowserPreviewCard;