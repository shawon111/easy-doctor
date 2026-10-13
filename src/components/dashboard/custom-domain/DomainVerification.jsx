"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";

export default function DomainVerification({
    verification = [],
}) {
    const queryClient = useQueryClient();

    const verifyMutation = useMutation({
        mutationFn: async () => {
            const response = await fetch(
                "/api/domain/verify",
                {
                    method: "POST",
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to verify domain"
                );
            }

            return data;
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["domain"],
            });
        },
    });

    if (!verification.length) {
        return null;
    }

    return (
        <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-sm space-y-4">
            <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                    Verify Domain Ownership
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    Add the following DNS record to your domain registrar to verify ownership.
                </p>
            </div>

            <div className="space-y-3">
                {verification.map((record, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 grid gap-3 sm:grid-cols-3"
                    >
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Type
                            </span>
                            <p className="mt-0.5 font-mono text-xs sm:text-sm font-bold text-indigo-400">{record.type}</p>
                        </div>

                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Name
                            </span>
                            <p className="mt-0.5 font-mono text-xs sm:text-sm text-slate-200">{record.name}</p>
                        </div>

                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Value
                            </span>
                            <p className="mt-0.5 break-all font-mono text-xs sm:text-sm text-slate-200">
                                {record.value}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Button
                onClick={() => verifyMutation.mutate()}
                disabled={verifyMutation.isPending}
                className="rounded-xl bg-indigo-600 px-5 text-xs font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-500 disabled:opacity-50 cursor-pointer"
            >
                {verifyMutation.isPending
                    ? "Checking Verification..."
                    : "Check Verification"}
            </Button>

            {verifyMutation.isError && (
                <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs sm:text-sm text-rose-400">
                    {verifyMutation.error.message}
                </div>
            )}
        </section>
    );
}