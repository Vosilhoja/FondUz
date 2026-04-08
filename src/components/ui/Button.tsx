import React from "react";
import { Link } from "@/src/i18n/routing";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  params?: Record<string, string>;
  isLoading?: boolean;
}


export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  params,
  isLoading,
  ...props
}: ButtonProps) => {

  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl border font-semibold tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 active:scale-95";

  const variants = {
    primary: "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30",
    secondary: "border-border/60 bg-card/50 backdrop-blur-md text-foreground shadow-sm hover:bg-muted hover:-translate-y-0.5 hover:border-border",
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

  return (
    <button className={shared} type="button" disabled={props.disabled || isLoading} {...props}>
      {isLoading ? (
        <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : null}
      {children}
    </button>
  );
};

