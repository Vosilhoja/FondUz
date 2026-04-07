import { Container } from "@/src/components/ui/Container";
import { funds, professions } from "@/src/features/services/data/services";
import { Link } from "@/src/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return professions.map((profession) => ({ slug: profession.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const profession = professions.find((item) => item.slug === slug);
  if (!profession) notFound();
  const fundsForProfession = funds.filter((item) => item.professionSlug === slug);

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-10 md:py-14">
        <Container>
          <Link
            href="/services"
            className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            ← {t("back")}
          </Link>
          <h1 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">{profession.name}</h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{t("fundsCount", { count: fundsForProfession.length })}</p>
        </Container>
      </section>

      <Container className="mt-10 md:mt-12">
        <div className="space-y-4">
          {fundsForProfession.map((fund) => (
            <div key={fund.id} className="rounded-md border border-border bg-card p-5 md:p-6">
              <h2 className="font-serif text-xl text-foreground">{fund.name}</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="text-muted-foreground">{t("phone")}</dt>
                  <dd><a href={`tel:${fund.phone.replace(/\s/g, "")}`} className="font-medium text-primary hover:underline">{fund.phone}</a></dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t("website")}</dt>
                  <dd><a href={fund.website} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">{fund.website}</a></dd>
                </div>
                {fund.description ? (
                  <div>
                    <dt className="text-muted-foreground">{t("extraInfo")}</dt>
                    <dd className="text-muted-foreground">{fund.description}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          ))}
          <div className="rounded-md border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
            {t("partnerTitle")}
          </div>
        </div>
      </Container>
    </div>
  );
}
