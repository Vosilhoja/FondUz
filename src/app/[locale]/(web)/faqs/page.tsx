import { faqs } from "@/src/features/faqs/data/faqs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FaqsHero } from "./components/FaqsHero";
import { FaqsList } from "./components/FaqsList";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function FAQsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("faqs");

  return (
    <div className="pb-16 md:pb-24">
      <FaqsHero title={t("title")} subtitle={t("subtitle")} />
      <FaqsList items={faqs} />
    </div>
  );
}

