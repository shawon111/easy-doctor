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
    <div className="flex min-w-0 flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-[#0F172A]">
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
        <h3 className="font-semibold text-[#0F172A]">{title}</h3>
        {description ? <p className="mt-1 text-sm text-[#64748B]">{description}</p> : null}
      </div>
      {onAdd ? (
        <Button type="button" size="sm" variant="outline" onClick={onAdd}>
          <Plus aria-hidden="true" />
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
      className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6"
    >
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#0F172A]">Professional & Practice Details</h2>
        <p className="mt-1 text-sm text-[#64748B]">
          Manage your qualifications, clinic locations, booking method, treatments, and social profiles.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <SectionHeading
            title="Qualifications"
            description="Add at least one degree or certification."
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
              className="grid gap-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:grid-cols-2"
            >
              <div className="flex items-center justify-between gap-3 sm:col-span-2">
                <p className="text-sm font-semibold text-[#0F172A]">Qualification {index + 1}</p>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  aria-label={`Remove qualification ${index + 1}`}
                  onClick={() =>
                    updateProfileField(
                      "qualifications",
                      profile.qualifications.filter((_, itemIndex) => itemIndex !== index)
                    )
                  }
                >
                  <Trash2 aria-hidden="true" className="text-destructive" />
                  Remove
                </Button>
              </div>
              <Field label="Degree" id={`settings-degree-${index}`}>
                <Input
                  id={`settings-degree-${index}`}
                  required
                  maxLength={120}
                  placeholder="MBBS, MD, PhD"
                  value={qualification.degree}
                  onChange={(event) =>
                    updateProfileField(
                      "qualifications",
                      updateItem(profile.qualifications, index, "degree", event.target.value)
                    )
                  }
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
                />
              </Field>
            </div>
          ))}
        </div>

        <div className="space-y-4 border-t border-[#E2E8F0] pt-6">
          <SectionHeading
            title="Clinic / Chamber Locations"
            description="Add at least one location where patients can visit."
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
                className="space-y-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-[#0F172A]">Location {index + 1}</p>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    aria-label={`Remove location ${index + 1}`}
                    onClick={() =>
                      updateProfileField(
                        "clinicAddress",
                        profile.clinicAddress.filter((_, itemIndex) => itemIndex !== index)
                      )
                    }
                  >
                    <Trash2 aria-hidden="true" className="text-destructive" />
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
                    />
                  </Field>

                  <Field label="Google Maps URL (optional)" id={`settings-clinic-${index}-map`}>
                    <Input
                      id={`settings-clinic-${index}-map`}
                      type="url"
                      placeholder="https://maps.app.goo.gl/..."
                      value={clinic.mapUrl || ""}
                      onChange={(event) => updateClinic("mapUrl", event.target.value)}
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
                    />
                  </Field>
                </div>

                <fieldset>
                  <legend className="mb-2 text-sm font-semibold text-[#0F172A]">Visiting days</legend>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {VISITING_DAYS.map((day) => {
                      const checked = selectedDays.includes(day);
                      return (
                        <label
                          key={day}
                          className="flex items-center gap-2 rounded-md border border-[#E2E8F0] bg-white px-3 py-2 text-sm"
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

        <div className="space-y-4 border-t border-[#E2E8F0] pt-6">
          <SectionHeading title="Booking Preference" />
          <div className="grid gap-3 sm:grid-cols-3">
            {BOOKING_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer gap-3 rounded-xl border p-4 ${
                  profile.bookingPreferences === option.value
                    ? "border-[#0066FF] bg-[#E5F0FF]"
                    : "border-[#E2E8F0]"
                }`}
              >
                <input
                  type="radio"
                  name="settings-booking-preference"
                  value={option.value}
                  checked={profile.bookingPreferences === option.value}
                  onChange={(event) => updateProfileField("bookingPreferences", event.target.value)}
                />
                <span>
                  <span className="block text-sm font-semibold text-[#0F172A]">{option.label}</span>
                  <span className="mt-1 block text-xs text-[#64748B]">{option.description}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4 border-t border-[#E2E8F0] pt-6">
          <SectionHeading
            title="Treatments & Services"
            description="Add at least one treatment or service."
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
                  placeholder="e.g. General check-up"
                  value={treatment}
                  onChange={(event) =>
                    updateProfileField(
                      "treatments",
                      profile.treatments.map((item, itemIndex) =>
                        itemIndex === index ? event.target.value : item
                      )
                    )
                  }
                />
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  aria-label={`Remove treatment ${index + 1}`}
                  onClick={() =>
                    updateProfileField(
                      "treatments",
                      profile.treatments.filter((_, itemIndex) => itemIndex !== index)
                    )
                  }
                >
                  <Trash2 aria-hidden="true" className="text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 border-t border-[#E2E8F0] pt-6">
          <SectionHeading
            title="Social Links"
            description="Add public profiles for your practice. These links are optional."
            addLabel="Add social link"
            onAdd={() =>
              updateProfileField("socialLinks", [
                ...profile.socialLinks,
                { platform: "", url: "" },
              ])
            }
          />
          {profile.socialLinks.length === 0 ? (
            <p className="rounded-lg border border-dashed border-[#CBD5E1] px-4 py-6 text-center text-sm text-[#64748B]">
              No social links added yet.
            </p>
          ) : (
            <div className="space-y-3">
              {profile.socialLinks.map((link, index) => (
                <div
                  key={`social-link-${index}`}
                  className="grid items-end gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:grid-cols-2"
                >
                  <Field label="Platform" id={`settings-social-platform-${index}`}>
                    <Input
                      id={`settings-social-platform-${index}`}
                      required
                      maxLength={50}
                      placeholder="Facebook, Instagram, LinkedIn..."
                      value={link.platform}
                      onChange={(event) =>
                        updateProfileField(
                          "socialLinks",
                          updateItem(profile.socialLinks, index, "platform", event.target.value)
                        )
                      }
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
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        aria-label={`Remove social link ${index + 1}`}
                        onClick={() =>
                          updateProfileField(
                            "socialLinks",
                            profile.socialLinks.filter((_, itemIndex) => itemIndex !== index)
                          )
                        }
                      >
                        <Trash2 aria-hidden="true" className="text-destructive" />
                      </Button>
                    </div>
                  </Field>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end border-t border-[#E2E8F0] pt-6">
          <Button
            type="submit"
            disabled={saveMutation.isPending}
            className="w-full bg-[#0066FF] text-white hover:bg-[#0050CB] sm:w-auto"
          >
            {saveMutation.isPending ? "Saving..." : "Save Professional Details"}
          </Button>
        </div>
      </form>
    </section>
  );
}
