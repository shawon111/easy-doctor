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
        <Card className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-0 shadow-sm">
            <CardHeader className="p-5 sm:p-6 pb-2 sm:pb-3">
                <CardTitle className="text-sm sm:text-base font-bold text-white">Configuration Overview</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 p-5 sm:p-6 pt-0 sm:pt-0">
                <div>
                    <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Assigned Domain
                    </p>
                    <div
                        onClick={copyUrlToClipboard}
                        className="group flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/80 p-3 cursor-pointer transition-colors hover:border-indigo-500/50 hover:bg-slate-900"
                        title="Click to copy domain"
                    >
                        <span className="material-symbols-outlined text-base text-indigo-400 group-hover:scale-110 transition-transform">link</span>
                        <span className="w-full truncate font-mono text-xs sm:text-sm text-white">{domain}</span>
                        <span className="material-symbols-outlined text-sm text-slate-500 group-hover:text-slate-300">content_copy</span>
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Configuration Status
                    </p>
                    <div className="space-y-2">
                        {CONTENT_ITEMS.map((item) => (
                            <div key={item.label} className="flex items-center gap-2 rounded-lg border border-slate-800/60 bg-slate-900/40 px-3 py-2">
                                <span className="material-symbols-outlined text-base text-emerald-400">{item.icon}</span>
                                <span className="text-xs sm:text-sm font-medium text-slate-200">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ConfigurationSummaryCard;