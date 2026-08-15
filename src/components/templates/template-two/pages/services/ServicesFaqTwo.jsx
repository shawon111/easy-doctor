"use client";

import { useMemo, useState } from "react";

export default function ServicesFaqTwo({ content = {} , isDemo = false}) {
  const items = content.items || [];
  const defaultOpenIndex = useMemo(
    () => items.findIndex((item) => item.openByDefault),
    [items]
  );
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex >= 0 ? defaultOpenIndex : 0);

  return (
    <section className="py-[120px] bg-white">
      <div className="px-[20px] md:px-[64px] max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="svctwo-headline-md mb-4 text-[#1a1c1e]">{content.heading}</h2>
          <p className="svctwo-body-md text-[#44474e]">
            Frequently asked questions regarding our specialized procedures and patient journey.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-[#c4c6cf]/30">
                <button
                  type="button"
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
