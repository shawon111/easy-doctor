export const templateTwoDefaults = {
  header: {
    navLinks: [
      { label: "Home", href: "", key: "home" },
      { label: "About", href: "/about", key: "about" },
      { label: "Services", href: "/services", key: "services" },
    ],
    appointmentCta: "Book Appointment",
  },

  footer: {
    tagline:
      "Excellence in precision medicine and executive healthcare for the global elite.",
    copyright: "© 2024 Dr. {{name}}. Excellence in Precision Medicine.",
    resourceLinks: [
      { label: "Patient Portal", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Careers", href: "#" },
    ],
    legalLinks: [
      { label: "GMC Reg No. 1234567", href: "#" },
      { label: "Fellow of the Royal Society of Medicine", href: "#" },
    ],
  },

  pages: {
    home: {
      hero: {
        badge: "Exclusive Precision Care",
        heading: "{{name}}",
        credentialsLine: "MD, PhD, FRCP (Lond)",
        body: "Pioneering executive medicine with a focus on longevity, cognitive performance, and bespoke surgical precision. Serving the world's most discerning patients with uncompromising excellence.",
        primaryCta: "Schedule Consultation",
        secondaryCta: "View Clinical Registry",
        imageAlt:
          "A cinematic, high-end professional portrait of a distinguished male specialist doctor in a light, luxury medical suite.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDXxKwFcSECIyn9rW8o_uDKX37xePMxOsbGbwQgrLqtpWtQKANCJnZQqNHdmWfnFbCdUqTyykWUoNvrAeUWb85qQ6-TPkWREcdFn9eRACqOH2u7GQGSo79HfitvGpnPTGxeJzL0lb4_5WtxMioB_Tq_fum1baQMDk7JEkK6-ew6rOWcpBMngJGUd0eW8XUksnh2HbYT47otp692cTcjl_EG01vZ3TBhX6oW7vqHQDw-N_EHaAcxoAKT1w",
      },
      credentials: {
        heading: "Distinguished Pedigree",
        subheading:
          "Foundational excellence built upon the world's leading medical institutions and decades of clinical mastery.",
        items: [
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
        ],
      },
      treatments: {
        heading: "Signature Clinical Protocols",
        subheading:
          "Every treatment is uniquely engineered to the biological profile of the individual patient.",
        items: [
          {
            icon: "neurology",
            title: "Minimally Invasive Neuro-Regeneration",
            description:
              "Advanced protocols utilizing robotic precision and localized stem-cell delivery for cognitive restoration.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBB9u7mczd5j1pTng72G6DvLx7C_Kx6wJ4TyC2uP3iqsfTOLpUuKyGwqw_Y0uxNQ4liKtck5si65NfQpizmZooL6j2tr82hCGBseOjwneijHVtoantev4YsKjbDnHRuVFRHnqkDse3XvaFfbcEz0GV_FBCtmSGap0iVH8kDvv7GEnwmIr5rDPgepcsp2eVHrhuO7gYaDL7E2K8A3KC5fNLMb1JMecTo9oQvA5rLBNGjV4E8p65_gSv72A",
            imageAlt: "High-contrast medical equipment shot.",
          },
          {
            icon: "biotech",
            title: "Genomic Profile Screening",
            description:
              "Deep genetic mapping to predict and prevent chronic vascular pathologies.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAdRlGII0S6SiGvSN9OKxu3OgPZ438IC8ULONkjSeb7YIgvNtkpnhNbFWnbWpTM-NeomX_prMEW03XU28Mg6fHPvJZe7QxvWdwA0nh65spFQfqntZHAD2Xa1vGT5A8v10nb7S_V5Jb3OMSmfUMEb-N7OLq8HQulRYFEtezo0UOo1wZQvB37uL4exyaBy27tbWCFAaE9NjOQEPA5ZUQk5abLMzqrMeVS-cFU-9G0TM1s48d6hk4j-p87ag",
            imageAlt: "Genomic illustration.",
          },
          {
            icon: "vital_signs",
            title: "Longevity Optimization",
            description:
              "A holistic, executive-level health management plan focusing on bio-markers and hormonal balance.",
          },
          {
            icon: "medical_services",
            title: "Executive Performance Medicine",
            description:
              "Custom nutritional and physiological engineering for high-performing professionals and athletes.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuANlR6_GTLRQ5hdnA8hl-A654weJ8LGYcQTkNoHVe3fZ7BXo2meLy2mzZBzfgbkfcoQdVpkTOaLa_s_x4HBx_2zmJHNC-Z0k6O3PqLDzgD-rdGkn2gFNaerWAns27iZ3mLEKm9iBHn0P7jsg3knLf5XlqxzwrQPAYT_6GbMQGAUjHGlv9lropAYuTC9-7yX5q2b51SMpsfiqzGu0zOp12LWoN0OoqjccX2DQRbTK6VTWeIFSAeRYxKdWQ",
            imageAlt: "High-end medical vials.",
          },
        ],
      },
      timeline: {
        heading: "A Career Defined by Precision",
        subheading:
          "Medicine is not merely a science, but an art. It does not consist of compounding pills and plasters; it deals with the very processes of life.",
        items: [
          {
            period: "2018 — Present",
            title: "Chief of Specialized Surgery",
            description:
              "Lead consultant at the International Precision Institute, focusing on neuro-vascular innovation.",
          },
          {
            period: "2012 — 2018",
            title: "Professor of Clinical Oncology",
            description:
              "Heading the research wing at Johns Hopkins University, publishing over 40 landmark studies.",
          },
          {
            period: "2005 — 2012",
            title: "Surgical Residency",
            description:
              "Royal London Hospital, completing fellowship under Sir Alistair Graham.",
          },
        ],
      },
      onboarding: {
        heading: "Patient Onboarding",
        subheading: "A streamlined three-step journey to precision care.",
        steps: [
          {
            number: "01",
            icon: "calendar_month",
            title: "Virtual Intake",
            description:
              "Submit your medical records and schedule a preliminary digital assessment.",
          },
          {
            number: "02",
            icon: "biotech",
            title: "Clinical Workup",
            description:
              "In-depth diagnostics at our private facility, mapped to your unique physiology.",
          },
          {
            number: "03",
            icon: "medical_services",
            title: "Intervention",
            description:
              "Execution of your bespoke clinical protocol under white-glove supervision.",
          },
        ],
      },
      chamber: {
        heading: "The Harley Street Registry",
        subheading:
          "Located in the historic heart of London's medical excellence, our chambers provide a serene, private environment for executive consultation.",
        imageAlt: "Vector map of Harley Street area.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuClqAmDaJPpOfZQ4FtOCxYCJZ9HEPYePeXq5yVOmzi_wx6xuD_yD906ZhIowQriEDGsscyHACNI7GovoqA6bO8nWSXhL73ndsnA8SDc72Ofpt3aRu5Xon7LU1omSI5ZCU51AqIU93HV5tmOvu_yb8J-93u4Rko6RsUqc3niWwOxHWUCyFjIa4AAsrhJnwn-FX9P2YwePI5NblitXMxUufqU50vqtmXKYl71-gQr9zRG4TFxjVRC7L93rA",
      },
      finalCta: {
        heading: "The Pinnacle of Clinical Care",
        body: "Secure your appointment with London's leading precision specialist today. Limited intake ensures individualized mastery.",
        primaryCta: "Inquire About Registration",
      },
    },

    about: {
      hero: {
        badge: "EXCELLENCE IN PRECISION MEDICINE",
        heading: "About {{name}}",
        body: "Redefining the standards of specialized care through a legacy of clinical mastery, academic rigor, and an unwavering commitment to patient longevity.",
        languages: ["English", "French", "Arabic"],
        imageAlt:
          "A professional portrait of an executive male specialist doctor in his early 50s, wearing a bespoke navy suit and a white clinical coat.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC6E94N4ihuxDnC1fKJmF2jN7fNcNgbm2BYOBjiBjvoKhWAFtOdRackfeSEGaNAOqXUZGYze11OX_DLJd1Jn2X1St5Sbj0paJDGp7UmiqbqHl9nwGWGoLDq1wfFeoPiXG3NL-Gn05fI172zWcz7P9k0A8adGWqtO8OeWoU-cTW1icWJKgzCELXF_t2Y4vMoZejyWfVCdojwZp9UKP6nvs-RF8rScj6x3vaMn9omwEE31xVTrLn5XmaLEA",
      },
      story: {
        heading: "A Legacy of Care",
        body: "Dr. {{name}}'s journey began at the prestigious Johns Hopkins School of Medicine, where they graduated at the top of their class. Their early career was defined by a relentless pursuit of innovation in complex diagnostics and internal medicine. Over the last two decades, they have pioneered specialized protocols that bridge the gap between traditional clinical excellence and modern biotechnological advancements. Their philosophy centers on the 'whole-patient' paradigm—understanding that true health is the synergy of biological precision, lifestyle architecture, and preventive vigilance. Having served as a Chief Resident and later as a Lead Consultant at world-renowned clinics, Dr. {{name}} has handled over 5,000 complex cases. Their reputation for solving 'unsolvable' diagnostic puzzles has made them the preferred choice for global executives and high-profile individuals who demand absolute discretion and technical mastery. Every patient strategy is bespoke, crafted with the same meticulous attention to detail as a master watchmaker, ensuring that every variable of a patient's health is accounted for.",
        quote:
          "Medicine is not merely a science of diagnosis, but an art of precision, empathy, and foresight.",
        quoteAuthor: "Dr. {{name}}",
      },
      timeline: {
        heading: "Professional Milestone",
        subheading: "CHRONOLOGY OF EXCELLENCE",
        items: [
          {
            period: "2024",
            title: "Global Medical Excellence Award",
            description:
              "Recognized for groundbreaking research in preventive genomics.",
            reverse: false,
          },
          {
            period: "2018",
            title: "Founder, Precision Clinic",
            description:
              "Establishing a multi-disciplinary center for executive health.",
            reverse: true,
          },
          {
            period: "2010",
            title: "Johns Hopkins Residency",
            description: "Chief Resident, Internal Medicine.",
            reverse: false,
          },
        ],
      },
      qualifications: {
        heading: "Qualifications & Affiliations",
        subheading: "CERTIFIED EXCELLENCE",
        items: [
          { icon: "verified_user", title: "ABIM", detail: "Board Certified" },
          {
            icon: "workspace_premium",
            title: "FACO",
            detail: "Fellow of Clinical Oncology",
          },
          { icon: "school", title: "PhD", detail: "Molecular Genetics" },
          {
            icon: "public",
            title: "WHO",
            detail: "Global Health Consultant",
          },
        ],
      },
      practices: {
        heading: "Clinical Practices",
        subheading:
          "Dr. {{name}} practices at two premier locations, ensuring accessibility and the highest standards of clinical hygiene and privacy.",
        items: [
          {
            icon: "location_on",
            title: "Central Heights Medical",
            description:
              "420 Park Avenue, 18th Floor, New York, NY 10022. Mon - Wed: 09:00 - 16:00. Friday: 09:00 - 13:00.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuB9PrktMatctpk7B9fA7GQbb7Yj-9yZ1luWjd5V1ZJ3VEq6xo0YI7ugWchnBb6XvGEgqB5ZsO5weNM9ZOQrnKb2VpQjT_vkBHLEBW6fTZIK9DupkYHefmOT2XnXgqg-INusxuk8zGj2QahaIyJuNR7DPiXhl4Dr_eFHYbsTqOu29tmiH5WhenizPHyHGFGJWhfWLcrSdU6D4ZKXbIWoLacqyMzx3wi1nFgtdbPrAzoyn25GAjIoksd6Vw",
            imageAlt: "An ultra-modern, high-end medical lobby",
          },
          {
            icon: "location_on",
            title: "The Meridian Clinic",
            description:
              "12 Greenwich Way, Westchester County, NY. Thursday: 10:00 - 18:00. Saturday: By Appointment Only.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDE_xsDMW8FE9hhemKWqrQ4RC4ytnt_yemNkPcXRnBJ5FkaoWCdyCo-1corigV-ZYSdM7tTAS1DsAuhQ8YZoOb2gD-Hg1JCLrKEO4GN7nVv0Apf8nyuw1UccTfCIht60SmEaKCgvn_dHiyxKD2dHze4j4OLxU2aog0RdwvuDgIEfRIz5OEHrediu28fTVvb5hhec_Cj8q-oHFPIvJt6J45DY04N2wW383jegkuUFwVv-emlQFCLzC7n_A",
            imageAlt: "The exterior of a private healthcare facility",
          },
        ],
      },
      finalCta: {
        heading: "Begin Your Path to Optimized Health",
        body: "Private consultations are currently available for new executive patients. Schedule your initial clinical assessment today.",
        primaryCta: "REQUEST APPOINTMENT",
      },
    },

    services: {
      hero: {
        badge: "Clinical Excellence",
        heading: "Specialized Treatments & Procedures",
        body: "Advanced clinical mastery combined with white-glove executive care. We utilize the frontier of medical technology to deliver results with absolute precision.",
      },
      featured: {
        badge: "Pinnacle Technology",
        heading: "Precision Robotic Microsurgery",
        body: "Utilizing state-of-the-art haptic feedback systems for sub-millimeter accuracy in complex neurological and cardiac interventions.",
        cta: "View Methodology",
        imageAlt:
          "A hyper-realistic surgical robot arm performing a micro-procedure under cinematic cool blue clinical lighting.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAejtLRzK3bQa8whYcqiEkJObPaIDyqcXjcRn4X8JBxGYwYqh9wouWsYaKVXAMWpeTRTbtzvvJSwRKTTxMexesGEx5jDyNlX3quKr6GZ3xGJqcSeuhdr1LES0joedLZdSlv_J3gEIe3tmoqaPRE2DMT1YHXPUgBCWfhk0DvV-ZaYt10jf4D1s3XMhcw6B0vSwpCz9EkWB6Lqhp7Mgme8tYdzBEiRk6i13Ap16NUK3ME3sqWelrnZ8ULTw",
        secondaryFeatured: {
          heading: "Diagnostic Profiling",
          body: "Comprehensive executive wellness mapping using advanced multi-spectral imaging.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuABPsMRRcvFE3m0q-41aGeL5wwxttmmCsf28miCY4OBgq17WbomVzxasLVFOkli7_4kyk4U_QfTsMeDGyBNFNsh5mzdWxpCMghqcjuR3_xrTgJ5u8rzCZXiBOiq6tE0O0XxEjvxIqpluh7HDNQclINa9Lx1AfDUckaHivrugd5QONndl80RmnIGKMWn2_ElOYr8WskFNuVxCzQNJcXK9Kpzj4762-smUEg1JJ0M0yijYFEURaVCoR1HEQ",
          imageAlt:
            "Close up of a high-end medical diagnostic display showing complex biometric data.",
        },
      },
      cards: {
        heading: "All Clinical Services",
        subheading:
          "Explore our full range of specialized care, designed for individuals who demand nothing less than clinical excellence.",
        items: [
          {
            icon: "cardiology",
            title: "Cardiac Optimization",
            description:
              "Proactive management of cardiovascular health using genomic data and real-time hemodynamic monitoring.",
          },
          {
            icon: "neurology",
            title: "Neurological Mastery",
            description:
              "Advanced treatment for complex neural pathways and cognitive enhancement therapies.",
          },
          {
            icon: "biotech",
            title: "Regenerative Orthopedics",
            description:
              "Stem cell interventions and bio-scaffolding to restore peak physical performance without invasive surgery.",
          },
        ],
      },
      benefits: {
        heading: "The Standard of Executive Care",
        subheading:
          "We understand that our patients value discretion, time, and absolute technical certainty. Our practice is built on three pillars of excellence.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMnzyNVVzbtBCUayb8cPumdCi_8F0iPFr0wIttqUVZPsBSfXyB-y9RONuOLfCJCWohjlONLcOBNp3KTGS0UFwfWwOneaCxCLyFsuaW2j22MslZRdTygeeJE-5SsN7JiXYzrWnwwZTqiHjVl5Lucao9spI3sZQUFvCHNTd9yN7LwIJ8LSX_P_n2MZxRBQ5OPxaMEpZYiivcK3Eohf6c7k4zU3gZqhaeousdesI6Rx_OD3wmx5iFWXs3xg",
        imageAlt:
          "A portrait of a distinguished male specialist doctor in a perfectly tailored charcoal medical coat.",
        items: [
          {
            icon: "precision_manufacturing",
            title: "Technical Superiority",
            description:
              "Access to proprietary diagnostic tools and surgical platforms not available in general hospitals.",
          },
          {
            icon: "lock",
            title: "Unparalleled Privacy",
            description:
              "Private entrances, secure data handling, and a strictly controlled environment for high-profile patients.",
          },
          {
            icon: "verified_user",
            title: "Global Network",
            description:
              "Direct coordination with the world's leading research institutes for unique medical cases.",
          },
        ],
      },
      faq: {
        heading: "Informed Care",
        items: [
          {
            question: "How do I request a specialist referral?",
            answer:
              "While we accept direct inquiries, most patients are referred via their primary executive health physician. We also offer internal screening appointments to determine eligibility for complex procedures.",
            openByDefault: true,
          },
          {
            question: "What is the typical recovery period?",
            answer:
              "Because we utilize minimally invasive robotic techniques, recovery times are often 60% faster than traditional methods. Most executive patients return to light professional duties within 72 hours.",
          },
          {
            question: "Do you offer international patient services?",
            answer:
              "Yes. We have a dedicated concierge team that manages travel logistics, private transport, and local luxury accommodations for our international clientele and their families.",
          },
        ],
      },
      finalCta: {
        heading: "Experience Medical Precision",
        body: "Your health is your greatest asset. Secure an appointment with a world-recognized leader in specialized clinical medicine.",
        primaryCta: "Book a Consultation",
        secondaryCta: "Contact Concierge",
      },
    },

    appointment: {
      hero: {
        badge: "Excellence in Precision Medicine",
        heading: "Book Your Consultation",
        body: "Secure your priority appointment with one of the world's leading specialists. Our concierge-style booking ensures your journey to health is handled with absolute discretion and clinical mastery.",
      },
      schedules: {
        heading: "Chambers & Schedules",
        subheading:
          "Choose your preferred location for a face-to-face evaluation.",
      },
      whatsapp: {
        heading: "Direct Access via WhatsApp",
        body: "For executive patients who value time and efficiency, our WhatsApp Concierge handles all appointment details instantly. No waiting on hold—just direct, personalized communication with our administrative team.",
        cta: "CHAT ON WHATSAPP",
        features: [
          "Priority Scheduling — Skip the queue for urgent consultations.",
          "End-to-End Privacy — All communications are encrypted and confidential.",
        ],
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAryKDCaQLNj7Gq2TkxFFEMZGkG_1_lVuEPfceszUbcPVGdFBJzZua9CpVpgm2HsYl6BOX7Wvw-mvQ0JTew73mYjDSarvKD4OdXzOEvXi0Qx3qeo8W7Ga_ZpgsAEMXFN5Guyhp2Z4Gt-O30XpTWqylp2zQdIXvb2rLiT-ARHz_1QqPe0XKcp_Ws645-74mWUH47ruy_WXqapYzO3ybSdGZ3p7urn1INslzEwlil1UUvRDlWtewjuZFUng",
        telehealthImage:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCjv5vpIPEslsLsiijC_4TQRAP9zvIE_Qhtga5G_exO0v9fd_KcH7cYb42b3PCHC64FvBpvoHxrijc88lBc_NNjIfKv-cZmBvMDrWjmyiWBUoTJdWCbf5Mg5lhs8-I0NmrQB6BYe6A4aWTWuo0BCD48ykkbM_S7M_i6X5oGbRTgAlZsmVchnxOe1Dmz1MvYKa2sLCojRHn4ostjGguTi1HkCBDRb3ATpAlSNtO_MM-5jMm9mWbyGoUt2w",
      },
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Do you accept international medical insurance?",
            answer:
              "Yes, we work with major international insurance providers including Bupa Global, Allianz Care, and Cigna International. Our billing department handles direct settlement for most platinum-tier plans.",
          },
          {
            question: "What should I prepare for my first consultation?",
            answer:
              "Please bring copies of your recent lab results, imaging (MRI/CT scans) on a disc or digital link, and a list of all current medications. For new patients, a 15-minute early arrival is recommended for registration.",
          },
          {
            question: "Are emergency appointments available?",
            answer:
              'We reserve a limited number of "Emergency Slots" daily for acute cases. Please contact our WhatsApp hotline or office directly by 8:00 AM to secure an emergency evaluation.',
          },
        ],
      },
      finalCta: {
        heading: "Ready to Take the Next Step?",
        body: "Experience the gold standard of specialist care, tailored to your unique biological profile and lifestyle requirements.",
        primaryCta: "Book Your Appointment",
        secondaryCta: "Call Concierge",
      },
    },
  },
};
