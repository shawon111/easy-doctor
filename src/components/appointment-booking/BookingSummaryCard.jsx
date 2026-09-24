import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function SummaryRow({ label, value, placeholder }) {
  return (
    <div className="flex items-start justify-between gap-3 text-sm">
      <span className="text-slate-300">{label}</span>
      <span className={value ? "text-right font-medium text-slate-200" : "text-right text-slate-400"}>
        {value || placeholder}
      </span>
    </div>
  );
}

export default function BookingSummaryCard({
  chamber,
  date,
  serial,
  patientName,
  fee,
  onConfirm,
  isComplete,
}) {
  return (
    <Card className="border-slate-200 p-5 bg-[#1A2026]">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Booking summary</h3>
        <Badge
          variant="outline"
          className={isComplete ? "border-teal-200 text-teal-700" : "border-slate-200 text-slate-400"}
        >
          {isComplete ? "Ready" : "In progress"}
        </Badge>
      </div>

      <div className="mt-4 space-y-3">
        <SummaryRow label="Chamber" value={chamber?.name} placeholder="Not selected" />
        {chamber && (
          <p className="-mt-2 text-xs text-slate-300">{chamber.area}</p>
        )}
        <SummaryRow
          label="Date"
          value={date ? `${date.weekday}, ${date.day} ${date.month}` : null}
          placeholder="Not selected"
        />
        <SummaryRow
          label="Serial no."
          value={serial ? `#${serial}` : null}
          placeholder="Not selected"
        />
        <SummaryRow label="Patient" value={patientName} placeholder="Not entered" />

        <Separator className="my-1" />

        <SummaryRow label="Consultation fee" value={fee} placeholder="—" />
      </div>

      <Button
        className="mt-5 w-full bg-teal-700 hover:bg-teal-800 text-white w-fit px-8 py-6 cursor-pointer"
        disabled={!isComplete}
        onClick={onConfirm}
      >
        Confirm booking
      </Button>
    </Card>
  );
}
