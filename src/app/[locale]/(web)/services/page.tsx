import { Container } from "@/src/components/ui/Container";
import { professions } from "@/src/features/services/data/services";
import { Link } from "@/src/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export default async function ServicesIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-12 md:py-20">
        <Container>
          <h1 className="font-serif text-3xl text-foreground md:text-4xl">{t("title")}</h1>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{t("subtitle")}</p>
        </Container>
      </section>

      <Container className="mt-10 md:mt-14">
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {professions.map((profession) => (
            <li key={profession.slug}>
              <Link href={`/services/${profession.slug}`} className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:bg-muted/70 hover:shadow-md">
                <div>
                  <h2 className="font-serif text-xl text-foreground">{profession.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{t("fundsCount", { count: profession.fundsCount })}</p>
                </div>
                <span className="text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">{t("open")} →</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
