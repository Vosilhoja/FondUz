"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  title?: string;
  subtitle?: string;
  items: AccordionItem[];
};

export function Accordion({ title, subtitle, items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section>
      {title ? <h2 className="font-serif text-2xl text-foreground md:text-3xl">{title}</h2> : null}
      {subtitle ? <p className="mt-3 text-sm text-muted-foreground md:text-base">{subtitle}</p> : null}
      <div className="mt-6 space-y-2">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-3 p-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-sm font-medium text-foreground md:text-base">{item.question}</span>
                <span className={`text-lg transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
              {isOpen ? (
                <div className="border-t border-border px-4 py-3 text-sm text-muted-foreground">{item.answer}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
