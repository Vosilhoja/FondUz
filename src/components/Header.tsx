"use client";
import { Container } from "@/src/components/ui/Container";
import { Link, usePathname, useRouter } from "@/src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname === "";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["/", "/about", "/services", "/doctors", "/prices", "/news", "/contacts", "/faqs"] as const;

  const toggleLanguage = () => {
    const nextLocale = locale === "uz" ? "ru" : "uz";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 w-full items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground md:text-xl">
              {tc("brand")}
            </span>
          </Link>
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((href) => {
              const active = navActive(pathname, href);
              const key = href === "/" ? "home" : href.slice(1);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-xl px-3 py-2 text-xs font-semibold transition-colors md:text-[13px] ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                  }`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="hidden h-9 min-w-9 items-center justify-center rounded-xl border border-border bg-card px-2 text-[11px] font-semibold uppercase text-foreground sm:flex"
            >
              {locale}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground lg:hidden"
              aria-expanded={menuOpen}
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {menuOpen ? (
        <div className="border-t border-border bg-background lg:hidden">
          <Container>
            <nav className="flex max-h-[min(70vh,calc(100dvh-4rem))] flex-col gap-1 overflow-y-auto py-3">
              {navLinks.map((href) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium ${
                    navActive(pathname, href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {t(href === "/" ? "home" : href.slice(1))}
                </Link>
              ))}
              <div className="mt-3 flex gap-2 px-2">
                <button
                  type="button"
                  onClick={() => {
                    router.replace(pathname, { locale: "uz" });
                    setMenuOpen(false);
                  }}
                  className={`h-11 flex-1 rounded-md text-sm font-semibold ${locale === "uz" ? "bg-primary text-primary-foreground" : "border border-border bg-card"}`}
                >
                  UZ
                </button>
                <button
                  type="button"
                  onClick={() => {
                    router.replace(pathname, { locale: "ru" });
                    setMenuOpen(false);
                  }}
                  className={`h-11 flex-1 rounded-md text-sm font-semibold ${locale === "ru" ? "bg-primary text-primary-foreground" : "border border-border bg-card"}`}
                >
                  RU
                </button>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
