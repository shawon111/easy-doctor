import RevealOneDark from "../../ui/RevealOneDark";

const ICON_CLASSES = [
  "text-primary",
  "text-secondary-fixed",
  "text-tertiary",
  "text-primary",
];
const DELAYS = ["", "delay-100", "delay-200", "delay-300"];

export default function TrustBadgesOneDark({ content = {}, isDemo = false }) {
  const badges = content.items || [];

  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
          {badges.map((badge, index) => (
            <RevealOneDark key={badge.stat || badge.label} className={DELAYS[index] || ""} isDemo={isDemo}>
              <span className={`material-symbols-outlined ${ICON_CLASSES[index % ICON_CLASSES.length]} mb-4`} style={{ fontSize: "44px" }}>
                {badge.icon}
              </span>
              <p className="font-bold text-2xl text-secondary mb-1">{badge.stat}</p>
              <p className="text-sm font-label-md tracking-widest text-on-surface-variant uppercase">{badge.label}</p>
            </RevealOneDark>
          ))}
        </div>
      </div>
    </section>
  );
}
