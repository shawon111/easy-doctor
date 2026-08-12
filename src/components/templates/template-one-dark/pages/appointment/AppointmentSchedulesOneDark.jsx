import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AppointmentSchedulesOneDark() {
  return (
    <SectionFadeOneDark
      id="schedule"
      className="py-[120px] px-5 md:px-16 bg-surface-container-lowest"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-background uppercase italic">
              Clinic <span className="text-neon-mint">Nodes</span>
            </h2>
            <p className="font-label-md text-on-surface-variant mt-2 tracking-widest">GEO-LOCATION STATUS & OPERATING HOURS</p>
          </div>
          <div className="h-[1px] flex-grow bg-outline-variant/20 mx-8 hidden md:block" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-10 rounded-xl border border-neon-mint/30 flex flex-col h-full hover:border-neon-mint transition-all hover:bg-surface-container relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-label-sm text-neon-mint/30 group-hover:text-neon-mint transition-colors">
              NODE_001
            </div>
            <div className="mb-10">
              <h3 className="font-headline-md text-headline-md text-neon-mint mb-2">Northside Specialist Center</h3>
              <p className="text-on-surface-variant font-label-md flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span>
                122 MEDICAL PARKWAY, NORTH DISTRICT
              </p>
            </div>
            <div className="space-y-4 flex-grow font-label-md uppercase tracking-tight">
              <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                <span className="text-on-surface/60">MON - FRI</span>
                <span className="text-on-surface font-bold">09:00 - 17:00</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                <span className="text-on-surface/60">SATURDAY</span>
                <span className="text-on-surface font-bold">10:00 - 14:00</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="text-error/50">SUNDAY</span>
                <span className="text-error font-bold italic">OFFLINE</span>
              </div>
            </div>
            <button
              type="button"
              className="mt-10 w-full py-5 rounded-full border border-neon-mint text-neon-mint font-label-md hover:bg-neon-mint hover:text-on-secondary transition-all uppercase tracking-widest"
            >
              GET COORDINATES
            </button>
          </div>
          <div className="bg-surface-container-low p-10 rounded-xl border border-cobalt/30 flex flex-col h-full hover:border-cobalt transition-all hover:bg-surface-container relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-label-sm text-cobalt/30 group-hover:text-cobalt transition-colors">
              NODE_002
            </div>
            <div className="mb-10">
              <h3 className="font-headline-md text-headline-md text-cobalt mb-2">City Heart Medical Plaza</h3>
              <p className="text-on-surface-variant font-label-md flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span>
                SUITE 405, DOWNTOWN PROF. CENTER
              </p>
            </div>
            <div className="space-y-4 flex-grow font-label-md uppercase tracking-tight">
              <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                <span className="text-on-surface/60">MON & WED</span>
                <span className="text-on-surface font-bold">18:00 - 21:00</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                <span className="text-on-surface/60">TUE & THU</span>
                <span className="text-on-surface font-bold italic">REQ_ONLY</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="text-error/50">FRI - SUN</span>
                <span className="text-error font-bold italic">OFFLINE</span>
              </div>
            </div>
            <button
              type="button"
              className="mt-10 w-full py-5 rounded-full border border-cobalt text-cobalt font-label-md hover:bg-cobalt hover:text-white transition-all uppercase tracking-widest"
            >
              GET COORDINATES
            </button>
          </div>
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
