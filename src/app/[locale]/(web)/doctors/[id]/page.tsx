import { Container } from "@/src/components/ui/Container";
import { doctors } from "@/src/features/doctors/data/doctors";
import { Link } from "@/src/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function DoctorDetailsPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("doctors");
  const tc = await getTranslations("common");
  const doctor = doctors.find((item) => item.id === id);
  if (!doctor) notFound();

  return (
    <Container className="py-12 md:py-16">
      <Link href="/doctors" className="text-sm text-muted-foreground hover:text-foreground">
        ← {tc("backToList")}
      </Link>
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-[320px_1fr]">
        <div className="relative h-[350px] overflow-hidden rounded-md border border-border bg-card">
          <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
        </div>
        <div>
          <h1 className="font-serif text-3xl text-foreground">{doctor.name}</h1>
          <p className="mt-2 text-muted-foreground">{doctor.profession}</p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>
          <div className="mt-6 space-y-2 text-sm">
            <p>
              {t("email")}: <a href={`mailto:${doctor.email}`} className="text-primary hover:underline">{doctor.email}</a>
            </p>
            <p>
              {t("phone")}: <a href={`tel:${doctor.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">{doctor.phone}</a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
