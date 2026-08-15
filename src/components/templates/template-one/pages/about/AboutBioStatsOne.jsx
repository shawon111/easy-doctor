import Reveal from "@/components/templates/ui/Reveal";

export default function AboutBioStatsOne({ content = {}, user = {}, isDemo = false }) {
  const stats = content.stats || [];
  const languages = isDemo ? content.languages || [] : user.languages || [];
  const bioParagraphs = isDemo
    ? content.body
      ? content.body.split("\n\n")
      : []
    : user.bio
      ? user.bio.split("\n\n")
      : [];

  return (
    <Reveal
      as="section"
      className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 bg-surface-container-lowest p-stack-lg rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)] border border-surface-variant">
            {content.heading ? (
              <h3 className="font-headline-lg text-headline-lg mb-stack-md text-on-surface">
                {content.heading}
              </h3>
            ) : null}
            <div className="space-y-stack-md text-body-lg font-body-lg text-on-surface-variant">
              {bioParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 space-y-gutter">
            {stats[0] ? (
              <div className="bg-primary p-stack-md rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)] text-on-primary">
                <span className="material-symbols-outlined text-4xl mb-4">medical_services</span>
                <div className="text-4xl font-bold">{stats[0].value}</div>
                <div className="text-body-md opacity-80">{stats[0].label}</div>
              </div>
            ) : null}
            {stats[1] ? (
              <div className="bg-secondary-container p-stack-md rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)] text-on-secondary-container">
                <span className="material-symbols-outlined text-4xl mb-4">groups</span>
                <div className="text-4xl font-bold">{stats[1].value}</div>
                <div className="text-body-md opacity-80">{stats[1].label}</div>
              </div>
            ) : null}
            {languages.length > 0 ? (
              <div className="bg-surface-container-high p-stack-md rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)]">
                <h4 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">
                  Languages
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((lang) => (
                    <div className="flex items-center gap-2" key={lang}>
                      <span className="material-symbols-outlined text-primary">translate</span>
                      <span className="font-medium">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
