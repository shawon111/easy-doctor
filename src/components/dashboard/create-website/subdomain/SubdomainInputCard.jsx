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
    const fullUrl = `${slug || "your-practice"}.docxio.com`;

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
        <Card className={`relative flex flex-col overflow-hidden p-0 ${className ?? ""}`}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-bl from-sky-200/50 to-transparent" />
            <div className="relative flex flex-1 flex-col">
                <CardContent className="flex-1 p-6 md:p-8">
                    <Label
                        htmlFor="subdomain"
                        className="mb-3 text-sm font-semibold text-foreground"
                    >
                        Subdomain Name
                    </Label>

                    <div className="flex items-stretch overflow-hidden rounded-lg border border-border shadow-sm transition-all focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20">
                        <Input
                            id="subdomain"
                            type="text"
                            value={value}
                            onChange={handleChange}
                            placeholder="Enter your name or practice"
                            className="h-11 flex-1 rounded-none border-0 bg-transparent text-base font-semibold shadow-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:outline-none placeholder:font-normal placeholder:text-muted-foreground md:text-lg"
                        />
                        <div className="flex h-11 items-center justify-center border-l border-l-border bg-muted px-4">
                            <span className="pointer-events-none whitespace-nowrap text-sm font-medium text-muted-foreground md:text-base">
                                .docxio.com
                            </span>
                        </div>
                    </div>

                    {status === "checking" && (
                        <div className="mt-4 flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground">
                            <span className="material-symbols-outlined animate-spin text-[20px]">
                                progress_activity
                            </span>
                            <span>Checking availability...</span>
                        </div>
                    )}

                    {status === "available" && (
                        <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
                            <span
                                className="material-symbols-outlined text-[20px] text-emerald-600"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                check_circle
                            </span>
                            <p className="text-sm font-medium text-emerald-700">
                                <strong>{fullUrl}</strong> is available!
                            </p>
                        </div>
                    )}

                    {status === "unavailable" && (
                        <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
                            <span
                                className="material-symbols-outlined text-[20px] text-red-600"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                error
                            </span>
                            <p className="text-sm font-medium text-red-700">
                                This address is already taken or reserved. Try another.
                            </p>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
                            <span
                                className="material-symbols-outlined text-[20px] text-red-600"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                error
                            </span>
                            <p className="text-sm font-medium text-red-700">
                                We could not verify this address. Please try again.
                            </p>
                        </div>
                    )}
                </CardContent>

                <div className="flex items-center justify-between gap-3 border-t border-border p-6 md:px-8">
                    <Link href="/dashboard/website/create">
                        <Button
                            variant="ghost"
                            className="gap-2 text-muted-foreground hover:text-foreground cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                            Back to Templates
                        </Button>
                    </Link>
                    <Link href={canContinue ? `/dashboard/website/create/publish?template=${template}&subdomain=${encodeURIComponent(debouncedSlug)}` : "#"}
                        aria-disabled={!canContinue}
                        className={canContinue ? "" : "pointer-events-none"}
                    >
                        <Button className="gap-2 cursor-pointer" disabled={!canContinue}>
                            Continue
                            <span className="material-symbols-outlined text-[18px]">
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