import Image from "next/image";
import { Link } from "@/src/i18n/routing";
import { Container } from "@/src/components/ui/Container";

type NewsItem = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
};

type Props = {
  items: NewsItem[];
  openText: string;
};

export function NewsGrid({ items, openText }: Props) {
  return (
    <Container className="pb-12 md:pb-16">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.slug}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
          >
            <Link href={`/news/${item.slug}`}>
              <div className="relative h-[250px] md:h-[250px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Link>
            <div className="flex flex-col p-5 gap-3">
              <p className="text-xs text-muted-foreground">{item.date}</p>
              <h3 className="mt-2 font-serif text-lg text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.subtitle}</p>
              <Link
                href={`/news/${item.slug}`}
                className="mt-auto inline-flex w-fit rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:scale-105 active:scale-95"
              >
                {openText}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
