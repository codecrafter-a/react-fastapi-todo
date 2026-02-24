"use client";

import { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const variantStyles = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400",
  secondary:
    "bg-gray-100 hover:bg-gray-200 text-gray-900 disabled:bg-gray-100",
  danger:
    "text-gray-400 hover:text-red-600 hover:bg-red-50 disabled:opacity-50",
  ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
};

const sizeStyles = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  disabled,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-colors duration-200 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  const variantClass = variantStyles[variant];
  const sizeClass = sizeStyles[size];

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {isLoading ? <LoadingSpinner /> : icon}
      {children}
    </button>
  );
}

export function PrimaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button {...props} variant="primary" />;
}

export function SecondaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button {...props} variant="secondary" />;
}

export function DangerButton(props: Omit<ButtonProps, "variant">) {
  return <Button {...props} variant="danger" />;
}

export function GhostButton(props: Omit<ButtonProps, "variant">) {
  return <Button {...props} variant="ghost" />;
}

export function IconButton({
  isLoading = false,
  icon,
  disabled,
  className = "",
  ...props
}: Omit<ButtonProps, "children"> & { icon: ReactNode }) {
  return (
    <button
      disabled={disabled || isLoading}
      className={`p-2 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {isLoading ? <LoadingSpinner /> : icon}
    </button>
  );
}

function LoadingSpinner() {
  return (
    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
  );
}
