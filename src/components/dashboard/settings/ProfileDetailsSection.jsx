"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BOOKING_OPTIONS, VISITING_DAYS } from "@/components/onboarding/onboarding-utils";
import { saveProfileSettings } from "./settings-api";

const EMPTY_QUALIFICATION = { degree: "", institution: "", year: "" };
const EMPTY_CLINIC = {
  chamberName: "",
  address: "",
  city: "",
  country: "",
  visitingHours: "",
  visitingDays: "",
  whatsapp: "",
  mapUrl: "",
};

function updateItem(items, index, key, value) {
  return items.map((item, itemIndex) =>
    itemIndex === index ? { ...item, [key]: value } : item
  );
}

function Field({ label, id, children }) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-slate-300">
        {label}
      </label>
      {children}
    </div>
  );
}

function SectionHeading({ title, description, onAdd, addLabel }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h3 className="text-sm sm:text-base font-bold text-white">{title}</h3>
        {description ? <p className="mt-0.5 text-xs sm:text-sm text-slate-400">{description}</p> : null}
      </div>
      {onAdd ? (
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={onAdd}
          className="rounded-xl border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white text-xs font-semibold gap-1.5 cursor-pointer"
        >
          <Plus aria-hidden="true" className="size-3.5 text-indigo-400" />
          {addLabel}
        </Button>
      ) : null}
    </div>
  );
}

