import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE_FALLBACK =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXxKwFcSECIyn9rW8o_uDKX37xePMxOsbGbwQgrLqtpWtQKANCJnZQqNHdmWfnFbCdUqTyykWUoNvrAeUWb85qQ6-TPkWREcdFn9eRACqOH2u7GQGSo79HfitvGpnPTGxeJzL0lb4_5WtxMioB_Tq_fum1baQMDk7JEkK6-ew6rOWcpBMngJGUd0eW8XUksnh2HbYT47otp692cTcjl_EG01vZ3TBhX6oW7vqHQDw-N_EHaAcxoAKT1w";

export default function HeroTwoDark({ slug, content = {} , isDemo = false, fees = {}, phone = ""}) {
  const base = isDemo ? `/preview/${slug}` : "";
  const imageSrc = content.imageUrl || HERO_IMAGE_FALLBACK;
  const displayPhone = phone || (isDemo ? "+880 1712-345678" : "");
  const cleanPhone = String(displayPhone).replace(/\D/g, "");
  const feeCurrency = fees?.currency || "BDT";
  const firstVisitFee = fees?.consultationFee ?? 1200;

  return (
    <section className="relative min-h-[921px] flex items-center pt-20 px-5 md:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center z-10">
        <div className="md:col-span-7 space-y-8">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 glass-card rounded-full">
              <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-tertiary">
                {content.badge}
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 glass-card rounded-full border border-tertiary/30 text-xs font-serif text-tertiary">
              <span className="material-symbols-outlined text-sm">payments</span>
              <span>Fee: {feeCurrency === "BDT" ? "৳" : feeCurrency} {Number(firstVisitFee).toLocaleString()}</span>
            </div>
          </div>

          <h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface leading-tight">
            {content.heading} <br />
            <span className="gold-text-gradient font-headline-md italic">{content.credentialsLine}</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            {content.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={`${base}/appointment`}
              className="px-8 py-4 bg-tertiary text-on-tertiary font-label-caps text-label-caps rounded-lg luxury-button-hover transition-all flex items-center justify-center gap-2 group"
            >
              {content.primaryCta}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
            {displayPhone ? (
              <a
                href={`tel:${cleanPhone}`}
                className="px-6 py-4 glass-card border border-tertiary/40 text-tertiary font-label-caps text-label-caps rounded-lg hover:bg-tertiary/10 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">call</span>
                <span>Call: {displayPhone}</span>
              </a>
            ) : (
              <Link
                href={`${base}/services`}
                className="px-8 py-4 border border-tertiary/50 text-tertiary font-label-caps text-label-caps rounded-lg hover:bg-tertiary/5 transition-all text-center"
              >
                {content.secondaryCta}
              </Link>
            )}
          </div>
        </div>

        <div className="md:col-span-5 relative group mt-12 md:mt-0">
          <div className="absolute -inset-4 bg-tertiary/10 rounded-xl blur-3xl group-hover:bg-tertiary/20 transition-all duration-700" />
          <div className="relative rounded-xl overflow-hidden glass-card p-2">
            <Image width={1200} height={800}
              className="w-full aspect-[4/5] object-cover rounded-lg"
              alt={content.imageAlt  || "Medical practice image"}
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
