'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { ServiceEntry } from '@/types';

const emergencyContent = {
  en: {
    when_999: {
      title: 'When to Call 999',
      situations: [
        'Severe chest pain or heart attack symptoms',
        'Difficulty breathing or choking',
        'Severe bleeding that won’t stop',
        'Loss of consciousness or unresponsiveness',
        'Severe injuries from accidents',
        'Stroke symptoms (facial drooping, arm weakness, speech difficulty)',
        'Severe allergic reactions',
        'Any life-threatening emergency'
      ]
    },
    when_16000: {
      title: 'When to Call 16000 (Hamad Medical Corporation)',
      situations: [
        'Medical advice and consultation',
        'Non-emergency health inquiries',
        'Appointment scheduling at HMC facilities',
        'General health information',
        'Follow-up questions about treatment',
        'Guidance on which facility to visit'
      ]
    }
  },
  ar: {
    when_999: {
      title: 'متى تتصل بــ 999',
      situations: [
        'ألم صدر شديد أو أعراض نوبة قلبية',
        'صعوبة في التنفس أو الاختناق',
        'نزيف شديد لا يتوقف',
        'فقدان الوعي أو عدم الاستجابة',
        'إصابات خطيرة ناتجة عن حوادث',
        'أعراض سكتة دماغية (جلطة)',
        'ردود فعل تحسسية شديدة',
        'أي حالة طوارئ تهدد الحياة'
      ]
    },
    when_16000: {
      title: 'متى تتصل بــ 16000 (مؤسسة حمد الطبية)',
      situations: [
        'استشارة طبية ومتابعة',
        'استفسارات صحية غير طارئة',
        'حجز مواعيد في مرافق مؤسسة حمد الطبية',
        'معلومات عامة عن الرعاية الصحية',
        'متابعة ما بعد العلاج',
        'توجيه حول المنشأة المناسبة'
      ]
    }
  }
};

