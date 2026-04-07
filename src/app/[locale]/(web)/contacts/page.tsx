"use client";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { FormError } from "@/src/components/ui/FormError";
import { Input } from "@/src/components/ui/Input";
import { Textarea } from "@/src/components/ui/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function ContactsPage() {
  const t = useTranslations("contacts");
  const tForm = useTranslations("forms");
  const tError = useTranslations("errors");
  const [success, setSuccess] = useState("");

  const schema = z.object({
    name: z.string().min(1, tError("nameRequired")),
    email: z.string().email(tError("emailInvalid")),
    message: z.string().min(10, tError("messageMin")),
  });

  type FormValues = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
    setSuccess(tForm("success"));
  };

  return (
    <Container className="py-12 md:py-16">
      <div className="grid w-full grid-cols-1 gap-10 text-center lg:grid-cols-2">
        <div className="mx-auto w-full">
          <h1 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{t("title")}</h1>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{t("subtitle")}</p>

          <dl className="mt-10 space-y-6 text-left">
            <div className="flex gap-4 rounded-xl border border-border bg-card p-4">
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
            <div className="flex gap-4 rounded-xl border border-border bg-card p-4">
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
            <div className="flex gap-4 rounded-xl border border-border bg-card p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <dt className="font-serif text-base text-foreground">{t("addressLabel")}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{t("addressValue")}</dd>
              </div>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-border bg-card p-6 text-left shadow-sm md:p-8">
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">{tForm("name")}</label>
            <Input type="text" hasError={Boolean(errors.name)} {...register("name")} />
            <FormError message={errors.name?.message} />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">{tForm("email")}</label>
            <Input type="email" hasError={Boolean(errors.email)} {...register("email")} />
            <FormError message={errors.email?.message} />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">{tForm("message")}</label>
            <Textarea rows={4} hasError={Boolean(errors.message)} {...register("message")} />
            <FormError message={errors.message?.message} />
          </div>
          <Button type="submit" variant="primary" className="h-10 w-full rounded-md" size="md">
            {tForm("submit")}
          </Button>
          {success ? <p className="text-sm text-primary">{success}</p> : null}
        </form>
      </div>
    </Container>
  );
}
