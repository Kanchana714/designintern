import React, { useEffect, useState } from 'react';

type ToastProps = {
  message: string;
  type: 'info' | 'success' | 'error' | 'warning';
  duration?: number; // Duration in milliseconds for which the toast is visible
};

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [duration]);

  const getColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'info':
      default:
        return 'bg-blue-500';
    }
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-md text-white ${getColor()} shadow-lg transition-opacity duration-300`}
      role="alert"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <span>{message}</span>
    </div>
  );
};

export default Toast;
