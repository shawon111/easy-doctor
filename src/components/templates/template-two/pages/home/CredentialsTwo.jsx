const CREDENTIALS = [
  {
    icon: "school",
    title: "Harvard Medical",
    detail: "Doctorate of Medicine",
  },
  {
    icon: "workspace_premium",
    title: "FRCP London",
    detail: "Fellowship of Royal College",
  },
  {
    icon: "clinical_notes",
    title: "200+ Publications",
    detail: "Precision Oncology Research",
  },
  {
    icon: "award_star",
    title: "Global Board",
    detail: "International Surgery Guild",
  },
];

export default function CredentialsTwo() {
  return (
    <section className="py-[120px] px-[20px] md:px-[64px] bg-[#f2f4f6]">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="dstwo-headline-md text-[#1a1c1e] mb-4 italic">
          Distinguished Pedigree
        </h2>
        <p className="dstwo-body-md text-[#44474e] max-w-2xl mx-auto">
          Foundational excellence built upon the world&apos;s leading medical
          institutions and decades of clinical mastery.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[24px]">
        {CREDENTIALS.map((item) => (
          <div
            key={item.title}
            className="dstwo-glass-card p-8 text-center flex flex-col items-center group hover:border-[#2563eb]/30 transition-all duration-500 shadow-sm"
          >
            <div className="w-12 h-12 bg-[#2563eb]/10 rounded-[8px] flex items-center justify-center text-[#2563eb] mb-4 group-hover:scale-110 transition-transform">
              <span className="dstwo-material-symbols text-2xl">{item.icon}</span>
            </div>
            <h3 className="dstwo-label-caps text-[#1a1c1e] mb-1">{item.title}</h3>
            <p className="text-[14px] dstwo-body-md text-[#44474e]">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
