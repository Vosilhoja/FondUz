"use client";

import { Container } from "@/src/components/ui/Container";
import { SERVICE_SLUGS, type ServiceSlug } from "@/src/data/service-slugs";
import { Link, useRouter } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";

type Hit = { id: string; title: string; description: string; href: string };

function SearchResults() {
  const t = useTranslations("SearchPage");
  const tNav = useTranslations("Navigation");
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const hits = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return [];

    const pool: Hit[] = [
      { id: "p1", title: tNav("services"), description: tNav("services"), href: "/services" },
      { id: "p2", title: tNav("doctors"), description: tNav("doctors"), href: "/doctors" },
      { id: "p3", title: tNav("contact"), description: tNav("contact"), href: "/contacts" },
      { id: "p4", title: tNav("about"), description: tNav("about"), href: "/about" },
      { id: "p5", title: tNav("blog"), description: tNav("blog"), href: "/blog" },
      { id: "p6", title: tNav("prices"), description: tNav("prices"), href: "/prices" },
      { id: "p7", title: tNav("faq"), description: tNav("faq"), href: "/faq" },
    ];

    const serviceNames: Record<ServiceSlug, string> = {
      heart: t("serviceNames.heart"),
      neurology: t("serviceNames.neurology"),
      orthopedics: t("serviceNames.orthopedics"),
      pediatrics: t("serviceNames.pediatrics"),
      diagnostics: t("serviceNames.diagnostics"),
    };

    SERVICE_SLUGS.forEach((slug) => {
      pool.push({
        id: `s-${slug}`,
        title: serviceNames[slug],
        description: serviceNames[slug],
        href: `/services/${slug}`,
      });
    });

    return pool.filter(
      (h) => h.title.toLowerCase().includes(q) || h.description.toLowerCase().includes(q),
    );
  }, [query, t, tNav]);

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-10 md:py-14">
        <Container>
          <h1 className="font-serif text-3xl text-foreground md:text-4xl">{t("title")}</h1>
          {query ? (
            <p className="mt-3 text-sm text-muted-foreground">
              {t("queryLabel")}{" "}
              <span className="font-medium text-foreground">&ldquo;{query}&rdquo;</span>
            </p>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">{t("hint")}</p>
          )}
          <form
            className="mt-6 flex max-w-xl flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const q = String(fd.get("q") ?? "").trim();
              if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
            }}
          >
            <input
              name="q"
              type="search"
              defaultValue={query}
              placeholder={t("placeholder")}
              className="h-10 min-w-0 flex-1 rounded-md border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button
              type="submit"
              className="h-10 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
            >
              {t("submit")}
            </button>
          </form>
        </Container>
      </section>

      <Container className="mt-10">
        {query ? (
          <>
            <p className="mb-6 text-sm text-muted-foreground">{t("resultsFound", { count: hits.length })}</p>
            {hits.length > 0 ? (
              <ul className="space-y-3">
                {hits.map((h) => (
                  <li key={h.id}>
                    <Link
                      href={h.href}
                      className="block rounded-md border border-border bg-card p-4 transition-colors hover:bg-muted/50"
                    >
                      <span className="font-medium text-foreground">{h.title}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{h.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-md border border-dashed border-border p-8 text-center">
                <p className="text-sm text-muted-foreground">{t("noResults")}</p>
                <Link href="/" className="mt-4 inline-block text-sm font-medium text-primary">
                  {t("backToHome")}
                </Link>
              </div>
            )}
          </>
        ) : null}
      </Container>
    </div>
  );
}

export default function SearchPage() {
  const t = useTranslations("SearchPage");
  return (
    <Suspense
      fallback={
        <Container className="py-16">
          <p className="text-sm text-muted-foreground">{t("loading")}</p>
        </Container>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
