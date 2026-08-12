"use client";

import { useState } from "react";

export default function AccordionTwoDark({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={item.question}
            className={`t2d-accordion-item border-b border-outline-variant/30 ${isActive ? "t2d-active" : ""}`}
          >
            <button
              type="button"
              className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span className="font-headline-sm text-[20px]">{item.question}</span>
              <span className="material-symbols-outlined t2d-icon-rotate">expand_more</span>
            </button>
            <div className="t2d-accordion-content">
              <p className="pb-6 font-body-md text-body-md text-on-surface-variant">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
