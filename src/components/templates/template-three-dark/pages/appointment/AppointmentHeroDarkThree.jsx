export default function AppointmentHeroDarkThree({ content = {} }) {
  return (
    <header className="mb-16 text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
        <span className="font-label-sm text-label-sm uppercase tracking-widest">{content.badge}</span>
      </div>
      <h1 className="font-display-lg text-display-lg text-on-surface mb-6">{content.heading}</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{content.body}</p>
    </header>
  );
}
