"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { logger } from "@/lib/logger";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const PublishActionCard = () => {
    const searchParams = useSearchParams();
    const subdomain = searchParams.get("subdomain");
    const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN;
    const templateType = searchParams.get("template");
    const websiteUrl = `https://${subdomain}.${baseDomain}`;

    const handlePublish = async () => {
        const response = await fetch("/api/website", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                templateType,
                subdomain
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to publish website");
        }

        return response.json();
    };

    const { isPending, isSuccess, mutate } = useMutation({
        mutationFn: handlePublish,
        onSuccess: () => {
            toast.success("Your website is live!");
        },
        onError: (error) => {
            logger.error("Failed to publish website", error);
            toast.error("Failed to publish website. Please try again.");
        }
    })

    return (
        <Card className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8 shadow-sm">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent" />
            <CardContent className="relative z-10 flex w-full max-w-md flex-col items-center gap-4 p-0 text-center mx-auto">
                {isSuccess ? (
                    <div className="w-full rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-6 shadow-sm">
                        <div className="mb-2.5 flex items-center justify-center gap-2 text-emerald-400">
                            <span className="material-symbols-outlined animate-bounce text-[26px]">
                                celebration
                            </span>
                            <span className="material-symbols-outlined text-[24px]">
                                check_circle
                            </span>
                        </div>
                        <p className="text-base sm:text-lg font-bold text-white">
                            Your website is live!
                        </p>
                        <p className="mt-1 text-xs sm:text-sm text-emerald-300">
                            Your clinical domain is now publicly accessible.
                        </p>
                        <Link
                            href={websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-500"
                        >
                            <span className="truncate">{websiteUrl}</span>
                            <span className="material-symbols-outlined shrink-0 text-[16px]">
                                open_in_new
                            </span>
                        </Link>
                    </div>
                ) : (
                    <Button
                        size="lg"
                        className="h-11 w-full cursor-pointer gap-2.5 rounded-xl bg-indigo-600 px-8 text-sm sm:text-base font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-600/40 active:scale-95 disabled:opacity-50"
                        onClick={() => mutate()}
                        disabled={isPending}
                    >
                        <span className="material-symbols-outlined text-[20px]">public</span>
                        {isPending ? "Publishing Website..." : "Publish Website Now"}
                    </Button>
                )}
                <div className="mt-2 text-xs sm:text-sm text-slate-400">
                    <p className="flex items-center justify-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-slate-400">globe</span>
                        Your website will be live at:
                    </p>
                    <Link href={websiteUrl} target="_blank" className="mt-1 block font-mono text-xs sm:text-sm font-bold text-indigo-400 hover:text-indigo-300 underline underline-offset-4">
                        https://{subdomain}.{baseDomain}
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default PublishActionCard;