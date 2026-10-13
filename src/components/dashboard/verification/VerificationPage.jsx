"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

async function fetchVerification() {
    const response = await fetch("/api/verification", { cache: "no-store" });
    const payload = await response.json();
    if (!response.ok) {
        throw new Error(payload.message || "Unable to load verification settings.");
    }
    return payload.data;
}

async function saveVerification(verification) {
    const response = await fetch("/api/verification", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ verification }),
    });
    const payload = await response.json();
    if (!response.ok) {
        throw new Error(payload.message || "Unable to save verification settings.");
    }
    return payload.data;
}

export function VerificationPage() {
    const queryClient = useQueryClient();
    const [draft, setDraft] = useState(null);
    const {
        data,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["site-verification"],
        queryFn: fetchVerification,
    });

    const saveMutation = useMutation({
        mutationFn: saveVerification,
        onSuccess: (updatedVerification) => {
            queryClient.setQueryData(["site-verification"], updatedVerification);
            toast.success("Verification settings saved.");
        },
        onError: (saveError) => toast.error(saveError.message),
    });

    const verification = draft || data || { google: "", bing: "" };
    const updateField = (field) => (event) => {
        setDraft((current) => ({
            ...(current || data || { google: "", bing: "" }),
            [field]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        saveMutation.mutate({
            google: verification.google.trim(),
            bing: verification.bing.trim(),
        });
    };

    return (
        <main className="dashboard-page mx-auto w-full max-w-7xl space-y-6">
            <header className="mb-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    Search Engine Ownership
                </div>
                <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    Site Verification
                </h1>
                <p className="mt-1.5 max-w-2xl text-xs sm:text-sm text-slate-400">
                    Verify domain ownership with Google Search Console and Bing Webmaster Tools.
                    Saved tokens are automatically injected into your live portal meta tags.
                </p>
            </header>

            {isLoading ? (
                <p className="text-xs text-slate-400" role="status">
                    Loading verification settings...
                </p>
            ) : null}

            {isError ? (
                <div role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-xs text-destructive">
                    {error.message}
                </div>
            ) : null}

            {data ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <section className="space-y-5 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm sm:p-6">
                        <div>
                            <h2 className="text-base font-bold text-white">Google Search Console</h2>
                            <p className="mt-0.5 text-xs text-slate-400">
                                Select HTML tag verification method in Google Search Console and paste
                                only the tag&apos;s content token value below.
                            </p>
                        </div>
                        <div className="space-y-1.5">
                            <label htmlFor="google-verification" className="text-xs font-semibold text-slate-300">
                                Google verification code
                            </label>
                            <Input
                                id="google-verification"
                                value={verification.google}
                                onChange={updateField("google")}
                                maxLength={500}
                                autoComplete="off"
                                placeholder="Paste the content value from google-site-verification"
                                className="rounded-xl border-slate-800 bg-slate-900 text-white text-xs font-mono"
                            />
                            <p className="break-all rounded-xl border border-slate-800/80 bg-slate-900/60 px-3.5 py-2 font-mono text-[11px] text-slate-400">
                                &lt;meta name=&quot;google-site-verification&quot; content=&quot;<span className="text-indigo-400">your-code</span>&quot; /&gt;
                            </p>
                        </div>
                    </section>

                    <section className="space-y-5 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm sm:p-6">
                        <div>
                            <h2 className="text-base font-bold text-white">Bing Webmaster Tools</h2>
                            <p className="mt-0.5 text-xs text-slate-400">
                                Select HTML meta tag verification method in Bing Webmaster Tools and
                                paste only its content token value below.
                            </p>
                        </div>
                        <div className="space-y-1.5">
                            <label htmlFor="bing-verification" className="text-xs font-semibold text-slate-300">
                                Bing verification code
                            </label>
                            <Input
                                id="bing-verification"
                                value={verification.bing}
                                onChange={updateField("bing")}
                                maxLength={500}
                                autoComplete="off"
                                placeholder="Paste the content value from msvalidate.01"
                                className="rounded-xl border-slate-800 bg-slate-900 text-white text-xs font-mono"
                            />
                            <p className="break-all rounded-xl border border-slate-800/80 bg-slate-900/60 px-3.5 py-2 font-mono text-[11px] text-slate-400">
                                &lt;meta name=&quot;msvalidate.01&quot; content=&quot;<span className="text-indigo-400">your-code</span>&quot; /&gt;
                            </p>
                        </div>
                    </section>

                    {saveMutation.isError ? (
                        <div role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-xs text-destructive">
                            {saveMutation.error.message}
                        </div>
                    ) : null}

                    <div className="flex justify-end">
                        <Button type="submit" disabled={saveMutation.isPending} className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20">
                            {saveMutation.isPending ? "Saving..." : "Save verification"}
                        </Button>
                    </div>
                </form>
            ) : null}
        </main>
    );
}
