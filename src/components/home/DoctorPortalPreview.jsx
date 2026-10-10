import Image from "next/image";
import dashviewImg from "@/assets/docxio -dashboard.png";

export default function DoctorPortalPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-slate-border" id="dashboard-preview">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-secondary bg-secondary-soft px-3 py-1 rounded-full border border-secondary/20">The Doctor Portal</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-heading tracking-tight mt-4 mb-4">
            Manage Your Website <br />
            <span className="font-serif font-normal italic text-slate-700">Without the Technical Hassle.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            Once published, keep chamber schedules updated, monitor Google presence completeness, and review patient inquiries from your dedicated backoffice.
          </p>
        </div>
        {/* Authentic Browser Centerpiece */}
        <div className="relative">
          {/* Ambient Glow Behind Browser */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-4/5 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
          {/* Floating Badges Around Dashboard Centerpiece */}
          <div className="hidden xl:flex absolute -left-6 top-28 bg-white p-4 rounded-xl shadow-window border border-slate-200 items-center gap-3 z-20 max-w-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">public</span>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Website Status: Online</div>
              <div className="text-[11px] text-slate-500">Fast local hosting in Bangladesh</div>
            </div>
          </div>
          <div className="hidden xl:flex absolute -right-6 top-36 bg-white p-4 rounded-xl shadow-window border border-slate-200 items-center gap-3 z-20 max-w-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">trending_up</span>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">95% Google Presence</div>
              <div className="text-[11px] text-slate-500">Rich Schema metadata generated</div>
            </div>
          </div>
          <div className="hidden xl:flex absolute -left-4 bottom-24 bg-white p-4 rounded-xl shadow-window border border-slate-200 items-center gap-3 z-20 max-w-xs">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">event_available</span>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Chamber Bookings</div>
              <div className="text-[11px] text-slate-500">Bliss Hospital &amp; Popular serials</div>
            </div>
          </div>
          {/* Big macOS Desktop Window */}
          <div className="rounded-2xl border border-slate-300 shadow-window overflow-hidden bg-slate-950">
            {/* Top Window Chrome Bar */}
            <div className="bg-slate-900 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <div className="ml-4 bg-slate-800 text-slate-300 px-4 py-1 rounded-md text-xs font-mono flex items-center gap-2 border border-slate-700">
                  <span className="material-symbols-outlined text-[14px] text-emerald-400">lock</span>
                  https://app.docxio.com/dashboard
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Dr. Hakim Ahmmed (Active Session)
              </div>
            </div>
            {/* Authentic Docxio Dashboard Screenshot */}
            <div className="w-full bg-slate-950 flex items-center justify-center overflow-hidden">
              <Image
                alt="Docxio Doctor Portal Dashboard - Live Practice Management"
                className="w-full h-auto object-cover"
                src={dashviewImg}
                width={1200}
                height={800}
              />
            </div>
          </div>
          {/* Feature Strip Beneath Dashboard */}
          <div className="mt-8 bg-surface-subtle p-6 rounded-2xl border border-slate-border grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Website Management</p>
              <p className="text-sm font-bold text-slate-900 mt-1">Update Practice Details</p>
              <p className="text-xs text-slate-500 mt-0.5">Manage chamber information</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Appointment Inquiries</p>
              <p className="text-sm font-bold text-slate-900 mt-1">Direct Chamber Intake</p>
              <p className="text-xs text-slate-500 mt-0.5">WhatsApp and telephone calls</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Google Business</p>
              <p className="text-sm font-bold text-slate-900 mt-1">Google Business Guidance</p>
              <p className="text-xs text-slate-500 mt-0.5">Set up your business presence</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Account Settings</p>
              <p className="text-sm font-bold text-slate-900 mt-1">Profile and Security</p>
              <p className="text-xs text-slate-500 mt-0.5">Manage your account preferences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
