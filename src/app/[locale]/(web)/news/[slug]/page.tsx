import { Container } from "@/src/components/ui/Container";
import { news } from "@/src/features/news/data/news";
import { Link } from "@/src/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function NewsDetailsPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("news");
  const item = news.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <Container className="py-12 md:py-16">
      <Link href="/news" className="text-sm text-muted-foreground hover:text-foreground">
        ← {t("back")}
      </Link>
      <div className="relative mt-6 h-64 overflow-hidden rounded-md border border-border">
        <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" />
      </div>
      <h1 className="mt-8 font-serif text-3xl text-foreground">{item.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{item.date}</p>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        {item.content.map((paragraph, index) => (
          <p key={`${item.slug}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </Container>
  );
}
