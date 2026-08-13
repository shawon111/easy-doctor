export default function AppointmentHeroTwoDark({ content = {} }) {
  return (
    <section className="relative pt-[120px] pb-20 px-5 md:px-16 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.2em]">
          {content.badge}
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
          {content.heading}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {content.body}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="#schedules"
            className="bg-primary text-on-primary px-8 py-4 rounded font-label-caps text-label-caps luxury-button-shadow transition-all"
          >
            View Visiting Hours
          </a>
          <a
            href="#whatsapp"
            className="border border-tertiary text-tertiary px-8 py-4 rounded font-label-caps text-label-caps luxury-button-shadow transition-all"
          >
            Instant WhatsApp Booking
          </a>
        </div>
      </div>
      <div className="gold-divider mt-20 opacity-50" />
    </section>
  );
}
