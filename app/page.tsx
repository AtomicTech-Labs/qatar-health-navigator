'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Card from '@/components/ui/Card';
import {
  BuildingOffice2Icon,
  MapIcon,
  HeartIcon,
  AcademicCapIcon,
  SparklesIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

interface NavigationCard {
  titleKey: string;
  descriptionKey: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navigationCards: NavigationCard[] = [
  {
    titleKey: 'home.services',
    descriptionKey: 'home.services.desc',
    href: '/directory',
    icon: BuildingOffice2Icon,
  },
  {
    titleKey: 'home.pathways',
    descriptionKey: 'home.pathways.desc',
    href: '/pathways',
    icon: MapIcon,
  },
  {
    titleKey: 'home.symptoms',
    descriptionKey: 'home.symptoms.desc',
    href: '/symptoms',
    icon: HeartIcon,
  },
  {
    titleKey: 'home.lessons',
    descriptionKey: 'home.lessons.desc',
    href: '/lessons',
    icon: AcademicCapIcon,
  },
  {
    titleKey: 'home.support',
    descriptionKey: 'home.support.desc',
    href: '/support',
    icon: SparklesIcon,
  },
  {
    titleKey: 'home.emergency',
    descriptionKey: 'home.emergency.desc',
    href: '/emergency',
    icon: ExclamationTriangleIcon,
  },
];

export default function Home() {
  const { t, dir } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 max-w-6xl">
      {/* Hero Section */}
      <section className="mb-8 sm:mb-10 text-center animate-fade-in">
        <h1 className="text-heading-1 sm:text-[36px] font-bold text-deep-forest mb-4 bg-gradient-to-r from-deep-forest via-lake-blue to-deep-forest bg-clip-text text-transparent">
          {t('home.welcome')}
        </h1>
        <p className="text-body text-deep-forest/80 max-w-2xl mx-auto leading-relaxed">
          {t('home.description')}
        </p>
      </section>

      {/* Navigation Cards Grid */}
      <section 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        aria-label="Main navigation sections"
      >
        {navigationCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Link 
              key={card.href} 
              href={card.href}
              className="focus:outline-none focus:ring-2 focus:ring-lake-blue focus:ring-offset-2 rounded-3xl group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Card variant="glass" className="h-full">
                <div className={`flex flex-col items-center text-center gap-4 py-3 ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-lake-blue/20 to-lake-blue/5 group-hover:from-lake-blue/30 group-hover:to-lake-blue/10 transition-all duration-300 shadow-inner" aria-hidden="true">
                    <Icon className="w-10 h-10 text-lake-blue group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h2 className="text-heading-3 font-bold text-deep-forest mb-2 group-hover:text-lake-blue transition-colors duration-300">
                      {t(card.titleKey)}
                    </h2>
                    <p className="text-small text-deep-forest/70 leading-relaxed">
                      {t(card.descriptionKey)}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
