import { templateTwoDefaults } from "@/content/defaults";
import { COMMON_RULES } from "./common";

export const buildTemplateTwoPrompt = (
    doctorData,
    seoData
) => `
${COMMON_RULES}

You are generating content for TEMPLATE TWO.

TEMPLATE TWO emphasizes the doctor's professional credentials,
experience, qualifications, services, and appointment process.

The template has predefined default content that represents
the intended structure, tone, writing style, section purpose,
and approximate content length of TEMPLATE TWO.

Use the TEMPLATE TWO DEFAULT CONTENT as a reference when
generating the new content.

IMPORTANT:
- Preserve the overall content structure of TEMPLATE TWO.
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
- home.credentials.items: 4
- home.treatments.items: 4
- home.timeline.items: 3
- home.onboarding.steps: 3
- about.timeline.items: 3
- about.qualifications.items: 4
- about.practices.items: 2
- services.cards.items: 3
- services.benefits.items: 3
- services.faq.items: 3
- appointment.schedules.items: 2
- appointment.whatsapp.features: 2
- appointment.faq.items: 3

HOME PAGE:

Create a strong professional introduction.

The hero should communicate:
- doctor's identity
- specialty
- professional positioning
- relevant credentials
- patient-focused value

Credentials should ONLY come from DOCTOR DATA when available.

Treatments must ONLY come from DOCTOR DATA.treatments when available.

If fewer treatments are provided than required by the template,
create additional patient-friendly service copy only when it
is clearly appropriate for the doctor's specialty.

Do not introduce unrelated medical services or treatments.

Timeline information must ONLY come from actual doctor data
when available.

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
provided qualifications when available.

Timeline entries must correspond to actual education,
qualifications, career history, or other supplied information.

Practices should describe the doctor's actual professional
areas or treatment focus when available.

SERVICES PAGE:

The featured service must be selected from the doctor's
actual treatments when available.

Service cards must correspond to actual treatments when available.

If additional cards are required, generate closely related,
patient-friendly service descriptions that are appropriate
for the doctor's specialty.

Do not invent unrelated treatments or procedures.

Explain services in clear patient-friendly language without
making unsupported medical promises.

Benefits should describe general professional/patient experience
benefits rather than unsupported medical outcomes.

FAQs should answer general questions related to the services
actually presented on the page.

APPOINTMENT PAGE:

Explain how patients can contact the doctor and request an
appointment.

Schedules must only reflect information supplied in DOCTOR DATA.

Do not invent availability, opening hours, days, or appointment
times.

WhatsApp content should explain the communication process.

Do not invent a WhatsApp URL.

--------------------------------------------------
DOCTOR DATA
--------------------------------------------------

${JSON.stringify(doctorData, null, 2)}

--------------------------------------------------
SEO DATA
--------------------------------------------------

${JSON.stringify(seoData, null, 2)}

--------------------------------------------------
TEMPLATE TWO DEFAULT CONTENT
--------------------------------------------------

${JSON.stringify(templateTwoDefaults, null, 2)}

--------------------------------------------------
CONTENT GENERATION PRIORITY
--------------------------------------------------

When generating the final content, follow this priority:

1. Doctor data
2. SEO data
3. Template Two structure and default content
4. General writing creativity

Doctor data is authoritative.

SEO data can be used for relevant specialty, location,
and search-oriented wording.

Template Two default content should influence:
- tone
- section purpose
- writing style
- approximate content length
- level of detail
- CTA style
- professional presentation

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