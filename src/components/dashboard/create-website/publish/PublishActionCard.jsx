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
        <Card className="relative overflow-hidden p-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-container/10 to-transparent" />
            <CardContent className="relative z-10 flex w-full max-w-md flex-col items-center gap-4 p-0 text-center">
                {isSuccess ? (
                    <div className="w-full rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-8 shadow-sm">
                        <div className="mb-3 flex items-center justify-center gap-2 text-emerald-700">
                            <span className="material-symbols-outlined animate-bounce text-[30px]">
                                celebration
                            </span>
                            <span className="material-symbols-outlined text-[28px]">
                                check_circle
                            </span>
                        </div>
                        <p className="text-lg font-bold text-emerald-800">
                            Your website is live!
                        </p>
                        <p className="mt-1 text-sm text-emerald-700">
                            Great job - share it with the world.
                        </p>
                        <Link
                            href={websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-black shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg"
                        >
                            <span className="truncate">{websiteUrl}</span>
                            <span className="material-symbols-outlined shrink-0 text-[18px]">
                                open_in_new
                            </span>
                        </Link>
                    </div>
                ) : (
                    <Button
                        size="lg"
                        className="h-11 w-full cursor-pointer gap-3 rounded-xl bg-primary-container px-8 text-base font-bold text-on-primary-container shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-container/85 hover:shadow-lg active:scale-95"
                        onClick={() => mutate()}
                        disabled={isPending}
                    >
                        <span className="material-symbols-outlined text-[22px]">public</span>
                        {isPending ? "Publishing..." : "Publish Website"}
                    </Button>
                )}
                <p className="text-sm text-muted-foreground">
                    <span className="material-symbols-outlined text-[16px]">globe</span>
                    Your website will be live at:{" "}

                </p>
                <Link href={websiteUrl} target="_blank" className="text-sm text-muted-foreground">
                    <strong className="font-medium text-primary-container">https://{subdomain}.{baseDomain}</strong>
                </Link>
            </CardContent>
        </Card>
    );
};

export default PublishActionCard;