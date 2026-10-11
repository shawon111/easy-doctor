import { Globe2 } from "lucide-react";

export default function DomainHeader() {
    return (
        <header className="dashboard-heading">
            <p className="dashboard-eyebrow">Your brand, your address</p>
            <div className="relative z-10 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Globe2 className="size-5 text-primary" />
                </div>
                <div className="relative z-10">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Custom Domain
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Connect your own domain to your website.
                    </p>
                </div>
            </div>
        </header>
    );
}