'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className="flex items-center gap-1 bg-white/30 backdrop-blur-[20px] rounded-full p-1.5 border border-white/40 shadow-lg"
      role="group"
      aria-label="Language selection"
    >
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 sm:px-4 py-2 rounded-full text-small font-bold transition-all duration-300 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-lake-blue focus:ring-offset-2 ${
          language === 'en'
            ? 'bg-gradient-to-br from-lake-blue to-lake-blue/90 text-white shadow-md scale-105'
            : 'text-deep-forest hover:bg-white/30 hover:scale-105'
        }`}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
        type="button"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={`px-3 sm:px-4 py-2 rounded-full text-small font-bold transition-all duration-300 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-lake-blue focus:ring-offset-2 ${
          language === 'ar'
            ? 'bg-gradient-to-br from-lake-blue to-lake-blue/90 text-white shadow-md scale-105'
            : 'text-deep-forest hover:bg-white/30 hover:scale-105'
        }`}
        aria-label="Switch to Arabic"
        aria-pressed={language === 'ar'}
        type="button"
      >
        AR
      </button>
    </div>
  );
}
