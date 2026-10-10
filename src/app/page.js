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
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${marketingUrl}/#organization`,
      name: "Docxio",
      url: marketingUrl,
      logo: `${marketingUrl}/docxio-logo.webp`,
    },
    {
      "@type": "WebSite",
      "@id": `${marketingUrl}/#website`,
      name: "Docxio",
      url: marketingUrl,
      publisher: { "@id": `${marketingUrl}/#organization` },
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
