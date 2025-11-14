import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'emergency' | 'success' | 'warning';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  variant, 
  onClick, 
  href, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'rounded-2xl font-semibold min-h-[44px] min-w-[44px] px-4 sm:px-6 py-3 transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:shadow-xl active:shadow-md';
  
  const variantStyles = {
    primary: 'bg-gradient-to-br from-lake-blue to-lake-blue/90 text-white hover:from-lake-blue/95 hover:to-lake-blue/85 hover:scale-105 active:scale-95 focus:ring-lake-blue',
    secondary: 'bg-gradient-to-br from-natural-wood to-natural-wood/90 text-deep-forest hover:from-natural-wood/95 hover:to-natural-wood/85 hover:scale-105 active:scale-95 focus:ring-natural-wood',
    emergency: 'bg-gradient-to-br from-care-red to-care-red/90 text-white hover:from-care-red/95 hover:to-care-red/85 hover:scale-105 active:scale-95 focus:ring-care-red animate-pulse-subtle',
    success: 'bg-gradient-to-br from-clinical-green to-clinical-green/90 text-white hover:from-clinical-green/95 hover:to-clinical-green/85 hover:scale-105 active:scale-95 focus:ring-clinical-green',
    warning: 'bg-gradient-to-br from-warm-amber to-warm-amber/90 text-deep-forest hover:from-warm-amber/95 hover:to-warm-amber/85 hover:scale-105 active:scale-95 focus:ring-warm-amber'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    // External link
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={href.startsWith('tel:') ? `Call ${href.replace('tel:', '')}` : undefined}
        >
          {children}
        </a>
      );
    }
    
    // Internal link
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
