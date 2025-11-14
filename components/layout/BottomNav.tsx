'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  HomeIcon,
  BuildingOfficeIcon,
  MapIcon,
  HeartIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';

export default function BottomNav() {
  const pathname = usePathname();
  const { t, dir } = useLanguage();

  const navItems = [
    { href: '/', label: t('nav.home'), icon: HomeIcon },
    { href: '/directory', label: t('nav.directory'), icon: BuildingOfficeIcon },
    { href: '/pathways', label: t('nav.pathways'), icon: MapIcon },
    { href: '/symptoms', label: t('nav.symptoms'), icon: HeartIcon },
    { href: '/more', label: t('nav.more'), icon: EllipsisHorizontalIcon },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/40 shadow-[0px_-8px_32px_rgba(47,74,57,0.08)]"
      aria-label="Bottom navigation"
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className={`flex items-center justify-around h-20 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 min-w-[44px] min-h-[44px] px-3 py-2 rounded-2xl transition-all duration-300 ${
                  active
                    ? 'text-lake-blue bg-lake-blue/10 scale-105'
                    : 'text-deep-forest/60 hover:text-deep-forest hover:bg-white/30 hover:scale-105'
                }`}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className={`w-6 h-6 transition-all duration-300 ${active ? 'stroke-[2.5] scale-110' : 'stroke-[2]'}`} />
                <span className={`text-[11px] font-medium transition-all duration-300 ${active ? 'font-bold' : ''}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
