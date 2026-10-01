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
        <div className="space-y-4">
            <div>
                <h3 className="font-semibold">
                    Verify your domain
                </h3>

                <p className="text-sm text-muted-foreground">
                    Add the following DNS record to your
                    domain provider to verify ownership.
                </p>
            </div>

            {verification.map((record, index) => (
                <div
                    key={index}
                    className="rounded-lg border p-4"
                >
                    <div>
                        <span className="text-sm font-medium">
                            Type
                        </span>

                        <p>{record.type}</p>
                    </div>

                    <div>
                        <span className="text-sm font-medium">
                            Name
                        </span>

                        <p>{record.name}</p>
                    </div>

                    <div>
                        <span className="text-sm font-medium">
                            Value
                        </span>

                        <p className="break-all">
                            {record.value}
                        </p>
                    </div>
                </div>
            ))}

            <Button
                onClick={() => verifyMutation.mutate()}
                disabled={verifyMutation.isPending}
            >
                {verifyMutation.isPending
                    ? "Checking..."
                    : "Check verification"}
            </Button>

            {verifyMutation.isError && (
                <p className="text-sm text-destructive">
                    {verifyMutation.error.message}
                </p>
            )}
        </div>
    );
}