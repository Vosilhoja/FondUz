import { Container } from "@/src/components/ui/Container";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-12 md:py-20">
        <Container>
          <h1 className="max-w-3xl font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{t("title")}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{t("subtitle")}</p>
        </Container>
      </section>

      <Container className="mt-12 md:mt-16">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
          <p className="text-sm leading-7 text-muted-foreground md:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non
            proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id.
          </p>
        </div>
      </Container>
    </div>
  );
}