export function ProfileDetailsSection({ user }) {
  const queryClient = useQueryClient();
  const [profile, setProfile] = useState(() => ({
    qualifications: user.qualifications?.length
      ? user.qualifications.map((item) => ({ ...item, year: String(item.year ?? "") }))
      : [{ ...EMPTY_QUALIFICATION }],
    clinicAddress: user.clinicAddress?.length
      ? user.clinicAddress.map((clinic) => ({ ...clinic }))
      : [{ ...EMPTY_CLINIC }],
    bookingPreferences: user.bookingPreferences || "whatsapp",
    treatments: user.treatments?.length ? [...user.treatments] : [""],
    socialLinks: user.socialLinks?.map((link) => ({ ...link })) || [],
  }));
  const saveMutation = useMutation({
    mutationFn: saveProfileSettings,
    onSuccess: (updatedSettings) => {
      queryClient.setQueryData(["account-settings"], updatedSettings);
      setProfile({
        qualifications: updatedSettings.qualifications.map((item) => ({
          ...item,
          year: String(item.year),
        })),
        clinicAddress: updatedSettings.clinicAddress,
        bookingPreferences: updatedSettings.bookingPreferences,
        treatments: updatedSettings.treatments,
        socialLinks: updatedSettings.socialLinks,
      });
      toast.success("Professional profile saved.");
    },
    onError: (error) => toast.error(error.message || "Unable to save professional profile."),
  });

  function updateProfileField(field, value) {
    setProfile((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      ...profile,
      qualifications: profile.qualifications.map((item) => ({
        ...item,
        year: Number(item.year),
      })),
      treatments: profile.treatments.map((item) => item.trim()).filter(Boolean),
      socialLinks: profile.socialLinks.filter(
        (link) => link.platform.trim() || link.url.trim()
      ),
    };
    saveMutation.mutate(payload);
  }

  return (
    <section
      id="profile-details"
      className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-base sm:text-lg font-bold text-white">Professional &amp; Practice Details</h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-400">
          Manage your qualifications, clinic locations, booking method, treatments, and social profiles.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <SectionHeading
            title="Qualifications"
            description="Add at least one degree or clinical certification."
            addLabel="Add qualification"
            onAdd={() =>
              updateProfileField("qualifications", [
                ...profile.qualifications,
                { ...EMPTY_QUALIFICATION },
              ])
            }
          />
          {profile.qualifications.map((qualification, index) => (
            <div
              key={`qualification-${index}`}
              className="grid gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:grid-cols-2"
            >
              <div className="flex items-center justify-between gap-3 sm:col-span-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Qualification {index + 1}</p>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  aria-label={`Remove qualification ${index + 1}`}
                  onClick={() =>
                    updateProfileField(
                      "qualifications",
                      profile.qualifications.filter((_, itemIndex) => itemIndex !== index)
                    )
                  }
                  className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-2.5 py-1 text-xs font-semibold text-rose-300 transition-colors hover:border-rose-500/60 hover:bg-rose-500/20 hover:text-white"
                >
                  <Trash2 aria-hidden="true" className="size-3.5 mr-1" />
                  Remove
                </Button>
              </div>
              <Field label="Degree" id={`settings-degree-${index}`}>
                <Input
                  id={`settings-degree-${index}`}
                  required
                  maxLength={120}
                  placeholder="MBBS, MD, FCPS"
                  value={qualification.degree}
                  onChange={(event) =>
                    updateProfileField(
                      "qualifications",
                      updateItem(profile.qualifications, index, "degree", event.target.value)
                    )
                  }
                  className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                />
              </Field>
              <Field label="Institution" id={`settings-institution-${index}`}>
                <Input
                  id={`settings-institution-${index}`}
                  required
                  maxLength={200}
                  placeholder="University or medical college"
                  value={qualification.institution}
                  onChange={(event) =>
                    updateProfileField(
                      "qualifications",
                      updateItem(profile.qualifications, index, "institution", event.target.value)
                    )
                  }
                  className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                />
              </Field>
              <Field label="Year" id={`settings-qualification-year-${index}`}>
                <Input
                  id={`settings-qualification-year-${index}`}
                  type="number"
                  required
                  min={1950}
                  max={new Date().getFullYear()}
                  value={qualification.year}
                  onChange={(event) =>
                    updateProfileField(
                      "qualifications",
                      updateItem(profile.qualifications, index, "year", event.target.value)
                    )
                  }
                  className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                />
              </Field>
            </div>
          ))}
        </div>

        <div className="space-y-4 border-t border-slate-800/80 pt-6">
          <SectionHeading
            title="Clinic / Chamber Locations"
            description="Add locations where patients can visit for consultations."
            addLabel="Add location"
            onAdd={() =>
              updateProfileField("clinicAddress", [
                ...profile.clinicAddress,
                { ...EMPTY_CLINIC },
              ])
            }
          />
          {profile.clinicAddress.map((clinic, index) => {
            const [openingTime = "", closingTime = ""] = (clinic.visitingHours || "").split(" - ");
            const selectedDays = clinic.visitingDays
              ? clinic.visitingDays.split(", ").filter(Boolean)
              : [];

            function updateClinic(key, value) {
              updateProfileField(
                "clinicAddress",
                updateItem(profile.clinicAddress, index, key, value)
              );
            }

            return (
              <div
                key={`clinic-${index}`}
                className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Location {index + 1}</p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    aria-label={`Remove location ${index + 1}`}
                    onClick={() =>
                      updateProfileField(
                        "clinicAddress",
                        profile.clinicAddress.filter((_, itemIndex) => itemIndex !== index)
                      )
                    }
                    className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-2.5 py-1 text-xs font-semibold text-rose-300 transition-colors hover:border-rose-500/60 hover:bg-rose-500/20 hover:text-white"
                  >
                    <Trash2 aria-hidden="true" className="size-3.5 mr-1" />
                    Remove
                  </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["chamberName", "Chamber name", "City Medical Center"],
                    ["address", "Address", "Street address"],
                    ["city", "City", "City"],
                    ["country", "Country", "Country"],
                  ].map(([key, label, placeholder]) => (
                    <Field key={key} label={label} id={`settings-clinic-${index}-${key}`}>
                      <Input
                        id={`settings-clinic-${index}-${key}`}
                        required
                        maxLength={200}
                        placeholder={placeholder}
                        value={clinic[key] || ""}
                        onChange={(event) => updateClinic(key, event.target.value)}
                        className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                      />
                    </Field>
                  ))}

                  <Field label="WhatsApp number" id={`settings-clinic-${index}-whatsapp`}>
                    <Input
                      id={`settings-clinic-${index}-whatsapp`}
                      type="tel"
                      required
                      maxLength={40}
                      placeholder="+1 555 000 0000"
                      value={clinic.whatsapp || ""}
                      onChange={(event) => updateClinic("whatsapp", event.target.value)}
                      className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                    />
                  </Field>

                  <Field label="Google Maps URL (optional)" id={`settings-clinic-${index}-map`}>
                    <Input
                      id={`settings-clinic-${index}-map`}
                      type="url"
                      placeholder="https://maps.app.goo.gl/..."
                      value={clinic.mapUrl || ""}
                      onChange={(event) => updateClinic("mapUrl", event.target.value)}
                      className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                    />
                  </Field>

                  <Field label="Opening time" id={`settings-clinic-${index}-opens`}>
                    <Input
                      id={`settings-clinic-${index}-opens`}
                      type="time"
                      required
                      value={openingTime}
                      onChange={(event) =>
                        updateClinic("visitingHours", `${event.target.value} - ${closingTime}`)
                      }
                      className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                    />
                  </Field>
                  <Field label="Closing time" id={`settings-clinic-${index}-closes`}>
                    <Input
                      id={`settings-clinic-${index}-closes`}
                      type="time"
                      required
                      value={closingTime}
                      onChange={(event) =>
                        updateClinic("visitingHours", `${openingTime} - ${event.target.value}`)
                      }
                      className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                    />
                  </Field>
                </div>

                <fieldset>
                  <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-300">Visiting days</legend>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {VISITING_DAYS.map((day) => {
                      const checked = selectedDays.includes(day);
                      return (
                        <label
                          key={day}
                          className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium cursor-pointer transition-colors ${
                            checked
                              ? "border-indigo-500/50 bg-indigo-500/10 text-white"
                              : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              updateClinic(
                                "visitingDays",
                                checked
                                  ? selectedDays.filter((value) => value !== day).join(", ")
                                  : [...selectedDays, day].join(", ")
                              )
                            }
                            className="accent-indigo-600 rounded"
                          />
                          {day}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              </div>
            );
          })}
        </div>

        <div className="space-y-4 border-t border-slate-800/80 pt-6">
          <SectionHeading title="Booking Preference" />
          <div className="grid gap-3 sm:grid-cols-3">
            {BOOKING_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer gap-3 rounded-xl border p-4 transition-all ${
                  profile.bookingPreferences === option.value
                    ? "border-indigo-500 bg-indigo-500/10 text-white shadow-sm shadow-indigo-500/10"
                    : "border-slate-800 bg-slate-900/40 text-slate-400 hover:bg-slate-900/80 hover:border-slate-700"
                }`}
              >
                <input
                  type="radio"
                  name="settings-booking-preference"
                  value={option.value}
                  checked={profile.bookingPreferences === option.value}
                  onChange={(event) => updateProfileField("bookingPreferences", event.target.value)}
                  className="accent-indigo-600 mt-1"
                />
                <span>
                  <span className="block text-sm font-bold text-white">{option.label}</span>
                  <span className="mt-1 block text-xs text-slate-400">{option.description}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4 border-t border-slate-800/80 pt-6">
          <SectionHeading
            title="Treatments &amp; Services"
            description="Add at least one clinical service or treatment."
            addLabel="Add treatment"
            onAdd={() => updateProfileField("treatments", [...profile.treatments, ""])}
          />
          <div className="space-y-3">
            {profile.treatments.map((treatment, index) => (
              <div key={`treatment-${index}`} className="flex items-center gap-2">
                <Input
                  aria-label={`Treatment or service ${index + 1}`}
                  required
                  maxLength={120}
                  placeholder="e.g. General Clinical Consultation"
                  value={treatment}
                  onChange={(event) =>
                    updateProfileField(
                      "treatments",
                      profile.treatments.map((item, itemIndex) =>
                        itemIndex === index ? event.target.value : item
                      )
                    )
                  }
                  className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                />
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  aria-label={`Remove treatment ${index + 1}`}
                  onClick={() =>
                    updateProfileField(
                      "treatments",
                      profile.treatments.filter((_, itemIndex) => itemIndex !== index)
                    )
                  }
                  className="rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 transition-colors hover:border-rose-500/60 hover:bg-rose-500/20 hover:text-white"
                >
                  <Trash2 aria-hidden="true" className="size-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 border-t border-slate-800/80 pt-6">
          <SectionHeading
            title="Social Links"
            description="Add public profiles for your clinical practice (optional)."
            addLabel="Add social link"
            onAdd={() =>
              updateProfileField("socialLinks", [
                ...profile.socialLinks,
                { platform: "", url: "" },
              ])
            }
          />
          {profile.socialLinks.length === 0 ? (
            <p className="rounded-xl border border-dashed border-slate-800 bg-slate-900/30 px-4 py-6 text-center text-xs sm:text-sm text-slate-400">
              No social links added yet.
            </p>
          ) : (
            <div className="space-y-3">
              {profile.socialLinks.map((link, index) => (
                <div
                  key={`social-link-${index}`}
                  className="grid items-end gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:grid-cols-2"
                >
                  <Field label="Platform" id={`settings-social-platform-${index}`}>
                    <Input
                      id={`settings-social-platform-${index}`}
                      required
                      maxLength={50}
                      placeholder="e.g. LinkedIn, Facebook, ResearchGate"
                      value={link.platform}
                      onChange={(event) =>
                        updateProfileField(
                          "socialLinks",
                          updateItem(profile.socialLinks, index, "platform", event.target.value)
                        )
                      }
                      className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                    />
                  </Field>
                  <Field label="Profile URL" id={`settings-social-url-${index}`}>
                    <div className="flex gap-2">
                      <Input
                        id={`settings-social-url-${index}`}
                        type="url"
                        required
                        placeholder="https://"
                        value={link.url}
                        onChange={(event) =>
                          updateProfileField(
                            "socialLinks",
                            updateItem(profile.socialLinks, index, "url", event.target.value)
                          )
                        }
                        className="rounded-xl border-slate-700 bg-slate-900/80 text-white placeholder:text-slate-500 focus-visible:border-indigo-500"
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        aria-label={`Remove social link ${index + 1}`}
                        onClick={() =>
                          updateProfileField(
                            "socialLinks",
                            profile.socialLinks.filter((_, itemIndex) => itemIndex !== index)
                          )
                        }
                        className="rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 transition-colors hover:border-rose-500/60 hover:bg-rose-500/20 hover:text-white"
                      >
                        <Trash2 aria-hidden="true" className="size-4" />
                      </Button>
                    </div>
                  </Field>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end border-t border-slate-800/80 pt-6">
          <Button
            type="submit"
            disabled={saveMutation.isPending}
            className="w-full rounded-xl bg-indigo-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-500 disabled:opacity-50 sm:w-auto cursor-pointer"
          >
            {saveMutation.isPending ? "Saving..." : "Save Professional Details"}
          </Button>
        </div>
      </form>
    </section>
  );
}
