import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const LaunchGuidanceCard = () => {
    return (
        <Card className="relative overflow-hidden border-sky-200/60 bg-sky-50 p-6 ring-0">
            <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-10">
                <span
                    className="material-symbols-outlined text-8xl text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}>
                    rocket_launch
                </span>
            </div>
            <CardContent className="relative z-10 p-0">
                <div className="flex items-center gap-2">
                    <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}>
                        info
                    </span>
                    <h3 className="text-base font-semibold text-foreground">Ready to Launch?</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    This is the final step. You can change all website content, images, and details
                    anytime from the &apos;Edit&apos; page after publishing.
                </p>
            </CardContent>
        </Card>
    );
};

export default LaunchGuidanceCard;