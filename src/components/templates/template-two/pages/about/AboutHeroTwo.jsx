import RevealTwo from "./RevealTwo";

const LANGUAGES = ["English", "German", "French"];

export default function AboutHeroTwo() {
  return (
    <section className="relative min-h-[716px] flex items-center overflow-hidden pt-20">
      <RevealTwo className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-[24px] px-[20px] md:px-[64px] max-w-[1200px] mx-auto w-full items-center">
        <div className="md:col-span-7">
          <span className="abtwo-label-caps text-[#6e5d16] tracking-[0.2em] mb-4 block">
            EXCELLENCE IN PRECISION MEDICINE
          </span>
          <h1 className="abtwo-display-lg mb-6 text-[#1a2026]">
            About Dr. Julian Sterling
          </h1>
          <p className="abtwo-body-lg text-[#45464d] max-w-xl mb-8">
            Redefining the standards of specialized care through a legacy of
            clinical mastery, academic rigor, and an unwavering commitment to
            patient longevity.
          </p>

          <div className="flex flex-wrap gap-4">
            {LANGUAGES.map((lang) => (
              <div
                key={lang}
                className="flex items-center gap-2 bg-[#eceef0] px-4 py-2 rounded-full border border-[#c6c6cd]"
              >
                <span
                  className="abtwo-material-symbols text-[#6e5d16]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  language
                </span>
                <span className="abtwo-label-caps text-[#1a2026]">{lang}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 relative mt-12 md:mt-0">
          <div className="aspect-[4/5] bg-[#e6e8ea] p-2 rounded-[8px] relative overflow-hidden group shadow-lg">
            <img
              className="w-full h-full object-cover rounded-[8px] shadow-md transition-transform duration-700 group-hover:scale-105"
              alt="A professional portrait of an executive male specialist doctor in his early 50s, wearing a bespoke navy suit and a white clinical coat."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6E94N4ihuxDnC1fKJmF2jN7fNcNgbm2BYOBjiBjvoKhWAFtOdRackfeSEGaNAOqXUZGYze11OX_DLJd1Jn2X1St5Sbj0paJDGp7UmiqbqHl9nwGWGoLDq1wfFeoPiXG3NL-Gn05fI172zWcz7P9k0A8adGWqtO8OeWoU-cTW1icWJKgzCELXF_t2Y4vMoZejyWfVCdojwZp9UKP6nvs-RF8rScj6x3vaMn9omwEE31xVTrLn5XmaLEA"
            />
          </div>
        </div>
      </RevealTwo>
    </section>
  );
}
