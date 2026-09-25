import { Card } from "@/components/ui/card";

export default function ChamberSelector({ chambers, selectedChamberId, onSelect }) {
  return (
    <section>
      <h2 className="text-base font-medium text-white">1. Select a chamber</h2>
      <p className="mt-1 text-sm text-slate-300">
        Choose the clinic or diagnostic center you&apos;d like to visit.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {chambers.map((chamber) => {
          const isSelected = chamber._id === selectedChamberId;
          return (
            <Card
              key={chamber._id}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(chamber._id)}
              onKeyDown={(e) => e.key === "Enter" && onSelect(chamber._id)}
              className={[
                "cursor-pointer p-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600",
                isSelected
                  ? "border-teal-600 bg-[#1E2939] ring-1 ring-teal-600"
                  : "border-slate-200 hover:border-teal-300 bg-gray-600",
              ].join(" ")}
            >
              <p className="text-sm font-medium text-white">{chamber.chamberName}</p>
              <p className="mt-0.5 text-xs text-slate-200">{chamber.address}, {chamber.city}, {chamber.country}</p>

              <div className="mt-3 space-y-1 text-xs text-slate-400">
                <p>{chamber.visitingDays}</p>
                <p>{chamber.visitingHours}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
