"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const RESERVED_NAMES = ["admin", "app", "api", "help", "support", "pay"];

const slugify = (value) =>
    value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const SubdomainInputCard = ({ value, onChange, className }) => {
    // states
    const [debouncedSlug, setDebouncedSlug] = useState(() => slugify(value));
    const timerRef = useRef(null);

    // debounce the slug value to avoid excessive API calls
    useEffect(() => {
        const nextSlug = slugify(value);
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            setDebouncedSlug(nextSlug);
        }, 500);

        return () => clearTimeout(timerRef.current);
    }, [value]);

    // derive states based on the slug and debouncedSlug
    const slug = slugify(value);
    const isWaitingForDebounce = Boolean(slug) && slug.length >= 2 && debouncedSlug !== slug;
    const isReservedSubdomain = Boolean(slug) && RESERVED_NAMES.includes(slug);
    const isReadyForCheck = Boolean(slug) && slug.length >= 2 && !RESERVED_NAMES.includes(slug);
    const isValidSubdomain = isReadyForCheck && debouncedSlug === slug;
    const fullUrl = `${slug || "your-practice"}.${process.env.NEXT_PUBLIC_BASE_DOMAIN}`;

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    // Query to check subdomain availability
    const checkAvailability = async () => {
        const res = await fetch(
            `/api/info/subdomain/search?subdomain=${encodeURIComponent(debouncedSlug)}`
        );

        if (!res.ok) {
            throw new Error("Unable to check subdomain availability");
        }

        const json = await res.json();
        return json?.data;
    }

    const {
        data: isAvailable,
        isFetching,
        isError,
    } = useQuery({
        queryKey: ["subdomain-status", debouncedSlug],
        queryFn: () => checkAvailability(debouncedSlug),
        enabled: isValidSubdomain,
        retry: false,
    });

    const status = !value.trim()
        ? "idle"
        : slug.length < 2
            ? "idle"
            : isReservedSubdomain
                ? "unavailable"
                : isWaitingForDebounce
                    ? "idle"
                    : isFetching
                        ? "checking"
                        : isError
                            ? "error"
                            : isAvailable
                                ? "available"
                                : "unavailable";
    const canContinue = status === "available";

    // get the query from the url
    const searchParams = useSearchParams();
    const template = searchParams.get("template");

    return (
        <Card className={`relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-sm p-0 ${className ?? ""}`}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-bl from-indigo-500/10 to-transparent" />
            <div className="relative flex flex-1 flex-col">
                <CardContent className="flex-1 p-6 md:p-8">
                    <Label
                        htmlFor="subdomain"
                        className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                        Subdomain Name
                    </Label>

                    <div className="flex items-stretch overflow-hidden rounded-xl border border-slate-700 bg-slate-900/80 shadow-inner transition-all focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20">
                        <Input
                            id="subdomain"
                            type="text"
                            value={value}
                            onChange={handleChange}
                            placeholder="e.g. dr-john-smith"
                            className="h-11 flex-1 rounded-none border-0 bg-transparent text-sm md:text-base font-semibold text-white shadow-none focus-visible:ring-0 focus-visible:outline-none placeholder:font-normal placeholder:text-slate-500"
                        />
                        <div className="flex h-11 items-center justify-center border-l border-slate-700 bg-slate-800/60 px-4">
                            <span className="pointer-events-none whitespace-nowrap font-mono text-xs md:text-sm font-medium text-slate-400">
                                .{process.env.NEXT_PUBLIC_BASE_DOMAIN}
                            </span>
                        </div>
                    </div>

                    {status === "checking" && (
                        <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs md:text-sm text-slate-400">
                            <span className="material-symbols-outlined animate-spin text-[18px] text-indigo-400">
                                progress_activity
                            </span>
                            <span>Checking domain availability...</span>
                        </div>
                    )}

                    {status === "available" && (
                        <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs md:text-sm text-emerald-400">
                            <span
                                className="material-symbols-outlined text-[18px] text-emerald-400"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                check_circle
                            </span>
                            <p className="font-medium">
                                <strong className="font-mono text-white">{fullUrl}</strong> is available!
                            </p>
                        </div>
                    )}

                    {status === "unavailable" && (
                        <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs md:text-sm text-rose-400">
                            <span
                                className="material-symbols-outlined text-[18px] text-rose-400"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                error
                            </span>
                            <p className="font-medium">
                                This address is already taken or reserved. Please try another name.
                            </p>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs md:text-sm text-rose-400">
                            <span
                                className="material-symbols-outlined text-[18px] text-rose-400"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                error
                            </span>
                            <p className="font-medium">
                                We could not verify this address right now. Please try again.
                            </p>
                        </div>
                    )}
                </CardContent>

                <div className="flex items-center justify-between gap-3 border-t border-slate-800/80 p-5 md:px-8">
                    <Link href="/dashboard/website/create">
                        <Button
                            variant="outline"
                            className="gap-2 rounded-xl border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white text-xs font-semibold"
                        >
                            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                            Back to Templates
                        </Button>
                    </Link>
                    <Link href={canContinue ? `/dashboard/website/create/publish?template=${template}&subdomain=${encodeURIComponent(debouncedSlug)}` : "#"}
                        aria-disabled={!canContinue}
                        className={canContinue ? "" : "pointer-events-none"}
                    >
                        <Button
                            className="gap-2 rounded-xl bg-indigo-600 px-5 text-xs font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-500 disabled:opacity-50"
                            disabled={!canContinue}
                        >
                            Continue
                            <span className="material-symbols-outlined text-[16px]">
                                arrow_forward
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default SubdomainInputCard;