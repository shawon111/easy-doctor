export default function ArchitecturalValueStrip() {
  return (
    <section className="py-14 bg-white border-b border-slate-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="border-l-2 border-secondary pl-5">
            <div className="text-2xl font-black text-slate-900 tracking-tight">About 2 Minutes</div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Get started</p>
            <p className="text-sm text-slate-600 mt-1">Start your website setup in a few guided steps.</p>
          </div>
          <div className="border-l-2 border-slate-300 pl-5">
            <div className="text-2xl font-black text-slate-900 tracking-tight">Zero Code</div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">No Developers</p>
            <p className="text-sm text-slate-600 mt-1">Update visiting schedules yourself without a tech agency.</p>
          </div>
          <div className="border-l-2 border-secondary pl-5">
            <div className="text-2xl font-black text-slate-900 tracking-tight">Docxio URL</div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Subdomain option</p>
            <p className="text-sm text-slate-600 mt-1">Choose <span className="font-mono text-xs font-bold">yourname.docxio.com</span> for your website.</p>
          </div>
          <div className="border-l-2 border-slate-300 pl-5">
            <div className="text-2xl font-black text-slate-900 tracking-tight">6 Themes</div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Light &amp; Dark Editions</p>
            <p className="text-sm text-slate-600 mt-1">Three designs, each available in light and dark styles.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
