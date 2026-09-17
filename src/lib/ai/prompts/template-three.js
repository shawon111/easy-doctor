import { COMMON_RULES } from "./common";

export const buildTemplateThreePrompt = (
    doctorData,
    seoData
) => `
${COMMON_RULES}

Generate content specifically for TEMPLATE THREE.

TEMPLATE THREE should feel modern, polished, personal, and
trust-oriented.

HOME PAGE:

The hero should clearly communicate:
- doctor's name
- specialty
- location where appropriate
- professional value
- appointment action

Highlights should use only factual information.

The about preview should introduce the doctor's background
without fabricating details.

Services must correspond to actual treatments.

The trust section should focus on genuine professional
qualities supported by the doctor data.

The "How to Start" section should explain the appointment
journey.

The map/location section must use actual clinic information.

ABOUT PAGE:

The hero should introduce the doctor's professional identity.

Do not invent:
- lives touched
- innovations
- achievements
- awards
- patient numbers

If the source data does not provide a factual value for
livesTouchedStat or innovationsStat, return an empty string.

The journey section should be based on the supplied bio and
professional information.

The timeline must only contain factual career information.

Pillars should describe general professional principles,
without inventing certifications or achievements.

Locations must come from actual clinic/chamber data.

SERVICES PAGE:

The treatment cards must correspond to actual treatments.

Do not invent treatments.

Treatment descriptions should be informative but medically
responsible.

Do not promise outcomes.

Avoid unsupported statistics in stat1Value/stat2Value.

If factual statistics are unavailable, return empty strings.

APPOINTMENT PAGE:

Explain how patients can begin an appointment.

Schedules must come from actual availability data.

WhatsApp information must not invent phone numbers or URLs.

Chambers must correspond to actual clinic locations.

FAQs should answer common appointment-related questions
without inventing information.

SEO:

Use page-specific SEO keywords naturally.

Do not keyword stuff.

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