"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { motion } from "framer-motion";

export default function LoginPage() {
  const t = useTranslations("Auth");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
      valid = false;
    }
    if (formData.password.length < 6) {
      newErrors.password = "Short password";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login Data Submitted:", formData);
      alert("Check console for data!");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 bg-cream/10">
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto bg-white rounded-2xl p-10 shadow-2xl shadow-primary-green/5 border border-sage/10"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif text-primary-green mb-4">{t("login")}</h1>
            <p className="text-primary-green/40 text-sm italic-not-needed px-10">{t("subTitle")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-primary-green/30 uppercase tracking-[0.2em] ml-1">{t("email")}</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full h-14 rounded-2xl bg-cream/20 border ${errors.email ? 'border-red-400' : 'border-sage/20'} px-6 text-sm text-primary-green focus:outline-none focus:border-primary-green transition-all`}
                placeholder="example@mail.com"
              />
              {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold ml-1">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-primary-green/30 uppercase tracking-[0.2em] ml-1">{t("password")}</label>
              <input 
                type="password" 
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={`w-full h-14 rounded-2xl bg-cream/20 border ${errors.password ? 'border-red-400' : 'border-sage/20'} px-6 text-sm text-primary-green focus:outline-none focus:border-primary-green transition-all`}
                placeholder="••••••"
              />
              {errors.password && <p className="text-red-500 text-[10px] uppercase font-bold ml-1">{errors.password}</p>}
            </div>

            <div className="pt-4">
              <Button size="lg" className="w-full h-14 rounded-2xl shadow-lg shadow-primary-green/10 text-sm font-bold uppercase tracking-widest transition-transform active:scale-95">
                {t("submit")}
              </Button>
            </div>
          </form>

          <div className="mt-10 text-center pt-8 border-t border-sage/5">
            <p className="text-primary-green/40 text-sm">
              {t("noAccount")} <span className="text-primary-green font-bold cursor-pointer hover:underline underline-offset-4 decoration-primary-green/20">{t("register")}</span>
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
