import TopNoticeStrip from "@/components/home/TopNoticeStrip";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import ArchitecturalValueStrip from "@/components/home/ArchitecturalValueStrip";
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

export default function Home() {
  return (
    <div className="bg-white font-sans text-slate-body antialiased selection:bg-secondary/15 selection:text-secondary min-h-screen">
      <TopNoticeStrip />
      <Header />
      <main className="w-full">
        <HeroSection />
        <ArchitecturalValueStrip />
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
  );
}
