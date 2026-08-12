import Link from "next/link";

const CHECKLIST = [
  "Evidence-based clinical protocols developed by experts.",
  "Integrated digital health records for seamless tracking.",
  "Dedicated health concierge for personalized navigation.",
];

const IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw5Hvx37mfI6KjBlz0tFx2A2CIzLDb0cCDaNRXeFvLpQ6AI3ML4ZQrDz1tUN9qiHc8BjckszTwcRa9lmiH-iFd8IkfvVS1Znz1n_rh7maxNbO1lC_CBV3yNFamTDsM57rclHT2x8LKfIe12LWjyxu6AL2xdQD1dZ35EWzsE1IzozFMaqamYRHcZUUfTAdTbQGEpu6HJnyNjazWZUq77XmHoxgYSs2jHCJWNlrk8E2eNPgytu1NV8nKgA",
    alt: "Close up of a state-of-the-art medical scanner in a dimly lit clinical room with neon blue highlights.",
    className: "aspect-[4/5]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYCEYT83POMtgPe9JYa_j01Jy8LKXWpF5eyT95ioqAM_Pp2beC68GmIx_2O2_CHrzmS7o8eZdCzAptWUrJg3mGgV2U7n080M1U5Lrj4oEEMVj89ixbsT3KAtw4Kltd8zH2QpfJRkR9sqmglS17QFnsFPMYF931tfh51IqqGmf64-87WeLgVqHL8AKWXgXHPJFrhqG1ni0KCXZXpoMRoZoM22WsZ2U0pf9rjO68PPQOMa_qpTkW6BtYbg",
    alt: "A focused image of a medical professional's hands using a digital tablet.",
    className: "aspect-square",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsC6NHOAFmTIx5EJZ3OXXBc2rZItDPjuKCLBQFwGzc8yPaj76W2ow02TVSa4MHYvOQ0_eGEiRv4NXr4lbyLL5pqBlLrmexQtjS2jSzpwVz_PUGiNuK253dgbLvYzZ0vLd4L0bXMfU_hSHNd39IPQv17ucR8b8TI-ko0VMlRnDV7F6RyUoyOo2Rydy8mi2duPgjFu7Onj-Pwbg0ovuoScjVHfsJfreXwu09zF4iv7HQBxbOhI4_s5PtsA",
    alt: "A minimalist clinical reception desk in a high-end medical facility.",
    className: "aspect-square",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxd5RKvt3lATWFyiV95GAHmO4GUckRGj_YQP4tmd6TLuMMiRZrFQFvK76v-E1ST85aHav85xrdNjTcGmwsbuMjpoMGGICPHhKXYRY0fK8i8foPHabVqKqO-YGbighv9LOi2lnGzhhfTXtrz4_BOq0sZnSBMGNiyndc-eu_7heGSCieCODWabYbtLJf4HX3CK3aKc_xgL7TRmBv67YVtc2GPJRGs95n5l4O_YpkW63zAPyav_qN17335Q",
    alt: "A scientist or doctor looking into a high-precision microscope.",
    className: "aspect-[4/5]",
  },
];

export default function AboutPreviewThree({ slug }) {
  const base = slug ? `/doctor/${slug}` : "#";

  return (
    <section className="py-32 relative overflow-hidden bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            {IMAGES.slice(0, 2).map((img) => (
              <div
                key={img.src}
                className={`${img.className} rounded-3xl overflow-hidden border border-outline-variant/30 shadow-md`}
              >
                <img className="w-full h-full object-cover" alt={img.alt} src={img.src} />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {IMAGES.slice(2).map((img) => (
              <div
                key={img.src}
                className={`${img.className} rounded-3xl overflow-hidden border border-outline-variant/30 shadow-md`}
              >
                <img className="w-full h-full object-cover" alt={img.alt} src={img.src} />
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-8">
          <h2 className="font-display-lg text-headline-lg text-on-background">
            Redefining the <span className="text-secondary">Patient Experience</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Our philosophy is built on the intersection of advanced clinical research and a personalized approach
            to care. We believe that every patient deserves a treatment plan as unique as their DNA.
          </p>
          <ul className="space-y-4">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-1">check_circle</span>
                <span className="font-body-md text-on-surface">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`${base}/about`}
            className="font-headline-md text-primary flex items-center gap-2 hover:translate-x-2 transition-transform"
          >
            Read Our Full Story
            <span className="material-symbols-outlined text-2xl">arrow_right_alt</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
