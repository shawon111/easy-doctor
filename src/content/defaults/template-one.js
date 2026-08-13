export const templateOneDefaults = {
  header: {
    navLinks: [
      { label: "Home", href: "/", key: "home" },
      { label: "About", href: "/about", key: "about" },
      { label: "Services", href: "/services", key: "services" },
    ],
    appointmentCta: "Book Appointment",
  },
  footer: {
    tagline:
      "Precision medicine for a life lived to its fullest potential. Clinical elegance, personal connection.",
    copyright:
      "© 2024 Dr. {{name}}. All Rights Reserved. Clinical Elegance in Practice.",
    officeHoursLabel: "Office Hours",
    urgentCareLabel: "Urgent Care Line:",
    resourceLinks: [
      { label: "Clinic Locations", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "New Patient Forms", href: "#" },
      { label: "FAQs", href: "#" },
    ],
    legalLinks: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Medical Services", href: "#" },
      { label: "Patient Portal", href: "#" },
    ],
  },
  pages: {
    home: {
      hero: {
        badge: "PREMIUM CONCIERGE MEDICINE",
        heading: "Expert Care with a",
        headingHighlight: "Personal Touch",
        body: "Dr. {{name}} combines thirty years of clinical excellence with a human-centric approach to modern diagnostics and holistic wellness.",
        primaryCta: "Book Appointment",
        secondaryCta: "View Our Clinic",
        imageAlt:
          "A professional portrait of Dr. {{name}} in a minimalist medical office",
        statCard: {
          value: "15+ Years",
          label: "CLINICAL EXPERIENCE",
        },
      },
      trustBadges: {
        items: [
          { icon: "school", stat: "M.D., PhD", label: "Academic Excellence" },
          { icon: "language", stat: "Trilingual", label: "EN, ES, FR" },
          { icon: "award_star", stat: "Top 1% Rank", label: "Global Specialists" },
          { icon: "groups", stat: "5,000+", label: "Satisfied Patients" },
        ],
      },
      aboutPreview: {
        heading: "Redefining the Medical Experience",
        body: "Dr. {{name}} is a double board-certified specialist dedicated to a \"Whole Patient\" philosophy. By integrating advanced genomic insights with traditional preventative care, {{name}} ensures that every treatment plan is as unique as the individual.\n\nOur practice is built on trust, discretion, and the relentless pursuit of medical innovation, providing a sanctuary for your health.",
        linkLabel: "Read Full Biography",
        imageAlt:
          "A stethoscope resting on a marble surface next to a digital tablet in a clean consulting room",
      },
      services: {
        heading: "Specialized Medical Services",
        subheading:
          "Providing a comprehensive range of clinical solutions tailored to your longevity and performance.",
        items: [
          {
            icon: "ecg",
            title: "Cardiovascular Health",
            description:
              "Advanced screenings and personalized cardiac risk assessments for long-term heart vitality.",
          },
          {
            icon: "genetics",
            title: "Genomic Medicine",
            description:
              "Unlocking your DNA profile to customize nutritional and preventative health strategies.",
          },
          {
            icon: "psychology",
            title: "Neurological Wellness",
            description:
              "Holistic approaches to cognitive performance, sleep optimization, and stress management.",
          },
        ],
      },
      whyChooseUs: {
        heading: "The {{name}} Standard",
        items: [
          {
            icon: "schedule",
            title: "Zero Waiting Time",
            description: "Your time is respected with prompt, priority scheduling.",
          },
          {
            icon: "security",
            title: "Absolute Privacy",
            description: "Confidential medical records and private entry points.",
          },
          {
            icon: "biotech",
            title: "Modern Equipment",
            description: "Access to the latest FDA-approved diagnostic technology.",
          },
          {
            icon: "support_agent",
            title: "24/7 Portal Access",
            description: "Secure messaging for immediate health concerns.",
          },
        ],
        quote:
          "In three decades of practice, I've learned that the most effective tool in medicine isn't a laser or a drug—it's the ability to listen.",
        quoteAuthor: "DR. {{name}}",
      },
      appointmentProcess: {
        heading: "The Journey to Better Health",
        subheading:
          "A streamlined, stress-free process designed for busy professionals.",
        steps: [
          {
            number: "1",
            title: "Consult",
            description:
              "A deep-dive assessment of your medical history and lifestyle.",
          },
          {
            number: "2",
            title: "Diagnose",
            description:
              "Advanced diagnostics and data analysis for precise insights.",
          },
          {
            number: "3",
            title: "Treat",
            description:
              "Execution of your personalized health and wellness roadmap.",
          },
        ],
      },
      clinicLocations: {
        heading: "Our Clinics",
        mapImages: [
          {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI-SdvQgT6ooXiwhtdYE0FflqijxOwO7SH7bDg4n4DUv2G2AwZ0tAQalGBjGABUG1fhaH2RmBmwPKq4J-xGRg1mEbq96iLF0ba686Ozo4yGY92YJrpYiIGrhrROFTOj9CvvQo9i5IvuT-81CC3Jm9sEEcGXE-E1WoupE27E8AjXMm07jt7bh5e4KDL0haCCTBrssM_9IP7UUrHFdeEW_bW5E2f4WtkkA-FjraLeFYYZslVVLJH65vOQQ",
            alt: "Map view of the Upper East Side, New York City, near Central Park",
          },
          {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmHkteCkevwmGF5l3RdD6FtBOisn2Djxe5QwkoMx3oyTwWXYMhIPk1e20TVVdlWzPpvx-6XoOxkKCGiAQZ2jkkpusnlN2A4bREfYAJ_fs18WWiJ4RPjY0Fm_WQ_c1KKer9NYsJahcjNul-0RGGOdOhCmbwBo4mlWCZAVO0ymZeitYeFqXgFKwWQGYClOqOypqfNkKB66NX9_MwdMxzi4P28tCXHBMpkn5oWc72j1I-WHWaOTW8e5rXKQ",
            alt: "Map view of Marylebone, London, near Harley Street",
          },
        ],
      },
      finalCta: {
        heading: "Take the First Step to Optimal Vitality",
        body: "Whether you need a specialized consultation or a complete health overhaul, our doors are open for your journey.",
        primaryCta: "Request a Consultation",
        secondaryCta: "Contact Us",
      },
    },
    about: {
      hero: {
        badge: "About the Physician",
        heading: "Meet Dr. {{name}}.",
        body: "A pioneer in modern clinical practice, blending world-class medical expertise with a deeply personal commitment to patient well-being and clinical elegance.",
        imageAlt:
          "Dr. {{name}}, a physician in a white medical coat, in a bright minimalist medical office",
      },
      philosophy: {
        quote:
          "Medicine is not just the science of treating symptoms; it is the art of restoring the dignity and vitality of the human spirit through precise, compassionate care.",
        author: "— Dr. {{name}}, MD, FACS",
      },
      bioStats: {
        heading: "A Patient-Centric Philosophy",
        stats: [
          { value: "4,200+", label: "Successful Procedures" },
          { value: "98%", label: "Patient Satisfaction Rate" },
        ],
      },
      timeline: {
        heading: "Academic & Professional Journey",
        subheading: "A legacy of excellence and continuous learning.",
        items: [
          {
            period: "2005 — 2009",
            title: "Medical Doctorate",
            description:
              "Graduated with high honors, specializing in advanced physiological systems.",
            mobileDescription: "Johns Hopkins University School of Medicine",
            reverse: false,
          },
          {
            period: "2009 — 2014",
            title: "Surgical Residency",
            description:
              "Focused on minimally invasive techniques and robotic-assisted surgery.",
            mobileDescription: "Mayo Clinic Graduate School of Medical Education",
            reverse: true,
          },
          {
            period: "2014 — 2016",
            title: "Senior Fellowship",
            description:
              "Advanced fellowship in specialized regenerative medicine and patient recovery.",
            mobileDescription: "Stanford University Medical Center",
            reverse: false,
          },
        ],
      },
      chambers: {
        heading: "Where Excellence Resides",
        subheading:
          "Dr. {{name}} currently chairs the Precision Medicine Department at the Vance Clinical Institute, a state-of-the-art facility designed for patient comfort and surgical precision.",
      },
      finalCta: {
        heading: "Ready to Experience Better Care?",
        body: "Join the thousands of patients who have entrusted their health to Dr. {{name}}'s clinical expertise.",
        primaryCta: "Schedule Your Consultation",
      },
    },
    services: {
      hero: {
        badge: "CLINICAL EXCELLENCE",
        heading: "Comprehensive Medical Care",
        body: "Merging cutting-edge medical precision with a compassionate, patient-first approach. We provide specialized care tailored to your unique biological profile and lifestyle needs.",
      },
      treatmentsGrid: {
        heading: "Specialized Medical Services",
        subheading:
          "Our clinic is equipped with the latest diagnostic technology and staffed by industry-leading specialists.",
        items: [
          {
            icon: "cardiology",
            title: "Cardiology",
            description:
              "Advanced cardiovascular screenings, heart health monitoring, and personalized preventative strategies for long-term vitality.",
          },
          {
            icon: "medical_services",
            title: "General Practice",
            description:
              "Holistic family medicine focusing on acute care, chronic disease management, and comprehensive wellness evaluations.",
          },
          {
            icon: "biotech",
            title: "Diagnostics",
            description:
              "State-of-the-art laboratory testing and imaging services providing rapid, accurate insights for informed health decisions.",
          },
          {
            icon: "neurology",
            title: "Neurology",
            description:
              "Specialized care for neurological conditions, utilizing the latest research to manage brain and nervous system health.",
          },
          {
            icon: "nutrition",
            title: "Metabolic Health",
            description:
              "Expert guidance on endocrine function, weight management, and nutritional strategies for optimal metabolic performance.",
          },
          {
            icon: "elderly",
            title: "Longevity Medicine",
            description:
              "Proactive biological age assessment and personalized protocols designed to extend your healthspan and vitality.",
          },
        ],
      },
      benefits: {
        heading: "The Value of Precision Care",
        subheading:
          "Our services are not just about treating symptoms; they are about architecting a blueprint for your long-term wellness.",
        items: [
          {
            icon: "verified_user",
            title: "Prevention First",
            description:
              "Early detection protocols that identify potential risks before they become clinical issues.",
          },
          {
            icon: "strikethrough_s",
            title: "Biological Personalization",
            description:
              "Treatments tailored to your specific genetic and lifestyle markers for superior efficacy.",
          },
          {
            icon: "psychology",
            title: "Holistic Continuity",
            description:
              "Unified records and coordinated care ensure every specialist is aligned on your health journey.",
          },
        ],
      },
      faq: {
        heading: "Patient FAQ",
        items: [
          {
            question: "How do I prepare for my first consultation?",
            answer:
              "Please bring a list of current medications and any recent medical records. We recommend arriving 15 minutes early to complete our digital onboarding process on the patient portal.",
            openByDefault: true,
          },
          {
            question: "Are diagnostic tests performed on-site?",
            answer:
              "Yes, our clinic features a state-of-the-art laboratory and imaging suite, allowing us to perform most diagnostics in-house for your convenience and speed.",
            openByDefault: false,
          },
          {
            question: "Do you accept international insurance?",
            answer:
              "We work with a broad network of premium international providers. Please contact our administrative team prior to your visit to verify your specific coverage.",
            openByDefault: false,
          },
          {
            question: "How long does a typical evaluation take?",
            answer:
              "Initial consultations typically last 45-60 minutes to ensure Dr. {{name}} has sufficient time to understand your history and concerns thoroughly.",
            openByDefault: false,
          },
        ],
      },
      ctaBanner: {
        heading: "Not sure which service you need?",
        body: "Speak with our triage coordinator for a preliminary assessment and guidance on the best path forward.",
        primaryCta: "Get in Touch",
        secondaryCta: "View Patient Portal",
      },
    },
    appointment: {
      hero: {
        badge: "DIRECT SCHEDULING",
        heading: "Book Your Consultation Today.",
        body: "Experience clinical elegance through our streamlined booking process. Connect directly with our team via WhatsApp for personalized scheduling and professional care.",
      },
      howItWorks: {
        heading: "3 Simple Steps to Your Appointment",
        subheading: "Modern booking for a premium healthcare experience.",
        steps: [
          {
            icon: "send",
            title: "Send a Message",
            description:
              "Click our WhatsApp link to open a direct chat with our clinical concierge team.",
          },
          {
            icon: "event_available",
            title: "Select a Slot",
            description:
              "Our team will share the latest availability across all clinics for you to choose from.",
          },
          {
            icon: "task_alt",
            title: "Confirmation",
            description:
              "Receive your digital booking confirmation and clinical instructions instantly.",
          },
        ],
      },
      schedule: {
        heading: "Clinic Locations & Hours",
        subheading: "Multiple locations across the city for your convenience.",
      },
      whatsappCta: {
        heading: "Ready to Schedule?",
        body: "Our clinical team is online and ready to assist you. Average response time is under 15 minutes during clinic hours.",
        cta: "Chat with our team",
        features: ["WhatsApp Support Online"],
      },
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "What documents should I bring?",
            answer:
              "Please bring a valid ID, your current insurance card, and any recent medical records or imaging (X-rays, MRIs) related to your visit. A list of current medications is also highly recommended.",
          },
          {
            question: "Do you accept my insurance?",
            answer:
              "We work with most major insurance providers. Please message us on WhatsApp with a photo of your insurance card so our billing team can verify your coverage before your appointment.",
          },
          {
            question: "Can I cancel or reschedule?",
            answer:
              "Yes, we request at least 24 hours notice for cancellations or rescheduling. This allows us to offer the time slot to another patient in need. You can manage this easily via WhatsApp.",
          },
          {
            question: "Is tele-health available?",
            answer:
              'For follow-up consultations and prescription refills, we offer secure video conferencing. Mention "Tele-health" when booking via WhatsApp for more details.',
          },
        ],
      },
    },
  },
};
