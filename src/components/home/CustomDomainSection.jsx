export default function CustomDomainSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-14 shadow-window relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-blue-400 mb-2 inline-block">Professional Identity</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Connect Your Own .com Domain <br />
                <span className="font-serif font-normal italic text-slate-300">or Keep Your Free Subdomain.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Every plan includes our complimentary <span className="font-mono text-blue-300 font-bold">dr-yourname.docxio.com</span> subdomain for life. When you are ready, connect your own registered domain with zero server setup.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-300">
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-blue-400 text-[16px]">lock</span> Free 256-Bit SSL
                </span>
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-blue-400 text-[16px]">bolt</span> 1-Click DNS Propagation
                </span>
                <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-blue-400 text-[16px]">verified</span> Zero Server Maintenance
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4">
              <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-700/80">
                <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Free Included Option</span>
                <span className="text-sm font-mono font-bold text-blue-300">dr-tariqul.docxio.com</span>
              </div>
              <div className="flex justify-center text-slate-400">
                <span className="material-symbols-outlined text-[20px]">swap_vert</span>
              </div>
              <div className="p-3.5 bg-secondary text-white rounded-xl shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-blue-200 uppercase font-mono font-bold block">Your Custom Domain</span>
                  <span className="text-base font-mono font-bold text-white">www.drtariqul.com</span>
                </div>
                <span className="material-symbols-outlined text-white text-[24px]">verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
