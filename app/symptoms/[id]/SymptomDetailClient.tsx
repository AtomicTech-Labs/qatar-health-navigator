'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SymptomEntry } from '@/types';
import Card from '@/components/ui/Card';
import AudioChip from '@/components/ui/AudioChip';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

interface SymptomDetailClientProps {
  symptom: SymptomEntry;
}

export default function SymptomDetailClient({ symptom }: SymptomDetailClientProps) {
  const { language, t, dir } = useLanguage();

  const name = language === 'ar' ? symptom.name_ar : symptom.name_en;
  const greenText = language === 'ar' ? symptom.green_ar : symptom.green_en;
  const yellowText = language === 'ar' ? symptom.yellow_ar : symptom.yellow_en;
  const redText = language === 'ar' ? symptom.red_ar : symptom.red_en;

  return (
    <div className="min-h-screen bg-cream-white pb-24 pt-4">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-heading-1 font-semibold text-deep-forest mb-6">
          {name}
        </h1>

        {/* Audio Player */}
        {symptom.audio_file && (
          <div className="mb-6">
            <AudioChip 
              audioFile={symptom.audio_file} 
              label={t('common.listen')}
            />
          </div>
        )}

        {/* Severity Sections */}
        <div className="space-y-4">
          {/* Green (Mild) Section */}
          <Card variant="glass" className="border-clinical-green/40">
            <div className={`flex gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-clinical-green/20 flex items-center justify-center">
                  <CheckCircleIcon className="w-7 h-7 text-clinical-green" />
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                <h2 className="text-heading-3 font-semibold text-clinical-green mb-2">
                  {language === 'ar' ? 'خفيف - الرعاية المنزلية' : 'Mild - Home Care'}
                </h2>
                <p className="text-body text-deep-forest leading-relaxed">
                  {greenText}
                </p>
              </div>
            </div>
          </Card>

          {/* Yellow (Moderate) Section */}
          <Card variant="glass" className="border-warm-amber/40">
            <div className={`flex gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-warm-amber/20 flex items-center justify-center">
                  <ExclamationTriangleIcon className="w-7 h-7 text-warm-amber" />
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                <h2 className="text-heading-3 font-semibold text-warm-amber mb-2">
                  {language === 'ar' ? 'متوسط - زيارة المركز الصحي' : 'Moderate - Visit Health Center'}
                </h2>
                <p className="text-body text-deep-forest leading-relaxed">
                  {yellowText}
                </p>
              </div>
            </div>
          </Card>

          {/* Red (Severe) Section */}
          <Card variant="glass" className="border-care-red/40">
            <div className={`flex gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-care-red/20 flex items-center justify-center">
                  <XCircleIcon className="w-7 h-7 text-care-red" />
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                <h2 className="text-heading-3 font-semibold text-care-red mb-2">
                  {language === 'ar' ? 'شديد - طوارئ فورية' : 'Severe - Immediate Emergency'}
                </h2>
                <p className="text-body text-deep-forest leading-relaxed">
                  {redText}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
