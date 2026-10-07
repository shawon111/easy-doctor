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
            <section className="rounded-2xl border bg-card p-6">
                <h2 className="font-semibold">Website not created yet</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                    Choose a template and create your website to see its
                    information here.
                </p>
                <Button className="mt-5" asChild>
                    <Link href="/dashboard/website/create">Create website</Link>
                </Button>
            </section>
        );
    }

    const templateName = formatTemplateName(website.templateType);

    return (
        <section className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Globe2 className="size-5" />
                    </div>
                    <div className="min-w-0">
                        <h2 className="font-semibold">Website URL</h2>
                        {website.url ? (
                            <Link
                                href={website.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 block break-all text-sm font-medium text-primary hover:underline"
                            >
                                {website.url}
                            </Link>
                        ) : (
                            <p className="mt-1 text-sm text-muted-foreground">
                                Website URL is not available.
                            </p>
                        )}
                        {website.customDomain &&
                            website.customDomainStatus !== "connected" && (
                                <p className="mt-2 text-xs text-amber-700">
                                    {website.customDomain} is still being
                                    connected. The URL above remains your live
                                    website address.
                                </p>
                            )}
                    </div>
                </div>

                {website.url && (
                    <Button variant="outline" asChild>
                        <Link
                            href={website.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit website
                            <ExternalLink className="ml-2 size-4" />
                        </Link>
                    </Button>
                )}
            </div>

            <div className="mt-6 grid gap-3 border-t pt-5 sm:grid-cols-2">
                <InfoItem
                    icon={<LayoutTemplate className="size-4" />}
                    label="Website template"
                    value={templateName}
                />
                <InfoItem
                    icon={<span className="material-symbols-outlined text-base">event</span>}
                    label="Website expiry date"
                    value={expiresAt ? formatDate(expiresAt) : "Trial starts when your website is created"}
                />
                <InfoItem
                    icon={<span className="material-symbols-outlined text-base">monitor_heart</span>}
                    label="Website status"
                    value={website.status || "Published"}
                    capitalize
                />
            </div>
        </section>
    );
}

function InfoItem({ icon, label, value, capitalize = false }) {
    return (
        <div className="rounded-xl bg-muted/40 p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
                {icon}
                <p className="text-xs font-medium">{label}</p>
            </div>
            <p className={`mt-2 text-sm font-semibold text-foreground ${capitalize ? "capitalize" : ""}`}>
                {value}
            </p>
        </div>
    );
}
