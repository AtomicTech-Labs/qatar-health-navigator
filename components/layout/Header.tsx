'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { HeartIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const { t, dir } = useLanguage();

  return (
    <header 
      className="sticky top-0 z-50 glass border-b border-white/40 shadow-[0px_8px_32px_rgba(47,74,57,0.08)]"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 min-h-[64px] ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          {/* Logo and Title */}
          <Link 
            href="/" 
            className={`flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lake-blue focus:ring-offset-2 rounded-xl p-2 -m-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
            aria-label={t('home.welcome')}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-lake-blue/20 to-lake-blue/10 shadow-inner" aria-hidden="true">
              <HeartIcon className="w-6 h-6 text-lake-blue" />
            </div>
            <div className={`hidden sm:block ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
              <h1 className="text-heading-3 font-bold text-deep-forest leading-tight bg-gradient-to-r from-deep-forest to-lake-blue bg-clip-text text-transparent">
                {t('home.welcome').split(' ').slice(-3).join(' ')}
              </h1>
            </div>
          </Link>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
