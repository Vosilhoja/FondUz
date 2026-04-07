import { Container } from "@/src/components/ui/Container";
import { Pagination } from "@/src/components/ui/Pagination";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { news } from "@/src/features/news/data/news";
import { Link } from "@/src/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
};

const PAGE_SIZE = 15;

export default async function NewsPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { page } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("news");
  const currentPage = Math.max(1, Number(page) || 1);
  const totalPages = Math.ceil(news.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const items = news.slice(start, start + PAGE_SIZE);

  return (
    <Container className="py-12 md:py-16">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.slug} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <Link href={`/news/${item.slug}`}>
            <div className="relative h-[250px] md:h-[250px]">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            </Link>
            <div className="flex flex-col p-5 gap-3">
              <p className="text-xs text-muted-foreground">{item.date}</p>
              <h3 className="mt-2 font-serif text-lg text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.subtitle}</p>
              <Link href={`/news/${item.slug}`} className="mt-auto inline-flex w-fit rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
                {t("open")}
              </Link>
            </div>
          </article>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/news" />
    </Container>
  );
}
