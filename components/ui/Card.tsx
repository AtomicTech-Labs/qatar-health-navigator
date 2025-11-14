import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'glass' | 'solid';
}

export default function Card({ 
  children, 
  className = '', 
  onClick, 
  variant = 'glass' 
}: CardProps) {
  const baseStyles = 'rounded-3xl p-4 sm:p-5 transition-all duration-300 ease-out';
  
  const variantStyles = {
    glass: 'glass',
    solid: 'bg-soft-sand shadow-[0px_4px_16px_rgba(47,74,57,0.06)]'
  };

  const interactiveStyles = onClick 
    ? 'cursor-pointer hover:shadow-[0px_12px_40px_rgba(47,74,57,0.12)] hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-lake-blue focus:ring-offset-2' 
    : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      aria-label={onClick ? 'Interactive card' : undefined}
    >
      {children}
    </div>
  );
}
