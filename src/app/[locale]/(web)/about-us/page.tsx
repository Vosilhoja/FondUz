<<<<<<< HEAD
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/src/components/ui/Container";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  const t = useTranslations("AboutPage");

  return (
    <div className="pb-24">
      <section className="bg-[#f8faf3] py-24 md:py-32">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold text-sage uppercase tracking-[0.3em]">
              <span className="w-8 h-[1px] bg-sage" />
              {t("historyBadge")}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-primary-green leading-tight">{t("historyTitle")}</h2>
            <p className="text-primary-green/50 text-lg leading-relaxed italic-not-needed">
              {t("historyDesc")}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-4xl font-serif text-primary-green mb-2">{t("doctorsCount")}</div>
                <div className="text-[10px] font-bold text-primary-green/30 uppercase tracking-widest">{t("doctorsLabel")}</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-primary-green mb-2">{t("patientsCount")}</div>
                <div className="text-[10px] font-bold text-primary-green/30 uppercase tracking-widest">{t("patientsLabel")}</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[4/5] rounded-2xl bg-sage/10 overflow-hidden border border-sage/20 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary-green/20 to-transparent mix-blend-multiply opacity-50" />
               <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl">
                  <p className="text-sm font-serif text-primary-green italic">"{t("quote")}"</p>
                  <div className="mt-4 text-[10px] font-bold text-primary-green/40 uppercase tracking-widest">— FondUz</div>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
=======
export default async function AboutUsPage() {
  return (
    <>
      AboutUsPage
    </>
>>>>>>> 0442d2e69fe3c52979a9449dd1298340240bc1cc
  );
}
