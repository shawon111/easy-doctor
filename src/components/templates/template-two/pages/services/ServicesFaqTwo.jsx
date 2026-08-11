"use client";

// This is the ONE component in this set that must be a Client Component.
// The original <script> toggled an "active" class on click and animated
// max-height via CSS — that's real interactive state, so it's handled
// with React state here instead of DOM manipulation. The button
// mousedown/mouseup "press" micro-interaction from the original script
// didn't need JS at all — Tailwind's `active:scale-95` (already used
// elsewhere in this design) does the same thing in pure CSS, so it's
// applied directly instead of being ported as an event listener.

import { useState } from "react";

const FAQS = [
  {
    question: "How do I request a specialist referral?",
    answer:
      "While we accept direct inquiries, most patients are referred via their primary executive health physician. We also offer internal screening appointments to determine eligibility for complex procedures.",
  },
  {
    question: "What is the typical recovery period?",
    answer:
      "Because we utilize minimally invasive robotic techniques, recovery times are often 60% faster than traditional methods. Most executive patients return to light professional duties within 72 hours.",
  },
  {
    question: "Do you offer international patient services?",
    answer:
      "Yes. We have a dedicated concierge team that manages travel logistics, private transport, and local luxury accommodations for our international clientele and their families.",
  },
];

export default function ServicesFaqTwo() {
  // First item starts open, matching the original page's
  // DOMContentLoaded behavior.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[120px] bg-white">
      <div className="px-[20px] md:px-[64px] max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="svctwo-headline-md mb-4 text-[#1a1c1e]">Informed Care</h2>
          <p className="svctwo-body-md text-[#44474e]">
            Frequently asked questions regarding our specialized procedures
            and patient journey.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-[#c4c6cf]/30">
                <button
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none active:scale-95"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="svctwo-headline-20 text-[#1a1c1e]">{faq.question}</span>
                  <span
                    className={`svctwo-material-symbols transition-transform text-[#44474e] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                    isOpen ? "max-h-[200px]" : "max-h-0"
                  }`}
                >
                  <p className="pb-6 svctwo-body-md text-[#44474e]">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
