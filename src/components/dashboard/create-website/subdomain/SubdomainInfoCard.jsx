import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const SubdomainInfoCard = () => {
    return (
        <Card className="p-0">
            <CardContent className="flex items-start gap-3 p-6">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                        help
                    </span>
                </div>
                <div>
                    <h3 className="mb-2 text-base font-semibold text-foreground">
                        What is a subdomain?
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        A subdomain is a unique prefix to our main domain (docxio.com) that
                        identifies your specific practice. It&apos;s an easy, free way to get
                        your website live immediately.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default SubdomainInfoCard;