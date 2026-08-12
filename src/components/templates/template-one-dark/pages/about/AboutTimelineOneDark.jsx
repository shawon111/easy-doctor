import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AboutTimelineOneDark() {
  return (
    <SectionFadeOneDark className="py-32 px-6 md:px-10 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Academic &amp; Professional Journey</h2>
          <p className="text-on-surface-variant mt-3 text-body-lg">A legacy of excellence and continuous learning.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-secondary-fixed to-tertiary hidden md:block" />
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:text-right">
                <div className="glass-container p-8 rounded-2xl md:ml-auto md:max-w-md inline-block text-left">
                  <h4 className="font-headline-md text-headline-md text-primary mb-2">Medical Doctorate</h4>
                  <p className="text-body-md text-on-surface-variant font-medium">Johns Hopkins University School of Medicine</p>
                  <p className="mt-4 text-on-surface-variant/80">
                    Graduated with high honors, specializing in advanced physiological systems.
                  </p>
                </div>
              </div>
              <div className="z-10 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-on-primary glow-node border-4 border-background">
                <span className="material-symbols-outlined">school</span>
              </div>
              <div className="md:w-1/2">
                <p className="text-label-md font-label-md text-primary uppercase tracking-widest">2005 — 2009</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2 text-left">
                <div className="glass-container p-8 rounded-2xl md:mr-auto md:max-w-md inline-block text-left border-secondary-fixed/10">
                  <h4 className="font-headline-md text-headline-md text-secondary-fixed mb-2">Surgical Residency</h4>
                  <p className="text-body-md text-on-surface-variant font-medium">Mayo Clinic Graduate School of Medical Education</p>
                  <p className="mt-4 text-on-surface-variant/80">
                    Focused on minimally invasive techniques and robotic-assisted surgery.
                  </p>
                </div>
              </div>
              <div className="z-10 w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary glow-node-mint border-4 border-background">
                <span className="material-symbols-outlined">clinical_notes</span>
              </div>
              <div className="md:w-1/2 md:text-right">
                <p className="text-label-md font-label-md text-secondary-fixed uppercase tracking-widest">2009 — 2014</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:text-right">
                <div className="glass-container p-8 rounded-2xl md:ml-auto md:max-w-md inline-block text-left border-tertiary/10">
                  <h4 className="font-headline-md text-headline-md text-tertiary mb-2">Senior Fellowship</h4>
                  <p className="text-body-md text-on-surface-variant font-medium">Stanford University Medical Center</p>
                  <p className="mt-4 text-on-surface-variant/80">
                    Advanced fellowship in specialized regenerative medicine and patient recovery.
                  </p>
                </div>
              </div>
              <div
                className="z-10 w-14 h-14 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary glow-node border-4 border-background"
                style={{ boxShadow: "0 0 20px rgba(209, 188, 255, 0.4)" }}
              >
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <div className="md:w-1/2">
                <p className="text-label-md font-label-md text-tertiary uppercase tracking-widest">2014 — 2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
