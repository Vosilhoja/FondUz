"use client";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactsPage() {
  const t = useTranslations("ContactsPage");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    let valid = true;
    const next = { name: "", email: "", message: "" };
    if (formData.name.trim().length < 2) {
      next.name = "—";
      valid = false;
    }
    if (!formData.email.includes("@")) {
      next.email = "—";
      valid = false;
    }
    if (formData.message.trim().length < 10) {
      next.message = "—";
      valid = false;
    }
    setErrors(next);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    }
  };

  return (
    <Container className="py-12 md:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{t("title")}</h1>
          <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">{t("sub")}</p>

          <dl className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <dt className="font-serif text-base text-foreground">{t("phoneLabel")}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  <a href={`tel:${t("phoneValue").replace(/\s/g, "")}`} className="hover:text-foreground">
                    {t("phoneValue")}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <dt className="font-serif text-base text-foreground">{t("emailLabel")}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  <a href={`mailto:${t("emailValue")}`} className="hover:text-foreground">
                    {t("emailValue")}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-md border border-border bg-card p-6 md:p-8"
        >
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">{t("formName")}</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`h-10 w-full rounded-md border bg-background px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                errors.name ? "border-red-500/60" : "border-border"
              }`}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">{t("formEmail")}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`h-10 w-full rounded-md border bg-background px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                errors.email ? "border-red-500/60" : "border-border"
              }`}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">{t("formMessage")}</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full resize-none rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                errors.message ? "border-red-500/60" : "border-border"
              }`}
            />
          </div>
          <Button type="submit" variant="primary" className="h-10 w-full rounded-md" size="md">
            {t("formSubmit")}
          </Button>
        </form>
      </div>
    </Container>
  );
}
