"use client";

import { Container } from "@/src/components/ui/Container";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQPage() {
  const t = useTranslations("FAQPage");
  const items = t.raw("items") as { q: string; a: string }[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Container className="py-12 md:py-16">
      <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <h1 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{t("title")}</h1>
        <p className="mt-4 text-sm text-muted-foreground md:text-base">{t("sub")}</p>
      </div>

      <div className="mx-auto max-w-2xl space-y-2">
        {items.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q} className="rounded-md border border-border bg-card">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left md:p-5"
              >
                <span className="font-serif text-base text-foreground md:text-lg">{faq.q}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-lg leading-none transition-transform ${
                    isOpen ? "rotate-45 border-primary bg-muted" : "border-border"
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen ? (
                <div className="border-t border-border px-4 pb-4 pt-2 text-sm leading-relaxed text-muted-foreground md:px-5 md:pb-5">
                  {faq.a}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </Container>
  );
}
