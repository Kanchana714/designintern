// components/Checkbox.tsx
import React from 'react';

type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  error = false,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const baseStyle = `form-checkbox rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition duration-150 ease-in-out`;
  const errorStyle = error ? 'border-red-500 focus:ring-red-500' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <div className={`flex items-center space-x-2 ${disabledStyle}`}>
      <input
        type="checkbox"
        id={id}
        aria-invalid={error}
        aria-disabled={disabled}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className={`${baseStyle} ${errorStyle} ${sizeClasses[size]}`}
      />
      <label htmlFor={id} className="text-gray-800 dark:text-gray-100 cursor-pointer">
        {label}
      </label>
    </div>
  );
};
