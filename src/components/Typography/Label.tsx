import React from 'react';

type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
};

export const Label: React.FC<LabelProps> = ({ children, htmlFor, className = '' }) => (
  <label htmlFor={htmlFor} className={`text-sm font-label text-gray-600 dark:text-gray-300 ${className}`}>
    {children}
  </label>
);
