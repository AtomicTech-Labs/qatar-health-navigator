'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Card from '@/components/ui/Card';

export default function SupportPage() {
  const { t, language } = useLanguage();

  const supportContent = {
    en: {
      dua: {
        title: 'Dua for Healing',
        content: [
          {
            arabic: 'أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا',
            transliteration: 'Adhhib al-ba\'s Rabb an-nas, ishfi wa anta ash-Shafi, la shifa\'a illa shifa\'uk, shifaa\'an la yughadiru saqaman',
            translation: 'Remove the hardship, O Lord of mankind, and heal, for You are the Healer. There is no healing except Your healing, a healing that leaves no illness behind.'
          },
          {
            arabic: 'بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ',
            transliteration: 'Bismillahi arqika, min kulli shay\'in yu\'dhika, min sharri kulli nafsin aw \'aynin hasidin Allahu yashfika, bismillahi arqika',
            translation: 'In the name of Allah I recite over you, from everything that harms you, from the evil of every soul or envious eye, may Allah heal you, in the name of Allah I recite over you.'
          }
        ],
        guidance: 'These duas can be recited when seeking healing or visiting someone who is ill. It is encouraged to make dua for yourself and others during times of illness, trusting in Allah\'s mercy and wisdom.'
      },
      treatment: {
        title: 'Treatment in Islam',
        content: [
          'Islam encourages seeking medical treatment while maintaining trust in Allah (tawakkul). The Prophet Muhammad (peace be upon him) said: "Make use of medical treatment, for Allah has not made a disease without appointing a remedy for it."',
          'Seeking medical care is not only permissible but often obligatory when health is at risk. Muslims are encouraged to consult qualified healthcare professionals and follow medical advice.',
          'Treatment should be combined with spiritual practices such as prayer, patience (sabr), and trust in Allah\'s decree. Both physical and spiritual healing are important in Islamic tradition.',
          'It is permissible to seek treatment from non-Muslim doctors, as medical knowledge is universal. The focus should be on the competence and qualifications of the healthcare provider.'
        ]
      },
      fasting: {
        title: 'Fasting Exemptions During Illness',
        content: [
          'Islam provides exemptions from fasting during Ramadan for those who are ill. Allah says in the Quran: "But whoever is ill or on a journey, then an equal number of other days" (2:185).',
          'If fasting would worsen your condition, delay recovery, or cause significant hardship, you are permitted to break your fast. This includes chronic conditions, acute illnesses, pregnancy complications, or when taking necessary medications.',
          'You may make up missed fasts later when you are healthy, or if unable to fast at all due to chronic illness, you can provide fidya (feeding a poor person for each day missed).',
          'Consult with both your healthcare provider and a knowledgeable Islamic scholar if you are unsure whether your condition warrants breaking the fast. Your health is a trust from Allah and should be protected.',
          'Taking medications, insulin injections, or necessary medical procedures during fasting hours is generally considered to break the fast, but these are valid reasons for exemption.'
        ]
      },
      modesty: {
        title: 'Modesty Guidelines in Healthcare Settings',
        content: [
          'Qatar\'s healthcare system respects Islamic values of modesty. You have the right to request a same-gender healthcare provider when possible, especially for intimate examinations.',
          'Most hospitals and clinics in Qatar have female doctors and nurses available for women patients. Don\'t hesitate to express your preference when scheduling appointments.',
          'During examinations, you can request that only the necessary area be exposed, and that a chaperone or family member be present if you feel more comfortable.',
          'Healthcare providers in Qatar are trained to respect cultural and religious sensitivities. If you feel your modesty concerns are not being addressed, you can speak with patient relations or request a different provider.',
          'For emergency situations, preserving life takes precedence over modesty concerns in Islamic law. Accept necessary treatment even if your preferred arrangements are not immediately available.',
          'You may wear modest clothing such as hijab, abaya, or loose-fitting garments in healthcare settings. Facilities will provide gowns when needed for medical procedures.'
        ]
      }
    },
    ar: {
      dua: {
        title: 'دعاء الشفاء',
        content: [
          {
            arabic: 'أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا',
            transliteration: 'أذهب الباس رب الناس، اشف وأنت الشافي، لا شفاء إلا شفاؤك، شفاءً لا يغادر سقماً',
            translation: 'أذهب المرض يا رب الناس، واشف فأنت الشافي، لا شفاء إلا شفاؤك، شفاءً لا يترك مرضاً.'
          },
          {
            arabic: 'بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ',
            transliteration: 'بسم الله أرقيك، من كل شيء يؤذيك، من شر كل نفس أو عين حاسد الله يشفيك، بسم الله أرقيك',
            translation: 'باسم الله أرقيك، من كل شيء يؤذيك، من شر كل نفس أو عين حاسد الله يشفيك، باسم الله أرقيك.'
          }
        ],
        guidance: 'يمكن قراءة هذه الأدعية عند طلب الشفاء أو زيارة المريض. يُشجع على الدعاء لنفسك وللآخرين في أوقات المرض، مع الثقة برحمة الله وحكمته.'
      },
      treatment: {
        title: 'العلاج في الإسلام',
        content: [
          'يشجع الإسلام على طلب العلاج الطبي مع الحفاظ على التوكل على الله. قال النبي محمد صلى الله عليه وسلم: "تداووا، فإن الله لم يضع داءً إلا وضع له شفاءً".',
          'طلب الرعاية الطبية ليس مسموحاً فحسب، بل غالباً ما يكون واجباً عندما تكون الصحة في خطر. يُشجع المسلمون على استشارة متخصصي الرعاية الصحية المؤهلين واتباع النصائح الطبية.',
          'يجب الجمع بين العلاج والممارسات الروحية مثل الصلاة والصبر والتوكل على قضاء الله. كل من الشفاء الجسدي والروحي مهم في التقاليد الإسلامية.',
          'يجوز طلب العلاج من أطباء غير مسلمين، حيث أن المعرفة الطبية عالمية. يجب التركيز على كفاءة ومؤهلات مقدم الرعاية الصحية.'
        ]
      },
      fasting: {
        title: 'إعفاءات الصيام أثناء المرض',
        content: [
          'يوفر الإسلام إعفاءات من الصيام خلال شهر رمضان للمرضى. يقول الله في القرآن: "فَمَن كَانَ مِنكُم مَّرِيضًا أَوْ عَلَىٰ سَفَرٍ فَعِدَّةٌ مِّنْ أَيَّامٍ أُخَرَ" (البقرة: 185).',
          'إذا كان الصيام سيؤدي إلى تفاقم حالتك، أو تأخير الشفاء، أو التسبب في مشقة كبيرة، يُسمح لك بالإفطار. يشمل ذلك الحالات المزمنة، والأمراض الحادة، ومضاعفات الحمل، أو عند تناول الأدوية الضرورية.',
          'يمكنك قضاء الأيام الفائتة لاحقاً عندما تكون بصحة جيدة، أو إذا كنت غير قادر على الصيام على الإطلاق بسبب مرض مزمن، يمكنك دفع الفدية (إطعام شخص فقير عن كل يوم فائت).',
          'استشر كلاً من مقدم الرعاية الصحية وعالم إسلامي مطلع إذا لم تكن متأكداً مما إذا كانت حالتك تستدعي الإفطار. صحتك أمانة من الله ويجب حمايتها.',
          'تناول الأدوية، أو حقن الأنسولين، أو الإجراءات الطبية الضرورية خلال ساعات الصيام يُعتبر عموماً مفطراً، لكن هذه أسباب صحيحة للإعفاء.'
        ]
      },
      modesty: {
        title: 'إرشادات الحشمة في أماكن الرعاية الصحية',
        content: [
          'يحترم نظام الرعاية الصحية في قطر القيم الإسلامية للحشمة. لديك الحق في طلب مقدم رعاية صحية من نفس الجنس عندما يكون ذلك ممكناً، خاصة للفحوصات الحميمة.',
          'معظم المستشفيات والعيادات في قطر لديها طبيبات وممرضات للمريضات. لا تتردد في التعبير عن تفضيلك عند تحديد المواعيد.',
          'أثناء الفحوصات، يمكنك طلب كشف المنطقة الضرورية فقط، وأن يكون هناك مرافق أو أحد أفراد الأسرة حاضراً إذا كنت تشعر براحة أكبر.',
          'مقدمو الرعاية الصحية في قطر مدربون على احترام الحساسيات الثقافية والدينية. إذا شعرت أن مخاوفك بشأن الحشمة لا تتم معالجتها، يمكنك التحدث مع علاقات المرضى أو طلب مقدم خدمة آخر.',
          'في حالات الطوارئ، يأخذ الحفاظ على الحياة الأسبقية على مخاوف الحشمة في الشريعة الإسلامية. اقبل العلاج الضروري حتى لو لم تكن ترتيباتك المفضلة متاحة على الفور.',
          'يمكنك ارتداء ملابس محتشمة مثل الحجاب أو العباءة أو الملابس الفضفاضة في أماكن الرعاية الصحية. ستوفر المرافق ثياباً عند الحاجة للإجراءات الطبية.'
        ]
      }
    }
  };

  const content = supportContent[language];

  return (
    <div className="min-h-screen pb-24 pt-6 px-4">
      <div className="content-panel max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-8 animate-fade-in">
        {/* Page Title */}
        <h1 className="text-heading-1 font-semibold text-deep-forest mb-6">
          {t('support.title')}
        </h1>

        {/* Dua for Healing */}
        <Card variant="glass" className="mb-6">
          <h2 className="text-heading-2 font-semibold text-lake-blue mb-4">
            {content.dua.title}
          </h2>
          <div className="space-y-6">
            {content.dua.content.map((dua, index) => (
              <div key={index} className="space-y-2">
                <p className="text-heading-3 text-deep-forest text-center leading-relaxed" dir="rtl">
                  {dua.arabic}
                </p>
                <p className="text-body text-deep-forest/80 italic text-center">
                  {dua.transliteration}
                </p>
                <p className="text-body text-deep-forest">
                  {dua.translation}
                </p>
              </div>
            ))}
            <p className="text-body text-deep-forest mt-4 pt-4 border-t border-deep-forest/10">
              {content.dua.guidance}
            </p>
          </div>
        </Card>

        {/* Treatment in Islam */}
        <Card variant="glass" className="mb-6">
          <h2 className="text-heading-2 font-semibold text-lake-blue mb-4">
            {content.treatment.title}
          </h2>
          <div className="space-y-4">
            {content.treatment.content.map((paragraph, index) => (
              <p key={index} className="text-body text-deep-forest leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>

        {/* Fasting Exemptions */}
        <Card variant="glass" className="mb-6">
          <h2 className="text-heading-2 font-semibold text-lake-blue mb-4">
            {content.fasting.title}
          </h2>
          <div className="space-y-4">
            {content.fasting.content.map((paragraph, index) => (
              <p key={index} className="text-body text-deep-forest leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>

        {/* Modesty Guidelines */}
        <Card variant="glass" className="mb-6">
          <h2 className="text-heading-2 font-semibold text-lake-blue mb-4">
            {content.modesty.title}
          </h2>
          <div className="space-y-4">
            {content.modesty.content.map((paragraph, index) => (
              <p key={index} className="text-body text-deep-forest leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
