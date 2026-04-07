import React from "react";
import { Link } from "@/src/i18n/routing";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  params?: Record<string, string>;
}

export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  params,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl border font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary: "border-primary bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-primary/90",
    secondary: "border-border bg-card text-foreground shadow-sm hover:-translate-y-0.5 hover:bg-muted",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const shared = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const qs = params ? `?${new URLSearchParams(params).toString()}` : "";
    return (
      <Link href={`${href}${qs}`} className={shared} aria-disabled={props.disabled}>
        {children}
      </Link>
    );
  }

  return <button className={shared} type="button" {...props}>{children}</button>;
};
