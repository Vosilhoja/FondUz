import { Container } from "@/src/components/ui/Container";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactsHero } from "./components/ContactsHero";
import { ContactsInfo } from "./components/ContactsInfo";
import { ContactForm } from "./components/ContactForm";
import { siteConfig } from "@/src/config/site";

type Props = { params: Promise<{ locale: string }> };

export default async function ContactsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contacts");
  const tForm = await getTranslations("forms");
  const tError = await getTranslations("errors");

  return (
    <Container className="py-12 md:py-16">
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="mx-auto w-full">
          <ContactsHero title={t("title")} subtitle={t("subtitle")} />
          <ContactsInfo
            phoneLabel={t("phoneLabel")}
            phoneValue={siteConfig.contacts.phone}
            emailLabel={t("emailLabel")}
            emailValue={siteConfig.contacts.email}
            addressLabel={t("addressLabel")}
            addressValue={siteConfig.contacts.address}
          />
        </div>

        <div className="w-full">
          <ContactForm
            nameLabel={tForm("name")}
            emailLabel={tForm("email")}
            messageLabel={tForm("message")}
            submitLabel={tForm("submit")}
            successMessage={tForm("success")}
            errorMessages={{
              nameRequired: tError("nameRequired"),
              emailInvalid: tError("emailInvalid"),
              messageMin: tError("messageMin"),
            }}
          />
        </div>
      </div>
    </Container>
  );
}

