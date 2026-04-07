import Image from "next/image";
import { Link } from "@/src/i18n/routing";
import { Container } from "@/src/components/ui/Container";
import { Pagination } from "@/src/components/ui/Pagination";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { doctors } from "@/src/features/doctors/data/doctors";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
};

const PAGE_SIZE = 9;

export default async function DoctorsPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { page } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("doctors");
  const currentPage = Math.max(1, Number(page) || 1);
  const totalPages = Math.ceil(doctors.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageDoctors = doctors.slice(start, start + PAGE_SIZE);

  return (
    <div className="pb-16 md:pb-24">
      <section className="border-b border-border bg-muted/40 py-12 md:py-16">
        <Container>
          <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        </Container>
      </section>

      <Container className="mt-10 md:mt-14">
        <div className="grid grid-cols-1 gap-15 sm:grid-cols-2 xl:grid-cols-3">
          {pageDoctors.map((doc) => (
            <article
              key={doc.id}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <Link href={`/doctors/${doc.id}`}>
              <div className="relative h-[250px] md:h-[250px] w-full">
                <Image src={doc.image} alt={doc.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              </Link>
              <div className="flex flex-col p-5 gap-3 items-start">
                <h3 className="font-serif text-2xl text-foreground">{doc.name}</h3>
                <p className="mt-1 text-lg text-muted-foreground">{doc.profession}</p>
                <Link href={`/doctors/${doc.id}`} className="mt-4 inline-flex rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
                  {t("open")}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/doctors" />
      </Container>
    </div>
  );
}
