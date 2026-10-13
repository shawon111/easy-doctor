"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    CheckCircle2,
    Clock3,
    ExternalLink,
    RefreshCw,
    Trash2,
    XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const checkDomainStatus = async () => {
    const response = await fetch("/api/domain/status");

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data?.message || "Failed to check domain status"
        );
    }

    return data;
};

const removeDomain = async () => {
    const response = await fetch("/api/domain", {
        method: "DELETE",
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data?.message || "Failed to remove domain"
        );
    }

    return data;
};

export default function DomainStatus({ domain }) {
    const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
    const queryClient = useQueryClient();

    const statusMutation = useMutation({
        mutationFn: checkDomainStatus,

        onSuccess: (result) => {
            const status = result.data;

            queryClient.setQueryData(["domain"], (current) => {
                if (!current?.domain) {
                    return current;
                }

                return {
                    ...current,
                    domain: {
                        ...current.domain,
                        status: status.status,
                        verified: status.verified === true,
                        verification: (status.verification || []).map((record) => ({
                            type: record.type || record.recordType,
                            name: record.name,
                            value: record.value,
                        })),
                        dnsRecords: (status.dnsRecords || []).map((record) => ({
                            type: record.type || record.dnsType,
                            name: record.name,
                            value: record.value,
                            reason: record.reason,
                        })),
                    },
                };
            });

            queryClient.invalidateQueries({
                queryKey: ["domain"],
            });
        },
    });

    const removeMutation = useMutation({
        mutationFn: removeDomain,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["domain"],
            });
        },
    });

    const handleRemove = () => {
        setIsRemoveDialogOpen(false);
        removeMutation.mutate();
    };

    const isConnected =
        domain.status === "connected" || domain.status === "verified";
    const isError = domain.status === "error";

    return (
        <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3.5 items-start">
                    <StatusIcon
                        verified={isConnected}
                        error={isError}
                    />

                    <div>
                        <h2 className="font-mono text-base sm:text-lg font-bold text-white">
                            {domain.name}
                        </h2>

                        <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                            {isConnected
                                ? "Your custom domain is connected and active with automated SSL."
                                : isError
                                  ? "There is an issue resolving this domain. Verify DNS settings."
                                  : domain.verified
                                    ? "Ownership is verified. DNS propagation is in progress; verify records below."
                                    : "Waiting for DNS verification and SSL certificate propagation."}
                        </p>
                    </div>
                </div>

                {isConnected && (
                    <a
                        href={`https://${domain.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        Visit Website
                        <ExternalLink className="size-3.5" />
                    </a>
                )}
            </div>

            {!isConnected && (
                <div className="mt-6">
                    <Button
                        variant="outline"
                        onClick={() => statusMutation.mutate()}
                        disabled={statusMutation.isPending}
                        className="rounded-xl border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white text-xs font-semibold"
                    >
                        <RefreshCw
                            className={`mr-2 size-3.5 ${
                                statusMutation.isPending
                                    ? "animate-spin text-indigo-400"
                                    : ""
                            }`}
                        />

                        {statusMutation.isPending
                            ? "Checking DNS Status..."
                            : "Check Connection"}
                    </Button>

                    {statusMutation.isError && (
                        <p className="mt-2 text-xs text-rose-400">
                            {statusMutation.error.message}
                        </p>
                    )}
                </div>
            )}

            <div className="mt-6 border-t border-slate-800/80 pt-5">
                <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3.5 py-1.5 text-xs font-semibold text-rose-300 transition-colors hover:border-rose-500/60 hover:bg-rose-500/20 hover:text-white"
                    onClick={() => setIsRemoveDialogOpen(true)}
                    disabled={removeMutation.isPending}
                >
                    <Trash2 className="mr-2 size-3.5" />

                    {removeMutation.isPending
                        ? "Disconnecting..."
                        : "Disconnect Custom Domain"}
                </Button>
            </div>

            {removeMutation.isError && (
                <p className="mt-2 text-xs text-rose-400">
                    {removeMutation.error.message}
                </p>
            )}

            <Dialog
                open={isRemoveDialogOpen}
                onOpenChange={setIsRemoveDialogOpen}
            >
                <DialogContent className="border-slate-800 bg-slate-950 text-white sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-base font-bold text-white">Disconnect custom domain?</DialogTitle>
                        <DialogDescription className="text-xs sm:text-sm text-slate-400">
                            This will detach {domain.name} from your medical website.
                            Your Docxio subdomain will immediately resume handling traffic.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="mt-4 gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsRemoveDialogOpen(false)}
                            disabled={removeMutation.isPending}
                            className="rounded-xl border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="button"
                            variant="destructive"
                            onClick={handleRemove}
                            disabled={removeMutation.isPending}
                            className="rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold"
                        >
                            {removeMutation.isPending
                                ? "Disconnecting..."
                                : "Disconnect Domain"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </section>
    );
}

function StatusIcon({ verified, error }) {
    if (verified) {
        return (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                <CheckCircle2 className="size-5 text-emerald-400" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 shadow-sm">
                <XCircle className="size-5 text-rose-400" />
            </div>
        );
    }

    return (
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-sm">
            <Clock3 className="size-5 text-amber-400" />
        </div>
    );
}