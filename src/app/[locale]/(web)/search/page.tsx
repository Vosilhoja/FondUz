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
