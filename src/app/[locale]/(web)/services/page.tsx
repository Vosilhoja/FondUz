import { professions } from "@/src/features/services/data/services";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ServicesHero } from "./components/ServicesHero";
import { ProfessionList } from "./components/ProfessionList";

type Props = { params: Promise<{ locale: string }> };

export default async function ServicesIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <div className="pb-16 md:pb-24">
      <ServicesHero title={t("title")} subtitle={t("subtitle")} />
      <ProfessionList
        professions={professions}
        fundsCountText={(count) => t("fundsCount", { count })}
        openText={t("open")}
      />
    </div>
  );
}

