"use client";

import React, { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/src/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: t("home"), href: "/home" },
    { name: t("about"), href: "/about-us" },
    { name: t("blog"), href: "/blog" },
    { name: t("doctors"), href: "/doctors" },
    { name: t("prices"), href: "/prices" },
    { name: t("contact"), href: "/contacts" },
    { name: t("faq"), href: "/faq" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const toggleLanguage = () => {
    const nextLocale = locale === "uz" ? "ru" : "uz";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <Container>
        <div className="relative flex h-20 w-full items-center justify-between gap-4 rounded-xl bg-cream/90 px-4 md:px-10 backdrop-blur-xl shadow-lg border border-white/40">
          <Link href="/home" className="flex items-center gap-2 shrink-0">
            <span className="text-xl font-bold tracking-tight text-primary-green font-serif">
              Fond<span className="text-sage">Uz</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center bg-sage/5 rounded-xl p-1.5 gap-1 relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-bold transition-colors duration-300 ${
                    isActive ? "text-primary-green" : "text-primary-green/40 hover:text-primary-green/60"
                  }`}
                >
                  {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.form 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "240px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  onSubmit={handleSearch}
                  className="relative hidden sm:block overflow-hidden"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("searchPlaceholder")}
                    className="w-full h-12 rounded-xl bg-white border border-sage/20 px-6 text-sm text-primary-green focus:outline-none focus:border-sage transition-all"
                    autoFocus
                  />
                </motion.form>
              )}
            </AnimatePresence>

            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-primary-green/60 hover:text-primary-green transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>

            <button 
              onClick={toggleLanguage}
              className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-sage/10 text-[11px] font-bold text-primary-green uppercase hover:bg-sage/20 transition-colors"
            >
              {locale}
            </button>

            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-primary-green"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-24 z-40 bg-white/40 backdrop-blur-xl lg:hidden"
          >
            <Container>
               <div className="bg-cream rounded-2xl p-10 shadow-2xl border border-white/40 mt-4 overflow-hidden">
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-xl font-serif px-6 py-4 rounded-xl transition-all ${
                          pathname === link.href ? "bg-white text-primary-green shadow-sm" : "text-primary-green/50 hover:text-primary-green"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-3">
                      <div className="flex gap-2">
                        <button onClick={() => { router.replace(pathname, { locale: 'uz' }); setIsOpen(false); }} className={`flex-1 h-14 rounded-xl text-sm font-bold uppercase transition-all ${locale === 'uz' ? 'bg-primary-green text-cream' : 'bg-sage/10 text-primary-green'}`}>UZ</button>
                        <button onClick={() => { router.replace(pathname, { locale: 'ru' }); setIsOpen(false); }} className={`flex-1 h-14 rounded-xl text-sm font-bold uppercase transition-all ${locale === 'ru' ? 'bg-primary-green text-cream' : 'bg-sage/10 text-primary-green'}`}>RU</button>
                      </div>
                    </div>
                  </nav>
               </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
