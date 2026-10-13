import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const LaunchGuidanceCard = () => {
    return (
        <Card className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-950/80 p-5 sm:p-6 shadow-sm">
            <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-10">
                <span
                    className="material-symbols-outlined text-8xl text-indigo-400"
                    style={{ fontVariationSettings: "'FILL' 1" }}>
                    rocket_launch
                </span>
            </div>
            <CardContent className="relative z-10 p-0">
                <div className="flex items-center gap-2.5">
                    <span
                        className="material-symbols-outlined text-indigo-400 text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}>
                        info
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">Ready to Launch?</h3>
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                    This is the final step. You can modify all text, services, photos, and clinic hours
                    anytime from the &apos;Edit&apos; dashboard after publishing.
                </p>
            </CardContent>
        </Card>
    );
};

export default LaunchGuidanceCard;