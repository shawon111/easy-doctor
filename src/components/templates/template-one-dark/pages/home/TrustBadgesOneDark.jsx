import RevealOneDark from "../../ui/RevealOneDark";

const BADGES = [
  {
    icon: "school",
    iconClass: "text-primary",
    stat: "M.D., PhD",
    label: "Academic Excellence",
    delay: "",
  },
  {
    icon: "language",
    iconClass: "text-secondary-fixed",
    stat: "Trilingual",
    label: "EN, ES, FR",
    delay: "delay-100",
  },
  {
    icon: "award_star",
    iconClass: "text-tertiary",
    stat: "Top 1% Rank",
    label: "Global Specialists",
    delay: "delay-200",
  },
  {
    icon: "groups",
    iconClass: "text-primary",
    stat: "5,000+",
    label: "Satisfied Patients",
    delay: "delay-300",
  },
];

export default function TrustBadgesOneDark() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
          {BADGES.map((badge) => (
            <RevealOneDark key={badge.stat} className={badge.delay}>
              <span className={`material-symbols-outlined ${badge.iconClass} mb-4`} style={{ fontSize: "44px" }}>
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
