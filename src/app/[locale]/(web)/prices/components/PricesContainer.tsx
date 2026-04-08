"use client";

import { Container } from "@/src/components/ui/Container";
import { useState } from "react";

type PriceItem = {
  id: string;
  title: string;
  price: string;
  includes: string[];
};

type Props = {
  items: PriceItem[];
  toggleListText: string;
  toggleCardsText: string;
  includesText: string;
};

export function PricesContainer({ items, toggleListText, toggleCardsText, includesText }: Props) {
  const [view, setView] = useState<"list" | "cards">("list");

  return (
    <Container className="mt-10 md:mt-14">
      <div className="mb-6 hidden justify-end gap-2 md:flex">
        <button
          onClick={() => setView("list")}
          className={`rounded-xl border px-3 py-2 text-sm transition-all ${
            view === "list" ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-card hover:bg-muted/50"
          }`}
        >
          {toggleListText}
        </button>
        <button
          onClick={() => setView("cards")}
          className={`rounded-xl border px-3 py-2 text-sm transition-all ${
            view === "cards" ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-card hover:bg-muted/50"
          }`}
        >
          {toggleCardsText}
        </button>
      </div>

      <div
        className={`grid grid-cols-1 gap-4 ${
          view === "cards" ? "md:grid-cols-2 xl:grid-cols-3" : "md:block md:space-y-4"
        }`}
      >
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
            <h2 className="font-serif text-xl text-foreground">{item.title}</h2>
            <p className="mt-2 text-lg font-semibold text-primary">{item.price}</p>
            <h3 className="mt-4 text-sm font-semibold text-foreground">{includesText}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {item.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Container>
  );
}
