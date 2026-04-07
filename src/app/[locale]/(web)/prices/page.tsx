"use client";

import { Container } from "@/src/components/ui/Container";
import { prices } from "@/src/features/prices/data/prices";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function PricesPage() {
  const t = useTranslations("prices");
  const [view, setView] = useState<"list" | "cards">("list");

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-12 md:py-16">
        <Container className="text-center">
          <h1 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{t("title")}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{t("subtitle")}</p>
        </Container>
      </section>

      <Container className="mt-10 md:mt-14">
        <div className="mb-6 hidden justify-end gap-2 md:flex">
          <button onClick={() => setView("list")} className={`rounded-xl border px-3 py-2 text-sm ${view === "list" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>{t("toggleList")}</button>
          <button onClick={() => setView("cards")} className={`rounded-xl border px-3 py-2 text-sm ${view === "cards" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>{t("toggleCards")}</button>
        </div>
        <div className={`grid grid-cols-1 gap-4 ${view === "cards" ? "md:grid-cols-2 xl:grid-cols-3" : "md:block md:space-y-4"}`}>
          {prices.map((item) => (
            <article key={item.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h2 className="font-serif text-xl">{item.title}</h2>
              <p className="mt-2 text-lg font-semibold text-primary">{item.price}</p>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{t("includes")}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {item.includes.map((line) => <li key={line}>{line}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
