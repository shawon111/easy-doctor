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
        <Card className="overflow-hidden p-0">
            <CardContent className="flex flex-col items-center p-6">
                <h3 className="mb-4 w-full text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Browser Preview
                </h3>

                {/* Fake browser mockup */}
                <div className="w-full rounded-t-lg border border-border/60 bg-muted p-2 shadow-sm">
                    <div className="flex items-center gap-2">
                        <div className="flex shrink-0 gap-1.5 px-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                            <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                            <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="flex flex-1 items-center gap-2 overflow-hidden rounded border border-border/60 bg-card px-3 py-1 shadow-sm">
                            <span className="material-symbols-outlined shrink-0 text-[14px] text-muted-foreground">
                                lock
                            </span>
                            <span className="w-full truncate text-left font-mono text-xs text-foreground">
                                {slug}
                                <span className="text-muted-foreground">.{process.env.NEXT_PUBLIC_BASE_DOMAIN}</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Mock page content area */}
                <div className="flex h-24 w-full flex-col items-center justify-center gap-2 rounded-b-lg border-t-0 border border-border/60 bg-card p-4 opacity-60">
                    <div className="mb-1 h-12 w-12 rounded-full bg-muted" />
                    <div className="h-2 w-24 rounded bg-muted" />
                    <div className="h-1.5 w-16 rounded bg-muted" />
                </div>
            </CardContent>
        </Card>
    );
};

export default BrowserPreviewCard;