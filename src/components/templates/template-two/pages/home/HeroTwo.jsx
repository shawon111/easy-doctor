export default function HeroTwo() {
  return (
    <section className="relative min-h-[921px] flex items-center pt-20 px-[20px] md:px-[64px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center z-10">
        <div className="md:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 dstwo-glass-card rounded-full border-[#c4c6cf]">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="dstwo-label-caps uppercase tracking-widest text-[#44474e]">
              Exclusive Precision Care
            </span>
          </div>

          <h1 className="dstwo-display-lg text-[#1a1c1e] leading-tight">
            Dr. Julian Vance <br />
            <span className="dstwo-gold-text-gradient dstwo-headline-md italic">
              MD, PhD, FRCP (Lond)
            </span>
          </h1>

          <p className="dstwo-body-lg text-[#44474e] max-w-xl">
            Pioneering executive medicine with a focus on longevity, cognitive
            performance, and bespoke surgical precision. Serving the world&apos;s
            most discerning patients with uncompromising excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-[#2563eb] text-white dstwo-label-caps rounded-[8px] dstwo-luxury-btn-hover transition-all flex items-center gap-2 group">
              Schedule Consultation
              <span className="dstwo-material-symbols transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
            <button className="px-8 py-4 border border-[#74777f] text-[#1a1c1e] dstwo-label-caps rounded-[8px] hover:bg-[#eceef0] transition-all">
              View Clinical Registry
            </button>
          </div>
        </div>

        <div className="md:col-span-5 relative group mt-12 md:mt-0">
          <div className="absolute -inset-4 bg-[#2563eb]/5 rounded-[16px] blur-3xl group-hover:bg-[#2563eb]/10 transition-all duration-700" />
          <div className="relative rounded-[16px] overflow-hidden dstwo-glass-card p-2 border-[#c4c6cf] shadow-lg">
            <img
              className="w-full aspect-[4/5] object-cover rounded-[8px]"
              alt="A cinematic, high-end professional portrait of a distinguished male specialist doctor in a light, luxury medical suite."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXxKwFcSECIyn9rW8o_uDKX37xePMxOsbGbwQgrLqtpWtQKANCJnZQqNHdmWfnFbCdUqTyykWUoNvrAeUWb85qQ6-TPkWREcdFn9eRACqOH2u7GQGSo79HfitvGpnPTGxeJzL0lb4_5WtxMioB_Tq_fum1baQMDk7JEkK6-ew6rOWcpBMngJGUd0eW8XUksnh2HbYT47otp692cTcjl_EG01vZ3TBhX6oW7vqHQDw-N_EHaAcxoAKT1w"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
