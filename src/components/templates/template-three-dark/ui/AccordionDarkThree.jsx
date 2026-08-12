export default function AccordionDarkThree({ items, variant = "default" }) {
  const isServices = variant === "services";

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className={`glass-card rounded-lg overflow-hidden border border-outline-variant/30 group ${isServices ? "" : "rounded-xl"}`}
        >
          <summary
            className={`w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden ${
              isServices ? "" : "hover:bg-surface-container-high"
            }`}
          >
            <span
              className={
                isServices
                  ? "font-headline-md text-body-lg text-on-surface"
                  : "font-headline-md text-[18px] text-on-surface"
              }
            >
              {item.question}
            </span>
            <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/20 font-body-md">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
