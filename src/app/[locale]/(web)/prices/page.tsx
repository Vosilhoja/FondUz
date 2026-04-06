"use client";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { useTranslations } from "next-intl";

type Plan = { name: string; price: string; features: string[]; highlight?: boolean };

export default function PricesPage() {
  const t = useTranslations("PricesPage");
  const plans = t.raw("plans") as Plan[];

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-12 md:py-16">
        <Container className="text-center">
          <h1 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{t("title")}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{t("sub")}</p>
        </Container>
      </section>

      <Container className="mt-10 md:mt-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
          {plans.map((plan, i) => (
            <div
              key={`${plan.name}-${i}`}
              className={`flex flex-col rounded-md border p-6 md:p-8 ${
                plan.highlight
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card"
              }`}
            >
              <span
                className={`text-[10px] font-semibold uppercase tracking-wide ${
                  plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {plan.name}
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-serif text-4xl">${plan.price}</span>
                <span
                  className={`text-sm ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                >
                  {t("period")}
                </span>
              </div>
              <ul
                className={`mt-6 flex-1 space-y-3 text-sm ${
                  plan.highlight ? "text-primary-foreground/85" : "text-muted-foreground"
                }`}
              >
                {plan.features.map((feat) => (
                  <li key={feat} className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlight ? "secondary" : "primary"}
                className="mt-8 w-full rounded-md"
                size="md"
              >
                {t("btnSelect")}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
