"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const CONTENT_ITEMS = [
    { icon: "check_circle", label: "Template Selected" },
    { icon: "check_circle", label: "Subdomain Selected" },
];

const ConfigurationSummaryCard = () => {
    const searchParams = useSearchParams();
    const subdomain = searchParams.get("subdomain");
    const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN;
    const domain = `${subdomain}.${baseDomain}`;

    const copyUrlToClipboard = () => {
        navigator.clipboard.writeText(`https://${domain}`);
        toast.success("Copied to clipboard");
    };
    return (
        <Card className="p-0">
            <CardHeader className="px-6 pt-6">
                <CardTitle className="text-lg">Configuration</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 p-6">
                <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Assigned Domain
                    </p>
                    <div onClick={copyUrlToClipboard} className="flex items-center gap-2 rounded-lg border border-outline-variant/50 bg-surface-container-low p-3 cursor-pointer">
                        <span className="material-symbols-outlined text-lg text-muted-foreground">link</span>
                        <span className="w-full truncate font-mono text-sm text-foreground">{domain}</span>
                    </div>
                </div>
                <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Configuration Status
                    </p>
                    <div className="space-y-1">
                        {CONTENT_ITEMS.map((item) => (
                            <div key={item.label} className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg text-emerald-600">{item.icon}</span>
                                <span className="text-sm text-foreground">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ConfigurationSummaryCard;