'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Card from '@/components/ui/Card';
import { 
  LifebuoyIcon, 
  HeartIcon,
  AcademicCapIcon 
} from '@heroicons/react/24/outline';

export default function MorePage() {
  const { t, dir } = useLanguage();

  const moreItems = [
    {
      href: '/support',
      icon: HeartIcon,
      title: t('home.support'),
      description: t('home.support.desc'),
    },
    {
      href: '/emergency',
      icon: LifebuoyIcon,
      title: t('home.emergency'),
      description: t('home.emergency.desc'),
    },
    {
      href: '/lessons',
      icon: AcademicCapIcon,
      title: t('home.lessons'),
      description: t('home.lessons.desc'),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <h1 className="text-heading-1 sm:text-[32px] font-semibold text-deep-forest mb-4 sm:mb-6">
        {t('nav.more')}
      </h1>

      <nav 
        className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Additional resources"
      >
        {moreItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className="focus:outline-none focus:ring-2 focus:ring-lake-blue focus:ring-offset-2 rounded-2xl"
            >
              <Card variant="glass" className="h-full hover:scale-[1.02] transition-transform">
                <div className={`flex items-start gap-3 sm:gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lake-blue/10 flex items-center justify-center" aria-hidden="true">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-lake-blue" />
                  </div>
                  <div className={`flex-1 min-w-0 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    <h2 className="text-heading-3 font-semibold text-deep-forest mb-1 break-words">
                      {item.title}
                    </h2>
                    <p className="text-small text-deep-forest/70 break-words">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
