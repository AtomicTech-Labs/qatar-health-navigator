'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { language, dir } = useLanguage();

  useEffect(() => {
    // Update html element attributes
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  return <>{children}</>;
}
