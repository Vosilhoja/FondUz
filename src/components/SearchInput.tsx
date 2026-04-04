"use client";

import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const t = useTranslations("SearchPage");
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-2xl mx-auto mb-12">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t("placeholder")}
        className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md bg-white text-slate-800"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-sm"
      >
        {t("title")}
      </button>
    </form>
  );
}
