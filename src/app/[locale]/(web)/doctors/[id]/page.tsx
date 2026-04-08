import { Container } from "@/src/components/ui/Container";
import { doctors } from "@/src/features/doctors/data/doctors";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { DoctorInfo } from "./components/DoctorInfo";

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
      <DoctorInfo
        doctor={doctor}
        backText={tc("backToList")}
        emailText={t("email")}
        phoneText={t("phone")}
      />
    </Container>
  );
}

