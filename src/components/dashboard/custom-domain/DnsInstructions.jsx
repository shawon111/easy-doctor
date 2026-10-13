"use client";

import { Check, Copy, Server } from "lucide-react";
import { useState } from "react";

export default function DnsInstructions({ dnsRecords = [] }) {
    const hasAlternatives =
        dnsRecords.some((record) => record.type === "A" || record.dnsType === "A") &&
        dnsRecords.some((record) => record.type === "CNAME" || record.dnsType === "CNAME");

    return (
        <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-sm">
            <div className="flex gap-3.5 items-start">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                    <Server className="size-5" />
                </div>

                <div>
                    <h2 className="text-base sm:text-lg font-bold text-white">
                        Configure DNS Records
                    </h2>

                    <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        Add the following DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.). DNS updates can take 5–30 minutes to propagate.
                    </p>
                    {hasAlternatives && (
                        <div className="mt-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3.5 py-2 text-xs font-medium text-amber-300">
                            Alternative configurations detected: Use either the A record or the CNAME record; do not configure both simultaneously.
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-6 space-y-3">
                {dnsRecords.length === 0 ? (
                    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-xs sm:text-sm text-slate-400">
                        No custom DNS records currently required for this domain.
                    </div>
                ) : (
                    dnsRecords.map((record, index) => (
                        <DnsRecord
                            key={`${record.type}-${record.name}-${index}`}
                            record={record}
                        />
                    ))
                )}
            </div>
        </section>
    );
}

function DnsRecord({ record }) {
    const [copied, setCopied] = useState(false);

    const copyValue = async () => {
        await navigator.clipboard.writeText(record.value);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-colors hover:border-slate-700">
            <div className="grid gap-4 sm:grid-cols-[100px_1fr_auto] sm:items-center">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Type
                    </p>

                    <p className="mt-1 font-mono text-sm font-bold text-indigo-400">
                        {record.type || record.dnsType}
                    </p>
                </div>

                <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Value / Points To
                    </p>

                    <p className="mt-1 break-all font-mono text-xs sm:text-sm text-slate-200">
                        {record.value}
                    </p>
                    {record.reason && (
                        <p className="mt-1 text-xs text-slate-400">
                            {record.reason}
                        </p>
                    )}
                </div>

                <button
                    type="button"
                    onClick={copyValue}
                    className="inline-flex size-9 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
                    title="Copy record value"
                >
                    {copied ? (
                        <Check className="size-4 text-emerald-400" />
                    ) : (
                        <Copy className="size-4" />
                    )}
                </button>
            </div>

            <div className="mt-3 border-t border-slate-800/80 pt-2.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Host / Name
                </p>

                <p className="mt-0.5 font-mono text-xs font-semibold text-slate-300">
                    {record.name || "@"}
                </p>
            </div>
        </div>
    );
}