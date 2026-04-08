"use client";

import { Button } from "@/src/components/ui/Button";
import { useState } from "react";

type Props = {
  title: string;
  subtitle: string;
  placeholderText: string;
  buttonText: string;
};

export function NewsletterSignup({ title, subtitle, placeholderText, buttonText }: Props) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="mt-12 rounded-2xl border border-primary/20 bg-primary p-8 text-primary-foreground md:p-10 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 -mx-8 -my-8 h-40 w-40 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mx-8 -my-8 h-40 w-40 rounded-full bg-primary-foreground/5 blur-3xl" />
      
      <div className="relative z-10">
        <h2 className="font-serif text-xl md:text-2xl">{title}</h2>
        <p className="mt-2 max-w-md text-sm text-primary-foreground/80">{subtitle}</p>
        <form className="mt-6 flex max-w-md flex-col gap-2 sm:flex-row" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholderText}
            required
            className="h-11 min-w-0 flex-1 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40 transition-colors"
          />
          <Button type="submit" variant="secondary" className="h-11 rounded-xl px-6">
            {buttonText}
          </Button>
        </form>
      </div>
    </div>
  );
}
