import React from "react";

/**
 * Shown on all doctor website pages while AI content generation is still
 * in progress (website.status === "generating").
 *
 * This component is rendered server-side and the page is intentionally NOT
 * cached, so the next visitor always gets a fresh status check from the DB.
 * Once generation completes and the cache is revalidated, the real content
 * is served instead.
 */
const WebsiteGeneratingScreen = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center">
            {/* Animated spinner */}
            <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-primary opacity-20" />
                <span className="material-symbols-outlined text-[48px] text-primary animate-pulse">
                    auto_awesome
                </span>
            </div>

            <div className="max-w-sm space-y-2">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">
                    Building your website…
                </h1>
                <p className="text-sm text-muted-foreground">
                    Our AI is crafting personalised content for your site. This
                    usually takes less than a minute. Refresh this page in a
                    moment to see your live website.
                </p>
            </div>

            <button
                onClick={() => window.location.reload()}
                className="mt-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
            >
                Refresh page
            </button>
        </div>
    );
};

export default WebsiteGeneratingScreen;
