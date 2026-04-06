import { Container } from "@/src/components/ui/Container";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-12 md:py-20">
        <Container>
          <h1 className="max-w-3xl font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{t("title")}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{t("sub")}</p>
        </Container>
      </section>

      <Container className="mt-12 md:mt-16">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{t("historyBadge")}</p>
            <h2 className="font-serif text-2xl text-foreground md:text-3xl">{t("historyTitle")}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{t("historyDesc")}</p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="font-serif text-3xl text-foreground">{t("doctorsCount")}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("doctorsLabel")}
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-foreground">{t("patientsCount")}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("patientsLabel")}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-border bg-card p-6 md:p-8">
            <p className="font-serif text-sm leading-relaxed text-foreground md:text-base">&ldquo;{t("quote")}&rdquo;</p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">FondUz</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
