import jsPDF from "jspdf";
import { Download } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";

// Builds a clean, collision-safe file name, e.g.
// "Booking-Confirmation_Kamal-Hossain_Serial-14.pdf"
function buildFileName(patientName, serial) {
  const safeName = (patientName || "Patient")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
  const safeSerial = serial ?? "NA";
  return `Booking-Confirmation_${safeName}_Serial-${safeSerial}.pdf`;
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-900">{value}</span>
    </div>
  );
}

export default function BookingConfirmationDialog({
  open,
  onOpenChange,
  doctorName,
  chamberName,
  date,
  serial,
  patientName,
}) {
  // generate a pdf
  const handleDownloadPdf = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const marginX = 48;
    let y = 64;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Booking Confirmation", marginX, y);

    y += 20;
    doc.setDrawColor(13, 148, 136);
    doc.setLineWidth(1.5);
    doc.line(marginX, y, 547, y);

    y += 36;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(doctorName || "", marginX, y);

    const rows = [
      ["Chamber", chamberName],
      ["Date", date],
      ["Serial No.", serial ? `#${serial}` : ""],
      ["Patient", patientName],
    ];

    y += 32;
    rows.forEach(([label, value]) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(120);
      doc.text(label, marginX, y);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(20);
      doc.text(value || "-", marginX, y + 16);

      y += 44;
    });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(150);
    doc.text("Please arrive a few minutes before your serial is expected.", marginX, y + 8);

    doc.save(buildFileName(patientName, serial));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader className="items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-teal-700"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <DialogTitle className="mt-3 text-lg">Booking confirmed</DialogTitle>
          <DialogDescription>
            Your serial has been reserved. Please arrive a few minutes early.
          </DialogDescription>
        </DialogHeader>

        <Separator />

        <div className="space-y-2.5 py-1">
          <DetailRow label="Chamber" value={chamberName} />
          <DetailRow label="Date" value={date} />
          <DetailRow label="Serial no." value={`#${serial}`} />
          <DetailRow label="Patient" value={patientName} />
        </div>

        <DialogFooter className="flex-col gap-2 sm:flex-col">
          <Button
            variant="outline"
            className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 hover:text-teal-800"
            onClick={handleDownloadPdf}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button
            className="w-full bg-teal-700 hover:bg-teal-800"
            onClick={() => onOpenChange(false)}
          >
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
