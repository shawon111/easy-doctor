import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function DoctorProfileHeader({ doctor }) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Avatar className="h-20 w-20 shrink-0 border border-teal-100 sm:h-24 sm:w-24">
            <AvatarFallback className="bg-teal-700 text-xl font-medium text-white">
              {doctor.photoInitials}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {doctor.name}
            </h1>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              {doctor.credentials}
            </p>
            <p className="mt-2 text-sm font-medium text-teal-700">
              {doctor.specialty}
            </p>
            <p className="mt-1 text-sm text-slate-500">{doctor.designation}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-100">
                {doctor.experienceYears}+ years experience
              </Badge>
              {doctor.languages.map((lang) => (
                <Badge
                  key={lang}
                  variant="outline"
                  className="border-slate-200 text-slate-600"
                >
                  {lang}
                </Badge>
              ))}
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
              {doctor.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
