import Link from "next/link";
import { ExternalLink, Globe2, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";

const TEMPLATE_NAMES = {
    "template-one": "Template One",
    "template-one-dark": "Template One (Dark)",
    "template-two": "Template Two",
    "template-two-dark": "Template Two (Dark)",
    "template-three": "Template Three",
    "template-three-dark": "Template Three (Dark)",
};

const formatTemplateName = (templateType) =>
    TEMPLATE_NAMES[templateType] ||
    templateType?.replaceAll("-", " ") ||
    "Not selected";

const formatDate = (value) => {
    if (!value) return "Not available";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Not available";

    return new Intl.DateTimeFormat("en", {
        dateStyle: "long",
        timeZone: "Asia/Dhaka",
    }).format(date);
};

export function WebsiteSummaryCard({ website, expiresAt }) {
    if (!website) {
        return (
            <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-sm">
                <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                    <Globe2 className="size-5" />
                </div>
                <h2 className="mt-4 text-base font-bold text-white">Website not created yet</h2>
                <p className="mt-1 text-xs text-slate-400">
                    Choose a template and configure your practice details to launch your digital clinic.
                </p>
                <Button className="mt-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20" asChild>
                    <Link href="/dashboard/website/create">Create website now →</Link>
                </Button>
            </section>
        );
    }

    const templateName = formatTemplateName(website.templateType);

    return (
        <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 gap-3.5 items-start">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                        <Globe2 className="size-5" />
                    </div>
                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">Live Website URL</h2>
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-400">
                                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Online
                            </span>
                        </div>
                        {website.url ? (
                            <Link
                                href={website.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1.5 block break-all text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                                {website.url}
                            </Link>
                        ) : (
                            <p className="mt-1 text-xs text-slate-400">
                                Website URL is not available.
                            </p>
                        )}
                        {website.customDomain &&
                            website.customDomainStatus !== "connected" && (
                                <p className="mt-2 text-xs text-amber-400">
                                    {website.customDomain} is still being
                                    connected. The URL above remains your live
                                    website address.
                                </p>
                            )}
                    </div>
                </div>

                {website.url && (
                    <Button variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 text-xs font-semibold" asChild>
                        <Link
                            href={website.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit website
                            <ExternalLink className="ml-1.5 size-3.5" />
                        </Link>
                    </Button>
                )}
            </div>

            <div className="mt-6 grid gap-3 border-t border-slate-800/80 pt-5 sm:grid-cols-2 lg:grid-cols-3">
                <InfoItem
                    icon={<LayoutTemplate className="size-4 text-indigo-400" />}
                    label="Website Template"
                    value={templateName}
                />
                <InfoItem
                    icon={<span className="material-symbols-outlined text-base text-indigo-400">event</span>}
                    label="Access Expiry Date"
                    value={expiresAt ? formatDate(expiresAt) : "Trial starts when website is created"}
                />
                <InfoItem
                    icon={<span className="material-symbols-outlined text-base text-indigo-400">monitor_heart</span>}
                    label="Publication Status"
                    value={website.status || "Published"}
                    capitalize
                />
            </div>
        </section>
    );
}

function InfoItem({ icon, label, value, capitalize = false }) {
    return (
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
            <div className="flex items-center gap-2 text-slate-400">
                {icon}
                <p className="text-[10px] font-bold uppercase tracking-wider">{label}</p>
            </div>
            <p className={`mt-1.5 text-sm font-bold text-white ${capitalize ? "capitalize" : ""}`}>
                {value}
            </p>
        </div>
    );
}
