import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  state?: "normal" | "hover" | "disabled";
  children: React.ReactNode;
}

const baseClasses =
  "font-barlow font-extrabold uppercase text-[16px] leading-[24px] tracking-wider rounded-full px-6 py-2 transition-colors duration-200";

const variantClasses = {
  primary: "bg-primary text-black shadow-md",
  secondary: "border border-primary text-primary bg-transparent",
};

const stateClasses = {
  normal: "cursor-pointer",
  hover: "hover:bg-primary hover:text-[#383A42]",
  disabled: "opacity-40 cursor-not-allowed",
};

export default function Button({
  variant = "primary",
  state = "normal",
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || state === "disabled";
  return (
    <button
      className={[
        baseClasses,
        variantClasses[variant],
        state === "hover" ? stateClasses["hover"] : "",
        isDisabled ? stateClasses["disabled"] : stateClasses["normal"],
        className,
      ].join(" ")}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
} 