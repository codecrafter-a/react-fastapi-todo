"use client";

export interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
  fill?: string;
  stroke?: string;
}

export function CheckIcon({
  size = 20,
  className = "",
  fill = "currentColor",
}: IconProps) {
  return (
    <svg
      className={`w-${size / 4} h-${size / 4} ${className}`}
      fill={fill}
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function TrashIcon({
  size = 20,
  className = "",
  stroke = "currentColor",
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg
      className={`w-${size / 4} h-${size / 4} ${className}`}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );
}

export function CloseIcon({
  size = 20,
  className = "",
  fill = "currentColor",
}: IconProps) {
  return (
    <svg
      className={`w-${size / 4} h-${size / 4} ${className}`}
      fill={fill}
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ChecklistIcon({
  size = 48,
  className = "",
  stroke = "currentColor",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <svg
      className={`w-${size / 4} h-${size / 4} ${className}`}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  );
}

export function LoadingSpinner({
  size = 12,
  className = "border-blue-600",
}: Omit<IconProps, "fill" | "stroke">) {
  return (
    <div
      className={`animate-spin rounded-full h-${size} w-${size} border-b-2 ${className}`}
    ></div>
  );
}
