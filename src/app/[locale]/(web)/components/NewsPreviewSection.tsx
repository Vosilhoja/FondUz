"use client";

import Image from "next/image";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Link } from "@/src/i18n/routing";
import type { HomeNewsCard } from "../utils/types";
import { MotionViewport } from "@/src/components/ui/MotionViewport";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  cards: HomeNewsCard[];
  readMore: string;
  viewAll: string;
};

export function NewsPreviewSection({ title, subtitle, cards, readMore, viewAll }: Props) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <MotionViewport className="text-center">
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">{subtitle}</p>
        </MotionViewport>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((item, index) => (
            <MotionViewport
              key={item.slug}
              delay={index * 0.1}
              className={`${index > 2 ? "hidden md:block" : ""}`}
            >
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
              >
                <Link href={`/news/${item.slug}`}>
                  <div className="relative h-[240px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </Link>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{item.subtitle}</p>
                  <Link href={`/news/${item.slug}`} className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                    {readMore}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </motion.article>
            </MotionViewport>
          ))}
        </div>
        <MotionViewport delay={0.4} className="mt-10 text-center">
          <Button href="/news">{viewAll}</Button>
        </MotionViewport>
      </Container>
    </section>
  );
}
