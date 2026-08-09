import Reveal from "@/components/templates/ui/Reveal";


export default function AppointmentHeroOne() {
  return (
    <Reveal
      as="section"
      className="relative py-section-padding px-margin-mobile md:px-margin-desktop overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-caps mb-stack-sm">
            DIRECT SCHEDULING
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-md text-on-background">
            Book Your Consultation Today.
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
            Experience clinical elegance through our streamlined booking process. Connect
            directly with our team via WhatsApp for personalized scheduling and
            professional care.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-button flex items-center gap-2 hover:shadow-lg transition-all group"
              href="#whatsapp-section"
            >
              <span className="material-symbols-outlined">chat</span>
              Book via WhatsApp
            </a>
            <a
              className="border border-outline-variant text-on-surface-variant px-8 py-4 rounded-xl font-button hover:bg-surface-variant transition-all"
              href="#schedule"
            >
              View Schedules
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="rounded-3xl overflow-hidden shadow-[0px_20px_40px_rgba(30,41,59,0.08)] aspect-[4/5] relative">
            <img
              className="w-full h-full object-cover"
              alt="A premium bright clinical medical office interior with floor-to-ceiling windows and minimalist designer furniture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrI_-iJl8d3az-c3zTX2scS0feijBybba2fRXqjKnc2ZWzSgzq4vSt1Zf60XXveGwMrWd7uWP9SUfvzhmRC-4CfhHW6QBWVCg_XwGBITK4uQZuySo_ggYx3oyH-_pcU4Y5MrlYg-ZaY56SUfoZpn4hTGr5KGyYqnbwcnBr--V6F6gKqiTOiUiy2VXA0gaobkLSNBD59u5GlPDCqss1F6YUyPaArGTiWEqp6UHLaauteUk_E5CSagFPXg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Atmospheric Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </Reveal>
  );
}
