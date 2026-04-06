import { Container } from "@/src/components/ui/Container";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PrivacyPage");

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-12 md:py-16">
        <Container>
          <h1 className="max-w-3xl font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{t("title")}</h1>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{t("sub")}</p>
        </Container>
      </section>

      <Container className="mt-10 md:mt-14">
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="font-serif text-xl text-foreground">{t("section1Title")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{t("section1Desc")}</p>
          </section>
          <section className="rounded-md border border-border bg-card p-6 md:p-8">
            <h2 className="font-serif text-xl text-foreground">{t("section2Title")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{t("section2Desc")}</p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-foreground">{t("section3Title")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{t("section3Desc")}</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
