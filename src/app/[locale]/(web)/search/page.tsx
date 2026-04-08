"use client"
import { Container } from "@/src/components/ui/Container";
import { SERVICE_SLUGS, type ServiceSlug } from "@/src/data/service-slugs";
import { Link, useRouter } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Hit = { id: string; title: string; description: string; href: string };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

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
      { id: "p1", title: tNav("home"), description: tNav("home"), href: "/" },
      { id: "p2", title: tNav("about"), description: tNav("about"), href: "/about" },
      { id: "p3", title: tNav("services"), description: tNav("services"), href: "/services" },
      { id: "p4", title: tNav("blog"), description: tNav("blog"), href: "/news" },
      { id: "p5", title: tNav("doctors"), description: tNav("doctors"), href: "/doctors" },
      { id: "p6", title: tNav("prices"), description: tNav("prices"), href: "/prices" },
      { id: "p7", title: tNav("contact"), description: tNav("contact"), href: "/contacts" },
      { id: "p8", title: tNav("faq"), description: tNav("faq"), href: "/faqs" },
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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                className="h-10 min-w-0 flex-1 rounded-2xl border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
              />
              <button
                type="submit"
                className="h-10 rounded-2xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
              >
                {t("submit")}
              </button>
            </form>
          </motion.div>
        </Container>
      </section>

      <Container className="mt-10">
        {query ? (
          <div key={query}>
            <p className="mb-6 text-sm text-muted-foreground">{t("resultsFound", { count: hits.length })}</p>
            <AnimatePresence mode="popLayout">
              {hits.length > 0 ? (
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {hits.map((h) => (
                    <motion.li
                      key={h.id}
                      variants={itemVariants}
                      layout
                    >
                      <Link
                        href={h.href}
                        className="block rounded-2xl border border-border bg-card p-4 transition-all hover:bg-muted/50 hover:border-border hover:shadow-sm"
                      >
                        <span className="font-serif text-base font-bold text-foreground">{h.title}</span>
                        <span className="mt-1 block text-sm text-muted-foreground">{h.description}</span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-2xl border border-dashed border-border p-12 text-center"
                >
                  <p className="text-sm text-muted-foreground">{t("noResults")}</p>
                  <Link href="/" className="mt-4 inline-block text-sm font-bold text-primary hover:underline">
                    {t("backToHome")}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : null}
      </Container>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <Container className="py-16">
          <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
            <div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            <span>Search results loading...</span>
          </div>
        </Container>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
