"use client";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  const plans = [
    {
      key: "basic" as const,
      price: "14",
      premium: false,
    },
    {
      key: "standard" as const,
      price: "29",
      premium: true,
    },
    {
      key: "premium" as const,
      price: "59",
      premium: false,
    },
  ];

  const why = [
    { title: t("whyCard1Title"), desc: t("whyCard1Desc") },
    { title: t("whyCard2Title"), desc: t("whyCard2Desc") },
    { title: t("whyCard3Title"), desc: t("whyCard3Desc") },
    { title: t("whyCard4Title"), desc: t("whyCard4Desc") },
  ];

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-12 md:py-20">
        <Container className="text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {t("heroBadge")}
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t("heroSub")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("joinNow")}
            </Link>
            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {t("learnMore")}
            </Link>
          </div>
        </Container>
      </section>

      <Container className="mt-14 md:mt-20">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">{t("pricingTitle")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">{t("pricingSub")}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`flex flex-col rounded-md border p-6 md:p-8 ${
                plan.premium ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
              }`}
            >
              <span
                className={`text-[10px] font-semibold uppercase tracking-wider ${
                  plan.premium ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {plan.key === "basic"
                  ? t("planBasic")
                  : plan.key === "standard"
                    ? t("planStandard")
                    : t("planPremium")}
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-serif text-3xl md:text-4xl">${plan.price}</span>
                <span className={`text-xs ${plan.premium ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {t("perMonth")}
                </span>
              </div>
              <ul
                className={`mt-6 space-y-2 text-sm ${
                  plan.premium ? "text-primary-foreground/85" : "text-muted-foreground"
                }`}
              >
                <li>· {t("featSupport")}</li>
                <li>· {t("featOnline")}</li>
                <li>· {t("featMethods")}</li>
              </ul>
              <div className="mt-8">
                <Button
                  variant={plan.premium ? "secondary" : "outline"}
                  className="w-full rounded-md"
                  size="md"
                >
                  {t("joinNow")}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <section className="mt-16 border-t border-border bg-primary py-14 text-primary-foreground md:mt-24 md:py-20">
        <Container>
          <div className="mb-10 max-w-2xl md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl">{t("whyTitle")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80 md:text-base">{t("whySub")}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 p-5 md:p-6"
              >
                <h3 className="font-serif text-lg text-primary-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{item.desc}</p>
                <Link
                  href="/contacts"
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-primary-foreground/90 underline-offset-4 hover:underline"
                >
                  {t("cta")}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
