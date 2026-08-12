import RevealOneDark from "../../ui/RevealOneDark";

const STANDARDS = [
  {
    icon: "schedule",
    iconClass: "text-primary",
    title: "Zero Waiting Time",
    description: "Your time is respected with prompt, priority scheduling.",
  },
  {
    icon: "security",
    iconClass: "text-secondary-fixed",
    title: "Absolute Privacy",
    description: "Confidential medical records and private entry points.",
  },
  {
    icon: "biotech",
    iconClass: "text-tertiary",
    title: "Modern Equipment",
    description: "Access to the latest FDA-approved diagnostic technology.",
  },
  {
    icon: "support_agent",
    iconClass: "text-primary-container",
    title: "24/7 Portal Access",
    description: "Secure messaging for immediate health concerns.",
  },
];

export default function WhyChooseUsOneDark() {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <RevealOneDark>
            <h2 className="font-headline-lg text-5xl text-secondary mb-12 tracking-tight">The Julian Vance Standard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {STANDARDS.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className={item.iconClass}>
                    <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOneDark>

          <RevealOneDark className="delay-200">
            <div className="glass-card rounded-3xl p-16 relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16" />
              <h3 className="font-headline-md text-3xl text-secondary mb-8 relative z-10 leading-tight">
                Clinical Excellence Meets Personal Care
              </h3>
              <p className="font-body-lg text-xl text-on-surface-variant mb-10 relative z-10 italic leading-relaxed opacity-90">
                &quot;In three decades of practice, I&apos;ve learned that the most effective tool in medicine isn&apos;t a laser or a
                drug—it&apos;s the ability to listen.&quot;
              </p>
              <div className="flex items-center gap-6 relative z-10">
                <img
                  className="h-10 invert brightness-100"
                  alt="Dr. Julian Vance Signature"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcwDvF6ipEsG6rPGUBILKJXbJjzyOhIcdWSJu4QpL1J7CvTwFEk1ZPUjS803dWZf_ES7Sfl6Svye2Vr7_a4isSrTmfQwVCoq455xpIyZVpPzlUU36D7Q6r9CY1iPJGHBthUCwmMYaWh6ZB-ljDReIaKOOPsN4wRjWTHO-N8K_QP3Tz9K3xZygB7sH1guNSWnVIMUGAFEqyo2Q24LcJw3yjuMEIGkiLMO6OHyMZVUIIJsWl5HyWOAHi7w"
                />
                <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">DR. JULIAN VANCE</p>
              </div>
            </div>
          </RevealOneDark>
        </div>
      </div>
    </section>
  );
}
