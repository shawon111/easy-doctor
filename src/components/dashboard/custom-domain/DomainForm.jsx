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
        <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-base sm:text-lg font-bold text-white">
                    {savedDomain ? "Your Custom Domain" : "Connect Custom Domain"}
                </h2>

                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    {savedDomain
                        ? "Your domain is registered while you complete DNS verification and propagation below."
                        : "Use your own custom branding domain (e.g. drsmith.com) instead of the default subdomain."}
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <div>
                    <label
                        htmlFor="domain"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                        Domain Name
                    </label>

                    <div className="relative">
                        <Globe className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-indigo-400" />

                        <Input
                            id="domain"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            placeholder="e.g. drsmith.com"
                            className="rounded-xl border-slate-700 bg-slate-900/80 pl-9 font-mono text-sm text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                            disabled={mutation.isPending || Boolean(savedDomain)}
                        />
                    </div>

                    {!savedDomain && (
                        <p className="mt-2 text-xs text-slate-400">
                            Enter your root domain or subdomain without https:// or www.
                        </p>
                    )}
                </div>

                {mutation.isError && (
                    <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs sm:text-sm text-rose-400">
                        {mutation.error.message}
                    </div>
                )}

                {!savedDomain && (
                    <Button
                        type="submit"
                        disabled={!domain.trim() || mutation.isPending}
                        className="rounded-xl bg-indigo-600 px-5 text-xs font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-500 disabled:opacity-50 cursor-pointer"
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