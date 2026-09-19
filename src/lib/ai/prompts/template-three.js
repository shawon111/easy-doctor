import { COMMON_RULES } from "./common";
import { templateThreeDefaults } from "@/content/defaults";

export const buildTemplateThreePrompt = (
    doctorData,
    seoData
) => `
${COMMON_RULES}

You are generating content for TEMPLATE THREE.

TEMPLATE THREE should feel modern, polished, personal, and
trust-oriented.

The template has predefined default content that represents
the intended structure, tone, writing style, section purpose,
and approximate content length of TEMPLATE THREE.

Use the TEMPLATE THREE DEFAULT CONTENT as a reference when
generating the new content.

IMPORTANT:
- Preserve the overall content structure of TEMPLATE THREE.
- Use the default content to understand the purpose of each
  section and the style of writing expected.
- Use the default content as inspiration, not as factual data.
- Do NOT blindly copy the default content.
- Replace generic/default information with the doctor's real
  information.
- Adapt the content naturally to the doctor's specialty,
  qualifications, experience, treatments, locations, and
  other supplied information.
- Never invent facts about the doctor because they appear
  in the default template content.
- Doctor data always has higher priority than template
  default content.
- If a claim in the default content is not supported by
  doctor data, remove it or rewrite it as a generic,
  non-factual statement.

Do not generate header, footer, images, image alt text, or icon names.

EXACT ARRAY COUNTS:
- home.highlights.items: 4
- home.aboutPreview.checklist: 3
- home.servicesGrid.items: 3
- home.whyTrust.items: 3
- home.howToStart.steps: 4
- about.timeline.items: 3
- about.pillars.items: 3
- about.locations.items: 4
- services.treatments.cards: 4
- each treatment card bullets: 2
- services.benefits.items: 3
- services.faq.items: 3
- appointment.steps.items: 3
- appointment.schedule.items: 5
- appointment.chambers.items: 3
- appointment.faq.items: 3

HOME PAGE:

The hero should clearly communicate:
- doctor's name
- specialty
- location where appropriate
- professional value
- appointment action

Highlights should use only factual information when available.

For highlight item color values, only use:
- text-primary
- text-secondary
- text-tertiary

The about preview should introduce the doctor's background
without fabricating details.

Services must correspond to actual treatments when available.

If fewer treatments are provided than required by the template,
create additional patient-friendly service copy only when it
is clearly appropriate for the doctor's specialty.

Do not introduce unrelated treatments or medical services.

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

The timeline must only contain factual career information
when available.

Pillars should describe general professional principles
without inventing certifications, achievements, or awards.

Locations must come from actual clinic/chamber data
when available.

SERVICES PAGE:

The treatment cards must correspond to actual treatments
when available.

Do not invent unrelated treatments.

If additional treatment cards are required, generate
closely related patient-friendly content that is clearly
appropriate for the doctor's specialty.

Treatment descriptions should be informative but medically
responsible.

Do not promise outcomes.

Avoid unsupported statistics in stat1Value/stat2Value.

If factual statistics are unavailable, return empty strings.

Benefits should describe the patient/consultation experience
without making unsupported medical claims.

FAQs should answer common questions about the treatments
actually presented on the page.

APPOINTMENT PAGE:

Explain how patients can begin an appointment.

Schedules must come from actual availability data.

Do not invent:
- available days
- opening hours
- appointment times
- availability

WhatsApp information must not invent phone numbers or URLs.

Chambers must correspond to actual clinic locations.

FAQs should answer common appointment-related questions
without inventing information.

SEO:

Use page-specific SEO keywords naturally.

Do not keyword stuff.

--------------------------------------------------
DOCTOR DATA
--------------------------------------------------

${JSON.stringify(doctorData, null, 2)}

--------------------------------------------------
SEO DATA
--------------------------------------------------

${JSON.stringify(seoData, null, 2)}

--------------------------------------------------
TEMPLATE THREE DEFAULT CONTENT
--------------------------------------------------

${JSON.stringify(templateThreeDefaults, null, 2)}

--------------------------------------------------
CONTENT GENERATION PRIORITY
--------------------------------------------------

When generating the final content, follow this priority:

1. Doctor data
2. SEO data
3. Template Three structure and default content
4. General writing creativity

Doctor data is authoritative.

SEO data can be used for relevant specialty, location,
and search-oriented wording.

Template Three default content should influence:
- tone
- section purpose
- writing style
- approximate content length
- level of detail
- CTA style
- overall presentation

However, template default content must never override
factual doctor information.

Do not copy placeholder:
- names
- qualifications
- experience
- locations
- treatments
- statistics
- URLs
- achievements
- medical claims

from the template default content.

Return ONLY valid JSON.
`;