<<<<<<< HEAD
"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/src/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const t = useTranslations("FAQPage");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Get items from translations
  // Note: next-intl doesn't support arrays directly via t("items"), 
  // but we can iterate if we structured them, or just use a fixed number of items.
  // For simplicity since I know there are 3 items:
  const faqs = [
    { q: t("items.0.q"), a: t("items.0.a") },
    { q: t("items.1.q"), a: t("items.1.a") },
    { q: t("items.2.q"), a: t("items.2.a") },
  ];

  return (
    <Container className="py-24 pb-48">
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-serif text-primary-green mb-8">{t("title")}</h1>
        <p className="text-lg text-primary-green/50 leading-relaxed italic-not-needed px-10">{t("sub")}</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="group overflow-hidden rounded-[2rem] border border-sage/10 bg-white transition-all shadow-sm">
             <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 md:p-10 text-left focus:outline-none"
             >
                <h3 className={`text-xl md:text-2xl font-serif transition-colors duration-300 ${activeIndex === i ? 'text-sage' : 'text-primary-green'}`}>{faq.q}</h3>
                <motion.div 
                  animate={{ rotate: activeIndex === i ? 45 : 0 }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${activeIndex === i ? 'bg-primary-green text-cream' : 'bg-sage/5 text-primary-green'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </motion.div>
             </button>
             <AnimatePresence>
               {activeIndex === i && (
                 <motion.div 
                   initial={{ height: 0, opacity: 0 }}
                   animate={{ height: "auto", opacity: 1 }}
                   exit={{ height: 0, opacity: 0 }}
                   className="overflow-hidden"
                 >
                   <div className="px-8 md:px-10 pb-10 text-primary-green/50 leading-relaxed text-lg border-t border-sage/5 pt-8">
                     {faq.a}
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        ))}
      </div>
    </Container>
=======
export default async function FaqPage() {
  return (
    <>
      FaqPage
    </>
>>>>>>> 0442d2e69fe3c52979a9449dd1298340240bc1cc
  );
}
