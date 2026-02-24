"use client";

import { ReactNode } from "react";
import { CloseIcon } from "./Icons";
import { IconButton } from "./Button";

export interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  onClose?: () => void;
  icon?: ReactNode;
}

const typeStyles = {
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
    icon: "text-green-600",
  },
  error: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-800",
    icon: "text-red-600",
  },
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-800",
    icon: "text-yellow-600",
  },
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    icon: "text-blue-600",
  },
};

export function Alert({
  type,
  title,
  message,
  onClose,
  icon,
}: AlertProps) {
  const styles = typeStyles[type];

  return (
    <div
      className={`${styles.bg} border ${styles.border} ${styles.text} rounded-lg p-4 flex items-start gap-3`}
    >
      {icon && <div className={`${styles.icon} shrink-0 mt-0.5`}>{icon}</div>}

      <div className="grow">
        {title && <p className="font-semibold mb-1">{title}</p>}
        <p className="text-sm">{message}</p>
      </div>

      {onClose && (
        <IconButton
          onClick={onClose}
          className={`${styles.icon} hover:opacity-75 shrink-0`}
          icon={<CloseIcon size={20} />}
          aria-label="Close alert"
        />
      )}
    </div>
  );
}

export function ErrorAlert({
  title = "Error",
  message,
  onClose,
}: Omit<AlertProps, "type" | "icon">) {
  return (
    <Alert
      type="error"
      title={title}
      message={message}
      onClose={onClose}
      icon={
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      }
    />
  );
}

export function SuccessAlert({
  title = "Success",
  message,
  onClose,
}: Omit<AlertProps, "type" | "icon">) {
  return (
    <Alert
      type="success"
      title={title}
      message={message}
      onClose={onClose}
      icon={
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      }
    />
  );
}
