const STATS = [
  { value: "15+", label: "Years Excellence", color: "text-primary" },
  { value: "24/7", label: "Support Access", color: "text-secondary-fixed-dim" },
  { value: "50+", label: "Specializations", color: "text-tertiary-fixed-dim" },
  { value: "100%", label: "Data Privacy", color: "text-primary-fixed" },
];

export default function HomeHighlightsDarkThree() {
  return (
    <section className="py-12 bg-surface-container-lowest/50 border-y border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`text-center ${index < STATS.length - 1 ? "md:border-r border-outline-variant/30" : ""}`}
          >
            <div className={`font-display-lg text-headline-lg ${stat.color}`}>{stat.value}</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
