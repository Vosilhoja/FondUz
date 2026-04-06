"use client";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

export default function DoctorsPage() {
  const t = useTranslations("DoctorsPage");
  const [search, setSearch] = useState("");

  const doctors = t.raw("cards") as { name: string; role: string; exp: string }[];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return doctors;
    return doctors.filter(
      (d) => d.name.toLowerCase().includes(q) || d.role.toLowerCase().includes(q),
    );
  }, [doctors, search]);

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-12 md:py-16">
        <Container className="text-center">
          <h1 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{t("title")}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{t("sub")}</p>
          <form
            className="mx-auto mt-8 flex max-w-xl flex-col gap-2 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="h-10 min-w-0 flex-1 rounded-md border border-border bg-card px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <Button type="submit" variant="primary" className="h-10 shrink-0 rounded-md px-6">
              {t("btnSearch")}
            </Button>
          </form>
        </Container>
      </section>

      <Container className="mt-10 md:mt-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((doc, i) => (
            <article
              key={`${doc.name}-${i}`}
              className="flex flex-col rounded-md border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted text-xl text-muted-foreground">
                {(doc.name[0] ?? "?").toUpperCase()}
              </div>
              <h3 className="mt-4 font-serif text-lg text-foreground">{doc.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{doc.role}</p>
              <p className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
                {t("experience")} <span className="font-medium text-foreground">{doc.exp}</span>
              </p>
              <Button variant="outline" className="mt-6 w-full rounded-md text-xs font-semibold uppercase tracking-wide">
                {t("btnBook")}
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
