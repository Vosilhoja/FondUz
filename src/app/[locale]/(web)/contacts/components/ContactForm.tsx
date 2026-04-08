"use client";

import { Button } from "@/src/components/ui/Button";
import { FormError } from "@/src/components/ui/FormError";
import { Input } from "@/src/components/ui/Input";
import { Textarea } from "@/src/components/ui/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitLabel: string;
  successMessage: string;
  errorMessages: {
    nameRequired: string;
    emailInvalid: string;
    messageMin: string;
  };
};

export function ContactForm({
  nameLabel,
  emailLabel,
  messageLabel,
  submitLabel,
  successMessage,
  errorMessages,
}: Props) {
  const [success, setSuccess] = useState("");

  const schema = z.object({
    name: z.string().min(1, errorMessages.nameRequired),
    email: z.string().email(errorMessages.emailInvalid),
    message: z.string().min(10, errorMessages.messageMin),
  });

  type FormValues = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Contact form submitted:", data);
    reset();
    setSuccess(successMessage);
    setTimeout(() => setSuccess(""), 5000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-2xl border border-border bg-card p-6 text-left shadow-sm md:p-8"
    >
      <div className="space-y-1">
        <label className="text-xs font-medium text-muted-foreground">{nameLabel}</label>
        <Input type="text" hasError={Boolean(errors.name)} {...register("name")} placeholder="..." />
        <FormError message={errors.name?.message} />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-muted-foreground">{emailLabel}</label>
        <Input type="email" hasError={Boolean(errors.email)} {...register("email")} placeholder="example@mail.com" />
        <FormError message={errors.email?.message} />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-muted-foreground">{messageLabel}</label>
        <Textarea rows={4} hasError={Boolean(errors.message)} {...register("message")} placeholder="..." />
        <FormError message={errors.message?.message} />
      </div>
      <Button
        type="submit"
        variant="primary"
        className="h-11 w-full rounded-2xl"
        size="md"
        isLoading={isSubmitting}
      >
        {submitLabel}
      </Button>
      {success && (
        <div className="mt-4 rounded-xl bg-primary/10 p-3 text-center text-sm font-medium text-primary border border-primary/20 animate-in fade-in slide-in-from-bottom-2">
          {success}
        </div>
      )}
    </form>
  );
}
