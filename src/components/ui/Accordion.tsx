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
            <div key={item.question} className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md shadow-sm transition-all hover:shadow-md hover:border-border">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-3 p-5 text-left transition-colors hover:bg-muted/50"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-sm font-semibold text-foreground md:text-base">{item.question}</span>
                <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
              {isOpen ? (
                <div className="border-t border-border/40 px-5 py-4 text-sm leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-top-1 duration-200">{item.answer}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
