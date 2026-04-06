<<<<<<< HEAD
"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { motion } from "framer-motion";

export default function DoctorsPage() {
  const t = useTranslations("DoctorsPage");
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Doctor Search Query:", search);
    alert(`Doctor Search: "${search}". Check console.`);
  };

  const doctors = [
    { name: "Dr. Alexander Karimov", role: "Cardiologist", exp: "15 years", icon: "👨‍⚕️" },
    { name: "Dr. Elena Smirnova", role: "Pediatrician", exp: "10 years", icon: "👩‍⚕️" },
    { name: "Dr. Ivan Petrov", role: "Neurologist", exp: "12 years", icon: "👨‍⚕️" },
    { name: "Dr. Maria Ivanova", role: "Therapist", exp: "8 years", icon: "👩‍⚕️" },
    { name: "Dr. Sergey Popov", role: "Surgeon", exp: "20 years", icon: "👨‍⚕️" },
    { name: "Dr. Anna Kuznetsova", role: "Dermatologist", exp: "7 years", icon: "👩‍⚕️" },
  ];

  const filteredDoctors = doctors.filter(doc => 
    doc.name.toLowerCase().includes(search.toLowerCase()) || 
    doc.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-24">
      <section className="bg-[#f8faf3] py-24">
        <Container className="text-center">
           <h1 className="text-4xl md:text-6xl font-serif text-primary-green mb-8">{t("title")}</h1>
           <p className="text-lg text-primary-green/50 max-w-2xl mx-auto italic-not-needed px-10">{t("sub")}</p>
           
           <form onSubmit={handleSearch} className="mt-12 max-w-xl mx-auto flex gap-3">
              <input 
                 type="text" 
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 placeholder={t("searchPlaceholder")}
                 className="flex-1 h-14 rounded-2xl bg-white border border-sage/10 px-6 text-sm text-primary-green focus:outline-none focus:border-primary-green transition-all shadow-sm"
              />
              <Button className="h-14 px-8 rounded-2xl bg-primary-green text-cream shadow-xl shadow-primary-green/10">{t("btnSearch")}</Button>
           </form>
        </Container>
      </section>

      <Container className="mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-10 border border-sage/10 hover:shadow-2xl hover:shadow-primary-green/5 transition-all text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-sage/10 mx-auto flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform">
                {doc.icon}
              </div>
              <h3 className="text-xl font-serif text-primary-green mb-2">{doc.name}</h3>
              <p className="text-sm font-bold text-sage uppercase tracking-[0.2em] mb-4">{doc.role}</p>
              <div className="flex items-center justify-center gap-4 py-4 border-y border-sage/5 my-6">
                <div className="text-[10px] font-bold text-primary-green/30 uppercase tracking-widest">{t("experience")} <span className="text-primary-green">{doc.exp}</span></div>
              </div>
              <Button variant="outline" className="w-full rounded-xl border-sage/20 hover:bg-sage/5 text-xs font-bold uppercase tracking-widest">{t("btnBook")}</Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
=======
export default async function DoctorsPage() {
  return (
    <>  
      DoctorsPage
    </>
>>>>>>> 0442d2e69fe3c52979a9449dd1298340240bc1cc
  );
}
