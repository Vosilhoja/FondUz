"use client";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function LoginPage() {
  const t = useTranslations("Auth");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    let valid = true;
    const next = { email: "", password: "" };
    if (!formData.email.includes("@")) {
      next.email = "—";
      valid = false;
    }
    if (formData.password.length < 6) {
      next.password = "—";
      valid = false;
    }
    setErrors(next);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center py-12">
      <Container>
        <div className="mx-auto max-w-md rounded-md border border-border bg-card p-8 shadow-sm">
          <div className="text-center">
            <h1 className="font-serif text-2xl text-foreground md:text-3xl">{t("login")}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{t("subTitle")}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">{t("email")}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`h-10 w-full rounded-md border bg-background px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  errors.email ? "border-red-500/60" : "border-border"
                }`}
                placeholder="mail@example.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">{t("password")}</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={`h-10 w-full rounded-md border bg-background px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  errors.password ? "border-red-500/60" : "border-border"
                }`}
                placeholder="••••••"
              />
            </div>
            <Button type="submit" variant="primary" className="mt-2 h-10 w-full rounded-md" size="md">
              {t("submit")}
            </Button>
          </form>

          <p className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            {t("noAccount")}{" "}
            <span className="font-medium text-foreground">{t("register")}</span>
          </p>
        </div>
      </Container>
    </div>
  );
}
