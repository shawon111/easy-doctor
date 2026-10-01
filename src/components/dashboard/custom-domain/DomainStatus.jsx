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
        <section className="rounded-xl border bg-card p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                    <StatusIcon
                        verified={isConnected}
                        error={isError}
                    />

                    <div>
                        <h2 className="font-semibold">
                            {domain.name}
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {isConnected
                                ? "Your custom domain is connected and ready."
                                : isError
                                  ? "There is a problem connecting this domain."
                                  : domain.verified
                                    ? "Ownership is verified. DNS is not configured yet; add the records below to connect your domain."
                                    : "Waiting for ownership verification and DNS configuration."}
                        </p>
                    </div>
                </div>

                {isConnected && (
                    <a
                        href={`https://${domain.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                        Visit website
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
                    >
                        <RefreshCw
                            className={`mr-2 size-4 ${
                                statusMutation.isPending
                                    ? "animate-spin"
                                    : ""
                            }`}
                        />

                        {statusMutation.isPending
                            ? "Checking..."
                            : "Check Connection"}
                    </Button>

                    {statusMutation.isError && (
                        <p className="mt-2 text-sm text-destructive">
                            {statusMutation.error.message}
                        </p>
                    )}
                </div>
            )}

            <div className="mt-6 border-t pt-5">
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => setIsRemoveDialogOpen(true)}
                    disabled={removeMutation.isPending}
                >
                    <Trash2 className="mr-2 size-4" />

                    {removeMutation.isPending
                        ? "Disconnecting..."
                        : "Disconnect Domain"}
                </Button>
            </div>

            {removeMutation.isError && (
                <p className="mt-2 text-sm text-destructive">
                    {removeMutation.error.message}
                </p>
            )}

            <Dialog
                open={isRemoveDialogOpen}
                onOpenChange={setIsRemoveDialogOpen}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Disconnect custom domain?</DialogTitle>
                        <DialogDescription>
                            This will remove {domain.name} from your website.
                            You can reconnect it later.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsRemoveDialogOpen(false)}
                            disabled={removeMutation.isPending}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="button"
                            variant="destructive"
                            onClick={handleRemove}
                            disabled={removeMutation.isPending}
                        >
                            {removeMutation.isPending
                                ? "Disconnecting..."
                                : "Disconnect domain"}
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
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle2 className="size-5 text-green-600" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                <XCircle className="size-5 text-destructive" />
            </div>
        );
    }

    return (
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
            <Clock3 className="size-5 text-amber-600" />
        </div>
    );
}