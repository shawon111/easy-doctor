export default function ArchitecturalValueStrip() {
  return (
    <section className="py-14 bg-white border-b border-slate-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="border-l-2 border-secondary pl-5">
            <div className="text-2xl font-black text-slate-900 tracking-tight">2 Minutes</div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Average Setup Time</p>
            <p className="text-sm text-slate-600 mt-1">Fill basic qualifications and go live immediately.</p>
          </div>
          <div className="border-l-2 border-slate-300 pl-5">
            <div className="text-2xl font-black text-slate-900 tracking-tight">Zero Code</div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">No Developers</p>
            <p className="text-sm text-slate-600 mt-1">Update visiting schedules yourself without a tech agency.</p>
          </div>
          <div className="border-l-2 border-secondary pl-5">
            <div className="text-2xl font-black text-slate-900 tracking-tight">100% Free</div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Included Subdomain</p>
            <p className="text-sm text-slate-600 mt-1">Get <span className="font-mono text-xs font-bold">yourname.docxio.site</span> on every active plan.</p>
          </div>
          <div className="border-l-2 border-slate-300 pl-5">
            <div className="text-2xl font-black text-slate-900 tracking-tight">6 Themes</div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Light &amp; Dark Editions</p>
            <p className="text-sm text-slate-600 mt-1">Tailored for cardiology, surgery, pediatrics &amp; general practice.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
