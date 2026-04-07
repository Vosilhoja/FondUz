"use client";

import { Container } from "@/src/components/ui/Container";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tc = useTranslations("common");
  const tNav = useTranslations("nav");
  const tContacts = useTranslations("contacts");
  const pageLinks = ["/", "/about", "/services", "/doctors", "/prices", "/news", "/contacts", "/faqs"] as const;

  return (
    <footer className="mt-10 border-t border-border bg-card/95 py-12">
      <Container>
        <div className="grid grid-cols-1 gap-8 border-b border-border pb-8 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl text-foreground">{tc("brand")}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t("description")}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Pages</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
              {pageLinks.map((href) => (
                <li key={href}>
                  <Link href={href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {tNav(href === "/" ? "home" : href.slice(1))}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contacts</p>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p><span className="text-foreground">{tContacts("phoneLabel")}:</span> <a href={`tel:${tContacts("phoneValue").replace(/\s/g, "")}`} className="hover:text-foreground">{tContacts("phoneValue")}</a></p>
              <p><span className="text-foreground">{tContacts("emailLabel")}:</span> <a href={`mailto:${tContacts("emailValue")}`} className="hover:text-foreground">{tContacts("emailValue")}</a></p>
              <p><span className="text-foreground">{tContacts("addressLabel")}:</span> {tContacts("addressValue")}</p>
            </div>
          </div>
        </div>
        <div className="pt-6 text-sm text-muted-foreground">
          <p>{t("copyright")}</p>
        </div>
      </Container>
    </footer>
  );
}
