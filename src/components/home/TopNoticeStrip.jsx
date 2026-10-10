export default function TopNoticeStrip() {
  return (
    <div className="bg-primary text-white/80 py-2.5 px-4 text-xs font-medium border-b border-white/10 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold text-[10px] tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Available in Bangladesh
          </span>
          <span className="text-white/70">Create a website for your medical practice with Docxio.</span>
        </div>
        <div className="flex items-center gap-5 text-[11px] text-white/60">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-blue-400">medical_services</span> Doctor Website Templates
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-blue-400">language</span> Docxio Subdomain Option
          </span>
        </div>
      </div>
    </div>
  );
}
