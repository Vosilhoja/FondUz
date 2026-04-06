import { Container } from "@/src/components/ui/Container";
import { SERVICE_SLUGS, isServiceSlug } from "@/src/data/service-slugs";
import { Link } from "@/src/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

type DetailBlock = {
  title: string;
  excerpt: string;
  body: string;
  phone: string;
  website: string;
};

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isServiceSlug(slug)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();
  const sp = messages.ServicesPage as Record<string, unknown>;
  const block = sp[slug] as DetailBlock | undefined;
  if (!block?.title) notFound();

  const back = typeof sp.back === "string" ? sp.back : "";
  const partnerTitle = typeof sp.partnerTitle === "string" ? sp.partnerTitle : "";
  const phoneLabel = typeof sp.phone === "string" ? sp.phone : "";
  const websiteLabel = typeof sp.website === "string" ? sp.website : "";
  const visitSite = typeof sp.visitSite === "string" ? sp.visitSite : "";

  let websiteHref = block.website;
  try {
    if (websiteHref && !websiteHref.startsWith("http")) {
      websiteHref = `https://${websiteHref}`;
    }
  } catch {
    websiteHref = "#";
  }

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-10 md:py-14">
        <Container>
          <Link
            href="/services"
            className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            ← {back}
          </Link>
          <h1 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">{block.title}</h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{block.excerpt}</p>
        </Container>
      </section>

      <Container className="mt-10 md:mt-12">
        <div className="max-w-3xl space-y-8">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{block.body}</p>

          <div className="rounded-md border border-border bg-card p-5 md:p-6">
            <h2 className="text-sm font-semibold text-foreground">{partnerTitle}</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted-foreground">{phoneLabel}</dt>
                <dd>
                  <a href={`tel:${block.phone.replace(/\s/g, "")}`} className="font-medium text-primary hover:underline">
                    {block.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">{websiteLabel}</dt>
                <dd>
                  <a
                    href={websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    {visitSite}
                  </a>
                  <p className="mt-1 break-all text-xs text-muted-foreground">{block.website}</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </div>
  );
}
