import Image from "next/image";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Link } from "@/src/i18n/routing";
import type { HomeNewsCard } from "../utils/types";

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
        <div className="text-center">
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">{subtitle}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((item, index) => (
            <article
              key={item.slug}
              className={`overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${index > 2 ? "hidden md:block" : ""}`}
            >
              <Link href={`/news/${item.slug}`}>
              <div className="relative h-[250px] md:h-[250px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              </Link>
              <div className="flex flex-col gap-3 p-5">
                <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.subtitle}</p>
                <Link href={`/news/${item.slug}`} className="mt-auto inline-flex text-sm font-medium text-primary hover:underline">
                  {readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/news">{viewAll}</Button>
        </div>
      </Container>
    </section>
  );
}
