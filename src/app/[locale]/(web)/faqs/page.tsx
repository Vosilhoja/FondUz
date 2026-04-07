import { Container } from "@/src/components/ui/Container";
import { Accordion } from "@/src/components/ui/Accordion";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { faqs } from "@/src/features/faqs/data/faqs";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function FAQsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("faqs");

  return (
    <Container className="py-12 md:py-16">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto max-w-4xl">
        <Accordion items={faqs} />
      </div>
    </Container>
  );
}
