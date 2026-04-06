"use client";

import React from "react";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-white py-24 border-t border-sage/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 mb-12 border-b border-primary-green/5">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/home" className="text-3xl font-bold text-primary-green font-serif">
              Fond<span className="text-sage">Uz</span><span className="text-sm align-top leading-none">™</span>
            </Link>
            <p className="text-primary-green/60 max-w-sm text-lg leading-relaxed">
              {t("newsletterTitle")}
            </p>
            <div className="flex max-w-md gap-3 bg-cream/30 p-2 rounded-lg border border-sage/10">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 rounded-lg bg-transparent px-6 py-3 text-sm focus:outline-none text-primary-green placeholder:text-primary-green/30"
              />
              <Button size="sm" className="bg-primary-green px-8 text-cream shadow-xl shadow-primary-green/20">
                {t("subscribeButton")}
              </Button>
            </div>
            <p className="text-xs text-primary-green/40">
              {t("privacyNote")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-primary-green uppercase tracking-widest text-xs">{t("services")}</h4>
            <ul className="space-y-4">
              <li><Link href="/doctors" className="text-[15px] text-primary-green/60 hover:text-primary-green transition-colors">{t("doctors")}</Link></li>
              <li><Link href="/prices" className="text-[15px] text-primary-green/60 hover:text-primary-green transition-colors">{t("pricing")}</Link></li>
              <li><Link href="/blog" className="text-[15px] text-primary-green/60 hover:text-primary-green transition-colors">{t("blog")}</Link></li>
              <li><Link href="/about-us" className="text-[15px] text-primary-green/60 hover:text-primary-green transition-colors">{t("about")}</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="font-bold text-primary-green uppercase tracking-widest text-xs">{t("followUs")}</h4>
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-xl bg-sage/5 flex items-center justify-center text-primary-green/60 hover:bg-primary-green hover:text-cream transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-icon" style={{ WebkitMask: `url(/icons/${social}.svg) no-repeat center` }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-primary-green/40">
          <p className="text-center">{t("copyright")}</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/privacy-police" className="hover:text-primary-green transition-colors">{t("privacyPolicy")}</Link>
            <a href="#" className="hover:text-primary-green transition-colors">{t("terms")}</a>
            <a href="#" className="hover:text-primary-green transition-colors">{t("cookies")}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
