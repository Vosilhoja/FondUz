"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { motion } from "framer-motion";

export default function PricesPage() {
  const t = useTranslations("PricesPage");

  return (
    <div className="pb-24">
      <section className="bg-[#f8faf3] py-24">
        <Container className="text-center">
           <h1 className="text-4xl md:text-6xl font-serif text-primary-green mb-8">{t("title")}</h1>
           <p className="text-lg text-primary-green/50 max-w-2xl mx-auto italic-not-needed px-10">{t("sub")}</p>
        </Container>
      </section>

      <Container className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {[
            { title: "BASIC", price: "9", features: ["1 checkup", "Base analysis", "E-card"], color: "bg-white" },
            { title: "POPULAR", price: "29", features: ["4 checkups", "All analysis", "Personal curator"], color: "bg-primary-green", premium: true },
            { title: "ANNUAL", price: "199", features: ["Unlimited", "VIP service", "Family discount"], color: "bg-white" }
          ].map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl ${plan.color} p-12 flex flex-col items-center text-center shadow-2xl shadow-primary-green/5 border border-sage/10 relative overflow-hidden group`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-10 ${plan.premium ? 'text-cream/40' : 'text-primary-green/20'}`}>{plan.title}</span>
              <div className="mb-12">
                <span className={`text-6xl font-serif ${plan.premium ? 'text-cream' : 'text-primary-green'}`}>${plan.price}</span>
                <span className={`${plan.premium ? 'text-cream/30' : 'text-primary-green/30'} text-lg`}>{t("period")}</span>
              </div>
              <ul className={`space-y-6 text-sm ${plan.premium ? 'text-cream/70' : 'text-primary-green/60'} w-full text-left mb-16`}>
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-lg ${plan.premium ? 'bg-white/10' : 'bg-sage/10'} flex items-center justify-center shrink-0`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={plan.premium ? 'text-sage' : 'text-primary-green'}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              <Button className={`mt-auto w-full h-14 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors ${plan.premium ? 'bg-sage text-primary-green hover:bg-cream' : 'bg-primary-green text-cream hover:bg-sage hover:text-primary-green'}`}>{t("btnSelect")}</Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
