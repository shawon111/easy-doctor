import SectionFadeOneDark from "../../ui/SectionFadeOneDark";

export default function AboutBioStatsOneDark({ content = {}, user = {}, isDemo = false }) {
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
    <SectionFadeOneDark className="py-32 px-6 md:px-10 mesh-gradient" isDemo={isDemo}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 glass-container p-12 rounded-[2rem]">
            {content.heading ? (
              <h3 className="font-headline-lg text-headline-lg mb-8 text-on-surface">{content.heading}</h3>
            ) : null}
            <div className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
              {bioParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-8">
            {stats[0] ? (
              <div className="bg-primary-container p-8 rounded-[2rem] text-on-primary-container">
                <span className="material-symbols-outlined text-4xl mb-4">medical_services</span>
                <div className="text-5xl font-bold font-headline-lg mb-1">{stats[0].value}</div>
                <div className="text-label-md font-label-md opacity-80 uppercase tracking-wider">{stats[0].label}</div>
              </div>
            ) : null}
            {stats[1] ? (
              <div className="bg-secondary-container p-8 rounded-[2rem] text-on-secondary-container">
                <span className="material-symbols-outlined text-4xl mb-4">groups</span>
                <div className="text-5xl font-bold font-headline-lg mb-1">{stats[1].value}</div>
                <div className="text-label-md font-label-md opacity-80 uppercase tracking-wider">{stats[1].label}</div>
              </div>
            ) : null}
            {languages.length > 0 ? (
              <div className="glass-container p-8 rounded-[2rem]">
                <h4 className="font-headline-md text-headline-md text-on-surface mb-6">Languages</h4>
                <div className="grid grid-cols-1 gap-4">
                  {languages.map((lang, index) => (
                    <div key={lang} className="flex items-center gap-3">
                      <span className={`material-symbols-outlined ${index === 0 ? "text-primary" : index === 1 ? "text-secondary-fixed" : "text-tertiary"}`}>
                        translate
                      </span>
                      <span className="font-medium text-on-surface">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SectionFadeOneDark>
  );
}
