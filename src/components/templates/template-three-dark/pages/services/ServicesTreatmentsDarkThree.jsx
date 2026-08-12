const CARDIOLOGY_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGYKY1RpnfgYlNy2lk_E5J7CszQgH2uaCqhZQ34-VkF9mumsvKOm5QNvVS0fvsEpBhgAhs_icG30JyDMiN1B-fSx0cFvEzstuYa863jaF56TUbCKCeUprN1WUPfPS6ZQ-MQhqi_MAWG0ZQttm9Ojw-LIdrRagdkLVJYkwV755uXh7aqZi53VZ2f6w7nd-PZNGaw-FZ_luPOhpndFm12Le-JODg5Uq4M5nPo93uy3djRTs_VxU9M0PiPQ";

const LONGEVITY_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0_8a2tJFDHgdDa3TZGOOtUO8KUGQc4cxgwcemrVHmJ2aLljs9JiB8xB85sPmFQmiKbwoVrYmy3KpYFlh6iuOCSFOLT3i7yTjukNl9OtEwdj3xnydANIt3TR0qbtBBItAWesuhYaasqy75OdAN72Kxxj3wwFcT1fVRG7wy_uR-N-uqU2ICj2OCQfQ77zVDyg33pvxuclmJwtr0cqvsnXCPv38D3rGgI1-K8rV7Vs1R-vi_zowWfuA9DQ";

const WELLNESS_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCWXRMmKxZcNPH47VshHutojaWMjieS5qqYXWHsRkmm1XzZEeG3wSI8OZFbPyHMDVa0AOTm8cv-q2BunuF8z--dSeJm42b_4Q-w_y7fNv8ewHfYNKGOnIjWXJsG4b8Alha4i6AjQbCoMLz10QrZCufeX0QUTxi62aHvvKoYvES1LA3DWrzUbU0mVX6dZM44pvcyMSgU162x7zdW9V4W49OJ2jqYZJ5cL91qwIjKpJLAKKhh8jmFvDw68A";

const FAMILY_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDbqI5NJ5xpQjxpTG1Aqsx-JZb6DTuiCqL_BLRL2mCwtqFdctAzFCRtUAC_3Tu0v-CSxM1VG-MNjQUAWP6p7DsWG_jpSdNtzym41WmsyhYQIQCNercTJULdTuU75FHbUbzMFzV1mIN8cmsb_tXry_eW92UcSBjf2xchY-FHSA29HPpjRrWejs6CltLzZv34wLz1P5RbxalYJiJtbTzQLm5IK2iWxA7poTAoKNxdYrFIqhaiJSreXjHxpg";

export default function ServicesTreatmentsDarkThree() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
              Specialized Treatments &amp; Care
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Targeted clinical interventions designed for the modern lifestyle, focusing on long-term health
              outcomes and systemic resilience.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary cursor-pointer hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">west</span>
            </div>
            <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary cursor-pointer hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">east</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 glass-card rounded-xl p-8 flex flex-col md:flex-row gap-8 hover-lift cursor-default overflow-hidden">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full mb-6">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
                <span className="font-label-sm text-label-sm">CARDIOLOGY</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Advanced Heart Diagnostics</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Utilizing AI-driven ECG analysis and high-resolution imaging to monitor and optimize cardiac
                performance before symptoms arise.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span>Non-invasive vascular screening</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span>Metabolic cardiac stress testing</span>
                </li>
              </ul>
              <button type="button" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="md:w-1/2 rounded-lg bg-surface-container overflow-hidden min-h-[300px]">
              <div
                className="w-full h-full bg-cover bg-center min-h-[300px]"
                style={{ backgroundImage: `url('${CARDIOLOGY_IMAGE}')` }}
              />
            </div>
          </div>

          <div className="md:col-span-4 glass-card rounded-xl p-8 flex flex-col hover-lift cursor-default">
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1 bg-tertiary/10 text-tertiary rounded-full mb-6">
              <span className="material-symbols-outlined text-[18px]">genetics</span>
              <span className="font-label-sm text-label-sm">LONGEVITY</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Biological Age Optimization</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Precision medicine tailored to your DNA, focusing on cellular repair and chronic inflammation reduction.
            </p>
            <div className="mt-auto rounded-lg overflow-hidden h-48 mb-6">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${LONGEVITY_IMAGE}')` }}
              />
            </div>
            <button type="button" className="flex items-center gap-2 text-tertiary font-bold hover:gap-4 transition-all">
              View Protocols <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <div className="md:col-span-4 glass-card rounded-xl p-8 flex flex-col hover-lift cursor-default">
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full mb-6">
              <span className="material-symbols-outlined text-[18px]">spa</span>
              <span className="font-label-sm text-label-sm">WELLNESS</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Holistic Balance</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Integrating mental equilibrium with physical vitality through guided neurological and nutritional therapy.
            </p>
            <div className="mt-auto rounded-lg overflow-hidden h-48 mb-6">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${WELLNESS_IMAGE}')` }}
              />
            </div>
            <button type="button" className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all">
              Explore Wellness <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <div className="md:col-span-8 glass-card rounded-xl p-8 flex flex-col md:flex-row-reverse gap-8 hover-lift cursor-default overflow-hidden">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-on-surface-variant/10 text-on-surface-variant rounded-full mb-6">
                <span className="material-symbols-outlined text-[18px]">medical_services</span>
                <span className="font-label-sm text-label-sm">FAMILY CARE</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Comprehensive Clinic Care</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                End-to-end medical management for individuals and families, from acute illness treatment to routine
                preventative screenings.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-surface-container rounded-lg border border-outline-variant/50">
                  <div className="text-primary font-bold text-headline-md mb-1">24/7</div>
                  <div className="text-on-surface-variant text-label-sm">Portal Access</div>
                </div>
                <div className="p-3 bg-surface-container rounded-lg border border-outline-variant/50">
                  <div className="text-primary font-bold text-headline-md mb-1">0%</div>
                  <div className="text-on-surface-variant text-label-sm">Wait Times</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 rounded-lg bg-surface-container overflow-hidden min-h-[300px]">
              <div
                className="w-full h-full bg-cover bg-center min-h-[300px]"
                style={{ backgroundImage: `url('${FAMILY_IMAGE}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
