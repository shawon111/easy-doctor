import Reveal from "@/components/templates/ui/Reveal";


const CREDENTIAL_TAGS = [
  { icon: "verified", label: "Precision Medicine" },
  { icon: "psychology", label: "Holistic Diagnostics" },
  { icon: "favorite", label: "Compassionate Care" },
];

const LANGUAGES = ["English", "Spanish", "French"];

export default function AboutBioStatsOne() {
  return (
    <Reveal
      as="section"
      className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Bio Block */}
          <div className="md:col-span-8 bg-surface-container-lowest p-stack-lg rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)] border border-surface-variant">
            <h3 className="font-headline-lg text-headline-lg mb-stack-md text-on-surface">
              A Patient-Centric Philosophy
            </h3>
            <div className="space-y-stack-md text-body-lg font-body-lg text-on-surface-variant">
              <p>
                Dr. Julian Vance represents the next generation of clinical leadership. His
                journey began with a simple observation: patients thrive when they feel heard,
                understood, and respected. This insight led to a career dedicated to &lsquo;Clinical
                Elegance&rsquo;&mdash;a practice model that removes the friction of bureaucracy and
                replaces it with streamlined, high-tech care delivered with a human touch.
              </p>
              <p>
                After graduating top of his class, Dr. Vance spent years refining his surgical
                techniques and diagnostic protocols in some of the world&apos;s most demanding
                medical environments. Today, he integrates advanced AI-driven diagnostics with
                traditional clinical wisdom to provide outcomes that are as precise as they are
                personal.
              </p>
              <div className="flex flex-wrap gap-stack-sm pt-4">
                {CREDENTIAL_TAGS.map((tag) => (
                  <span
                    key={tag.label}
                    className="bg-[#F0FDFA] text-[#0F766E] px-4 py-2 rounded-full font-label-caps text-label-caps flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">{tag.icon}</span>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Block */}
          <div className="md:col-span-4 space-y-gutter">
            <div className="bg-primary p-stack-md rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)] text-on-primary">
              <span className="material-symbols-outlined text-4xl mb-4">medical_services</span>
              <div className="text-4xl font-bold">4,200+</div>
              <div className="text-body-md opacity-80">Successful Procedures</div>
            </div>
            <div className="bg-secondary-container p-stack-md rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)] text-on-secondary-container">
              <span className="material-symbols-outlined text-4xl mb-4">groups</span>
              <div className="text-4xl font-bold">98%</div>
              <div className="text-body-md opacity-80">Patient Satisfaction Rate</div>
            </div>
            {/* Language Card */}
            <div className="bg-surface-container-high p-stack-md rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)]">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">
                Languages
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {LANGUAGES.map((lang) => (
                  <div className="flex items-center gap-2" key={lang}>
                    <span className="material-symbols-outlined text-primary">translate</span>
                    <span className="font-medium">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
