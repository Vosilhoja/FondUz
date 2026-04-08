import { Container } from "@/src/components/ui/Container";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BlogHero } from "./components/BlogHero";
import { BlogList } from "./components/BlogList";
import { NewsletterSignup } from "./components/NewsletterSignup";

type Props = { params: Promise<{ locale: string }> };

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("BlogPage");
  
  const articles = t.raw("articles") as { title: string; date: string; category: string }[];

  return (
    <div className="pb-16 md:pb-24">
      <BlogHero title={t("title")} subtitle={t("sub")} />

      <Container className="mt-10 md:mt-14">
        <BlogList articles={articles} readMoreText={t("readMore")} />

        <NewsletterSignup
          title={t("newsletterTitle")}
          subtitle={t("newsletterSub")}
          placeholderText={t("newsletterEmailPh")}
          buttonText={t("newsletterCta")}
        />
      </Container>
    </div>
  );
}

