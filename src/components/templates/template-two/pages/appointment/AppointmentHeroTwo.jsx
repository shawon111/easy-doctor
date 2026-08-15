export default function AppointmentHeroTwo({ content = {} , isDemo = false}) {
  return (
    <section className="relative pt-[120px] pb-20 px-[20px] md:px-[64px] text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="apttwo-label-caps text-[#d97706] uppercase tracking-[0.2em]">
          {content.badge}
        </span>
        <h1 className="apttwo-display-lg-mobile text-[#0f172a]">{content.heading}</h1>
        <p className="apttwo-body-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
          {content.body}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            className="bg-[#2563eb] text-white px-8 py-4 rounded-[8px] apttwo-label-caps apttwo-luxury-btn-shadow transition-all"
            href="#schedules"
          >
            View Visiting Hours
          </a>
          <a
            className="border border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-[8px] apttwo-label-caps apttwo-luxury-btn-shadow transition-all hover:bg-[#2563eb]/5"
            href="#whatsapp"
          >
            Instant WhatsApp Booking
          </a>
        </div>
      </div>
      <div className="apttwo-gold-divider mt-20 opacity-30" />
    </section>
  );
}
