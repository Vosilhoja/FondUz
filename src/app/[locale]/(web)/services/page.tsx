import { Container } from "@/src/components/ui/Container";
import { SERVICE_SLUGS, type ServiceSlug } from "@/src/data/service-slugs";
import { Link } from "@/src/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

type ServiceBlock = { title: string; excerpt: string };

type ServicesMessages = {
  title: string;
  sub: string;
  openDetail: string;
} & Record<ServiceSlug, ServiceBlock>;

export default async function ServicesIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const sp = messages.ServicesPage as ServicesMessages;

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-12 md:py-20">
        <Container>
          <h1 className="font-serif text-3xl text-foreground md:text-4xl">{sp.title}</h1>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{sp.sub}</p>
        </Container>
      </section>

      <Container className="mt-10 md:mt-14">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_SLUGS.map((slug) => {
            const block = sp[slug];
            return (
              <li key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="flex h-full flex-col rounded-md border border-border bg-card p-5 transition-colors hover:bg-muted/50 md:p-6"
                >
                  <span className="font-serif text-lg text-foreground">{block.title}</span>
                  <span className="mt-2 text-sm text-muted-foreground">{block.excerpt}</span>
                  <span className="mt-4 text-xs font-semibold text-primary">{sp.openDetail} →</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
