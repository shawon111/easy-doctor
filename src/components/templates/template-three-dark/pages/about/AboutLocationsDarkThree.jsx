const LOCATIONS = [
  {
    city: "New York",
    subtitle: "Primary Clinical Hub",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAoe_QU6vHeoZOEKurGHiJ-Es8ppDRhnMjHB-h1p0seGJlWRvmjaIQB1kBZGxK8j9gmWR2KicP7OP_Wv2NCkovfvAA1KCOH4nw947TUPw1z78VXAvId7Naszq02yklFV-mRFtT08-oZZOq50OP1SwfZDz3yw5PQHVcHVaG5bqr3AkdG9A2BDMbET3KHY-nibl2mmzfMCZ7Vr4Pg1PWE6mHs-Ns6uKT6kQhmDLBlP_k75yLDLL1-R-_cQ",
  },
  {
    city: "London",
    subtitle: "Research & Diagnostics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVCuD_H29id8_ny3TW09hqw8dy1gjI-JEHg6t8uY14F3zjAA2GM2okKkDiTP8HCBk0LaCjUbz_joI96qLh2suxh3Hjz4yXebkqjxCzGpAztHUEHbfc6Ghw4b-CI1sSezZIUySe6SQ_S4bdhBhCZq8ITCFUV2-I47QjKiWXsC_tfdQd4MaqQ7bM1XeeFFmvYoI9hHTrCz35Xk_a9V_LgNN_EMgcn7rPC1OB3d7uG1eIf-pV-r3MeGM1KA",
  },
  {
    city: "Dubai",
    subtitle: "Specialist Wellness",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD00GB15BwSZWw414joB_zVDXuDTeeQqL4-xW-g2ue6fpv-YB2yKPWhXXLlMdPFUR4ZgsxcL7MtDY5zXv3CD3YLOREy2jsXFfq3W43DnrM7-d5KjWhdO-VZpqe66h8hB8RFUAdIto_lMdRhdYGGWCI-DOj2BEYpKwzpPdmRh7vRexWGWYpSeYEn6IUV1MPjJlme0PWuFW5wksQySwQW9X-ZKTRRvONZt1Cm7in_AGhSNX7InRcQ4X3z6A",
  },
  {
    city: "Tokyo",
    subtitle: "AI Innovation Center",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASfDfloxcOTUWTOQMw2pprbitk-T-4_REJ6pr3kNyKNWoLwMUL2vm0i07PENvRZ0jlPVh4xSteLGlCVOa1dWTKoRiE8d7zudDoyiQw1qs99kJSvDRA_HZ8nXP2VB1ncdKlkNwg7-BcfJrs6DJwUkbqsKDe3yjW9Tc6_EAGNnqLaNaL_WQ233anzaJGtT1QwQD-FKum0pLQGbgbTe8Zh2kk1-jc1z2FuFzgAWAz843vZDoef4mmbdBlwg",
  },
];

export default function AboutLocationsDarkThree() {
  return (
    <section className="py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-grow bg-outline-variant/30" />
          <h2 className="font-headline-md text-on-surface-variant shrink-0">Global Presence</h2>
          <div className="h-px flex-grow bg-outline-variant/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {LOCATIONS.map((location) => (
            <div key={location.city} className="relative h-64 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={location.city}
                src={location.image}
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h4 className="font-headline-md text-white">{location.city}</h4>
                <p className="text-primary-fixed text-sm">{location.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
