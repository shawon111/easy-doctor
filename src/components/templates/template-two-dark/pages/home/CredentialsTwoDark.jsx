const CREDENTIALS = [
  { icon: "school", title: "Harvard Medical", subtitle: "Doctorate of Medicine" },
  { icon: "workspace_premium", title: "FRCP London", subtitle: "Fellowship of Royal College" },
  { icon: "clinical_notes", title: "200+ Publications", subtitle: "Precision Oncology Research" },
  { icon: "award_star", title: "Global Board", subtitle: "International Surgery Guild" },
];

export default function CredentialsTwoDark() {
  return (
    <section className="py-[120px] px-5 md:px-16 bg-surface-container-lowest/50">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-4 italic">Distinguished Pedigree</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Foundational excellence built upon the world&apos;s leading medical institutions and decades of clinical
          mastery.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {CREDENTIALS.map((item) => (
          <div
            key={item.title}
            className="glass-card p-8 text-center flex flex-col items-center group hover:border-tertiary/50 transition-all duration-500"
          >
            <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-tertiary mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            </div>
            <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.title}</h3>
            <p className="text-[14px] font-body-md text-on-surface-variant">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
