import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AppointmentHeroOneDark({ content = {}, isDemo = false }) {
  return (
    <SectionFadeOneDark className="relative py-[120px] px-5 md:px-16 overflow-hidden" isDemo={isDemo}>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="z-10">
          {content.badge ? (
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/10 border border-secondary-container text-secondary-container text-label-sm mb-6 font-bold tracking-widest">
              {content.badge}
            </span>
          ) : null}
          {content.heading ? (
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 text-on-background uppercase italic">
              {content.heading}
            </h1>
          ) : null}
          {content.body ? (
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl border-l-2 border-cobalt pl-6">
              {content.body}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-neon-mint text-on-secondary px-10 py-5 rounded-full font-label-md flex items-center gap-3 whatsapp-neon transition-all group"
              href="#whatsapp-section"
            >
              <span className="material-symbols-outlined text-2xl">chat</span>
              Book via WhatsApp
            </a>
            <a
              className="border border-outline text-on-surface px-10 py-5 rounded-full font-label-md hover:bg-surface-variant transition-all flex items-center gap-2"
              href="#schedule"
            >
              <span className="material-symbols-outlined">grid_view</span>
              View Schedules
            </a>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="rounded-xl overflow-hidden aspect-[4/5] relative border border-white/10 glass-card p-2">
            <img
              className="w-full h-full object-cover rounded-lg opacity-80"
              alt=""
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrI_-iJl8d3az-c3zTX2scS0feijBybba2fRXqjKnc2ZWzSgzq4vSt1Zf60XXveGwMrWd7uWP9SUfvzhmRC-4CfhHW6QBWVCg_XwGBITK4uQZuySo_ggYx3oyH-_pcU4Y5MrlYg-ZaY56SUfoZpn4hTGr5KGyYqnbwcnBr--V6F6gKqiTOiUiy2VXA0gaobkLSNBD59u5GlPDCqss1F6YUyPaArGTiWEqp6UHLaauteUk_E5CSagFPXg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cobalt/10 rounded-full blur-[120px] -z-10" aria-hidden="true" />
    </SectionFadeOneDark>
  );
}
