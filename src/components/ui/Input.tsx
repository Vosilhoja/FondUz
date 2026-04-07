import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className = "", hasError = false, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={`h-10 w-full rounded-md border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        hasError ? "border-red-500" : "border-border"
      } ${className}`}
      {...props}
    />
  );
});
