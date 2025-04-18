// import React from 'react';
import * as React from 'react';

type HeadingProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = ({ children, level = 1 }: HeadingProps) => {
  const tagName = `h${level}` ;//as keyof JSX.IntrinsicElements;

  const baseStyle = "font-bold text-gray-800 dark:text-white";
  const sizes: Record<number, string> = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  };

  // Type guard to ensure tagName is a string
  if (typeof tagName !== 'string') return null;

  return React.createElement(tagName, {
    className: `${baseStyle} ${sizes[level]}`,
  }, children);
};

export default Heading;
