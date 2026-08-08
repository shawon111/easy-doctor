import Reveal from "@/components/templates/ui/Reveal";


const BADGES = [
  { icon: "school", stat: "M.D., PhD", label: "Academic Excellence", delay: "" },
  { icon: "language", stat: "Trilingual", label: "EN, ES, FR", delay: "delay-100" },
  { icon: "award_star", stat: "Top 1% Rank", label: "Global Specialists", delay: "delay-200" },
  { icon: "groups", stat: "5,000+", label: "Satisfied Patients", delay: "delay-300" },
];

export default function TrustBadgesOne() {
  return (
    <section className="bg-surface-container-low py-16 border-y border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter items-center text-center">
          {BADGES.map((badge) => (
            <Reveal key={badge.stat} className={badge.delay}>
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
