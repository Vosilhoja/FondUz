"use client";

import { Container } from "@/src/components/ui/Container";
import { ThemeToggle } from "@/src/components/ThemeToggle";
import { Link, usePathname, useRouter } from "@/src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname === "";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("services"), href: "/services" },
    { name: t("doctors"), href: "/doctors" },
    { name: t("prices"), href: "/prices" },
    { name: t("blog"), href: "/blog" },
    { name: t("contact"), href: "/contacts" },
    { name: t("faq"), href: "/faq" },
  ] as const;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    setSearchOpen(false);
    setSearchQuery("");
    setMenuOpen(false);
  };

  const toggleLanguage = () => {
    const nextLocale = locale === "uz" ? "ru" : "uz";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 w-full max-w-[1320px] items-center justify-between gap-3 md:h-[4.25rem]">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground md:text-xl">
              Fond<span className="text-primary">Uz</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active = navActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-xs font-semibold transition-colors md:text-[13px] ${
                    active
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {searchOpen ? (
              <form
                onSubmit={handleSearch}
                className="relative hidden min-w-0 max-w-[200px] sm:block md:max-w-[240px]"
              >
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  className="h-9 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  autoFocus
                />
              </form>
            ) : null}

            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label={t("searchPlaceholder")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>

            <ThemeToggle />

            <button
              type="button"
              onClick={toggleLanguage}
              className="hidden h-9 min-w-[2.25rem] items-center justify-center rounded-md border border-border bg-card px-2 text-[11px] font-semibold uppercase text-foreground sm:flex"
            >
              {locale}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-foreground lg:hidden"
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-4 py-3 text-base font-medium ${
                    navActive(pathname, link.href)
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <form onSubmit={handleSearch} className="mt-2 flex gap-2 px-2">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  className="min-h-11 flex-1 rounded-md border border-border bg-card px-3 text-sm"
                />
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
                >
                  OK
                </button>
              </form>
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
