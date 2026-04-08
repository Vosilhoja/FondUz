import { Container } from "@/src/components/ui/Container";
import { getTranslations } from "next-intl/server";
import { routing } from "@/src/i18n/routing";

export default async function NotFoundPage() {
  const t = await getTranslations({ locale: routing.defaultLocale, namespace: "notFound" });

  return (
    <html lang={routing.defaultLocale}>
      <body className="flex min-h-screen flex-col items-center justify-center text-center antialiased bg-background text-foreground">
        <Container className="flex flex-col items-center justify-center py-16">
          <h1 className="font-serif text-7xl font-bold text-foreground md:text-9xl tracking-tight">404</h1>
          <h2 className="mt-6 font-serif text-2xl text-foreground md:text-3xl">{t("title")}</h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">{t("description")}</p>
          
          <a
            href={`/${routing.defaultLocale}/`}
            className="mt-8 rounded-2xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            {t("backHome")}
          </a>
        </Container>
      </body>
    </html>
  );
}

