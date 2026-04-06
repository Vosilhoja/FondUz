"use client";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");

  return (
    <footer className="border-t border-border bg-card py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 border-b border-border pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="inline-block font-serif text-xl font-semibold text-foreground">
              Fond<span className="text-primary">Uz</span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{t("bridgeNote")}</p>
            <p className="max-w-md text-sm text-muted-foreground">{t("newsletterTitle")}</p>
            <div className="flex max-w-md flex-col gap-2 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="h-10 min-w-0 flex-1 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button variant="primary" size="md" className="shrink-0 sm:w-auto">
                {t("subscribeButton")}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">{t("privacyNote")}</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("services")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-foreground">
                  {tNav("services")}
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-muted-foreground transition-colors hover:text-foreground">
                  {tNav("doctors")}
                </Link>
              </li>
              <li>
                <Link href="/prices" className="text-muted-foreground transition-colors hover:text-foreground">
                  {tNav("prices")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
                  {tNav("blog")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  {tNav("about")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("followUs")}</h4>
            <p className="text-sm text-muted-foreground">—</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-muted-foreground md:flex-row">
          <p className="text-center md:text-left">{t("copyright")}</p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            <Link href="/privacy-policy" className="hover:text-foreground">
              {t("privacyPolicy")}
            </Link>
            <span className="cursor-default hover:text-foreground">{t("terms")}</span>
            <span className="cursor-default hover:text-foreground">{t("cookies")}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
