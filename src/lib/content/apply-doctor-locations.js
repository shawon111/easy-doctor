const formatClinicAddress = (clinic) =>
  [clinic.address, clinic.city, clinic.country].filter(Boolean).join(", ");

const formatClinicHours = (clinic) =>
  [clinic.visitingDays, clinic.visitingHours].filter(Boolean).join(": ");

export function applyDoctorLocations(content, templateType, clinicAddresses = []) {
  const clinics = clinicAddresses.map((clinic) => ({
    name: clinic.chamberName,
    address: formatClinicAddress(clinic),
    hours: formatClinicHours(clinic),
    mapUrl: clinic.mapUrl || "",
  }));
  const primaryClinic = clinics[0];

  if (!primaryClinic || !content?.pages) {
    return content;
  }

  if (templateType === "template-one" || templateType === "template-one-dark") {
    const home = content.pages.home;
    if (home?.clinicLocations) {
      home.clinicLocations.locations = clinics;
    }

    const about = content.pages.about;
    if (about?.chambers) {
      about.chambers.locations = clinics;
      about.chambers.mapUrl = primaryClinic.mapUrl;
    }
  } else if (templateType === "template-two" || templateType === "template-two-dark") {
    const chamber = content.pages.home?.chamber;
    if (chamber) {
      chamber.location = {
        name: primaryClinic.name,
        address: primaryClinic.address,
        hours: primaryClinic.hours,
      };
      chamber.mapUrl = primaryClinic.mapUrl;
    }
  } else if (templateType === "template-three" || templateType === "template-three-dark") {
    const mapLocation = content.pages.home?.mapLocation;
    if (mapLocation) {
      mapLocation.mapUrl = primaryClinic.mapUrl;
      mapLocation.contact = {
        ...mapLocation.contact,
        location: primaryClinic.address,
        hours: primaryClinic.hours,
      };
    }
  }

  return content;
}
