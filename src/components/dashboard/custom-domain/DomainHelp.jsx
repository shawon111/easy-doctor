import { CircleHelp } from "lucide-react";

export default function DomainHelp() {
    return (
        <section className="rounded-xl border bg-muted/30 p-5">
            <div className="flex gap-3">
                <CircleHelp className="mt-0.5 size-5 shrink-0 text-muted-foreground" />

                <div className="space-y-2">
                    <h3 className="font-medium">
                        Need help connecting your domain?
                    </h3>

                    <p className="text-sm leading-6 text-muted-foreground">
                        Your domain is managed by your domain provider,
                        such as Namecheap, GoDaddy, Cloudflare, or
                        Hostinger. Docxio only needs you to add the DNS
                        records shown above.
                    </p>

                    <p className="text-sm leading-6 text-muted-foreground">
                        You don't need to share your domain provider
                        password with Docxio.
                    </p>
                </div>
            </div>
        </section>
    );
}