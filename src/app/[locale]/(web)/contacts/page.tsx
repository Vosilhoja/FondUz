<<<<<<< HEAD
"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { motion } from "framer-motion";

export default function ContactsPage() {
  const t = useTranslations("ContactsPage");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (formData.name.trim().length < 2) {
      newErrors.name = "Short name";
      valid = false;
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
      valid = false;
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "Short message";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Contact Form Submitted:", formData);
      alert("Check console for data!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="space-y-8"
           >
              <h1 className="text-4xl md:text-6xl font-serif text-primary-green">{t("title")}</h1>
              <p className="text-lg text-primary-green/50 leading-relaxed italic-not-needed max-w-md">{t("sub")}</p>
              
              <div className="space-y-8 pt-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center shrink-0 text-primary-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-primary-green text-lg mb-1">{t("phoneLabel")}</h4>
                    <p className="text-primary-green/50">+998 71 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center shrink-0 text-primary-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-primary-green text-lg mb-1">{t("emailLabel")}</h4>
                    <p className="text-primary-green/50">info@founduz.uz</p>
                  </div>
                </div>
              </div>
           </motion.div>
        </div>

        <div>
           <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-10 border border-sage/10 shadow-2xl shadow-primary-green/5 space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-primary-green/30 uppercase tracking-[0.2em] ml-1">{t("formName")}</label>
                 <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full h-14 rounded-2xl bg-[#f8faf3]/50 border ${errors.name ? 'border-red-400' : 'border-sage/10'} px-6 text-sm text-primary-green focus:outline-none focus:border-primary-green transition-all`}
                 />
                 {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold ml-1">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-primary-green/30 uppercase tracking-[0.2em] ml-1">{t("formEmail")}</label>
                 <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full h-14 rounded-2xl bg-[#f8faf3]/50 border ${errors.email ? 'border-red-400' : 'border-sage/10'} px-6 text-sm text-primary-green focus:outline-none focus:border-primary-green transition-all`}
                 />
                 {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold ml-1">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-primary-green/30 uppercase tracking-[0.2em] ml-1">{t("formMessage")}</label>
                 <textarea 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full rounded-2xl bg-[#f8faf3]/50 border ${errors.message ? 'border-red-400' : 'border-sage/10'} p-6 text-sm text-primary-green focus:outline-none focus:border-primary-green transition-all resize-none`}
                 />
                 {errors.message && <p className="text-red-500 text-[10px] uppercase font-bold ml-1">{errors.message}</p>}
              </div>
              <Button size="lg" className="w-full h-16 rounded-2xl shadow-xl shadow-primary-green/10 font-bold uppercase tracking-widest text-sm">{t("formSubmit")}</Button>
           </form>
        </div>
      </div>
    </Container>
=======
export default async function ContactsPage() {
  return (
    <>
      ContactsPage
    </>
>>>>>>> 0442d2e69fe3c52979a9449dd1298340240bc1cc
  );
}
