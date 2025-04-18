// src/components/Typography/Caption.tsx
import React from 'react';

type CaptionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Caption: React.FC<CaptionProps> = ({ children, className = '' }) => (
  <p className={`text-xs text-gray-500 dark:text-gray-400 ${className}`}>{children}</p>
);
