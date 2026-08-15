"use client";

import { useState } from "react";

export default function AccordionThree({ items, variant = "default", isDemo = false }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const isServices = variant === "services";

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={
              isServices
                ? "bg-white rounded-lg overflow-hidden border border-outline-variant/50"
                : "bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm"
            }
          >
            <button
              type="button"
              className={`w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-lowest transition-colors ${
                isServices ? "" : ""
              }`}
              onClick={() => toggle(index)}
            >
              <span
                className={
                  isServices
                    ? "font-headline-md text-body-lg text-on-surface font-semibold"
                    : "font-headline-md text-[18px] text-on-surface"
                }
              >
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined transition-transform text-xl text-primary ${
                  isOpen ? "rotate-180" : ""
                } ${isServices ? "" : "text-on-surface-variant"}`}
              >
                expand_more
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                isOpen ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              <div
                className={`p-6 pt-0 text-on-surface-variant border-t border-outline-variant/20 ${
                  isServices ? "" : "border-outline-variant/50 font-body-md"
                }`}
              >
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
