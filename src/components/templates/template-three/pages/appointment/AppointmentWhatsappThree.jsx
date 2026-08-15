export default function AppointmentWhatsappThree({ content = {} , isDemo = false}) {
  return (
    <section className="mb-24 relative overflow-hidden rounded-3xl group">
      <div className="relative z-10 bg-white p-12 md:p-20 border border-outline-variant flex flex-col md:flex-row items-center gap-12 shadow-sm">
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-display-lg text-display-lg mb-6 text-on-surface">
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
                className="bg-[#25D366] text-white px-10 py-5 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 transition-all active:scale-95"
                href={content.whatsappUrl}
              >
                <span className="material-symbols-outlined t3-icon-filled text-[18px]">chat</span>
                {content.cta}
              </a>
            )}
            {content.phoneDisplay && (
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-outline-variant bg-surface-container-low">
                <span className="material-symbols-outlined text-primary text-2xl">call</span>
                <span className="font-label-sm text-label-sm">{content.phoneDisplay}</span>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:block w-72 h-72 rounded-full border-4 border-dashed border-primary/20 animate-[spin_20s_linear_infinite] p-4">
          <div className="w-full h-full rounded-full bg-primary/5 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[80px]">support_agent</span>
          </div>
        </div>
      </div>
    </section>
  );
}
