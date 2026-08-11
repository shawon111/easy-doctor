export default function TreatmentsTwo() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-2">
            Specializations
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface italic">
            Signature Clinical Protocols
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md text-right">
          Every treatment is uniquely engineered to the biological profile of
          the individual patient.
        </p>
      </div>

      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 glass-card p-12 min-h-[400px] flex flex-col justify-end relative overflow-hidden group border-outline-variant shadow-md">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-[2000ms]"
            alt="High-contrast medical equipment shot."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB9u7mczd5j1pTng72G6DvLx7C_Kx6wJ4TyC2uP3iqsfTOLpUuKyGwqw_Y0uxNQ4liKtck5si65NfQpizmZooL6j2tr82hCGBseOjwneijHVtoantev4YsKjbDnHRuVFRHnqkDse3XvaFfbcEz0GV_FBCtmSGap0iVH8kDvv7GEnwmIr5rDPgepcsp2eVHrhuO7gYaDL7E2K8A3KC5fNLMb1JMecTo9oQvA5rLBNGjV4E8p65_gSv72A"
          />
          <div className="relative z-10 space-y-4">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Minimally Invasive Neuro-Regeneration
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
              Advanced protocols utilizing robotic precision and localized
              stem-cell delivery for cognitive restoration.
            </p>
            <a
              className="inline-flex items-center gap-2 text-primary font-label-caps text-label-caps hover:gap-4 transition-all"
              href="#"
            >
              Explore Procedure{" "}
              <span className="material-symbols-outlined">north_east</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-4 glass-card p-8 flex flex-col justify-between group border-outline-variant shadow-sm">
          <div className="w-full h-48 bg-surface-container rounded-lg mb-6 overflow-hidden">
            <img
              className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity"
              alt="Genomic illustration."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdRlGII0S6SiGvSN9OKxu3OgPZ438IC8ULONkjSeb7YIgvNtkpnhNbFWnbWpTM-NeomX_prMEW03XU28Mg6fHPvJZe7QxvWdwA0nh65spFQfqntZHAD2Xa1vGT5A8v10nb7S_V5Jb3OMSmfUMEb-N7OLq8HQulRYFEtezo0UOo1wZQvB37uL4exyaBy27tbWCFAaE9NjOQEPA5ZUQk5abLMzqrMeVS-cFU-9G0TM1s48d6hk4j-p87ag"
            />
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
              Genomic Profile Screening
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Deep genetic mapping to predict and prevent chronic vascular
              pathologies.
            </p>
            <a className="text-primary font-label-caps text-label-caps hover:underline" href="#">
              Learn More
            </a>
          </div>
        </div>

        <div className="md:col-span-4 glass-card p-8 group border-outline-variant shadow-sm">
          <div className="text-primary mb-6">
            <span className="material-symbols-outlined text-4xl">vital_signs</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
            Longevity Optimization
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A holistic, executive-level health management plan focusing on
            bio-markers and hormonal balance.
          </p>
        </div>

        <div className="md:col-span-8 glass-card p-8 flex items-center gap-8 group border-outline-variant shadow-sm">
          <div className="hidden sm:block w-48 h-48 rounded-lg overflow-hidden shrink-0 border border-outline-variant">
            <img
              className="w-full h-full object-cover"
              alt="High-end medical vials."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANlR6_GTLRQ5hdnA8hl-A654weJ8LGYcQTkNoHVe3fZ7BXo2meLy2mzZBzfgbkfcoQdVpkTOaLa_s_x4HBx_2zmJHNC-Z0k6O3PqLDzgD-rdGkn2gFNaerWAns27iZ3mLEKm9iBHn0P7jsg3knLf5XlqxzwrQPAYT_6GbMQGAUjHGlv9lropAYuTC9-7yX5q2b51SMpsfiqzGu0zOp12LWoN0OoqjccX2DQRbTK6VTWeIFSAeRYxKdWQ"
            />
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
              Executive Performance Medicine
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Custom nutritional and physiological engineering for
              high-performing professionals and athletes.
            </p>
            <button
              type="button"
              className="text-primary font-label-caps text-label-caps flex items-center gap-2"
            >
              Protocol Details{" "}
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
