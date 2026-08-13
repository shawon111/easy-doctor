export default function AppointmentWhatsappDarkThree({ content = {} }) {
  return (
    <section className="mb-24 relative overflow-hidden rounded-3xl group">
      <div className="relative z-10 t3d-whatsapp-card p-12 md:p-20 border border-outline-variant/30 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-display-lg text-display-lg mb-6">
            {content.heading?.split(" via ").length > 1 ? (
              <>
                {content.heading.split(" via ")[0]} <br className="hidden md:block" /> via{" "}
                {content.heading.split(" via ")[1]}
              </>
            ) : (
              content.heading
            )}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">{content.body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {content.whatsappUrl && (
              <a
                className="bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-secondary/10 hover:shadow-secondary/20 transition-all active:scale-95"
                href={content.whatsappUrl}
              >
                <span className="material-symbols-outlined t3d-icon-filled text-[18px]">chat</span>
                {content.cta}
              </a>
            )}
            {content.phoneDisplay && (
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-outline-variant/40 bg-surface-container-lowest/50 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary">call</span>
                <span className="font-label-sm text-label-sm">{content.phoneDisplay}</span>
              </div>
            )}
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
