import TopNoticeStrip from "@/components/home/TopNoticeStrip";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import ArchitecturalValueStrip from "@/components/home/ArchitecturalValueStrip";
import FreeTrialSection from "@/components/home/FreeTrialSection";
import PatientSearchExperience from "@/components/home/PatientSearchExperience";
import HowItWorks from "@/components/home/HowItWorks";
import TemplateShowcase from "@/components/home/TemplateShowcase";
import DoctorPortalPreview from "@/components/home/DoctorPortalPreview";
import SeoFoundation from "@/components/home/SeoFoundation";
import CustomDomainSection from "@/components/home/CustomDomainSection";
import PricingSection from "@/components/home/PricingSection";
import FaqSection from "@/components/home/FaqSection";
import ClosingCta from "@/components/home/ClosingCta";
import Footer from "@/components/home/Footer";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";
import { getMarketingBaseUrl, serializeJsonLd } from "@/lib/seo/urls";

const marketingUrl = getMarketingBaseUrl().toString().replace(/\/$/, "");

export const metadata = createMarketingMetadata({
  title: "Docxio — Doctor Website Builder in Bangladesh",
  description:
    "Create your professional doctor website with Docxio. Showcase your qualifications, medical services and clinic information, improve your online presence, and receive appointment requests online.",
  path: "/",
});

const homeFaqs = [
  {
    q: "Do I need any technical or coding knowledge?",
    a: "None at all. Docxio was specifically built so physicians, consultants, and their clinic assistants can enter visiting schedules, degree titles, and chamber addresses without touching any code or dealing with technical hosting servers.",
  },
  {
    q: "How long does it take for my website to go live?",
    a: "Many doctors can complete the initial setup in about 2 minutes. The time to review your details and finish publishing can vary depending on your profile and website content; check the dashboard for the current status.",
  },
  {
    q: "Is a Docxio subdomain included?",
    a: "You can publish on a Docxio subdomain, such as dr-yourname.docxio.com, without separately registering that subdomain. Website access is subject to the trial or active plan. A custom domain must be registered separately.",
  },
  {
    q: "Can I connect my own custom .com domain later?",
    a: "Yes. Add a custom domain through the dashboard and follow the DNS records shown there. You need to register and maintain the domain with a domain registrar; DNS changes can take time to propagate.",
  },
  {
    q: "How do patients book appointments or contact my chamber?",
    a: "Depending on the booking preference you configure, your website can show WhatsApp contact, an appointment request form, or both. Keep the displayed clinic hours and contact details accurate.",
  },
  {
    q: "Which payment methods are supported in Bangladesh?",
    a: "Available payment methods are provided by the payment checkout. Review the methods and total displayed there before confirming a payment.",
  },
  {
    q: "Can I update my visiting hours and chamber details later?",
    a: "You can update your practice information from the dashboard. After saving changes, review the public website to confirm the updated details are displayed correctly.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${marketingUrl}/#organization`,
      name: "Docxio",
      url: marketingUrl,
      logo: `${marketingUrl}/docxio-logo.webp`,
      description:
        "Docxio is the leading doctor website builder in Bangladesh, empowering doctors and clinics to create professional websites with custom domains, patient appointment booking, and practice portfolios.",
      telephone: "+8801619468707",
      email: "support@docxio.com",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+8801619468707",
          contactType: "customer support",
          areaServed: "BD",
          availableLanguage: ["English", "Bengali"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/docxio",
        "https://www.linkedin.com/company/docxio",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${marketingUrl}/#website`,
      name: "Docxio",
      url: marketingUrl,
      publisher: { "@id": `${marketingUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${marketingUrl}/doctors?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": `${marketingUrl}/#software`,
      name: "Docxio Doctor Website Builder",
      url: marketingUrl,
      applicationCategory: "BusinessApplication",
      operatingSystem: "All",
      description:
        "Fast, code-free website builder engineered for doctors, surgeons, specialists, and clinics in Bangladesh.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BDT",
        description: "15-day full access free trial",
      },
      featureList: [
        "Instant medical website templates",
        "Free platform subdomain and custom domain connection",
        "Chamber visiting hours and serial management",
        "Direct WhatsApp and website appointment requests",
        "Automated SEO metadata and Schema.org structured data",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${marketingUrl}/#faq`,
      mainEntity: homeFaqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
          "@type": "Answer",
          text: a,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
      <div className="bg-white font-sans text-slate-body antialiased selection:bg-secondary/15 selection:text-secondary min-h-screen">
        <TopNoticeStrip />
        <Header />
        <main className="w-full">
          <HeroSection />
          <ArchitecturalValueStrip />
          <FreeTrialSection />
          <PatientSearchExperience />
          <HowItWorks />
          <TemplateShowcase />
          <DoctorPortalPreview />
          <SeoFoundation />
          <CustomDomainSection />
          <PricingSection />
          <FaqSection />
          <ClosingCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
