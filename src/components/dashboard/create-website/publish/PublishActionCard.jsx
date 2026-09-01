"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PublishActionCard = () => {
    const searchParams = useSearchParams();
    const subdomain = searchParams.get("subdomain");
    const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN;
    return (
        <Card className="relative overflow-hidden p-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-container/10 to-transparent" />
            <CardContent className="relative z-10 flex w-full max-w-md flex-col items-center gap-4 p-0 text-center">
                <Button
                    size="lg"
                    className="h-11 w-full gap-3 rounded-xl bg-primary-container px-8 text-base font-bold text-on-primary-container shadow-md hover:-translate-y-0.5 hover:bg-primary-container/85 hover:shadow-lg active:scale-95 cursor:pointer transition-all">
                    <span className="material-symbols-outlined text-[22px]">public</span>
                    Publish Website Now
                </Button>
                <p className="text-sm text-muted-foreground">
                    <span className="material-symbols-outlined text-[16px]">globe</span>
                    Your website will be live at:{" "}

                </p>
                <Link href={`https://${subdomain}.${baseDomain}`} target="_blank" className="text-sm text-muted-foreground">
                    <strong className="font-medium text-primary-container">https://{subdomain}.{baseDomain}</strong>
                </Link>
            </CardContent>
        </Card>
    );
};

export default PublishActionCard;