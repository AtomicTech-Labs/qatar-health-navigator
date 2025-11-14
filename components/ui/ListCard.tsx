'use client';

import React from 'react';
import Card from './Card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface ListCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: 'glass' | 'solid';
  children?: React.ReactNode;
}

export default function ListCard({ 
  title, 
  description, 
  icon, 
  onClick, 
  className = '',
  variant = 'glass',
  children
}: ListCardProps) {
  const { dir } = useLanguage();
  const isRTL = dir === 'rtl';

  return (
    <Card 
      onClick={onClick} 
      variant={variant}
      className={className}
    >
      {children}
      <div className={`flex items-center gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Icon */}
        {icon && (
          <div className="flex-shrink-0 text-lake-blue w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true">
            {icon}
          </div>
        )}
        
        {/* Content */}
        <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h3 className="text-body font-medium text-deep-forest mb-1 break-words">
            {title}
          </h3>
          {description && (
            <p className="text-small text-deep-forest/70 line-clamp-2 break-words">
              {description}
            </p>
          )}
        </div>
        
        {/* Chevron */}
        <div className="flex-shrink-0 text-lake-blue" aria-hidden="true">
          <ChevronRightIcon 
            className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
    </Card>
  );
}
