import SectionFadeTwoDark from "../../ui/SectionFadeTwoDark";

const QUALIFICATIONS = [
  { icon: "verified_user", code: "ABIM", label: "Board Certified" },
  { icon: "workspace_premium", code: "FACO", label: "Fellow of Clinical Oncology" },
  { icon: "school", code: "PhD", label: "Molecular Genetics" },
  { icon: "public", code: "WHO", label: "Global Health Consultant" },
];

export default function AboutQualificationsTwoDark() {
  return (
    <SectionFadeTwoDark className="py-[120px] px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-headline-md text-headline-md mb-2">Qualifications &amp; Affiliations</h2>
        <p className="font-label-caps text-label-caps text-on-surface-variant">CERTIFIED EXCELLENCE</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {QUALIFICATIONS.map((item) => (
          <div
            key={item.code}
            className="glass-card p-8 rounded flex flex-col items-center text-center group hover:bg-white/5 transition-all"
          >
            <span className="material-symbols-outlined text-4xl text-tertiary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
              {item.icon}
            </span>
            <h5 className="font-label-caps text-label-caps mb-2">{item.code}</h5>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{item.label}</p>
          </div>
        ))}
      </div>
    </SectionFadeTwoDark>
  );
}
