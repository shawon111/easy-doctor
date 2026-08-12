export default function AppointmentWhatsappDarkThree() {
  return (
    <section className="mb-24 relative overflow-hidden rounded-3xl group">
      <div className="relative z-10 t3d-whatsapp-card p-12 md:p-20 border border-outline-variant/30 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-display-lg text-display-lg mb-6">
            Quick Appointment <br className="hidden md:block" /> via WhatsApp
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
            Prefer a faster route? Skip the forms and chat directly with our medical concierge team to secure your
            slot instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              className="bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-secondary/10 hover:shadow-secondary/20 transition-all active:scale-95"
              href="https://wa.me/dr-medlink"
            >
              <span className="material-symbols-outlined t3d-icon-filled text-[18px]">chat</span>
              Open WhatsApp
            </a>
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-outline-variant/40 bg-surface-container-lowest/50 backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary">call</span>
              <span className="font-label-sm text-label-sm">+1 (555) DR-MEDLK</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-72 h-72 rounded-full border-4 border-dashed border-primary/20 animate-[spin_20s_linear_infinite] p-4">
          <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[80px]">support_agent</span>
          </div>
        </div>
      </div>
    </section>
  );
}
