import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AboutBioStatsOneDark() {
  return (
    <SectionFadeOneDark className="py-32 px-6 md:px-10 mesh-gradient">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 glass-container p-12 rounded-[2rem]">
            <h3 className="font-headline-lg text-headline-lg mb-8 text-on-surface">A Patient-Centric Philosophy</h3>
            <div className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
              <p>
                Dr. Julian Vance represents the next generation of clinical leadership. His journey began with a simple
                observation: patients thrive when they feel heard, understood, and respected. This insight led to a
                career dedicated to &apos;Clinical Elegance&apos;—a practice model that removes the friction of
                bureaucracy and replaces it with streamlined, high-tech care delivered with a human touch.
              </p>
              <p>
                After graduating top of his class, Dr. Vance spent years refining his surgical techniques and diagnostic
                protocols in some of the world&apos;s most demanding medical environments. Today, he integrates advanced
                AI-driven diagnostics with traditional clinical wisdom to provide outcomes that are as precise as they are
                personal.
              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <span className="bg-primary/10 text-primary px-5 py-2 rounded-full font-label-sm text-label-sm flex items-center gap-2 border border-primary/20">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  Precision Medicine
                </span>
                <span className="bg-secondary/10 text-secondary-fixed-dim px-5 py-2 rounded-full font-label-sm text-label-sm flex items-center gap-2 border border-secondary-fixed-dim/20">
                  <span className="material-symbols-outlined text-sm">psychology</span>
                  Holistic Diagnostics
                </span>
                <span className="bg-tertiary/10 text-tertiary px-5 py-2 rounded-full font-label-sm text-label-sm flex items-center gap-2 border border-tertiary/20">
                  <span className="material-symbols-outlined text-sm">favorite</span>
                  Compassionate Care
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="bg-primary-container p-8 rounded-[2rem] text-on-primary-container">
              <span className="material-symbols-outlined text-4xl mb-4">medical_services</span>
              <div className="text-5xl font-bold font-headline-lg mb-1">4,200+</div>
              <div className="text-label-md font-label-md opacity-80 uppercase tracking-wider">Successful Procedures</div>
            </div>
            <div className="bg-secondary-container p-8 rounded-[2rem] text-on-secondary-container">
              <span className="material-symbols-outlined text-4xl mb-4">groups</span>
              <div className="text-5xl font-bold font-headline-lg mb-1">98%</div>
              <div className="text-label-md font-label-md opacity-80 uppercase tracking-wider">Patient Satisfaction</div>
            </div>
            <div className="glass-container p-8 rounded-[2rem]">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-6">Languages</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">translate</span>
                  <span className="font-medium text-on-surface">English (Native)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-fixed">translate</span>
                  <span className="font-medium text-on-surface">Spanish (Fluent)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary">translate</span>
                  <span className="font-medium text-on-surface">French (Professional)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
