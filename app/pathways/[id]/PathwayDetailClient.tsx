'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Pathway } from '@/types';
import Card from '@/components/ui/Card';
import AudioChip from '@/components/ui/AudioChip';
import {
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  AcademicCapIcon,
  HeartIcon,
  CalendarIcon,
  ScaleIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

interface PathwayDetailClientProps {
  pathway: Pathway;
}

// Map icon names to Heroicon components
const getStepIcon = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'clipboard-document-check': <ClipboardDocumentCheckIcon className="w-6 h-6" />,
    'beaker': <BeakerIcon className="w-6 h-6" />,
    'academic-cap': <AcademicCapIcon className="w-6 h-6" />,
    'heart': <HeartIcon className="w-6 h-6" />,
    'calendar': <CalendarIcon className="w-6 h-6" />,
    'scale': <ScaleIcon className="w-6 h-6" />,
    'chart-bar': <ChartBarIcon className="w-6 h-6" />,
  };
  return iconMap[iconName] || <HeartIcon className="w-6 h-6" />;
};

export default function PathwayDetailClient({ pathway }: PathwayDetailClientProps) {
  const { language, t, dir } = useLanguage();

  const title = language === 'ar' ? pathway.title_ar : pathway.title_en;
  const whatToExpect = language === 'ar' ? pathway.what_to_expect_ar : pathway.what_to_expect_en;

  return (
    <div className="min-h-screen pb-24 pt-6 px-4">
      <div className="content-panel max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-8 animate-fade-in">
        {/* Title */}
        <h1 className="text-heading-1 font-semibold text-deep-forest mb-6">
          {title}
        </h1>

        {/* Audio Player */}
        {pathway.audio_file && (
          <div className="mb-6">
            <AudioChip 
              audioFile={pathway.audio_file} 
              label={t('common.listen')}
            />
          </div>
        )}

        {/* Sequential Steps */}
        <div className="space-y-4 mb-6">
          {pathway.steps.map((step, index) => {
            const stepTitle = language === 'ar' ? step.title_ar : step.title_en;
            const stepBody = language === 'ar' ? step.body_ar : step.body_en;

            return (
              <Card key={index} variant="glass">
                <div className={`flex gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-lake-blue/20 flex items-center justify-center">
                      <span className="text-heading-3 font-semibold text-lake-blue">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className={`flex-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {/* Icon and Title */}
                    <div className={`flex items-center gap-3 mb-2 ${dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className="text-lake-blue">
                        {getStepIcon(step.icon)}
                      </div>
                      <h3 className="text-heading-3 font-semibold text-deep-forest">
                        {stepTitle}
                      </h3>
                    </div>

                    {/* Body */}
                    <p className="text-body text-deep-forest leading-relaxed">
                      {stepBody}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* What to Expect Section */}
        <Card variant="glass" className="bg-mountain-mist/20 border-mountain-mist/40">
          <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
            <h2 className="text-heading-2 font-semibold text-deep-forest mb-3">
              {t('pathways.what_to_expect')}
            </h2>
            <p className="text-body text-deep-forest leading-relaxed">
              {whatToExpect}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
