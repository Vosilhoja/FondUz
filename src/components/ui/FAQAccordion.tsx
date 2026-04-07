"use client";

import { useState } from "react";

type Item = { question: string; answer: string };

export function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="rounded-md border border-border bg-card">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between p-4 text-left"
            >
              <span className="font-medium text-foreground">{item.question}</span>
              <span className={`text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            {isOpen ? <div className="border-t border-border px-4 py-3 text-sm text-muted-foreground">{item.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
