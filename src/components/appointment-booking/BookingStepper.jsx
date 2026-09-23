const STEPS = [
  { id: 1, label: "Chamber" },
  { id: 2, label: "Date" },
  { id: 3, label: "Serial" },
  { id: 4, label: "Your info" },
  { id: 5, label: "Confirm" },
];

export default function BookingStepper({ currentStep }) {
  return (
    <ol className="flex items-center gap-2 overflow-x-auto pb-1 sm:gap-3">
      {STEPS.map((step, idx) => {
        const isComplete = currentStep > step.id;
        const isActive = currentStep === step.id;

        return (
          <li key={step.id} className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <span
                className={[
                  "flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium",
                  isComplete
                    ? "bg-teal-700 text-white"
                    : isActive
                    ? "border-2 border-teal-700 text-teal-700"
                    : "border border-white text-white",
                ].join(" ")}
              >
                {isComplete ? "✓" : step.id}
              </span>
              <span
                className={[
                  "text-sm whitespace-nowrap",
                  isActive
                    ? "font-medium text-white"
                    : isComplete
                    ? "text-slate-300"
                    : "text-slate-300",
                ].join(" ")}
              >
                {step.label}
              </span>
            </div>
            {idx < STEPS.length - 1 && (
              <span className="h-px w-4 shrink-0 bg-slate-200 sm:w-8" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
