"use client";

import { ReactNode } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  helperText?: string;
  characterLimit?: number;
}

export function Input({
  label,
  error,
  icon,
  helperText,
  characterLimit,
  className = "",
  id,
  value,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  const charCount = (value as string)?.length || 0;

  return (
    <div className="space-y-1">
      {label && (
        <div className="flex justify-between items-center">
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          {characterLimit && (
            <span
              className={`text-xs ${
                charCount > characterLimit * 0.9
                  ? "text-orange-600"
                  : "text-gray-500"
              }`}
            >
              {charCount} / {characterLimit}
            </span>
          )}
        </div>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          value={value}
          className={`
            w-full px-3 py-2
            border rounded-md shadow-sm
            focus:outline-none focus:ring-blue-500 focus:border-blue-500
            disabled:bg-gray-50 text-black disabled:text-gray-500 disabled:cursor-not-allowed
            transition-colors duration-200
            ${error ? "border-red-300" : "border-gray-300"}
            ${icon ? "pl-10" : ""}
            ${className}
          `}
          {...props}
        />
      </div>

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}
    </div>
  );
}

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  characterLimit?: number;
}

export function TextArea({
  label,
  error,
  helperText,
  characterLimit,
  className = "",
  id,
  value,
  ...props
}: TextAreaProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  const charCount = (value as string)?.length || 0;

  return (
    <div className="space-y-1">
      {label && (
        <div className="flex justify-between items-center">
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          {characterLimit && (
            <span
              className={`text-xs ${
                charCount > characterLimit * 0.9
                  ? "text-orange-600"
                  : "text-gray-500"
              }`}
            >
              {charCount} / {characterLimit}
            </span>
          )}
        </div>
      )}

      <textarea
        id={inputId}
        value={value}
        className={`
          w-full px-3 py-2
          border rounded-md shadow-sm text-black
          focus:outline-none focus:ring-blue-500 focus:border-blue-500
          disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
          transition-colors duration-200
          resize-none
          ${error ? "border-red-300" : "border-gray-300"}
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}
    </div>
  );
}
