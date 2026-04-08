import { getTranslations, setRequestLocale } from "next-intl/server";
import { ActivitySection } from "./components/ActivitySection";
import { FaqPreviewSection } from "./components/FaqPreviewSection";
import { HeroSection } from "./components/HeroSection";
import { NewsPreviewSection } from "./components/NewsPreviewSection";
import { getHomePreviewFaqs, getHomePreviewNews } from "./utils/utils";


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
