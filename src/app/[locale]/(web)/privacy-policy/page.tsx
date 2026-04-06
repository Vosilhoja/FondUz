"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/src/components/ui/Container";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPage");

  return (
    <div className="pb-24">
      <section className="bg-[#f8faf3] py-24">
        <Container>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-primary-green mb-8">{t("title")}</h1>
            <p className="text-xl text-primary-green/50 leading-relaxed italic-not-needed">
              {t("sub")}
            </p>
          </motion.div>
        </Container>
      </section>

      <Container className="mt-24">
        <div className="max-w-4xl space-y-16">
          <section className="scroll-mt-32">
            <h2 className="text-2xl font-serif text-primary-green mb-6">{t("section1Title")}</h2>
            <p className="text-primary-green/60 leading-relaxed text-lg italic-not-needed">
              {t("section1Desc")}
            </p>
          </section>

          <section className="scroll-mt-32 p-10 bg-sage/5 rounded-2xl border border-sage/10">
            <h2 className="text-2xl font-serif text-primary-green mb-6">{t("section2Title")}</h2>
            <p className="text-primary-green/60 leading-relaxed text-lg italic-not-needed mb-6">{t("section2Desc")}</p>
          </section>

          <section className="scroll-mt-32">
            <h2 className="text-2xl font-serif text-primary-green mb-6">{t("section3Title")}</h2>
            <p className="text-primary-green/60 leading-relaxed text-lg italic-not-needed">
              {t("section3Desc")}
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
