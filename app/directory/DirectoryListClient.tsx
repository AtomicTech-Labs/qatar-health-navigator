'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceEntry } from '@/types';
import ListCard from '@/components/ui/ListCard';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

type CategoryFilter = 'All' | 'PHCC' | 'HMC' | 'Urgent Care' | 'Emergency' | 'Private';

interface DirectoryListClientProps {
  services: ServiceEntry[];
}

export default function DirectoryListClient({ services }: DirectoryListClientProps) {
  const router = useRouter();
  const { t, dir } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');

  const filteredServices = activeFilter === 'All' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const categories: CategoryFilter[] = ['All', 'PHCC', 'HMC', 'Urgent Care', 'Emergency', 'Private'];

  return (
    <div className="min-h-screen pb-24 pt-6 px-4">
      <div className="content-panel max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-8 animate-fade-in">
        {/* Title */}
        <h1 className="text-heading-1 sm:text-[32px] font-semibold text-deep-forest mb-4 sm:mb-6">
          {t('directory.title')}
        </h1>

        {/* Category Filters */}
        <nav 
          className={`flex gap-2 mb-4 sm:mb-6 overflow-x-auto pb-2 scrollbar-hide ${dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}
          role="tablist"
          aria-label="Service category filters"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              role="tab"
              aria-selected={activeFilter === category}
              aria-controls="services-list"
              className={`
                px-3 sm:px-4 py-2 rounded-2xl font-medium text-small whitespace-nowrap
                transition-all duration-200 min-h-[44px] min-w-[44px]
                focus:outline-none focus:ring-2 focus:ring-lake-blue focus:ring-offset-2
                ${activeFilter === category
                  ? 'bg-lake-blue text-white shadow-md'
                  : 'bg-white/35 border border-white/28 text-deep-forest hover:bg-white/50'
                }
              `}
            >
              {t(`directory.${category.toLowerCase().replace(' ', '')}`)}
            </button>
          ))}
        </nav>

        {/* Services List */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12" role="status">
            <p className="text-body text-deep-forest/70">{t('common.error')}</p>
          </div>
        )}

        {filteredServices.length > 0 && (
          <div 
            id="services-list" 
            className="space-y-3 sm:space-y-4" 
            role="tabpanel"
            aria-label={`${activeFilter} services`}
          >
            {filteredServices.map((service) => (
              <div key={service.id} className="relative">
                <ListCard
                  title={service.name}
                  description={service.short_description}
                  icon={<BuildingOffice2Icon className="w-6 h-6" />}
                  onClick={() => router.push(`/directory/${service.id}`)}
                  variant="glass"
                />
                {/* Category Badge */}
                <div className={`absolute top-3 sm:top-4 ${dir === 'rtl' ? 'left-3 sm:left-4' : 'right-3 sm:right-4'} pointer-events-none`}>
                  <span className="px-2 sm:px-3 py-1 rounded-full bg-natural-wood text-deep-forest text-small font-medium" aria-label={`Category: ${service.category}`}>
                    {service.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
