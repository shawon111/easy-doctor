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
        <main className="mx-auto w-full max-w-360 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
            <header className="mb-6">
                <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    Site Verification
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                    Verify your website with Google Search Console and Bing Webmaster Tools.
                    Saved values are added to your website&apos;s verification meta tags.
                </p>
            </header>

            {isLoading ? (
                <p className="text-sm text-muted-foreground" role="status">
                    Loading verification settings...
                </p>
            ) : null}

            {isError ? (
                <div role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                    {error.message}
                </div>
            ) : null}

            {data ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <section className="space-y-5 rounded-2xl border border-border bg-card p-4 sm:p-6">
                        <div>
                            <h2 className="text-lg font-semibold">Google Search Console</h2>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Choose the HTML tag verification method in Google Search Console and paste
                                the tag&apos;s content value below (not the full meta tag).
                            </p>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="google-verification" className="text-sm font-medium">
                                Google verification code
                            </label>
                            <Input
                                id="google-verification"
                                value={verification.google}
                                onChange={updateField("google")}
                                maxLength={500}
                                autoComplete="off"
                                placeholder="Paste the content value from google-site-verification"
                            />
                            <p className="break-all rounded-md bg-muted px-3 py-2 font-mono text-xs text-muted-foreground">
                                &lt;meta name=&quot;google-site-verification&quot; content=&quot;your-code&quot; /&gt;
                            </p>
                        </div>
                    </section>

                    <section className="space-y-5 rounded-2xl border border-border bg-card p-4 sm:p-6">
                        <div>
                            <h2 className="text-lg font-semibold">Bing Webmaster Tools</h2>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Choose the HTML meta tag verification method in Bing Webmaster Tools and
                                paste its content value below (not the full meta tag).
                            </p>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="bing-verification" className="text-sm font-medium">
                                Bing verification code
                            </label>
                            <Input
                                id="bing-verification"
                                value={verification.bing}
                                onChange={updateField("bing")}
                                maxLength={500}
                                autoComplete="off"
                                placeholder="Paste the content value from msvalidate.01"
                            />
                            <p className="break-all rounded-md bg-muted px-3 py-2 font-mono text-xs text-muted-foreground">
                                &lt;meta name=&quot;msvalidate.01&quot; content=&quot;your-code&quot; /&gt;
                            </p>
                        </div>
                    </section>

                    {saveMutation.isError ? (
                        <div role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                            {saveMutation.error.message}
                        </div>
                    ) : null}

                    <div className="flex justify-end">
                        <Button type="submit" disabled={saveMutation.isPending}>
                            {saveMutation.isPending ? "Saving..." : "Save verification"}
                        </Button>
                    </div>
                </form>
            ) : null}
        </main>
    );
}
