'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Pathway } from '@/types';
import Card from '@/components/ui/Card';
import { 
  HeartIcon,
  BeakerIcon,
  ScaleIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

interface PathwaysListClientProps {
  pathways: Pathway[];
}

// Map pathway IDs to icons
const getPathwayIcon = (id: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'diabetes-management': <HeartIcon className="w-8 h-8" />,
    'hypertension-management': <BeakerIcon className="w-8 h-8" />,
    'obesity-metabolic': <ScaleIcon className="w-8 h-8" />,
    'children-care': <UserGroupIcon className="w-8 h-8" />,
  };
  return iconMap[id] || <HeartIcon className="w-8 h-8" />;
};

export default function PathwaysListClient({ pathways }: PathwaysListClientProps) {
  const router = useRouter();
  const { language, t, dir } = useLanguage();

  return (
    <div className="min-h-screen pb-24 pt-4">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-heading-1 sm:text-[32px] font-semibold text-deep-forest mb-4 sm:mb-6">
          {t('pathways.title')}
        </h1>

        {/* Pathways Grid */}
        {pathways.length === 0 && (
          <div className="text-center py-12" role="status">
            <p className="text-body text-deep-forest/70">{t('common.error')}</p>
          </div>
        )}

        {pathways.length > 0 && (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
            role="list"
            aria-label="Care pathways"
          >
            {pathways.map((pathway) => {
              const title = language === 'ar' ? pathway.title_ar : pathway.title_en;
              const description = pathway.steps.length > 0 
                ? `${pathway.steps.length} ${language === 'ar' ? 'خطوات' : 'steps'}`
                : '';

              return (
                <Card
                  key={pathway.id}
                  onClick={() => router.push(`/pathways/${pathway.id}`)}
                  variant="glass"
                  className="min-h-[140px]"
                >
                  <div 
                    className={`flex flex-col gap-3 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                    role="listitem"
                  >
                    {/* Icon */}
                    <div className="text-lake-blue" aria-hidden="true">
                      {getPathwayIcon(pathway.id)}
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-heading-3 font-semibold text-deep-forest break-words">
                      {title}
                    </h2>
                    
                    {/* Description */}
                    {description && (
                      <p className="text-small text-deep-forest/70">
                        {description}
                      </p>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
