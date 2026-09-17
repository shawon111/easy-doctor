import { COMMON_RULES } from "./common";

export const buildTemplateOnePrompt = (
    doctorData,
    seoData
) => `
${COMMON_RULES}

Generate content specifically for TEMPLATE ONE.

TEMPLATE ONE should feel welcoming, trustworthy, modern,
and patient-focused.

HOME PAGE:

The hero should immediately communicate:
- who the doctor is
- specialty
- relevant location
- primary patient value
- appointment action

Trust badges must use only factual information.

The about preview should be a concise version of the doctor's
actual professional background.

Services must come from DOCTOR DATA.treatments.

Why Choose Us should communicate genuine professional qualities
without claiming superiority over other doctors.

The appointment process should explain how a patient can
contact or request an appointment.

Clinic locations must correspond to actual clinic/chamber data.

ABOUT PAGE:

Present the doctor's professional background.

Experience must use the actual experience value.

Languages must come from DOCTOR DATA.

Bio statistics must not contain fabricated numbers.

Timeline items must correspond to actual qualifications,
education, career history, or other supplied information.

Chambers must use actual clinic information.

SERVICES PAGE:

Treatments must only come from the doctor's treatment list.

Service descriptions should be useful and patient-friendly.

Benefits should describe the consultation/service experience
without unsupported medical claims.

FAQs should answer general questions about the listed services.

APPOINTMENT PAGE:

Explain the appointment process clearly.

Schedule information must come from actual doctor data.

WhatsApp content should explain how patients can contact the
doctor.

Do not invent a WhatsApp URL.

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