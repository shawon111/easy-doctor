import { templateOneDefaults } from "@/content/defaults";
import { COMMON_RULES } from "./common";

export const buildTemplateOnePrompt = (
    doctorData,
    seoData
) => `
${COMMON_RULES}

You are generating content for TEMPLATE ONE.

TEMPLATE ONE should feel welcoming, trustworthy, modern,
professional, and patient-focused.

The template has predefined content, structure, wording patterns,
and design intent. Use the TEMPLATE ONE DEFAULT CONTENT below
as a reference when generating the new content.

IMPORTANT:
- Preserve the overall content structure of TEMPLATE ONE.
- Use the default content as inspiration for tone, section purpose,
  wording style, and content length.
- Do NOT blindly copy the default content.
- Replace generic/default information with the doctor's real information.
- Adapt the content naturally to the doctor's specialty, experience,
  treatments, qualifications, locations, and other supplied information.
- Never invent facts about the doctor just because they appear in
  the default content.
- If the doctor's data does not support a claim from the default
  content, remove or rewrite that claim.
- The doctor's data always has higher priority than the default content.

Do not generate header, footer, images, image alt text, or icon names.

EXACT ARRAY COUNTS:
- home.trustBadges.items: 4
- home.services.items: 3
- home.whyChooseUs.items: 4
- home.appointmentProcess.steps: 3
- home.clinicLocations.locations: 2
- about.bioStats.stats: 2
- about.timeline.items: 3
- about.chambers.locations: 1
- services.treatmentsGrid.items: 6
- services.benefits.items: 3
- services.faq.items: 4
- appointment.howItWorks.steps: 3
- appointment.schedule.items: 2
- appointment.whatsappCta.features: 1
- appointment.faq.items: 4

HOME PAGE:

The hero should immediately communicate:
- who the doctor is
- specialty
- relevant location
- primary patient value
- appointment action

Trust badges must use only factual information when available.

The about preview should be a concise version of the doctor's
actual professional background.

Services must come from DOCTOR DATA.treatments when available.

Why Choose Us should communicate genuine professional qualities
without claiming superiority over other doctors.

The appointment process should explain how a patient can
contact or request an appointment.

Clinic locations must correspond to actual clinic/chamber data
when available.

ABOUT PAGE:

Present the doctor's professional background.

Experience must use the actual experience value.

Languages must come from DOCTOR DATA.

Bio statistics must not contain fabricated numbers.

Timeline items must correspond to actual qualifications,
education, career history, or other supplied information.

Chambers must use actual clinic information.

SERVICES PAGE:

Treatments must only come from the doctor's treatment list
when available.

If fewer treatments are provided than required by the template,
create additional patient-friendly service descriptions that
are clearly appropriate for the doctor's specialty.

Do not introduce procedures, treatments, or medical services
that are unrelated to the doctor's specialty.

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

--------------------------------------------------
DOCTOR DATA
--------------------------------------------------

${JSON.stringify(doctorData, null, 2)}

--------------------------------------------------
SEO DATA
--------------------------------------------------

${JSON.stringify(seoData, null, 2)}

--------------------------------------------------
TEMPLATE ONE DEFAULT CONTENT
--------------------------------------------------

${JSON.stringify(templateOneDefaults, null, 2)}

--------------------------------------------------
CONTENT GENERATION PRIORITY
--------------------------------------------------

When generating the final content, follow this priority:

1. Doctor data
2. SEO data
3. Template One structure and default content
4. General writing creativity

Doctor data is authoritative.

SEO data should be used for relevant location, specialty,
and search-oriented wording.

Template One default content should influence the generated
content's tone, structure, section purpose, and approximate
content length, but must not override factual doctor data.

Do not copy placeholder names, qualifications, locations,
treatments, statistics, URLs, or claims from the template data.

Return ONLY valid JSON.
`;