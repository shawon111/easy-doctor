export const templateOneDefaults = {
  header: {
    brandName: "{{name}}",
    navLinks: [
      { label: "Home", href: "/", key: "home" },
      { label: "About", href: "/about", key: "about" },
      { label: "Services", href: "/services", key: "services" },
    ],
    appointmentCta: "Book Appointment",
    appointmentCtaLink: "/appointment",
  },
  footer: {
    brandName: "{{name}}",
    tagline:
      "Personal medicine from a physician who knows your history. Because the best care starts with being known.",
    copyright:
      "© 2026 Dr. {{name}}. All Rights Reserved. Personally Practised Medicine.",
    officeHoursLabel: "Office Hours",
    officeHours: "Monday - Friday: 9:00 AM - 5:00 PM",
    urgentCareLabel: "Same-Day Line:",
    phone: "{{phone}}",
    socialUrl: "",
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
        badge: "YOUR OWN PHYSICIAN, EVERY VISIT",
        heading: "Expert Care with a",
        headingHighlight: "Personal Touch",
        body: "Dr. {{name}} brings thirty years of clinical excellence to a deliberately small practice, built on one promise: you are always seen by the doctor, never handed off.",
        primaryCta: "Book Appointment",
        secondaryCta: "See the Practice",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDTyxeutP7i3bLEgOgReazJq3fL8gL_0nt-ZGg7tXDH26cuyHhAjEY_V0Ht4_Q_h-_sIcfCK5Kj2zn0tLJfkGSkLidk_x-eIwZsKtHSYGri4uoLUvsz1-T8u9X9JwdfPUma0Qi01jqaPZAT5EBM3U-Z-DmmCQKReacdwWCpkwAeBv00vHIfaxo4ylI1UmYSfO0kddOLLOBy8N0vd4ouvwUeTowUmhLHTDT3n5HEsHysG_2WybeexPH1cw",
        imageAlt:
          "A professional portrait of Dr. {{name}} in a minimalist medical office",
        statCard: {
          value: "15+ Years",
          label: "YEARS IN PRACTICE",
        },
      },
      trustBadges: {
        items: [
          { icon: "school", stat: "M.D., PhD", label: "Academic Excellence" },
          { icon: "language", stat: "Trilingual", label: "EN, ES, FR" },
          { icon: "award_star", stat: "Top 1%", label: "Peer-Rated Standing" },
          { icon: "groups", stat: "5,000+", label: "Patients Cared For" },
        ],
      },
      aboutPreview: {
        heading: "Medicine That Knows Your Name",
        body: "Dr. {{name}} is a double board-certified specialist dedicated to a \"Whole Patient\" philosophy. By integrating advanced genomic insights with traditional preventative care, {{name}} ensures that every treatment plan is as unique as the individual.\n\nThis is a deliberately small practice. Dr. {{name}} takes his own calls, reviews the results personally, and stays with you through every stage of your care, rather than passing you to a rotating roster of staff.",
        linkLabel: "Read Full Biography",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCZm0_m40P1JS40jbijH63oQwT32n-U54apRIEaWxx_jC9GOzrKujhNnSCth51iO6OgwWp9mZuS9YD3jGEjWACTak_qiBOmHrr_-EbZ4jG7vEq0ERzWX7IdOZPjfO_DAaORn2tqzSp2Zkzod5UfW0UdwcagTnbq6YmGKUUHYRznHaRH99MIrXzmsY02dYox9vBoKTfvzcSXHKAKNa3khYxme5Nd_lVtLneBQ97A-1EQAovsKUHRRzH4DA",
        imageAlt:
          "A stethoscope resting on a marble surface next to a digital tablet in a clean consulting room",
        imageUrlSecondary:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAwbF8DBfY5iKBcJuS2gsog0qVe9-UID90sKW0LcvVD5Q8SsOdWbN4cYzg4v43dE272c0CQZwU40ZhO-TUesjG2pUg-VJfeEvAmSvRebrILkvwDnvZqShGA6MGt7oDiLSvTgbgheX089HOw-eZftVUVJiXH7dMyYVLrp0FsdkMWlnQVksKUWMgazzAdFKAWsNX0ZfoUiqwPWdQCtmmrP6nsTEmN8pom_FouTO3UCiQYRNEDq6i7vbispg",
        imageAltSecondary: "Dr. {{name}} reviewing a patient's health record in his consulting room",
      },
      services: {
        heading: "Specialized Medical Services",
        subheading:
          "Focused, physician-led care for your longevity and performance, delivered personally by Dr. {{name}} in every appointment.",
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
            title: "A Direct Line to the Doctor",
            description: "Secure messaging answered by Dr. {{name}}, not a call centre.",
          },
        ],
        quote:
          "In three decades of practice, I've learned that the most effective tool in medicine isn't a laser or a drug—it's the ability to listen.",
        quoteAuthor: "DR. {{name}}",
        quoteHeading: "Clinical Excellence Meets Personal Care",
        quoteImageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBcwDvF6ipEsG6rPGUBILKJXbJjzyOhIcdWSJu4QpL1J7CvTwFEk1ZPUjS803dWZf_ES7Sfl6Svye2Vr7_a4isSrTmfQwVCoq455xpIyZVpPzlUU36D7Q6r9CY1iPJGHBthUCwmMYaWh6ZB-ljDReIaKOOPsN4wRjWTHO-N8K_QP3Tz9K3xZygB7sH1guNSWnVIMUGAFEqyo2Q24LcJw3yjuMEIGkiLMO6OHyMZVUIIJsWl5HyWOAHi7w",
        quoteImageAlt: "A medical professional portrait",
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
        heading: "Where I Practice",
        locations: [
          {
            name: "Upper East Side Practice",
            address: "New York, NY",
            hours: "Monday - Friday: 9:00 AM - 5:00 PM",
            mapUrl: "https://www.google.com/maps?q=Upper+East+Side,+New+York,+NY",
          },
          {
            name: "Marylebone Practice",
            address: "London, UK",
            hours: "Monday - Friday: 9:00 AM - 5:00 PM",
            mapUrl: "https://www.google.com/maps?q=Marylebone,+London,+UK",
          },
        ],
      },
      finalCta: {
        heading: "Take the First Step to Optimal Vitality",
        body: "Whether you need a second opinion or a physician for the long term, Dr. {{name}} will sit with you, listen properly, and build a plan that fits your life.",
        primaryCta: "Request a Consultation",
        secondaryCta: "Contact Us",
      },
    },
    about: {
      hero: {
        badge: "About the Physician",
        heading: "Meet Dr. {{name}}.",
        body: "A pioneer in modern clinical practice, blending world-class medical expertise with a deeply personal commitment to patient well-being and clinical elegance.",
        experience: 25,
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDrI_-iJl8d3az-c3zTX2scS0feijBybba2fRXqjKnc2ZWzSgzq4vSt1Zf60XXveGwMrWd7uWP9SUfvzhmRC-4CfhHW6QBWVCg_XwGBITK4uQZuySo_ggYx3oyH-_pcU4Y5MrlYg-ZaY56SUfoZpn4hTGr5KGyYqnbwcnBr--V6F6gKqiTOiUiy2VXA0gaobkLSNBD59u5GlPDCqss1F6YUyPaArGTiWEqp6UHLaauteUk_E5CSagFPXg",
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
        body: "Dr. {{name}} is a double board-certified specialist dedicated to a \"Whole Patient\" philosophy. By integrating advanced genomic insights with traditional preventative care, {{name}} ensures that every treatment plan is as unique as the individual.\n\nThe practice is built on trust, discretion, and the relentless pursuit of medical innovation, so that you always know exactly who is looking after you.",
        languages: ["English", "Spanish", "French"],
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
            mobileDescription: "Mayo Medical School, Rochester",
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
          "Dr. {{name}} consults from his own private rooms in New York, a calm and unhurried setting designed for one-to-one conversation and a thorough examination.",
        locations: [
          {
            name: "Dr. {{name}}'s Private Practice",
            address: "New York, NY",
            hours: "Monday - Friday: 9:00 AM - 5:00 PM",
          },
        ],
        mapUrl: "https://www.google.com/maps?q=New+York,+NY",
      },
      finalCta: {
        heading: "Ready to Experience Better Care?",
        body: "Join the thousands of patients who have trusted Dr. {{name}} with their health, year after year.",
        primaryCta: "Schedule Your Consultation",
      },
    },
    services: {
      hero: {
        badge: "CLINICAL EXCELLENCE",
        heading: "Comprehensive Medical Care",
        body: "Merging cutting-edge medical precision with a compassionate, patient-first approach. Dr. {{name}} provides care tailored to your unique biological profile and lifestyle needs.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDrI_-iJl8d3az-c3zTX2scS0feijBybba2fRXqjKnc2ZWzSgzq4vSt1Zf60XXveGwMrWd7uWP9SUfvzhmRC-4CfhHW6QBWVCg_XwGBITK4uQZuySo_ggYx3oyH-_pcU4Y5MrlYg-ZaY56SUfoZpn4hTGr5KGyYqnbwcnBr--V6F6gKqiTOiUiy2VXA0gaobkLSNBD59u5GlPDCqss1F6YUyPaArGTiWEqp6UHLaauteUk_E5CSagFPXg",
        imageAlt:
          "A physician in a white medical coat in a bright minimalist medical office",
      },
      treatmentsGrid: {
        heading: "Specialized Medical Services",
        subheading:
          "Every service below is led by Dr. {{name}} personally, with trusted specialists brought in only when your case calls for them.",
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
          "This is not simply about treating symptoms; it is about building a blueprint for your long-term wellness.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDSQ4uIemD_xTtOwVnEu0nmn_APexm6QGm2BLP65hM7QcFVnbFVm0FoOOYWR9oRguBlyd9zFsbgb1grFcxr6e5D3hLv6g413aLUiAHgC9rF1UTKKMaD0-988mz7uNdfzMXFozyrqwz2-S9P7ZQjSO2x2xvvai7Rc3CAW8vy4K7g7kv9E4tau_P3KdMcYZEn_MOM_1GKx826eeLyuUjrRfKMyN06ZmItsLXLq0HGLxVW5QceCH4hpsJ78Q",
        imageAlt: "A doctor's examination room with modern diagnostic equipment",
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
              "One set of records, one coordinating physician, and every specialist aligned on your health journey.",
          },
        ],
      },
      faq: {
        heading: "Patient FAQ",
        items: [
          {
            question: "How do I prepare for my first consultation?",
            answer:
              "Please bring a list of current medications and any recent medical records. Plan to arrive 15 minutes early so there is time for your intake without eating into your appointment.",
            openByDefault: true,
          },
          {
            question: "Are diagnostic tests performed on-site?",
            answer:
              "Most standard blood work, ECGs and ultrasound scans are done in my own rooms, so results are usually ready the same day. For advanced imaging I refer you to laboratories I have worked with for years.",
            openByDefault: false,
          },
          {
            question: "Do you accept international insurance?",
            answer:
              "I work with a broad network of international providers. Contact my office before your visit and we will confirm your specific coverage.",
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
        body: "Ask Dr. {{name}} directly. A short conversation is usually all it takes to find the right path forward.",
        primaryCta: "Get in Touch",
        secondaryCta: "More About Us",
      },
    },
    appointment: {
      hero: {
        badge: "DIRECT SCHEDULING",
        heading: "Book Your Consultation Today.",
        body: "Booking is deliberately simple. Message Dr. {{name}}'s office on WhatsApp and we will find a time that suits you, with no call centre in between.",
        primaryCta: "Book via WhatsApp",
        secondaryCta: "View Schedules",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDrI_-iJl8d3az-c3zTX2scS0feijBybba2fRXqjKnc2ZWzSgzq4vSt1Zf60XXveGwMrWd7uWP9SUfvzhmRC-4CfhHW6QBWVCg_XwGBITK4uQZuySo_ggYx3oyH-_pcU4Y5MrlYg-ZaY56SUfoZpn4hTGr5KGyYqnbwcnBr--V6F6gKqiTOiUiy2VXA0gaobkLSNBD59u5GlPDCqss1F6YUyPaArGTiWEqp6UHLaauteUk_E5CSagFPXg",
        imageAlt: "A physician consulting with a patient",
      },
      howItWorks: {
        heading: "3 Simple Steps to Your Appointment",
        subheading: "Simple booking, handled personally by the doctor's office.",
        steps: [
          {
            icon: "send",
            title: "Send a Message",
            description:
              "Tap the WhatsApp link to open a direct chat with Dr. {{name}}'s office.",
          },
          {
            icon: "event_available",
            title: "Select a Slot",
            description:
              "We will share the latest openings in the appointment book for you to choose from.",
          },
          {
            icon: "task_alt",
            title: "Confirmation",
            description:
              "You receive your booking confirmation and any preparation notes for the visit right away.",
          },
        ],
      },
      schedule: {
        heading: "Practice Hours & Location",
        subheading: "Consultations are held at the practice below. Video visits and home visits can be arranged on request.",
        items: [
          { location: "Upper East Side Practice", day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
          { location: "Marylebone Practice", day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
        ],
      },
      whatsappCta: {
        heading: "Ready to Schedule?",
        body: "Dr. {{name}}'s office is online and ready to help. Average response time is under 15 minutes during office hours.",
        cta: "Message the office",
        features: ["WhatsApp Support Online"],
        whatsappUrl: "{{whatsappUrl}}"
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
              "I work with most major insurance providers. Send a photo of your insurance card on WhatsApp and my office will verify your coverage before the appointment.",
          },
          {
            question: "Can I cancel or reschedule?",
            answer:
              "Yes, please give at least 24 hours notice. That lets us offer the slot to another patient who is waiting. Rescheduling is easy over WhatsApp.",
          },
          {
            question: "Is tele-health available?",
            answer:
              'For follow-up appointments and prescription reviews, Dr. {{name}} offers secure video consultations. Mention "Video visit" when you message the office and we will set it up.',
          },
        ],
      },
    },
  },
};
