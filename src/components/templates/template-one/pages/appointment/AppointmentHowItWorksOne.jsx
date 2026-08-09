import Reveal from "@/components/templates/ui/Reveal";


const STEPS = [
  {
    icon: "send",
    title: "Send a Message",
    description: "Click our WhatsApp link to open a direct chat with our clinical concierge team.",
  },
  {
    icon: "event_available",
    title: "Select a Slot",
    description: "Our team will share the latest availability across all clinics for you to choose from.",
  },
  {
    icon: "task_alt",
    title: "Confirmation",
    description: "Receive your digital booking confirmation and clinical instructions instantly.",
  },
];

export default function AppointmentHowItWorksOne() {
  return (
    <Reveal
      as="section"
      className="bg-surface-container-low py-section-padding px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-stack-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-background">
            3 Simple Steps to Your Appointment
          </h2>
          <p className="text-body-md text-on-surface-variant mt-stack-sm">
            Modern booking for a premium healthcare experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="bg-surface-container-lowest p-stack-lg rounded-3xl shadow-[0px_10px_30px_rgba(30,41,59,0.04)] border border-outline-variant/30 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center mb-stack-md">
                <span className="material-symbols-outlined text-4xl">{step.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">{step.title}</h3>
              <p className="text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
