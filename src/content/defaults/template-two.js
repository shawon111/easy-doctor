export const templateTwoDefaults = {
  header: {
    brandName: "{{name}}",
    navLinks: [
      { label: "Home", href: "", key: "home" },
      { label: "About", href: "/about", key: "about" },
      { label: "Services", href: "/services", key: "services" },
    ],
    appointmentCta: "Book Appointment",
    appointmentCtaLink: "/appointment",
  },

  footer: {
    brandName: "{{name}}",
    tagline:
      "One physician, absolute discretion, and medicine practised at the highest level.",
    copyright: "© 2026 Dr. {{name}}. Personal Medicine, Practised Precisely.",
    phone: "{{phone}}",
    socialUrl: "",
    websiteUrl: "",
    email: "",
    practiceLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
    ],
    resourceLinks: [
      { label: "Appointment", href: "/appointment" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
    legalLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
    ],
  },

  pages: {
    home: {
      hero: {
        badge: "Exclusive Precision Care",
        heading: "Dr. {{name}}",
        credentialsLine: "MD, PhD, FRCP (Lond)",
        body: "Pioneering personal medicine with a focus on longevity, cognitive performance, and surgical precision. Every patient is seen by the same physician at every visit, without exception.",
        primaryCta: "Schedule Consultation",
        secondaryCta: "View Credentials",
        imageAlt:
          "A cinematic, high-end professional portrait of a distinguished male specialist doctor in a light, luxury medical suite.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDXxKwFcSECIyn9rW8o_uDKX37xePMxOsbGbwQgrLqtpWtQKANCJnZQqNHdmWfnFbCdUqTyykWUoNvrAeUWb85qQ6-TPkWREcdFn9eRACqOH2u7GQGSo79HfitvGpnPTGxeJzL0lb4_5WtxMioB_Tq_fum1baQMDk7JEkK6-ew6rOWcpBMngJGUd0eW8XUksnh2HbYT47otp692cTcjl_EG01vZ3TBhX6oW7vqHQDw-N_EHaAcxoAKT1w",
      },
      credentials: {
        heading: "Distinguished Pedigree",
        subheading:
          "Foundational excellence built upon the world's leading medical schools and decades of hands-on clinical mastery.",
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
            href: "/services",
            imageUrl:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBB9u7mczd5j1pTng72G6DvLx7C_Kx6wJ4TyC2uP3iqsfTOLpUuKyGwqw_Y0uxNQ4liKtck5si65NfQpizmZooL6j2tr82hCGBseOjwneijHVtoantev4YsKjbDnHRuVFRHnqkDse3XvaFfbcEz0GV_FBCtmSGap0iVH8kDvv7GEnwmIr5rDPgepcsp2eVHrhuO7gYaDL7E2K8A3KC5fNLMb1JMecTo9oQvA5rLBNGjV4E8p65_gSv72A",
            imageAlt: "High-contrast medical equipment shot.",
          },
          {
            icon: "biotech",
            title: "Genomic Profile Screening",
            description:
              "Deep genetic mapping to predict and prevent chronic vascular pathologies.",
            href: "/services",
            imageUrl:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAdRlGII0S6SiGvSN9OKxu3OgPZ438IC8ULONkjSeb7YIgvNtkpnhNbFWnbWpTM-NeomX_prMEW03XU28Mg6fHPvJZe7QxvWdwA0nh65spFQfqntZHAD2Xa1vGT5A8v10nb7S_V5Jb3OMSmfUMEb-N7OLq8HQulRYFEtezo0UOo1wZQvB37uL4exyaBy27tbWCFAaE9NjOQEPA5ZUQk5abLMzqrMeVS-cFU-9G0TM1s48d6hk4j-p87ag",
            imageAlt: "Genomic illustration.",
          },
          {
            icon: "vital_signs",
            title: "Longevity Optimization",
            description:
              "A holistic, executive-level health management plan focusing on bio-markers and hormonal balance.",
            href: "/services",
          },
          {
            icon: "medical_services",
            title: "Executive Performance Medicine",
            description:
              "Custom nutritional and physiological engineering for high-performing professionals and athletes.",
            href: "/services",
            imageUrl:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuANlR6_GTLRQ5hdnA8hl-A654weJ8LGYcQTkNoHVe3fZ7BXo2meLy2mzZBzfgbkfcoQdVpkTOaLa_s_x4HBx_2zmJHNC-Z0k6O3PqLDzgD-rdGkn2gFNaerWAns27iZ3mLEKm9iBHn0P7jsg3knLf5XlqxzwrQPAYT_6GbMQGAUjHGlv9lropAYuTC9-7yX5q2b51SMpsfiqzGu0zOp12LWoN0OoqjccX2DQRbTK6VTWeIFSAeRYxKdWQ",
            imageAlt: "High-end medical vials.",
          },
        ],
      },
      timeline: {
        heading: "A Career Defined by Precision",
        subheading:
          "Medicine is not merely a science, but an art. It does not consist of compounding pills and plasters; it deals with the very processes of life.",
        experience: 25,
        items: [
          {
            period: "2018 — Present",
            title: "Chief of Specialized Surgery",
            description:
              "Lead consultant in neuro-vascular surgery at a major European referral centre.",
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
        heading: "Becoming My Patient",
        subheading: "A streamlined three-step journey to truly personal care.",
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
              "In-depth diagnostics at my private rooms, mapped to your unique physiology.",
          },
          {
            number: "03",
            icon: "medical_services",
            title: "Intervention",
            description:
              "Your bespoke treatment protocol, carried out and supervised by Dr. {{name}} himself.",
          },
        ],
      },
      chamber: {
        heading: "My Harley Street Rooms",
        subheading:
          "Set in the historic heart of London's medical district, my rooms provide a quiet, private setting for one-to-one consultation.",
        mapUrl: "https://www.google.com/maps?q=Harley+Street,+London,+UK",
        location: {
          name: "Harley Street Rooms",
          address: "London, UK",
          hours: "Monday - Friday: 9:00 AM - 5:00 PM",
        },
      },
      finalCta: {
        heading: "The Pinnacle of Personal Care",
        body: "Secure your appointment with London's leading precision specialist today. Intake is limited so that every patient gets the doctor's full attention.",
        primaryCta: "Enquire About an Appointment",
      },
    },

    about: {
      hero: {
        badge: "EXCELLENCE IN PRECISION MEDICINE",
        heading: "About Dr. {{name}}",
        body: "Redefining the standards of specialized care through a legacy of clinical mastery, academic rigor, and an unwavering commitment to patient longevity.",
        languages: ["English", "French", "Arabic"],
        imageAlt:
          "A professional portrait of an executive male specialist doctor in his early 50s, wearing a bespoke navy suit and a white clinical coat.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC6E94N4ihuxDnC1fKJmF2jN7fNcNgbm2BYOBjiBjvoKhWAFtOdRackfeSEGaNAOqXUZGYze11OX_DLJd1Jn2X1St5Sbj0paJDGp7UmiqbqHl9nwGWGoLDq1wfFeoPiXG3NL-Gn05fI172zWcz7P9k0A8adGWqtO8OeWoU-cTW1icWJKgzCELXF_t2Y4vMoZejyWfVCdojwZp9UKP6nvs-RF8rScj6x3vaMn9omwEE31xVTrLn5XmaLEA",
      },
      story: {
        heading: "A Legacy of Care",
        body: "Dr. {{name}}'s journey began at the prestigious Johns Hopkins School of Medicine, where they graduated at the top of their class. Their early career was defined by a relentless pursuit of innovation in complex diagnostics and internal medicine. Over the last two decades, they have pioneered specialized protocols that bridge the gap between traditional clinical excellence and modern biotechnological advancements. Their philosophy centers on the 'whole-patient' paradigm—understanding that true health is the synergy of biological precision, lifestyle architecture, and preventive vigilance. Having served as a Chief Resident and later as a Lead Consultant at world-renowned teaching hospitals, Dr. {{name}} has handled over 5,000 complex cases. Their reputation for solving 'unsolvable' diagnostic puzzles has made them the preferred choice for global executives and high-profile individuals who demand absolute discretion and technical mastery. Every patient strategy is bespoke, crafted with the same meticulous attention to detail as a master watchmaker, ensuring that every variable of a patient's health is accounted for.",
        quote:
          "Medicine is not merely a science of diagnosis, but an art of precision, empathy, and foresight.",
        quoteAuthor: "Dr. {{name}}",
      },
      timeline: {
        heading: "Professional Milestone",
        subheading: "CHRONOLOGY OF EXCELLENCE",
        items: [
          {
            period: "2026",
            title: "Global Medical Excellence Award",
            description:
              "Recognized for groundbreaking research in preventive genomics.",
            reverse: false,
          },
          {
            period: "2018",
            title: "Opened Private Practice",
            description:
              "Building a deliberately small practice devoted to one-to-one executive health.",
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
        heading: "Where I Practice",
        subheading:
          "Dr. {{name}} consults from two locations and personally attends every patient. When you book with the doctor, you are seen by the doctor.",
        items: [
          {
            icon: "location_on",
            title: "Central Heights Medical",
            description:
              "420 Park Avenue, 18th Floor, New York, NY 10022. Mon - Wed: 09:00 - 16:00. Friday: 09:00 - 13:00.",
            imageUrl:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuB9PrktMatctpk7B9fA7GQbb7Yj-9yZ1luWjd5V1ZJ3VEq6xo0YI7ugWchnBb6XvGEgqB5ZsO5weNM9ZOQrnKb2VpQjT_vkBHLEBW6fTZIK9DupkYHefmOT2XnXgqg-INusxuk8zGj2QahaIyJuNR7DPiXhl4Dr_eFHYbsTqOu29tmiH5WhenizPHyHGFGJWhfWLcrSdU6D4ZKXbIWoLacqyMzx3wi1nFgtdbPrAzoyn25GAjIoksd6Vw",
            imageAlt: "An ultra-modern, high-end medical lobby",
          },
          {
            icon: "location_on",
            title: "Meridian Rooms",
            description:
              "12 Greenwich Way, Westchester County, NY. Thursday: 10:00 - 18:00. Saturday: By Appointment Only.",
            imageUrl:
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
        body: "Advanced medical mastery combined with unhurried, personal care. Dr. {{name}} uses the frontier of medical technology to deliver results with absolute precision.",
      },
      featured: {
        badge: "Pinnacle Technology",
        heading: "Precision Robotic Microsurgery",
        body: "Utilizing state-of-the-art haptic feedback systems for sub-millimeter accuracy in complex neurological and cardiac interventions.",
        cta: "View Methodology",
        imageAlt:
          "A hyper-realistic surgical robot arm performing a micro-procedure under cinematic cool blue clinical lighting.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAejtLRzK3bQa8whYcqiEkJObPaIDyqcXjcRn4X8JBxGYwYqh9wouWsYaKVXAMWpeTRTbtzvvJSwRKTTxMexesGEx5jDyNlX3quKr6GZ3xGJqcSeuhdr1LES0joedLZdSlv_J3gEIe3tmoqaPRE2DMT1YHXPUgBCWfhk0DvV-ZaYt10jf4D1s3XMhcw6B0vSwpCz9EkWB6Lqhp7Mgme8tYdzBEiRk6i13Ap16NUK3ME3sqWelrnZ8ULTw",
        secondaryFeatured: {
          heading: "Diagnostic Profiling",
          body: "Comprehensive executive wellness mapping using advanced multi-spectral imaging.",
          imageUrl:
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
          "My patients value discretion, time, and technical certainty. This practice is built on three pillars of excellence.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMnzyNVVzbtBCUayb8cPumdCi_8F0iPFr0wIttqUVZPsBSfXyB-y9RONuOLfCJCWohjlONLcOBNp3KTGS0UFwfWwOneaCxCLyFsuaW2j22MslZRdTygeeJE-5SsN7JiXYzrWnwwZTqiHjVl5Lucao9spI3sZQUFvCHNTd9yN7LwIJ8LSX_P_n2MZxRBQ5OPxaMEpZYiivcK3Eohf6c7k4zU3gZqhaeousdesI6Rx_OD3wmx5iFWXs3xg",
        imageAlt:
          "A portrait of a distinguished male specialist doctor in a perfectly tailored charcoal medical coat.",
        badge: {
          value: "25+ Years",
          label: "Clinical Mastery",
        },
        items: [
          {
            icon: "precision_manufacturing",
            title: "Technical Superiority",
            description:
              "Access to the diagnostic tools and surgical platforms I choose to work with, rather than whatever a large hospital happens to stock.",
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
              "I accept direct enquiries, though most patients come through their own GP. I also offer screening appointments to establish whether a complex procedure is right for you.",
            openByDefault: true,
          },
          {
            question: "What is the typical recovery period?",
            answer:
              "Because I use minimally invasive robotic techniques, recovery is often 60% faster than with traditional methods. Most patients return to light professional duties within 72 hours.",
          },
          {
            question: "Do you offer international patient services?",
            answer:
              "Yes. My office arranges travel logistics, private transport, and local accommodation for international patients and their families.",
          },
        ],
      },
      finalCta: {
        heading: "Experience Medical Precision",
        body: "Your health is your greatest asset. Secure an appointment with a world-recognized leader in specialized medicine.",
        primaryCta: "Book a Consultation",
        secondaryCta: "Contact My Office",
      },
    },

    appointment: {
      hero: {
        badge: "Excellence in Precision Medicine",
        heading: "Book Your Consultation",
        body: "Secure a priority appointment with Dr. {{name}}. Every booking is handled quietly and efficiently by the doctor's own office, with absolute discretion.",
      },
      schedules: {
        heading: "Chambers & Schedules",
        subheading:
          "Choose your preferred location for a face-to-face evaluation.",
        items: [
          { location: "Harley Street Rooms", day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
          { location: "Central Consulting Rooms", day: "Tuesday - Thursday", hours: "10:00 AM - 6:00 PM" },
        ],
      },
      whatsapp: {
        heading: "Direct Access via WhatsApp",
        body: "For patients who value their time, my office handles every appointment detail over WhatsApp, instantly. No waiting on hold—just direct, personal communication with Dr. {{name}}'s office.",
        cta: "CHAT ON WHATSAPP",
        whatsappUrl: "{{whatsappUrl}}",
        phoneDisplay: "{{phone}}",
        features: [
          "Priority Scheduling — Skip the queue for urgent consultations.",
          "End-to-End Privacy — All communications are encrypted and confidential.",
        ],
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAryKDCaQLNj7Gq2TkxFFEMZGkG_1_lVuEPfceszUbcPVGdFBJzZua9CpVpgm2HsYl6BOX7Wvw-mvQ0JTew73mYjDSarvKD4OdXzOEvXi0Qx3qeo8W7Ga_ZpgsAEMXFN5Guyhp2Z4Gt-O30XpTWqylp2zQdIXvb2rLiT-ARHz_1QqPe0XKcp_Ws645-74mWUH47ruy_WXqapYzO3ybSdGZ3p7urn1INslzEwlil1UUvRDlWtewjuZFUng",
        imageAlt: "A private WhatsApp consultation with the doctor's office",
        telehealthImage:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCjv5vpIPEslsLsiijC_4TQRAP9zvIE_Qhtga5G_exO0v9fd_KcH7cYb42b3PCHC64FvBpvoHxrijc88lBc_NNjIfKv-cZmBvMDrWjmyiWBUoTJdWCbf5Mg5lhs8-I0NmrQB6BYe6A4aWTWuo0BCD48ykkbM_S7M_i6X5oGbRTgAlZsmVchnxOe1Dmz1MvYKa2sLCojRHn4ostjGguTi1HkCBDRb3ATpAlSNtO_MM-5jMm9mWbyGoUt2w",
        telehealthImageAlt: "Secure telehealth consultation",
      },
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Do you accept international medical insurance?",
            answer:
              "Yes, I work with major international insurers including Bupa Global, Allianz Care, and Cigna International. My office handles direct settlement for most platinum-tier plans.",
          },
          {
            question: "What should I prepare for my first consultation?",
            answer:
              "Please bring copies of your recent lab results, imaging (MRI/CT scans) on a disc or digital link, and a list of all current medications. For new patients, a 15-minute early arrival is recommended for registration.",
          },
          {
            question: "Are emergency appointments available?",
            answer:
              'I keep a small number of same-day slots for acute cases. Message my office on WhatsApp or call before 8:00 AM to secure an emergency evaluation.',
          },
        ],
      },
      finalCta: {
        heading: "Ready to Take the Next Step?",
        body: "Experience the gold standard of specialist care, tailored to your unique biological profile and lifestyle requirements.",
        primaryCta: "Book Your Appointment",
        secondaryCta: "Call My Office",
      },
    },
  },
};
