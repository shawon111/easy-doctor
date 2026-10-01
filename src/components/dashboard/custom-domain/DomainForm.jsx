"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowRight, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const connectDomain = async (domain) => {
    const response = await fetch("/api/domain", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            domain,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data?.message || "Failed to connect domain");
    }

    return data.data;
};

export default function DomainForm({ domain: savedDomain }) {
    const [domain, setDomain] = useState(savedDomain || "");

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: connectDomain,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["domain"],
            });
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const value = domain.trim().toLowerCase();

        if (!value) return;

        mutation.mutate(value);
    };

    return (
        <section className="rounded-xl border bg-card p-6">
            <div className="mb-6">
                <h2 className="text-lg font-semibold">
                    {savedDomain ? "Your custom domain" : "Connect your domain"}
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    {savedDomain
                        ? "Your domain is saved here while you finish verification and DNS setup."
                        : "Use your own domain instead of the default Docxio subdomain."}
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <div>
                    <label
                        htmlFor="domain"
                        className="mb-2 block text-sm font-medium"
                    >
                        Domain
                    </label>

                    <div className="relative">
                        <Globe className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            id="domain"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            placeholder="yourdomain.com"
                            className="pl-9"
                            disabled={mutation.isPending || Boolean(savedDomain)}
                        />
                    </div>

                    {!savedDomain && (
                        <p className="mt-2 text-xs text-muted-foreground">
                            Enter your domain without https:// or www.
                        </p>
                    )}
                </div>

                {mutation.isError && (
                    <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                        {mutation.error.message}
                    </div>
                )}

                {!savedDomain && (
                    <Button
                        type="submit"
                        disabled={!domain.trim() || mutation.isPending}
                    >
                        {mutation.isPending ? "Connecting..." : "Connect Domain"}
                        {!mutation.isPending && (
                            <ArrowRight className="ml-2 size-4" />
                        )}
                    </Button>
                )}
            </form>
        </section>
    );
}