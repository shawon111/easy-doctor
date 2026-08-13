import Link from "next/link";

const DEFAULT_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC0UvJcRRGzeMnVHVjjXtnLb4votL8IteDuxDZoMBMVpVJGOKk-h0BcL08sXfFokA-cOo1p0SsfrOwac1Nso4BV3x2gC0QrMZoHxNOy-E6Z9IfkMBdSWPmugRqreXSFb0bGdnpfIjYIqX8q9tzPLq3OAXzVJuxeYXwM679Bugo2A_j8k-awrsDAbjGSxwoiM3DzXth4E2OLtitL8Sr4rEapTONQDNSO02L51czSuadSIGI3LL-ZaASnpQ";

export default function HomeHeroDarkThree({ slug, content = {} }) {
  const base = slug ? `/doctor/${slug}` : "#";
  const heroImage = content.image || DEFAULT_HERO_IMAGE;

  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden hero-gradient">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary-container/20 text-secondary-fixed-dim font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[14px]">verified_user</span>
            {content.badge}
          </div>

          <h1 className="font-display-lg text-display-lg text-on-background max-w-xl">
            {content.heading} <span className="text-primary">{content.headingHighlight}</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">{content.body}</p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={`${base}/appointment`}
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline-md text-[18px] flex items-center gap-2 hover:opacity-90 transition-all"
            >
              {content.primaryCta}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            {content.whatsappUrl && (
              <a
                className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-headline-md text-[18px] flex items-center gap-3 border border-outline-variant hover:border-primary transition-all"
                href={content.whatsappUrl}
              >
                <span className="material-symbols-outlined text-[#25D366]">chat_bubble</span>
                {content.secondaryCta}
              </a>
            )}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-outline-variant/50 shadow-2xl">
            <img className="w-full h-full object-cover" alt={content.imageAlt} src={heroImage} />
          </div>

          <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md">{content.statCard?.value}</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  {content.statCard?.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
