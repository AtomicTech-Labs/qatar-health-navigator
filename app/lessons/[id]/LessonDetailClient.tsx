'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Lesson } from '@/types';
import Card from '@/components/ui/Card';
import AudioChip from '@/components/ui/AudioChip';

interface LessonDetailClientProps {
  lesson: Lesson;
}

export default function LessonDetailClient({ lesson }: LessonDetailClientProps) {
  const { language, t, dir } = useLanguage();

  const title = language === 'ar' ? lesson.title_ar : lesson.title_en;
  const body = language === 'ar' ? lesson.body_ar : lesson.body_en;

  // Split body into paragraphs for better formatting
  const paragraphs = body.split('\n\n').filter(p => p.trim());

  return (
    <div className="min-h-screen pb-24 pt-6 px-4">
      <div className="content-panel max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-8 animate-fade-in">
        {/* Title */}
        <h1 className="text-heading-1 font-semibold text-deep-forest mb-6">
          {title}
        </h1>

        {/* Audio Player */}
        {lesson.audio_file && (
          <div className="mb-6">
            <AudioChip 
              audioFile={lesson.audio_file} 
              label={t('common.listen')}
            />
          </div>
        )}

        {/* Lesson Body */}
        <Card variant="glass">
          <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'} space-y-4`}>
            {paragraphs.map((paragraph, index) => {
              // Check if paragraph contains bullet points
              if (paragraph.includes('•') || paragraph.includes('*')) {
                // Split into lines and render as list
                const lines = paragraph.split('\n').filter(line => line.trim());
                const listItems = lines.filter(line => line.trim().startsWith('•') || line.trim().startsWith('*'));
                const header = lines.find(line => !line.trim().startsWith('•') && !line.trim().startsWith('*'));

                return (
                  <div key={index}>
                    {header && (
                      <p className="text-body text-deep-forest font-medium mb-2 leading-relaxed">
                        {header}
                      </p>
                    )}
                    <ul className={`space-y-2 ${dir === 'rtl' ? 'pr-6' : 'pl-6'}`}>
                      {listItems.map((item, itemIndex) => (
                        <li 
                          key={itemIndex} 
                          className="text-body text-deep-forest leading-relaxed list-disc"
                        >
                          {item.replace(/^[•*]\s*/, '').trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              } else if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                // Handle bold headers (e.g., **Birth:** content)
                const parts = paragraph.split(':**');
                const header = parts[0].replace(/\*\*/g, '').trim();
                const content = parts.slice(1).join(':**').trim();

                return (
                  <div key={index}>
                    <p className="text-body text-deep-forest leading-relaxed">
                      <span className="font-semibold">{header}:</span> {content}
                    </p>
                  </div>
                );
              } else {
                // Regular paragraph
                return (
                  <p key={index} className="text-body text-deep-forest leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
