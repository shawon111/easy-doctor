import { ExternalLink, Globe } from "lucide-react";

export default function CurrentWebsiteCard({
    subdomain,
    baseDomain,
}) {
    const url = `https://${subdomain}.${baseDomain}`;

    return (
        <div className="rounded-xl border bg-card p-5">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Current website
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                        <Globe className="size-4 text-muted-foreground" />

                        <span className="font-medium">
                            {subdomain}.{baseDomain}
                        </span>
                    </div>
                </div>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                    Visit
                    <ExternalLink className="size-3.5" />
                </a>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
                Your website is already available through your Docxio
                subdomain. You can connect a custom domain below.
            </p>
        </div>
    );
}