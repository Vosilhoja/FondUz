"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      console.log("Newsletter Subscription:", email);
      alert("Check console for subscription data!");
      setEmail("");
    } else {
      alert("Please enter a valid email");
    }
  };

  return (
    <div className="flex flex-col gap-12 md:gap-24 pb-24 bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-32 pb-24 md:pb-40 bg-[#f8faf3]">
        <Container className="text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-lg border border-sage/20 text-[10px] font-bold text-primary-green uppercase tracking-[0.2em] mb-10 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sage" />
            {t("heroBadge")}
          </motion.div>
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-serif text-primary-green leading-[1.15]">
            {t("heroTitle")}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg text-primary-green/50 leading-relaxed px-4 italic-not-needed">
            {t("heroSub")}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-2xl h-16 px-10 text-sm font-bold uppercase tracking-widest shadow-xl shadow-primary-green/10">
              {t("joinNow")}
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 text-sm font-bold uppercase tracking-widest bg-white/50 backdrop-blur-sm border-sage/30 rounded-2xl">
              {t("learnMore")}
            </Button>
          </div>
        </Container>
        
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-sage/5 to-transparent blur-3xl opacity-50" />
      </section>

      {/* Pricing / Plans */}
      <Container>
        <div className="text-center mb-20">
           <h2 className="text-3xl md:text-5xl font-serif text-primary-green mb-4">{t("pricingTitle")}</h2>
           <p className="text-primary-green/40 text-lg italic-not-needed">{t("pricingSub")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "BAZAVIY", price: "14", color: "bg-white", textColor: "text-primary-green" },
            { title: "O'RTACHA", price: "29", color: "bg-primary-green", textColor: "text-cream", premium: true },
            { title: "PREMIUM", price: "139", color: "bg-white", textColor: "text-primary-green" }
          ].map((plan, i) => (
            <div key={i} className={`rounded-2xl ${plan.color} p-10 flex flex-col items-center text-center shadow-2xl shadow-primary-green/5 border border-sage/10 transition-transform hover:-translate-y-1 duration-500`}>
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-8 ${plan.premium ? 'text-cream/40' : 'text-primary-green/30'}`}>{plan.title}</span>
              <div className="flex items-baseline gap-1">
                 <span className={`text-4xl font-serif ${plan.textColor}`}>${plan.price}</span>
                 <span className={`${plan.premium ? 'text-cream/30' : 'text-primary-green/20'} text-xs lowercase tracking-wider`}>/мес</span>
              </div>
              <Button variant={plan.premium ? "outline" : "outline"} className={`mt-10 w-full rounded-xl h-12 text-xs font-bold uppercase tracking-widest ${plan.premium ? 'bg-sage text-primary-green border-none' : 'border-sage/30'}`}>OK</Button>
              <ul className={`mt-10 space-y-4 text-sm ${plan.premium ? 'text-cream/50' : 'text-primary-green/40'} w-full text-left`}>
                <li className="flex items-center gap-3">✓ 24/7 Support</li>
                <li className="flex items-center gap-3">✓ Online Consulting</li>
                <li className="flex items-center gap-3">✓ Modern Methods</li>
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Why Choose Us */}
      <section className="bg-primary-green py-32 text-cream">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif leading-tight">{t("whyTitle")}</h2>
              <p className="mt-6 text-cream/40 text-lg leading-relaxed italic-not-needed">{t("whySub")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "🕒", desc: "Digital Health" },
              { title: "📋", desc: "Personal Approach" },
              { title: "👨‍⚕️", desc: "Qualified Doctors" },
              { title: "🧠", desc: "Modern Methods" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-6">{item.title}</div>
                <h4 className="text-xl font-serif mb-3 leading-snug">{item.desc}</h4>
                <Link href="#" className="inline-flex items-center text-sage font-bold uppercase tracking-[0.2em] text-[9px] hover:underline">{t("learnMore")} →</Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
