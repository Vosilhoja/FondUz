import { getTranslations, setRequestLocale } from "next-intl/server";
import { ActivitySection } from "./_home/components/ActivitySection";
import { FaqPreviewSection } from "./_home/components/FaqPreviewSection";
import { HeroSection } from "./_home/components/HeroSection";
import { NewsPreviewSection } from "./_home/components/NewsPreviewSection";
import { getHomePreviewFaqs, getHomePreviewNews } from "./_home/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tc = await getTranslations("common");

  const newsCards = getHomePreviewNews();
  const faqItems = getHomePreviewFaqs();

  return (
    <div>
      <HeroSection title={t("heroTitle")} subtitle={t("heroSubtitle")} actionLabel={t("heroCta")} />
      <ActivitySection title={t("activityTitle")} text={t("activityText")} />
      <NewsPreviewSection
        title={t("newsTitle")}
        subtitle={t("newsSubtitle")}
        cards={newsCards}
        readMore={tc("view")}
        viewAll={t("viewAllNews")}
      />
      <FaqPreviewSection title={t("faqsTitle")} subtitle={t("faqsSubtitle")} items={faqItems} viewAll={t("viewAllFaqs")} />
    </div>
  );
}
