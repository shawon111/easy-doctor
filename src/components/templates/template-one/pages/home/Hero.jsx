import Reveal from "@/components/templates/ui/Reveal";

export default function HeroOne() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface-container-lowest">
      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full grid grid-cols-1 md:grid-cols-2 gap-gutter items-center py-stack-lg">
        <Reveal>
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#F0FDFA] text-[#0F766E] font-label-caps text-label-caps mb-stack-sm">
            PREMIUM CONCIERGE MEDICINE
          </div>
          <h1 className="font-display-lg text-display-lg text-on-background mb-stack-md leading-tight">
            Expert Care with a <span className="text-primary">Personal Touch</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-lg">
            Dr. Julian Vance combines thirty years of clinical excellence with a
            human-centric approach to modern diagnostics and holistic wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-button text-button hover:bg-primary/90 transition-all soft-bloom-lg"
            >
              Book Appointment
            </button>
            <button
              type="button"
              className="border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-button text-button hover:bg-surface transition-all"
            >
              View Our Clinic
            </button>
          </div>
        </Reveal>

        <Reveal className="relative delay-200">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden soft-bloom-lg border-8 border-white">
            <img
              className="w-full h-full object-cover"
              alt="A professional portrait of Dr. Julian Vance in a minimalist medical office"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTyxeutP7i3bLEgOgReazJq3fL8gL_0nt-ZGg7tXDH26cuyHhAjEY_V0Ht4_Q_h-_sIcfCK5Kj2zn0tLJfkGSkLidk_x-eIwZsKtHSYGri4uoLUvsz1-T8u9X9JwdfPUma0Qi01jqaPZAT5EBM3U-Z-DmmCQKReacdwWCpkwAeBv00vHIfaxo4ylI1UmYSfO0kddOLLOBy8N0vd4ouvwUeTowUmhLHTDT3n5HEsHysG_2WybeexPH1cw"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl soft-bloom-lg border border-surface-variant hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-headline-md font-bold text-on-surface">15+ Years</p>
                <p className="text-label-caps font-label-caps text-on-surface-variant">
                  CLINICAL EXPERIENCE
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
