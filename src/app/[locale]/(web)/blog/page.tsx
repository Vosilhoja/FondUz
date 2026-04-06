"use client";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function BlogPage() {
  const t = useTranslations("BlogPage");
  const [email, setEmail] = useState("");

  const articles = t.raw("articles") as { title: string; date: string; category: string }[];

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-12 md:py-16">
        <Container>
          <h1 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{t("title")}</h1>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{t("sub")}</p>
        </Container>
      </section>

      <Container className="mt-10 md:mt-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <article
              key={`${article.title}-${i}`}
              className="flex flex-col rounded-md border border-border bg-card p-5 md:p-6"
            >
              <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="mt-3 font-serif text-lg text-foreground">{article.title}</h3>
              <button
                type="button"
                className="mt-4 w-fit text-left text-xs font-semibold uppercase tracking-wide text-primary"
              >
                {t("readMore")}
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-md border border-border bg-primary p-8 text-primary-foreground md:p-10">
          <h2 className="font-serif text-xl md:text-2xl">{t("newsletterTitle")}</h2>
          <p className="mt-2 max-w-md text-sm text-primary-foreground/80">{t("newsletterSub")}</p>
          <form
            className="mt-6 flex max-w-md flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("newsletterEmailPh")}
              className="h-10 min-w-0 flex-1 rounded-md border border-primary-foreground/25 bg-primary-foreground/10 px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40"
            />
            <Button type="submit" variant="secondary" className="h-10 rounded-md">
              {t("newsletterCta")}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
