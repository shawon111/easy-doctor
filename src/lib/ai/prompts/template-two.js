import { COMMON_RULES } from "./common";

export const buildTemplateTwoPrompt = (
    doctorData,
    seoData
) => `
${COMMON_RULES}

Generate content specifically for TEMPLATE TWO.

TEMPLATE TWO emphasizes the doctor's professional credentials,
experience, qualifications, services, and appointment process.

HOME PAGE:

Create a strong professional introduction.

The hero should communicate:
- doctor's identity
- specialty
- professional positioning
- relevant credentials
- patient-focused value

Credentials should ONLY come from DOCTOR DATA.

Treatments must ONLY come from DOCTOR DATA.treatments.

Timeline information must ONLY come from actual doctor data.

The onboarding section should explain the appointment process,
not invent medical processes.

The chamber section must correspond to actual clinic/chamber
information.

ABOUT PAGE:

Present the doctor's professional story.

Use actual:
- qualifications
- languages
- experience
- professional background

Do not fabricate a biography.

The qualifications section must correspond directly to the
provided qualifications.

SERVICES PAGE:

The featured service must be selected from the doctor's
actual treatments.

Service cards must correspond to actual treatments.

Explain services in clear patient-friendly language without
making unsupported medical promises.

BENEFITS should describe general professional/patient experience
benefits rather than unsupported medical outcomes.

APPOINTMENT PAGE:

Explain how patients can contact the doctor and request an
appointment.

Schedules must only reflect information supplied in DOCTOR DATA.

WhatsApp content should explain the communication process.

Do not invent availability.

${JSON.stringify(
    {
        doctorData,
        seoData,
    },
    null,
    2
)}

Return ONLY valid JSON.
`;