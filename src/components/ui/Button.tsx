import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "inverted";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 font-semibold transition-all duration-200 rounded-pill active:scale-[0.96]";

  const variants = {
    primary: "bg-accent-green text-white hover:bg-[#006640] shadow-sm",
    secondary: "bg-transparent border border-house-green text-house-green hover:bg-house-green/5",
    inverted: "bg-white text-brand-green hover:bg-canvas shadow-xl border-none",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
