import React from 'react';

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ children, className = '' }) => (
  <p className={`text-body font-body text-black dark:text-gray-200 ${className}`}>{children}</p>
);










