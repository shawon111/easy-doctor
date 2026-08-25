"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const RESERVED_NAMES = ["admin", "app", "api", "help", "support", "pay"];

const slugify = (value) =>
    value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const getStatusFor = (value) => {
    const slug = slugify(value);
    if (!slug) return "idle";
    if (value.trim().toLowerCase() !== slug || RESERVED_NAMES.includes(slug)) {
        return "error";
    }
    return "valid";
};

const SubdomainInputCard = ({ value, onChange, className }) => {
    const [status, setStatus] = useState(() =>
        getStatusFor(value) === "valid" ? "available" : "idle"
    );
    const timerRef = useRef(null);

    const handleChange = (e) => {
        const next = e.target.value;
        onChange(next);
        clearTimeout(timerRef.current);
        const base = getStatusFor(next);
        if (base === "valid") {
            setStatus("checking");
            timerRef.current = setTimeout(() => setStatus("available"), 700);
        } else {
            setStatus(base);
        }
    };

    const slug = slugify(value) || "your-practice";
    const fullUrl = `${slug}.docxio.com`;

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

                    {status === "error" && (
                        <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
                            <span
                                className="material-symbols-outlined text-[20px] text-red-600"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                error
                            </span>
                            <p className="text-sm font-medium text-red-700">
                                This address is already taken. Try another.
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
                    <Link href="/dashboard/website/create/publish">
                        <Button className="gap-2 cursor-pointer">
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