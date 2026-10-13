import { ExternalLink, Globe } from "lucide-react";

export default function CurrentWebsiteCard({
    subdomain,
    baseDomain,
    websiteUrl,
    customDomainStatus,
}) {
    const url = websiteUrl || (
        subdomain && baseDomain
            ? `https://${subdomain}.${baseDomain}`
            : null
    );
    const isCustomDomainConnected =
        customDomainStatus === "connected" && url;

    return (
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Current Website URL
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                        <Globe className="size-4 text-indigo-400" />

                        <span className="font-mono text-sm sm:text-base font-bold text-white">
                            {url || "Website URL unavailable"}
                        </span>
                    </div>
                </div>

                {url && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        Visit Website
                        <ExternalLink className="size-3" />
                    </a>
                )}
            </div>

            <p className="mt-3.5 border-t border-slate-800/80 pt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isCustomDomainConnected
                    ? `Your website is live on your custom domain. The Docxio subdomain (${subdomain}.${baseDomain}) remains available as an automatic fallback.`
                    : "Your website is active on your Docxio subdomain. Connect your custom branding domain below."}
            </p>
        </div>
    );
}