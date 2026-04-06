<<<<<<< HEAD
"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Container } from "@/src/components/ui/Container";
import { motion } from "framer-motion";

function SearchContent() {
  const t = useTranslations("SearchPage");
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const doctors = [
    { name: "Александр Каримов", role: "Кардиолог", icon: "👨‍⚕️" },
    { name: "Елена Смирнова", role: "Педиатр", icon: "👩‍⚕️" },
    { name: "Иван Петров", role: "Невролог", icon: "👨‍⚕️" },
  ];

  const services = [
    { name: "Therapist Consultation", category: "Services" },
    { name: "ECG Diagnostics", category: "Diagnostics" },
    { name: "Blood Test", category: "Laboratory" },
  ];

  const filteredDoctors = doctors.filter(d => 
    d.name.toLowerCase().includes(query) || d.role.toLowerCase().includes(query)
  );

  const filteredServices = services.filter(s => 
    s.name.toLowerCase().includes(query) || s.category.toLowerCase().includes(query)
  );

  return (
    <div className="pb-24">
      <section className="bg-[#f8faf3] py-24">
        <Container>
           <h1 className="text-4xl md:text-6xl font-serif text-primary-green mb-4">{t("title")}</h1>
           <p className="text-lg text-primary-green/50 italic-not-needed">
             {t("queryLabel")} <span className="text-primary-green font-bold">"{query}"</span>
           </p>
        </Container>
      </section>

      <Container className="mt-20">
        <div className="space-y-20">
          {/* Doctors Section */}
          <section>
            <div className="flex items-center gap-4 mb-10">
               <h2 className="text-2xl font-serif text-primary-green">{t("doctorsSection")}</h2>
               <div className="h-[1px] flex-1 bg-sage/20" />
               <span className="text-xs font-bold text-sage uppercase tracking-widest">{filteredDoctors.length}</span>
            </div>
            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredDoctors.map((doc, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-white rounded-2xl border border-sage/10 flex items-center gap-4 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-2xl">{doc.icon}</div>
                    <div>
                      <h4 className="font-serif text-primary-green leading-none mb-1">{doc.name}</h4>
                      <p className="text-[10px] font-bold text-sage uppercase tracking-widest">{doc.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-primary-green/30 italic-not-needed px-4">{t("noResults")}</p>
            )}
          </section>

          {/* Services Section */}
          <section>
            <div className="flex items-center gap-4 mb-10">
               <h2 className="text-2xl font-serif text-primary-green">{t("servicesSection")}</h2>
               <div className="h-[1px] flex-1 bg-sage/20" />
               <span className="text-xs font-bold text-sage uppercase tracking-widest">{filteredServices.length}</span>
            </div>
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredServices.map((service, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-white rounded-2xl border border-sage/10 flex justify-between items-center group hover:bg-[#f8faf3] transition-colors"
                  >
                    <div>
                      <p className="text-[9px] font-bold text-sage uppercase tracking-[0.2em] mb-1">{service.category}</p>
                      <h4 className="text-lg font-serif text-primary-green">{service.name}</h4>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-green"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-primary-green/30 italic-not-needed px-4">{t("noResults")}</p>
            )}
          </section>
        </div>
      </Container>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
=======
import { getTranslations } from "next-intl/server";
import SearchInput from "@/src/components/SearchInput";
import Link from "next/link";
import { Suspense } from "react";

type SearchPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ params, searchParams }: SearchPageProps) {
  const { locale } = await params;
  const { q: query } = await searchParams;
  const t = await getTranslations("SearchPage");

  // В реальном приложении здесь будет запрос к API или БД
  // Для демонстрации используем заглушку
  const mockResults = query ? [
    { id: 1, title: "Как записаться к врачу", description: "Инструкция по онлайн записи через портал...", link: "/blog/how-to-book" },
    { id: 2, title: "Наши клиники в Ташкенте", description: "Список доступных филиалов и контактная информация...", link: "/contacts" },
    { id: 3, title: "Услуги кардиолога", description: "Комплексная диагностика сердечно-сосудистых заболеваний...", link: "/doctors" },
  ].filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.description.toLowerCase().includes(query.toLowerCase())
  ) : [];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center italic-not-needed">
          {t("title")}
        </h1>

        <Suspense fallback={<div className="h-20 w-full bg-slate-200 animate-pulse rounded-2xl mb-12" />}>
          <SearchInput />
        </Suspense>

        <section className="mt-8">
          {query ? (
            <>
              <p className="text-slate-600 mb-6 text-lg">
                {t("resultsFound", { count: mockResults.length })}
              </p>

              {mockResults.length > 0 ? (
                <div className="space-y-6">
                  {mockResults.map((result) => (
                    <Link 
                      key={result.id} 
                      href={`/${locale}${result.link}`}
                      className="block p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 mb-2">
                        {result.title}
                      </h3>
                      <p className="text-slate-600">
                        {result.description}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-slate-500 mb-6">{t("noResults")}</p>
                  <Link 
                    href={`/${locale}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:underline"
                  >
                    {t("backToHome")}
                  </Link>
                </div>
              )
              }
            </>
          ) : (
            <div className="text-center py-12 text-slate-400">
              {/* Пустое состояние до ввода запроса */}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
>>>>>>> 0442d2e69fe3c52979a9449dd1298340240bc1cc
