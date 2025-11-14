'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { SymptomEntry } from '@/types';
import Card from '@/components/ui/Card';
import { 
  FireIcon,
  BoltIcon,
  HeartIcon,
  CloudIcon,
  BeakerIcon,
  ExclamationTriangleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface SymptomsListClientProps {
  symptoms: SymptomEntry[];
}

// Map symptom IDs to icons
const getSymptomIcon = (id: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'fever': <FireIcon className="w-8 h-8" />,
    'cough': <CloudIcon className="w-8 h-8" />,
    'chest-discomfort': <HeartIcon className="w-8 h-8" />,
    'shortness-of-breath': <BoltIcon className="w-8 h-8" />,
    'vomiting': <ExclamationTriangleIcon className="w-8 h-8" />,
    'diarrhea': <BeakerIcon className="w-8 h-8" />,
    'rash': <SparklesIcon className="w-8 h-8" />,
  };
  return iconMap[id] || <ExclamationTriangleIcon className="w-8 h-8" />;
};

export default function SymptomsListClient({ symptoms }: SymptomsListClientProps) {
  const router = useRouter();
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen pb-24 pt-6 px-4">
      <div className="content-panel max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-8 animate-fade-in">
        {/* Title */}
        <h1 className="text-heading-1 sm:text-[32px] font-semibold text-deep-forest mb-4 sm:mb-6">
          {t('symptoms.title')}
        </h1>

        {/* Symptoms Grid */}
        {symptoms.length === 0 && (
          <div className="text-center py-12" role="status">
            <p className="text-body text-deep-forest/70">{t('common.error')}</p>
          </div>
        )}

        {symptoms.length > 0 && (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            role="list"
            aria-label="Symptom checker list"
          >
            {symptoms.map((symptom) => {
              const name = language === 'ar' ? symptom.name_ar : symptom.name_en;

              return (
                <Card
                  key={symptom.id}
                  onClick={() => router.push(`/symptoms/${symptom.id}`)}
                  variant="glass"
                  className="min-h-[120px]"
                >
                  <div 
                    className={`flex flex-col items-center justify-center gap-3 text-center`}
                    role="listitem"
                  >
                    {/* Icon */}
                    <div className="text-lake-blue" aria-hidden="true">
                      {getSymptomIcon(symptom.id)}
                    </div>
                    
                    {/* Name */}
                    <h2 className="text-heading-3 font-semibold text-deep-forest break-words">
                      {name}
                    </h2>
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
