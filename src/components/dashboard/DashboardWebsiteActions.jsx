"use client";

import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";
import toast from "react-hot-toast";

export function DashboardWebsiteActions({ websiteUrl }) {
    if (!websiteUrl) {
        return null;
    }

    const copyWebsiteUrl = async () => {
        try {
            await navigator.clipboard.writeText(websiteUrl);
            toast.success("Website URL copied");
        } catch {
            toast.error("Could not copy the website URL");
        }
    };

    return (
        <div className="flex min-w-0 items-center justify-end gap-2 px-2 sm:px-4">
            <Button
                type="button"
                variant="outline"
                className="h-9 min-w-0 max-w-[45vw] shrink cursor-pointer justify-start rounded-xl border-slate-800 bg-slate-950/80 px-3 text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 shadow-sm sm:max-w-xs font-mono"
                onClick={copyWebsiteUrl}
                aria-label={`Copy website URL: ${websiteUrl}`}
                title="Copy website URL"
            >
                <span className="truncate">{websiteUrl}</span>
                <Copy className="size-3.5 ml-1.5 text-slate-500" aria-hidden="true" />
            </Button>
            <Button asChild className="h-9 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-3.5 text-xs font-bold text-white shadow-md shadow-indigo-600/20 transition-all">
                <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                >
                    <span>Visit Site</span>
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
            </Button>
        </div>
    );
}
