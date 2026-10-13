import Image from "next/image";
import { UserRound } from "lucide-react";

export function DoctorProfileCard({ doctor }) {
    return (
        <section className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3.5 border-b border-slate-800/80 pb-5">
                <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                    {doctor.profilePicture ? (
                        <Image
                            src={doctor.profilePicture}
                            alt=""
                            width={48}
                            height={48}
                            className="size-full object-cover"
                        />
                    ) : (
                        <UserRound className="size-5" />
                    )}
                </div>
                <div className="min-w-0">
                    <h2 className="truncate text-base sm:text-lg font-bold text-white">
                        {doctor.name}
                    </h2>
                    <p className="text-xs text-indigo-400 font-medium">
                        {doctor.specialization}
                    </p>
                </div>
            </div>

            <dl className="grid gap-4 py-5 sm:grid-cols-2">
                <ProfileField label="Phone" value={doctor.phone} />
                <ProfileField label="Email" value={doctor.email} />
                <ProfileField
                    label="Clinical Experience"
                    value={
                        doctor.experience === null
                            ? null
                            : `${doctor.experience} years`
                    }
                />
                <ProfileField
                    label="Medical Qualifications"
                    value={
                        doctor.qualifications.length
                            ? doctor.qualifications
                                  .map((qualification) =>
                                      [
                                          qualification.degree,
                                          qualification.institution,
                                          qualification.year,
                                      ]
                                          .filter(Boolean)
                                          .join(" · ")
                                  )
                                  .join(", ")
                            : null
                    }
                />
            </dl>

            <div className="border-t border-slate-800/80 pt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    About the doctor
                </h3>
                <p className="mt-2 whitespace-pre-line text-xs sm:text-sm leading-relaxed text-slate-300">
                    {doctor.bio || "No profile information has been added yet."}
                </p>
            </div>
        </section>
    );
}

function ProfileField({ label, value }) {
    return (
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3.5">
            <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</dt>
            <dd className="mt-1 break-words text-xs sm:text-sm font-semibold text-white">
                {value || "Not provided"}
            </dd>
        </div>
    );
}
