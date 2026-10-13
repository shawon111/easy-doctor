import { CircleHelp } from "lucide-react";

export default function DomainHelp() {
    return (
        <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-sm">
            <div className="flex gap-3.5 items-start">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <CircleHelp className="size-4" />
                </div>

                <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                        Need Help Connecting Your Domain?
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                        Your domain registrar (such as Namecheap, GoDaddy, Cloudflare, or Hostinger) controls your DNS zone. Docxio only requires the single CNAME or A record listed above to point traffic.
                    </p>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                        You do not need to share your domain registrar credentials. Once configured, our automated edge network provisions SSL certificates automatically.
                    </p>
                </div>
            </div>
        </section>
    );
}