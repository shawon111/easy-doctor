import { Badge } from "@/components/ui/badge";

function SerialButton({ number, status, isSelected, onSelect }) {
  const isBooked = status === "booked";

  return (
    <button
      type="button"
      disabled={isBooked}
      onClick={() => onSelect(number)}
      aria-pressed={isSelected}
      className={[
        "flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors sm:h-11 sm:w-11",
        isBooked
          ? "cursor-not-allowed bg-red-800 text-slate-300 line-through"
          : isSelected
          ? "bg-teal-700 text-white"
          : "border border-slate-200 bg-teal-50 text-slate-700 hover:border-teal-400 hover:bg-teal-700 hover:text-slate-100",
      ].join(" ")}
    >
      {number}
    </button>
  );
}

export default function SerialGrid({ serials, selectedSerial, onSelect, nextAvailable, disabled }) {
  return (
    <section className={disabled ? "pointer-events-none opacity-40" : ""}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-base font-medium text-white">3. Choose your serial</h2>
          <p className="mt-1 text-sm text-slate-300">
            Serials update as patients book. Booked numbers can't be selected.
          </p>
        </div>
        {nextAvailable && (
          <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-50">
            Next available: #{nextAvailable}
          </Badge>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {serials.map((serial) => (
          <SerialButton
            key={serial.number}
            number={serial.number}
            status={serial.status}
            isSelected={selectedSerial === serial.number}
            onSelect={onSelect}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-200">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm border border-slate-200" /> Available
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-teal-700" /> Selected
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-slate-100" /> Already booked
        </span>
      </div>
    </section>
  );
}
