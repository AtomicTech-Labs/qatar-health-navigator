'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Lesson } from '@/types';
import Card from '@/components/ui/Card';
import { 
  BuildingOffice2Icon,
  ClockIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

interface LessonsListClientProps {
  lessons: Lesson[];
}

// Map lesson icon names to Heroicon components
const getLessonIcon = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    'building-office-2': <BuildingOffice2Icon className="w-8 h-8" />,
    'clock': <ClockIcon className="w-8 h-8" />,
    'exclamation-triangle': <ExclamationTriangleIcon className="w-8 h-8" />,
    'shield-check': <ShieldCheckIcon className="w-8 h-8" />,
  };
  return iconMap[iconName] || <BuildingOffice2Icon className="w-8 h-8" />;
};

export default function LessonsListClient({ lessons }: LessonsListClientProps) {
  const router = useRouter();
  const { language, t, dir } = useLanguage();

  return (
    <div className="min-h-screen pb-24 pt-6 px-4">
      <div className="content-panel max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-8 animate-fade-in">
        {/* Title */}
        <h1 className="text-heading-1 sm:text-[32px] font-semibold text-deep-forest mb-4 sm:mb-6">
          {t('lessons.title')}
        </h1>

        {/* Lessons List */}
        {lessons.length === 0 && (
          <div className="text-center py-12" role="status">
            <p className="text-body text-deep-forest/70">{t('common.error')}</p>
          </div>
        )}

        {lessons.length > 0 && (
          <div 
            className="space-y-3 sm:space-y-4"
            role="list"
            aria-label="Educational lessons"
          >
            {lessons.map((lesson) => {
              const title = language === 'ar' ? lesson.title_ar : lesson.title_en;
              const body = language === 'ar' ? lesson.body_ar : lesson.body_en;
              
              // Create excerpt from body (first 120 characters)
              const excerpt = body.length > 120 
                ? body.substring(0, 120).trim() + '...' 
                : body;

              return (
                <Card
                  key={lesson.id}
                  onClick={() => router.push(`/lessons/${lesson.id}`)}
                  variant="glass"
                >
                  <div 
                    className={`flex gap-3 sm:gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}
                    role="listitem"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 text-lake-blue w-8 h-8" aria-hidden="true">
                      {getLessonIcon(lesson.icon)}
                    </div>
                    
                    {/* Content */}
                    <div className={`flex-1 min-w-0 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      {/* Title */}
                      <h2 className="text-heading-3 font-semibold text-deep-forest mb-2 break-words">
                        {title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-body text-deep-forest/70 leading-relaxed break-words">
                        {excerpt}
                      </p>
                    </div>
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