export default function EmergencyPage() {
  const { t, language } = useLanguage();
  const [emergencyServices, setEmergencyServices] = useState<ServiceEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEmergencyServices() {
      try {
        const response = await fetch('/data/services.json');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const services: ServiceEntry[] = await response.json();
        setEmergencyServices(services.filter((service) => service.category === 'Emergency'));
      } catch (error) {
        console.error('Error loading emergency services:', error);
      } finally {
        setLoading(false);
      }
    }
    loadEmergencyServices();
  }, []);

  const content = emergencyContent[language];

  return (
    <div className="min-h-screen pb-24 pt-6 px-4">
      <div className="content-panel max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-8 animate-fade-in">
        {/* Header */}
        <h1 className="text-heading-1 sm:text-[32px] font-semibold text-deep-forest mb-6">
          {t('emergency.title')}
        </h1>

        {/* Emergency Contact Buttons */}
        <section 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8"
          aria-label="Emergency contact numbers"
        >
          {/* 999 Emergency */}
          <Card variant="glass" className="border border-care-red/40 bg-gradient-to-br from-care-red/25 via-white/50 to-white">
            <div className="text-center space-y-4 sm:space-y-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-care-red/30 to-care-red/10 flex items-center justify-center shadow-inner shadow-white/50 mx-auto">
                <PhoneIcon className="w-10 h-10 sm:w-12 sm:h-12 text-care-red" />
              </div>
              <h2 className="text-heading-2 font-bold text-deep-forest">
                {language === 'en' ? 'Emergency Ambulance' : 'حالات الطوارئ'}
              </h2>
              <Button 
                variant="emergency" 
                href="tel:999"
                className="w-full text-heading-2 font-bold"
              >
                <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                999
              </Button>
            </div>
          </Card>

          {/* 16000 Hotline */}
          <Card variant="glass" className="border border-lake-blue/40 bg-gradient-to-br from-lake-blue/25 via-white/50 to-white">
            <div className="text-center space-y-4 sm:space-y-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-lake-blue/30 to-lake-blue/10 flex items-center justify-center shadow-inner shadow-white/50 mx-auto">
                <PhoneIcon className="w-10 h-10 sm:w-12 sm:h-12 text-lake-blue" />
              </div>
              <h2 className="text-heading-2 font-bold text-deep-forest">
                {language === 'en' ? 'HMC Hotline' : 'المكالمات الساخنة'}
              </h2>
              <Button 
                variant="primary" 
                href="tel:16000"
                className="w-full text-heading-2 font-bold"
              >
                <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                16000
              </Button>
            </div>
          </Card>
        </section>

        {/* When to Call 999 */}
        <Card variant="glass" className="mb-4 sm:mb-6 border border-mountain-mist/40 bg-gradient-to-br from-mountain-mist/20 via-white/70 to-white">
          <div className="bg-mountain-mist/20 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
            <h2 className="text-heading-2 font-semibold text-lake-blue">
              {content.when_999.title}
            </h2>
          </div>
          <ul className="space-y-2" role="list">
            {content.when_999.situations.map((situation, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <span className="text-care-red mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span className="text-body text-deep-forest break-words">{situation}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* When to Call 16000 */}
        <Card variant="glass" className="mb-4 sm:mb-6 border border-mountain-mist/40 bg-gradient-to-br from-mountain-mist/20 via-white/70 to-white">
          <div className="bg-mountain-mist/20 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
            <h2 className="text-heading-2 font-semibold text-lake-blue">
              {content.when_16000.title}
            </h2>
          </div>
          <ul className="space-y-2" role="list">
            {content.when_16000.situations.map((situation, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <span className="text-lake-blue mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span className="text-body text-deep-forest break-words">{situation}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Emergency Room Locations */}
        <section className="mb-4 sm:mb-6">
          <h2 className="text-heading-2 font-semibold text-deep-forest mb-3 sm:mb-4">
            {t('emergency.locations')}
          </h2>
          
          {loading ? (
            <Card variant="glass">
              <p className="text-body text-deep-forest text-center py-4" role="status" aria-live="polite">
                {t('common.loading')}
              </p>
            </Card>
          ) : emergencyServices.length === 0 ? (
            <Card variant="glass">
              <p className="text-body text-deep-forest text-center py-4" role="status">
                {language === 'en' 
                  ? 'No emergency room locations available' 
                  : 'لا تتوفر مراكز الطوارئ حالياً'}
              </p>
            </Card>
          ) : (
            <div className="space-y-3 sm:space-y-4" role="list">
              {emergencyServices.map((service) => (
                <Card key={service.id} variant="glass" role="listitem">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-care-red flex-shrink-0 mt-1" aria-hidden="true" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-heading-3 font-semibold text-deep-forest mb-2 break-words">
                          {service.name}
                        </h3>
                        <p className="text-body text-deep-forest/80 mb-3 break-words">
                          {service.short_description}
                        </p>
                        <div className="bg-plant-green/10 rounded-lg p-2 sm:p-3 mb-3">
                          <p className="text-small font-medium text-deep-forest mb-1">
                            {t('directory.timings')}
                          </p>
                          <p className="text-body text-deep-forest break-words">
                            {service.timings}
                          </p>
                        </div>
                        <Button 
                          variant="primary" 
                          href={service.google_maps_url}
                          className="w-full sm:w-auto"
                        >
                          <MapPinIcon className="w-5 h-5" aria-hidden="true" />
                          {t('directory.view_map')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Important Notice */}
        <Card variant="glass" className="bg-care-red/10" role="alert" aria-live="polite">
          <p className="text-body text-deep-forest font-medium text-center break-words">
            <span aria-hidden="true">!</span> {language === 'en'
              ? 'In case of life-threatening emergency, always call 999 immediately'
              : 'في حالات الطوارئ المهددة للحياة، اتصل بـ 999 فوراً'}
          </p>
        </Card>
      </div>
    </div>
  );
}
