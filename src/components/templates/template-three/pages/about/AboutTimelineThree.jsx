import FadeInThree from "../../ui/FadeInThree";

const MILESTONES = [
  {
    period: "1998 — 2004",
    periodClass: "text-primary",
    dotClass: "bg-primary ring-primary/10",
    title: "Academic Excellence",
    description:
      "Graduated Summa Cum Laude with a Doctorate in Medical Sciences, focusing on neural network modeling in diagnostics.",
    mobileDescription: "Graduated Summa Cum Laude with a Doctorate in Medical Sciences.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOY1YJiNZg8Uu9etc6BsYBbdtL541W0jRtR7Ix9qIUnQhEFheY8l-HdrWNu5rIIGZioCHFip0qeY_oKfpHppKoOGYtAQgnM_rQxJoElBsydgQ1K_SLnmoCwlD7PDFPjExvBz_oKrFUh40ff56Y6JWnF6SktKSN606nk7u7zOfcA4PY01HuuHLRKjjDIPBD4E6hp1B54YEk-SvJSO2_4C5q2LsfBz9BThUSNjbOS_kyo9aDqlD36s5ajQ",
    alt: "A wide-angle shot of a prestigious, historic medical university campus at twilight.",
    reverse: false,
  },
  {
    period: "2005 — 2012",
    periodClass: "text-secondary",
    dotClass: "bg-secondary ring-secondary/10",
    title: "Global Research Lead",
    description:
      "Headed the International Consortium of Regenerative Medicine in Geneva, pioneering 3D bio-printing applications.",
    mobileDescription: "Pioneering 3D bio-printing applications in Geneva.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAphwkIeBSLEIs1paPggmyaM1dJ2ROUH2qKt0est0-BAWlmdmJ_l-KC2ugmKb3iUvk8NS0pTh9IKRISDHoIyZW7wYV3Ki60Xzq7RBE6bcjqMjahtN05YRuBy03TKVEi97pkbovvLcrgAvc6zGkELahFwiEkJbwUsttHcDAlAax_W-WQo9-OaXGLNs87NOKrvj1ANk0BO5VQ4ULL4bWNYkHP6IixfvlI4RCBM3pjPA7CbhqsECbJ3GqiAw",
    alt: "A futuristic laboratory setting in Switzerland with advanced 3D bio-printers.",
    reverse: true,
  },
  {
    period: "2013 — Present",
    periodClass: "text-tertiary",
    dotClass: "bg-tertiary ring-tertiary/10",
    title: "Founding Dr. MedLink",
    description:
      "Established a boutique clinical ecosystem dedicated to personalized medicine and AI-assisted health monitoring.",
    mobileDescription: "Establishing a boutique clinical ecosystem for personalized care.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8L2IuAX2-El3dGbXY3ODPb7fNShamX2AXULa8rDg8ThyQEmMGU21T4y2Lio-LoU9EzROsSui6HHUngR2c2kO_ZrNkTIJbN2dN_gp6DTybRbrLGfc0OnLy1RdokNucy4Lq9mVnJUqWJXG-o4nbiorCU8AnDvVW0vdWhs-dhTFlmXNH7Z0kM8WNUzOi-1oYTzd0fMH7DUcZlk8Rh4ZvYLZO6l7aE6QjIMaHtQw-QDAmkyqars6W94C9PQ",
    alt: "The elegant, high-end interior of a contemporary medical clinic reception area.",
    reverse: false,
  },
];

export default function AboutTimelineThree() {
  return (
    <section className="py-32 overflow-hidden bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Career Milestones</h2>
          <p className="text-on-surface-variant mt-4">
            Defining the future of medicine through historical excellence.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full timeline-gradient opacity-20 hidden md:block" />

          <div className="space-y-24">
            {MILESTONES.map((milestone) => (
              <div
                key={milestone.title}
                className={`relative flex flex-col ${milestone.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center md:justify-between group`}
              >
                <div className={`md:w-[45%] ${milestone.reverse ? "text-left" : "text-right"} hidden md:block`}>
                  <span className={`font-label-sm ${milestone.periodClass} mb-2 block`}>{milestone.period}</span>
                  <h3 className="font-headline-md text-on-surface">{milestone.title}</h3>
                  <p className="text-on-surface-variant mt-2">{milestone.description}</p>
                </div>

                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${milestone.dotClass} ring-8 z-20 hidden md:block group-hover:scale-125 transition-transform`}
                />

                <FadeInThree className="md:w-[45%] glass-card p-8 rounded-xl md:hidden mb-6">
                  <span className={`font-label-sm ${milestone.periodClass} mb-2 block`}>{milestone.period}</span>
                  <h3 className="font-headline-md text-on-surface">{milestone.title}</h3>
                  <p className="text-on-surface-variant mt-2">{milestone.mobileDescription}</p>
                </FadeInThree>

                <FadeInThree className="md:w-[45%] rounded-xl overflow-hidden border border-outline-variant shadow-lg hidden md:block">
                  <img className="w-full h-48 object-cover" alt={milestone.alt} src={milestone.image} />
                </FadeInThree>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
