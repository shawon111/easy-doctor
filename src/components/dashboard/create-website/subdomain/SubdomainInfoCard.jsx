import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const SubdomainInfoCard = () => {
    return (
        <Card className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-0 shadow-sm">
            <CardContent className="flex items-start gap-3.5 p-5 sm:p-6">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">
                        help
                    </span>
                </div>
                <div>
                    <h3 className="mb-1 text-sm font-bold text-white">
                        What is a subdomain?
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                        A subdomain is a unique prefix to our platform domain ({process.env.NEXT_PUBLIC_BASE_DOMAIN}) that
                        identifies your clinic. It&apos;s an automated, complimentary way to get
                        your website online immediately.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default SubdomainInfoCard;