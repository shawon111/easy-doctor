export const templateThreeDefaults = {
  header: {
    navLinks: [
      { label: "Home", href: "", key: "home" },
      { label: "About", href: "/about", key: "about" },
      { label: "Services", href: "/services", key: "services" },
    ],
    appointmentCta: "Book Appointment",
  },
  footer: {
    tagline: "Advanced Clinical Excellence. Empowering health through precision technology.",
    copyright: "© 2024 {{name}}. Advanced Clinical Excellence. Empowering health through precision technology.",
    resourceLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Clinic Locations", href: "#" },
      { label: "Patient Portal", href: "#" },
    ],
    legalLinks: [],
    newsletter: {
      heading: "Newsletter",
      body: "Latest health insights delivered to your inbox.",
      placeholder: "Email address",
      buttonLabel: "JOIN",
    },
  },
  pages: {
    home: {
      hero: {
        badge: "ADVANCED CLINICAL EXCELLENCE",
        heading: "Precision Care for a",
        headingHighlight: "Healthier Future.",
        body: "Experience the gold standard in modern healthcare. Led by {{name}}, our clinic combines cutting-edge technology with compassionate, patient-centered expertise.",
        primaryCta: "Start Consultation",
        secondaryCta: "WhatsApp Us",
        whatsappUrl: "https://wa.me/dr-medlink",
        imageAlt:
          "A professional, high-end portrait of a doctor in a modern clinical setting with a deep-space navy background.",
        statCard: { value: "10k+", label: "Happy Patients" },
      },
      highlights: {
        items: [
          { value: "15+", label: "Years Excellence", color: "text-primary" },
          { value: "24/7", label: "Support Access", color: "text-secondary" },
          { value: "50+", label: "Specializations", color: "text-tertiary" },
          { value: "100%", label: "Data Privacy", color: "text-primary" },
        ],
      },
      aboutPreview: {
        heading: "Redefining the",
        headingHighlight: "Patient Experience",
        body: "Our philosophy is built on the intersection of advanced clinical research and a personalized approach to care. We believe that every patient deserves a treatment plan as unique as their DNA.",
        checklist: [
          "Evidence-based clinical protocols developed by experts.",
          "Integrated digital health records for seamless tracking.",
          "Dedicated health concierge for personalized navigation.",
        ],
        linkLabel: "Read Our Full Story",
        images: [
          {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw5Hvx37mfI6KjBlz0tFx2A2CIzLDb0cCDaNRXeFvLpQ6AI3ML4ZQrDz1tUN9qiHc8BjckszTwcRa9lmiH-iFd8IkfvVS1Znz1n_rh7maxNbO1lC_CBV3yNFamTDsM57rclHT2x8LKfIe12LWjyxu6AL2xdQD1dZ35EWzsE1IzozFMaqamYRHcZUUfTAdTbQGEpu6HJnyNjazWZUq77XmHoxgYSs2jHCJWNlrk8E2eNPgytu1NV8nKgA",
            alt: "Close up of a state-of-the-art medical scanner in a dimly lit clinical room with neon blue highlights.",
          },
          {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYCEYT83POMtgPe9JYa_j01Jy8LKXWpF5eyT95ioqAM_Pp2beC68GmIx_2O2_CHrzmS7o8eZdCzAptWUrJg3mGgV2U7n080M1U5Lrj4oEEMVj89ixbsT3KAtw4Kltd8zH2QpfJRkR9sqmglS17QFnsFPMYF931tfh51IqqGmf64-87WeLgVqHL8AKWXgXHPJFrhqG1ni0KCXZXpoMRoZoM22WsZ2U0pf9rjO68PPQOMa_qpTkW6BtYbg",
            alt: "A focused image of a medical professional's hands using a digital tablet.",
          },
          {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsC6NHOAFmTIx5EJZ3OXXBc2rZItDPjuKCLBQFwGzc8yPaj76W2ow02TVSa4MHYvOQ0_eGEiRv4NXr4lbyLL5pqBlLrmexQtjS2jSzpwVz_PUGiNuK253dgbLvYzZ0vLd4L0bXMfU_hSHNd39IPQv17ucR8b8TI-ko0VMlRnDV7F6RyUoyOo2Rydy8mi2duPgjFu7Onj-Pwbg0ovuoScjVHfsJfreXwu09zF4iv7HQBxbOhI4_s5PtsA",
            alt: "A minimalist clinical reception desk in a high-end medical facility.",
          },
          {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxd5RKvt3lATWFyiV95GAHmO4GUckRGj_YQP4tmd6TLuMMiRZrFQFvK76v-E1ST85aHav85xrdNjTcGmwsbuMjpoMGGICPHhKXYRY0fK8i8foPHabVqKqO-YGbighv9LOi2lnGzhhfTXtrz4_BOq0sZnSBMGNiyndc-eu_7heGSCieCODWabYbtLJf4HX3CK3aKc_xgL7TRmBv67YVtc2GPJRGs95n5l4O_YpkW63zAPyav_qN17335Q",
            alt: "A scientist or doctor looking into a high-precision microscope.",
          },
        ],
      },
      servicesGrid: {
        heading: "Specialized Medical Care",
        subheading:
          "Providing a comprehensive range of clinical services powered by diagnostic precision and advanced medical technology.",
        items: [
          {
            icon: "cardiology",
            title: "Precision Cardiology",
            description:
              "Advanced cardiac screenings and preventive heart health strategies using AI-enhanced diagnostics.",
            iconClass: "bg-primary/10 text-primary",
          },
          {
            icon: "neurology",
            title: "Neuro-Wellness",
            description:
              "Integrative neurology services focusing on cognitive longevity and specialized neurological recovery.",
            iconClass: "bg-secondary/10 text-secondary",
          },
          {
            icon: "genetics",
            title: "Genomic Analysis",
            description:
              "Personalized health mapping through advanced genetic sequencing and nutritional clinical data.",
            iconClass: "bg-tertiary/10 text-tertiary",
          },
        ],
      },
      whyTrust: {
        heading: "The MedLink Advantage",
        items: [
          {
            number: "01",
            title: "Modern Diagnostic Lab",
            description:
              "In-house laboratory equipped with the latest molecular diagnostic technology for rapid, accurate results.",
          },
          {
            number: "02",
            title: "Expert-Led Multidisciplinary Team",
            description:
              "Access a network of top-tier specialists collaborating in real-time on your comprehensive treatment plan.",
          },
          {
            number: "03",
            title: "Patient-First Digital Portal",
            description:
              "Manage your health on the go with our encrypted portal—access results, schedule visits, and message your team.",
          },
        ],
      },
      howToStart: {
        heading: "Start Your Journey",
        subheading: "Transparent steps to your personalized health transformation.",
        steps: [
          {
            icon: "event_available",
            title: "Book Online",
            description: "Choose your preferred time via our seamless booking system.",
            active: true,
          },
          {
            icon: "clinical_notes",
            title: "Consultation",
            description: "A deep-dive 60-minute initial assessment with {{name}}.",
            active: false,
          },
          {
            icon: "biotech",
            title: "Analysis",
            description: "Comprehensive lab testing and genetic health screening.",
            active: false,
          },
          {
            icon: "favorite",
            title: "Care Plan",
            description: "Receive your custom long-term health and vitality roadmap.",
            active: false,
          },
        ],
      },
      mapLocation: {
        heading: "Find Our Clinic",
        directionsCta: "Get Driving Directions",
        mapImage: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAemNkH-1Vu0ccU2ZDI4fYpVK2ftWcKMvD86H106aFU9ribvKJFoinIIgh2BYWbWz0h461E7OJMCkdjPM8IysBgfI3FjJxED3ja4RKTjKwEKX5MpE-MXm9UfvXs1bslA1Fh75T9Vr5WDCj4D2bsKTBxnss1VvIhho8gcq52dY7hk7eU39Ch2gO9xLvQzTrJElz-iSvKZ9fUgM9T5yjftHpnRn3kl5CEQs5grSIohBIyLk6lz9MCwLGtFg",
          alt: "A stylized, light-themed satellite map of a modern medical district in a metropolitan city.",
        },
        contactLabels: {
          location: "Main Clinical Center",
          phone: "Direct Inquiries",
          hours: "Operational Hours",
        },
      },
      finalCta: {
        heading: "Ready for a New Standard of Care?",
        body: "Join over 10,000 patients who have trusted {{name}} for their journey toward optimal health and longevity.",
        primaryCta: "Book Your Consultation",
        secondaryCta: "Explore Services",
      },
    },
    about: {
      hero: {
        badge: "The Physician",
        heading: "Precision in Practice, Humanity in Heart.",
        body: "{{name}} combines three decades of clinical expertise with a passion for pioneering medical technologies, ensuring every patient receives world-class diagnostic accuracy and empathetic care.",
        imageAlt:
          "A cinematic, low-angle portrait of a professional male doctor in his late 50s with kind eyes and graying hair.",
      },
      journey: {
        heading: "A Journey Fueled by Curiosity.",
        body: "It began in a small research lab where the interplay between technology and biology first sparked a lifelong obsession. {{name}} didn't just want to treat symptoms; he wanted to decode the human condition using the most advanced tools available to modern science.\n\nThrough years of intensive study across Europe and North America, he developed a unique methodology that merges data-driven diagnostics with the art of patient-first consultation.",
        quote: "",
        quoteAuthor: "",
        imageAlt: "",
      },
      timeline: {
        heading: "Career Milestones",
        subheading: "Defining the future of medicine through historical excellence.",
        items: [
          {
            period: "1998 — 2004",
            title: "Academic Excellence",
            description:
              "Graduated Summa Cum Laude with a Doctorate in Medical Sciences, focusing on neural network modeling in diagnostics.",
            mobileDescription: "Graduated Summa Cum Laude with a Doctorate in Medical Sciences.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCOY1YJiNZg8Uu9etc6BsYBbdtL541W0jRtR7Ix9qIUnQhEFheY8l-HdrWNu5rIIGZioCHFip0qeY_oKfpHppKoOGYtAQgnM_rQxJoElBsydgQ1K_SLnmoCwlD7PDFPjExvBz_oKrFUh40ff56Y6JWnF6SktKSN606nk7u7zOfcA4PY01HuuHLRKjjDIPBD4E6hp1B54YEk-SvJSO2_4C5q2LsfBz9BThUSNjbOS_kyo9aDqlD36s5ajQ",
            alt: "A wide-angle shot of a prestigious, historic medical university campus at twilight.",
            reverse: false,
          },
          {
            period: "2005 — 2012",
            title: "Global Research Lead",
            description:
              "Headed the International Consortium of Regenerative Medicine in Geneva, pioneering 3D bio-printing applications.",
            mobileDescription: "Pioneering 3D bio-printing applications in Geneva.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAphwkIeBSLEIs1paPggmyaM1dJ2ROUH2qKt0est0-BAWlmdmJ_l-KC2ugmKb3iUvk8NS0pTh9IKRISDHoIyZW7wYV3Ki60Xzq7RBE6bcjqMjahtN05YRuBy03TKVEi97pkbovvLcrgAvc6zGkELahFwiEkJbwUsttHcDAlAax_W-WQo9-OaXGLNs87NOKrvj1ANk0BO5VQ4ULL4bWNYkHP6IixfvlI4RCBM3pjPA7CbhqsECbJ3GqiAw",
            alt: "A futuristic laboratory setting in Switzerland with advanced 3D bio-printers.",
            reverse: true,
          },
          {
            period: "2013 — Present",
            title: "Founding {{name}}",
            description:
              "Established a boutique clinical ecosystem dedicated to personalized medicine and AI-assisted health monitoring.",
            mobileDescription: "Establishing a boutique clinical ecosystem for personalized care.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD8L2IuAX2-El3dGbXY3ODPb7fNShamX2AXULa8rDg8ThyQEmMGU21T4y2Lio-LoU9EzROsSui6HHUngR2c2kO_ZrNkTIJbN2dN_gp6DTybRbrLGfc0OnLy1RdokNucy4Lq9mVnJUqWJXG-o4nbiorCU8AnDvVW0vdWhs-dhTFlmXNH7Z0kM8WNUzOi-1oYTzd0fMH7DUcZlk8Rh4ZvYLZO6l7aE6QjIMaHtQw-QDAmkyqars6W94C9PQ",
            alt: "The elegant, high-end interior of a contemporary medical clinic reception area.",
            reverse: false,
          },
        ],
      },
      pillars: {
        heading: "Our Core Pillars",
        subheading:
          "We believe that global healthcare requires a universal language of empathy and technological transparency.",
        cta: "View Ethics Charter",
        items: [
          {
            icon: "psychology",
            title: "Unwavering Integrity",
            description:
              "Clinical honesty is the foundation of our practice. We provide clear, data-backed insights for every medical decision.",
          },
          {
            icon: "public",
            title: "Global Communication",
            description:
              "Breaking language barriers through intuitive digital portals that speak the patient's language—literally and metaphorically.",
          },
          {
            icon: "precision_manufacturing",
            title: "Precision First",
            description:
              "Utilizing molecular-level diagnostics to tailor treatments that are as unique as your own DNA sequence.",
          },
        ],
      },
      locations: {
        heading: "Global Presence",
        items: [
          {
            city: "New York",
            subtitle: "Primary Clinical Hub",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAAoe_QU6vHeoZOEKurGHiJ-Es8ppDRhnMjHB-h1p0seGJlWRvmjaIQB1kBZGxK8j9gmWR2KicP7OP_Wv2NCkovfvAA1KCOH4nw947TUPw1z78VXAvId7Naszq02yklFV-mRFtT08-oZZOq50OP1SwfZDz3yw5PQHVcHVaG5bqr3AkdG9A2BDMbET3KHY-nibl2mmzfMCZ7Vr4Pg1PWE6mHs-Ns6uKT6kQhmDLBlP_k75yLDLL1-R-_cQ",
            alt: "New York",
          },
          {
            city: "London",
            subtitle: "Research & Diagnostics",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDVCuD_H29id8_ny3TW09hqw8dy1gjI-JEHg6t8uY14F3zjAA2GM2okKkDiTP8HCBk0LaCjUbz_joI96qLh2suxh3Hjz4yXebkqjxCzGpAztHUEHbfc6Ghw4b-CI1sSezZIUySe6SQ_S4bdhBhCZq8ITCFUV2-I47QjKiWXsC_tfdQd4MaqQ7bM1XeeFFmvYoI9hHTrCz35Xk_a9V_LgNN_EMgcn7rPC1OB3d7uG1eIf-pV-r3MeGM1KA",
            alt: "London",
          },
          {
            city: "Dubai",
            subtitle: "Specialist Wellness",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD00GB15BwSZWw414joB_zVDXuDTeeQqL4-xW-g2ue6fpv-YB2yKPWhXXLlMdPFUR4ZgsxcL7MtDY5zXv3CD3YLOREy2jsXFfq3W43DnrM7-d5KjWhdO-VZpqe66h8hB8RFUAdIto_lMdRhdYGGWCI-DOj2BEYpKwzpPdmRh7vRexWGWYpSeYEn6IUV1MPjJlme0PWuFW5wksQySwQW9X-ZKTRRvONZt1Cm7in_AGhSNX7InRcQ4X3z6A",
            alt: "Dubai",
          },
          {
            city: "Tokyo",
            subtitle: "AI Innovation Center",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuASfDfloxcOTUWTOQMw2pprbitk-T-4_REJ6pr3kNyKNWoLwMUL2vm0i07PENvRZ0jlPVh4xSteLGlCVOa1dWTKoRiE8d7zudDoyiQw1qs99kJSvDRA_HZ8nXP2VB1ncdKlkNwg7-BcfJrs6DJwUkbqsKDe3yjW9Tc6_EAGNnqLaNaL_WQ233anzaJGtT1QwQD-FKum0pLQGbgbTe8Zh2kk1-jc1z2FuFzgAWAz843vZDoef4mmbdBlwg",
            alt: "Tokyo",
          },
        ],
      },
      finalCta: {
        heading: "Ready to experience the future of care?",
        body: "{{name}} is currently accepting a limited number of new private patients for the upcoming quarter. Secure your diagnostic consultation today.",
        primaryCta: "Schedule Consultation",
        secondaryCta: "Contact Us",
      },
    },
    services: {
      hero: {
        badge: "Precision Healthcare",
        heading: "Elevating Human Vitality Through Clinical Innovation",
        body: "At {{name}}, we combine cutting-edge diagnostic technology with holistic medical expertise to provide a personalized care journey.",
      },
      treatments: {
        heading: "Specialized Treatments & Care",
        subheading:
          "Targeted clinical interventions designed for the modern lifestyle, focusing on long-term health outcomes and systemic resilience.",
        cards: [
          {
            badge: "CARDIOLOGY",
            title: "Advanced Heart Diagnostics",
            body: "Utilizing AI-driven ECG analysis and high-resolution imaging to monitor and optimize cardiac performance before symptoms arise.",
            bullets: ["Non-invasive vascular screening", "Metabolic cardiac stress testing"],
            cta: "Learn More",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAGYKY1RpnfgYlNy2lk_E5J7CszQgH2uaCqhZQ34-VkF9mumsvKOm5QNvVS0fvsEpBhgAhs_icG30JyDMiN1B-fSx0cFvEzstuYa863jaF56TUbCKCeUprN1WUPfPS6ZQ-MQhqi_MAWG0ZQttm9Ojw-LIdrRagdkLVJYkwV755uXh7aqZi53VZ2f6w7nd-PZNGaw-FZ_luPOhpndFm12Le-JODg5Uq4M5nPo93uy3djRTs_VxU9M0PiPQ",
          },
          {
            badge: "LONGEVITY",
            title: "Biological Age Optimization",
            body: "Precision medicine tailored to your DNA, focusing on cellular repair and chronic inflammation reduction.",
            bullets: [],
            cta: "View Protocols",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuA0_8a2tJFDHgdDa3TZGOOtUO8KUGQc4cxgwcemrVHmJ2aLljs9JiB8xB85sPmFQmiKbwoVrYmy3KpYFlh6iuOCSFOLT3i7yTjukNl9OtEwdj3xnydANIt3TR0qbtBBItAWesuhYaasqy75OdAN72Kxxj3wwFcT1fVRG7wy_uR-N-uqU2ICj2OCQfQ77zVDyg33pvxuclmJwtr0cqvsnXCPv38D3rGgI1-K8rV7Vs1R-vi_zowWfuA9DQ",
          },
          {
            badge: "WELLNESS",
            title: "Holistic Balance",
            body: "Integrating mental equilibrium with physical vitality through guided neurological and nutritional therapy.",
            bullets: [],
            cta: "Explore Wellness",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCWXRMmKxZcNPH47VshHutojaWMjieS5qqYXWHsRkmm1XzZEeG3wSI8OZFbPyHMDVa0AOTm8cv-q2BunuF8z--dSeJm42b_4Q-w_y7fNv8ewHfYNKGOnIjWXJsG4b8Alha4i6AjQbCoMLz10QrZCufeX0QUTxi62aHvvKoYvES1LA3DWrzUbU0mVX6dZM44pvcyMSgU162x7zdW9V4W49OJ2jqYZJ5cL91qwIjKpJLAKKhh8jmFvDw68A",
          },
          {
            badge: "FAMILY CARE",
            title: "Comprehensive Clinic Care",
            body: "End-to-end medical management for individuals and families, from acute illness treatment to routine preventative screenings.",
            bullets: [],
            cta: "",
            stat1Value: "24/7",
            stat1Label: "Portal Access",
            stat2Value: "0%",
            stat2Label: "Wait Times",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDbqI5NJ5xpQjxpTG1Aqsx-JZb6DTuiCqL_BLRL2mCwtqFdctAzFCRtUAC_3Tu0v-CSxM1VG-MNjQUAWP6p7DsWG_jpSdNtzym41WmsyhYQIQCNercTJULdTuU75FHbUbzMFzV1mIN8cmsb_tXry_eW92UcSBjf2xchY-FHSA29HPpjRrWejs6CltLzZv34wLz1P5RbxalYJiJtbTzQLm5IK2iWxA7poTAoKNxdYrFIqhaiJSreXjHxpg",
          },
        ],
      },
      benefits: {
        heading: "Why Our Treatments Work",
        subheading: "We don't just treat symptoms; we engineer health through a multi-dimensional clinical approach.",
        items: [
          {
            icon: "biotech",
            title: "Bio-Digital Integration",
            description:
              "Real-time wearable data synced directly with your clinical record for continuous health monitoring and proactive intervention.",
          },
          {
            icon: "neurology",
            title: "Evidence-Based Protocols",
            description:
              "Every treatment is backed by the latest peer-reviewed clinical research and adapted for your unique physiological profile.",
          },
          {
            icon: "security",
            title: "Proactive Safeguarding",
            description:
              "Focusing on early detection and prevention to ensure your health span matches your life span with uncompromising quality.",
          },
        ],
      },
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How do I access my diagnostic results?",
            answer:
              "All diagnostic results, lab reports, and imaging are uploaded instantly to your secure Patient Portal. You can access these anytime via our mobile app or web interface.",
          },
          {
            question: "Do you accept international health insurance?",
            answer:
              "Yes, we partner with major global insurance providers. Our administration team handles all direct billing processes for your convenience.",
          },
          {
            question: "What is the {{name}} longevity protocol?",
            answer:
              "Our longevity protocol is a science-backed program that combines genetic testing, metabolic assessment, and personalized supplementation to slow biological aging.",
          },
        ],
      },
      finalCta: {
        heading: "Ready to prioritize your performance?",
        body: "Join the elite clinical ecosystem of {{name}} today. Schedule your initial comprehensive assessment.",
        primaryCta: "Book Your First Visit",
        secondaryCta: "Contact Concierge",
      },
    },
    appointment: {
      hero: {
        badge: "Reservations",
        heading: "Seamless Healthcare Access",
        body: "Experience clinical excellence with our streamlined booking process. Connect with {{name}} for personalized care tailored to your specific medical needs.",
      },
      steps: {
        items: [
          {
            number: "01",
            icon: "person_search",
            title: "Select Service",
            description:
              "Choose from our specialized clinical consultations, diagnostic tests, or routine health checkups.",
          },
          {
            number: "02",
            icon: "event_available",
            title: "Pick Time",
            description:
              "View the visiting schedule below and identify a slot that fits your personal calendar perfectly.",
          },
          {
            number: "03",
            icon: "verified",
            title: "Confirm Visit",
            description:
              "Use our WhatsApp integration or the booking portal to finalize your appointment details securely.",
          },
        ],
      },
      schedule: {
        heading: "Visiting Schedule",
        subheading: "Standard operational hours for clinical consultations.",
        legendAvailable: "Available Now",
        legendClosed: "Closed",
        statusAvailable: "Available",
        statusClosed: "Closed",
      },
      whatsapp: {
        heading: "Quick Appointment via WhatsApp",
        body: "Prefer a faster route? Skip the forms and chat directly with our medical concierge team to secure your slot instantly.",
        cta: "Open WhatsApp",
      },
      chambers: {
        heading: "World-Class Chambers",
        items: [
          {
            label: "Main Suite",
            title: "Diagnostic Wing",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDk24SNQthuLjBKAmJ1CFMXV88nS99mQydKhBIX19e-BQnvnnIolq1QRxjWynCTrgJ7vIKNkCUT9nVFtn0D9qtj1gIrCFPLQe5JATCqU1FbGxYBohr3FE-aJTJzKBxS1b1eFZ5pdscBc3BHs2riBsNhVYrjyCEIMHGbTbosyEMJ3rdxHTRdm2G-dZYkQsD3dqZ5idDBEx2ePba9rew7eBCtbTSuggQCI0dsFXnrP7y1qrG3ipbR1glbQA",
            alt: "Medical examination room",
          },
          {
            label: "Comfort",
            title: "Executive Patient Lounge",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDiwPrxudWT4RfHTl82-Y_5SIOEW4BDpFAD9Ixx0szciSMvTRYqJzMiJ8tpoi7duC_r1sb1J9Iw0Wt1UlyK_vwI7WbYFcn6nNCoeSZg3qdmeor7MERuK__tbSbTQDZJm2EEKI9ejJrT7Yh4N2HDOg56H4oCKQg8WF3qC7RIpBEpzsSPVBurFv8IL1wvxw1MIaK7lIPBUgIM3FFmVUxvULavZPbXjjBQ9PR4fXVqXGtD-Y5kk2uf9W-8Hg",
            alt: "Patient waiting lounge",
          },
          {
            label: "Digital",
            title: "Tele-Health Hub",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAcl6mLzqZjssiesaJobXZzV-IYQ9l6Epm1-lBlKvz7wTYIn7jjhUIbk6BK6emIH9kuOUiSIDDf4un4dxNmK3gKJk1KP4T8cuUR5BLHYJCKo8Er2-mdgPQmsVYCwOn0LIhe6BYGVO9KiDhpoGacHSn4CeGANC8ROw96KJnrKDkYNF17Vl-ks1AI1mJc-fa84xx22g81XCBsnsYTH5440VcfLZkxhnZxLwMrfd4ifZEvX3jZjdzF6ssd6A",
            alt: "Telemedicine hub",
          },
        ],
      },
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "How long does a standard consultation take?",
            answer:
              "A typical in-person consultation lasts between 20 to 30 minutes, allowing for a comprehensive evaluation of your symptoms and history. Specialist diagnostic sessions may take longer.",
          },
          {
            question: "Do you accept international insurance providers?",
            answer:
              "Yes, {{name}} partners with several global health insurance networks. Please contact our administrative desk with your policy details before your visit for verification.",
          },
          {
            question: "Can I reschedule an appointment via WhatsApp?",
            answer:
              "Absolutely. Simply message our concierge line with your current appointment details and your preferred new time slot at least 12 hours in advance.",
          },
        ],
      },
    },
  },
};
