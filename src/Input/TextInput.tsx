// src/components/DataEntry/TextInput.tsx
import React from "react";
import { cn } from "../lib/utils"; // Utility to merge Tailwind classes

type TextInputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  disabled?: boolean;
  error?: string;
  type?: string;
  name?: string;
};

const sizeStyles = {
  sm: "text-sm px-2 py-1",
  md: "text-base px-3 py-2",
  lg: "text-lg px-4 py-3",
};

export const TextInput = ({
  label,
  placeholder = "",
  value,
  onChange,
  size = "md",
  icon,
  disabled = false,
  error,
  type = "text",
  name,
}: TextInputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          "flex items-center border rounded-lg transition-all bg-white dark:bg-gray-900",
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "border-gray-300 dark:border-gray-600 focus-within:ring-blue-500",
          disabled && "bg-gray-100 dark:bg-gray-800 opacity-60 cursor-not-allowed",
          sizeStyles[size],
          "focus-within:ring-2"
        )}
      >
        {icon && <div className="mr-2 text-gray-400">{icon}</div>}
        <input
          id={name}
          name={name}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            "w-full outline-none bg-transparent text-gray-800 dark:text-white placeholder:text-gray-400",
            disabled && "cursor-not-allowed"
          )}
          aria-invalid={!!error}
          aria-disabled={disabled}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
