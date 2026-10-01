import Image from "next/image";
import { UserRound } from "lucide-react";

export function DoctorProfileCard({ doctor }) {
    return (
        <section className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3 border-b pb-5">
                <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary">
                    {doctor.profilePicture ? (
                        <Image
                            src={doctor.profilePicture}
                            alt=""
                            width={44}
                            height={44}
                            className="size-full object-cover"
                        />
                    ) : (
                        <UserRound className="size-5" />
                    )}
                </div>
                <div className="min-w-0">
                    <h2 className="truncate text-lg font-semibold text-foreground">
                        {doctor.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        {doctor.specialization}
                    </p>
                </div>
            </div>

            <dl className="grid gap-4 py-5 sm:grid-cols-2">
                <ProfileField label="Phone" value={doctor.phone} />
                <ProfileField label="Email" value={doctor.email} />
                <ProfileField
                    label="Experience"
                    value={
                        doctor.experience === null
                            ? null
                            : `${doctor.experience} years`
                    }
                />
                <ProfileField
                    label="Qualifications"
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

            <div className="border-t pt-5">
                <h3 className="text-sm font-semibold text-foreground">
                    About the doctor
                </h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-muted-foreground">
                    {doctor.bio || "No profile information has been added yet."}
                </p>
            </div>
        </section>
    );
}

function ProfileField({ label, value }) {
    return (
        <div>
            <dt className="text-xs font-medium text-muted-foreground">{label}</dt>
            <dd className="mt-1 break-words text-sm font-medium text-foreground">
                {value || "Not provided"}
            </dd>
        </div>
    );
}
