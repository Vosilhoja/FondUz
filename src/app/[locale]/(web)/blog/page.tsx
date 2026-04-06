"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { motion } from "framer-motion";

export default function BlogPage() {
  const t = useTranslations("BlogPage");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      console.log("Blog Newsletter Signup:", email);
      alert("Check console for data!");
      setEmail("");
    } else {
      alert("Invalid email");
    }
  };

  const articles = [
    { title: "Article 1", date: "15 Mar, 2024", category: "Health", icon: "🌱" },
    { title: "Article 2", date: "10 Mar, 2024", category: "Nutrition", icon: "🍎" },
    { title: "Article 3", date: "05 Mar, 2024", category: "Tips", icon: "🏥" },
  ];

  return (
    <div className="pb-24">
      <section className="bg-[#f8faf3] py-24">
        <Container>
           <h1 className="text-4xl md:text-6xl font-serif text-primary-green mb-8">{t("title")}</h1>
           <p className="text-lg text-primary-green/50 max-w-2xl italic-not-needed px-4 md:px-0">{t("sub")}</p>
        </Container>
      </section>

      <Container className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-sage/10 hover:shadow-xl hover:shadow-primary-green/5 transition-all group"
            >
              <div className="text-4xl mb-6">{article.icon}</div>
              <div className="flex gap-3 mb-4">
                <span className="text-[10px] font-bold text-sage uppercase tracking-widest">{article.category}</span>
                <span className="text-[10px] font-bold text-primary-green/20 uppercase tracking-widest">{article.date}</span>
              </div>
              <h3 className="text-xl font-serif text-primary-green mb-6 leading-snug group-hover:text-sage transition-colors">{article.title}</h3>
              <button className="text-[11px] font-bold text-primary-green uppercase tracking-[0.2em] border-b border-sage/30 pb-1 hover:border-primary-green transition-all">{t("readMore")}</button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-primary-green rounded-2xl p-12 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-serif text-cream mb-4">{t("newsletterTitle")}</h2>
              <p className="text-cream/40 mb-10 max-w-md mx-auto italic-not-needed">{t("newsletterSub")}</p>
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-3">
                 <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="flex-1 h-14 rounded-xl bg-white/10 border border-white/20 px-6 text-cream text-sm focus:outline-none focus:border-sage transition-all"
                 />
                 <Button className="h-14 px-8 rounded-xl bg-sage text-primary-green font-bold uppercase tracking-widest text-xs">OK</Button>
              </form>
           </div>
        </div>
      </Container>
    </div>
  );
}
