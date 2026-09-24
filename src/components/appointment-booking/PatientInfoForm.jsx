import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PatientInfoForm({ patient, onChange, disabled }) {
  const update = (field) => (e) => onChange({ ...patient, [field]: e.target.value });

  return (
    <section className={disabled ? "pointer-events-none opacity-40" : ""}>
      <h2 className="text-base font-medium text-white">4. Your information</h2>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label className="text-slate-200" htmlFor="patient-name">Full name</Label>
          <Input
            id="patient-name"
            placeholder="e.g. Kamal Hossain"
            value={patient.name}
            onChange={update("name")}
            className="text-white"
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-slate-200" htmlFor="patient-phone">Phone number</Label>
          <Input
            id="patient-phone"
            type="tel"
            placeholder="e.g. 01712-345678"
            value={patient.phone}
            onChange={update("phone")}
            className="text-white"
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-slate-200" htmlFor="patient-age">Age</Label>
          <Input
            id="patient-age"
            type="number"
            placeholder="e.g. 42"
            value={patient.age}
            onChange={update("age")}
            className="text-white"
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-slate-200">Gender</Label>
          <RadioGroup
            value={patient.gender}
            onValueChange={(value) => onChange({ ...patient, gender: value })}
            className="flex items-center gap-4 pt-1.5"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="male" id="gender-male" />
              <Label htmlFor="gender-male" className="font-normal text-slate-200">Male</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="female" id="gender-female" />
              <Label htmlFor="gender-female" className="font-normal text-slate-200">Female</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="other" id="gender-other" />
              <Label htmlFor="gender-other" className="font-normal text-slate-200">Other</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label className="text-slate-200" htmlFor="patient-notes">Reason for visit (optional)</Label>
          <Textarea
            id="patient-notes"
            placeholder="Briefly describe your concern, e.g. follow-up on blood pressure"
            value={patient.notes}
            onChange={update("notes")}
            rows={3}
            className="text-white"
          />
        </div>
      </div>
    </section>
  );
}
