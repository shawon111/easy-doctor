"use client";

import { Check, Copy, Server } from "lucide-react";
import { useState } from "react";

export default function DnsInstructions({ dnsRecords = [] }) {
    const hasAlternatives =
        dnsRecords.some((record) => record.type === "A" || record.dnsType === "A") &&
        dnsRecords.some((record) => record.type === "CNAME" || record.dnsType === "CNAME");

    return (
        <section className="rounded-xl border bg-card p-6">
            <div className="flex gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Server className="size-5 text-primary" />
                </div>

                <div>
                    <h2 className="font-semibold">
                        Configure your DNS to connect the domain
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Add the following DNS records at your domain
                        provider. DNS changes can take some time to
                        propagate.
                    </p>
                    {hasAlternatives && (
                        <p className="mt-2 text-sm font-medium text-amber-700">
                            These are alternative setups. Choose the A record
                            option or the CNAME option; do not add both.
                        </p>
                    )}
                </div>
            </div>

            <div className="mt-6 space-y-3">
                {dnsRecords.length === 0 ? (
                    <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
                        Vercel has not recommended any DNS records for this
                        domain yet.
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
        <div className="rounded-lg border bg-muted/20 p-4">
            <div className="grid gap-4 sm:grid-cols-[100px_1fr_auto] sm:items-center">
                <div>
                    <p className="text-xs text-muted-foreground">
                        Type
                    </p>

                    <p className="mt-1 font-mono text-sm font-medium">
                        {record.type || record.dnsType}
                    </p>
                </div>

                <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">
                        Value
                    </p>

                    <p className="mt-1 break-all font-mono text-sm">
                        {record.value}
                    </p>
                    {record.reason && (
                        <p className="mt-1 text-xs text-muted-foreground">
                            {record.reason}
                        </p>
                    )}
                </div>

                <button
                    type="button"
                    onClick={copyValue}
                    className="inline-flex size-9 items-center justify-center rounded-md border bg-background hover:bg-muted"
                    title="Copy value"
                >
                    {copied ? (
                        <Check className="size-4" />
                    ) : (
                        <Copy className="size-4" />
                    )}
                </button>
            </div>

            <div className="mt-3">
                <p className="text-xs text-muted-foreground">
                    Name
                </p>

                <p className="mt-1 font-mono text-sm">
                    {record.name || "@"}
                </p>
            </div>
        </div>
    );
}