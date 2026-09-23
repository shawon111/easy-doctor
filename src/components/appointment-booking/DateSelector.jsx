export default function DateSelector({ dates, selectedDateId, onSelect, disabled }) {
  return (
    <section className={disabled ? "pointer-events-none opacity-40" : ""}>
      <h2 className="text-base font-medium text-white">2. Select a date</h2>
      <p className="mt-1 text-sm text-slate-300">
        Available visiting dates at the selected chamber.
      </p>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {dates.map((date) => {
          const isSelected = date.id === selectedDateId;
          return (
            <button
              key={date.id}
              type="button"
              onClick={() => onSelect(date.id)}
              className={[
                "flex w-[4.5rem] shrink-0 flex-col items-center rounded-lg border px-2 py-3 text-center transition-colors",
                isSelected
                  ? "border-teal-600 bg-teal-700 text-white"
                  : "border-slate-200 text-slate-200 hover:border-teal-300",
              ].join(" ")}
            >
              <span
                className={[
                  "text-[11px] uppercase",
                  isSelected ? "text-teal-100" : "text-slate-100",
                ].join(" ")}
              >
                {date.label ?? date.weekday}
              </span>
              <span className="mt-1 text-lg font-semibold leading-none">{date.day}</span>
              <span
                className={[
                  "mt-1 text-[11px]",
                  isSelected ? "text-teal-100" : "text-slate-100",
                ].join(" ")}
              >
                {date.month}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
