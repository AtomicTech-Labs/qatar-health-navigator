'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceEntry } from '@/types';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AudioChip from '@/components/ui/AudioChip';
import { 
  MapPinIcon, 
  ClockIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  ListBulletIcon
} from '@heroicons/react/24/outline';

interface DirectoryDetailClientProps {
  service: ServiceEntry;
}

export default function DirectoryDetailClient({ service }: DirectoryDetailClientProps) {
  const { t, dir } = useLanguage();
  const isRTL = dir === 'rtl';

  return (
    <div className="min-h-screen bg-cream-white pb-24 pt-4">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="px-3 py-1 rounded-full bg-natural-wood text-deep-forest text-small font-medium">
              {service.category}
            </span>
          </div>
          <h1 className="text-heading-1 font-semibold text-deep-forest mb-2">
            {service.name}
          </h1>
          <p className="text-body text-deep-forest/80">
            {service.short_description}
          </p>
        </div>

        {/* Audio Player */}
        {service.audio_file && (
          <div className="mb-6">
            <AudioChip 
              audioFile={service.audio_file} 
              label={t('common.listen')}
            />
          </div>
        )}

        {/* Services List */}
        <Card variant="glass" className="mb-6">
          <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <ListBulletIcon className="w-6 h-6 text-lake-blue flex-shrink-0" />
            <h2 className="text-heading-3 font-semibold text-deep-forest">
              {t('directory.services')}
            </h2>
          </div>
          <ul className={`space-y-2 ${isRTL ? 'pr-9' : 'pl-9'}`}>
            {service.services.map((item, index) => (
              <li 
                key={index}
                className={`text-body text-deep-forest flex items-start gap-2 ${isRTL ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
              >
                <span className="text-lake-blue flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Timings */}
        <Card variant="glass" className="mb-6">
          <div className={`flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <ClockIcon className="w-6 h-6 text-lake-blue flex-shrink-0" />
            <h2 className="text-heading-3 font-semibold text-deep-forest">
              {t('directory.timings')}
            </h2>
          </div>
          <p className={`text-body text-deep-forest ${isRTL ? 'text-right' : 'text-left'}`}>
            {service.timings}
          </p>
        </Card>

        {/* When to Visit */}
        <Card variant="glass" className="mb-6 border-l-4 border-plant-green">
          <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <CheckCircleIcon className="w-6 h-6 text-plant-green flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h2 className={`text-heading-3 font-semibold text-deep-forest mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('directory.when_to_visit')}
              </h2>
              <p className={`text-body text-deep-forest ${isRTL ? 'text-right' : 'text-left'}`}>
                {service.when_to_visit}
              </p>
            </div>
          </div>
        </Card>

        {/* When NOT to Visit */}
        <Card variant="glass" className="mb-6 border-l-4 border-care-red">
          <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <XCircleIcon className="w-6 h-6 text-care-red flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h2 className={`text-heading-3 font-semibold text-deep-forest mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('directory.when_not_to_visit')}
              </h2>
              <p className={`text-body text-deep-forest ${isRTL ? 'text-right' : 'text-left'}`}>
                {service.when_not_to_visit}
              </p>
            </div>
          </div>
        </Card>

        {/* Google Maps Button */}
        <div className="flex justify-center">
          <Button 
            variant="primary" 
            href={service.google_maps_url}
            className="w-full sm:w-auto"
          >
            <MapPinIcon className="w-5 h-5" />
            <span>{t('directory.view_map')}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
