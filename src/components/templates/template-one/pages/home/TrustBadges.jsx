import Reveal from "@/components/templates/ui/Reveal";

const DELAYS = ["", "delay-100", "delay-200", "delay-300"];

export default function TrustBadgesOne({ content = {} }) {
  const badges = content.items || [];

  return (
    <section className="bg-surface-container-low py-16 border-y border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter items-center text-center">
          {badges.map((badge, index) => (
            <Reveal key={badge.stat || badge.label} className={DELAYS[index] || ""}>
              <span
                className="material-symbols-outlined text-primary mb-2"
                style={{ fontSize: "40px" }}
              >
                {badge.icon}
              </span>
              <p className="font-headline-md font-bold text-on-surface">{badge.stat}</p>
              <p className="text-body-md text-on-surface-variant">{badge.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
