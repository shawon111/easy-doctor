import Reveal from "@/components/templates/ui/Reveal";


export default function AboutFinalCtaOne() {
  return (
    <Reveal
      as="section"
      className="py-section-padding px-margin-mobile md:px-margin-desktop text-center"
    >
      <div className="max-w-3xl mx-auto bg-primary p-stack-lg rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)] text-on-primary">
        <h2 className="font-headline-lg text-headline-lg mb-stack-sm">
          Ready to Experience Better Care?
        </h2>
        <p className="text-body-lg opacity-90 mb-stack-md">
          Join the thousands of patients who have entrusted their health to Dr. Julian
          Vance&apos;s clinical expertise.
        </p>
        <a
          className="inline-block bg-on-primary text-primary px-8 py-3 rounded-lg font-button text-button hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors"
          href="#"
        >
          Schedule Your Consultation
        </a>
      </div>
    </Reveal>
  );
}
