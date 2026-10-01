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
                className="min-w-0 max-w-[45vw] shrink cursor-pointer justify-start font-normal sm:max-w-sm"
                onClick={copyWebsiteUrl}
                aria-label={`Copy website URL: ${websiteUrl}`}
                title="Copy website URL"
            >
                <span className="truncate">{websiteUrl}</span>
                <Copy aria-hidden="true" />
            </Button>
            <Button asChild>
                <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Visit website</span>
                    <ExternalLink aria-hidden="true" />
                </a>
            </Button>
        </div>
    );
}
