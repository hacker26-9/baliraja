import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, MapPin, Calculator, ShieldCheck, Sprout, ArrowRight } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ searchQuery, setSearchQuery, onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white pt-12 pb-16 lg:pt-16 lg:pb-20">
      {/* Decorative agrarian topographic lines pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,40 Q25,30 50,45 T100,40 L100,100 L0,100 Z" fill="currentColor" />
          <path d="M0,60 Q35,50 70,65 T100,60 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Quiet geographic location indicator (Unboxed text) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-300 mb-3 tracking-wide">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t('पुणे व पश्चिम महाराष्ट्र कृषी मंच', 'Pune & Western Maharashtra Agriculture Hub')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('बारामती, जुन्नर, आंबेगाव, खेड, शिरूर, हवेली', 'Baramati, Junnar, Ambegaon, Khed, Shirur')}</span>
          </div>

          {/* Primary Editorial Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-tight sm:leading-tight">
            {t(
              'शेतकरी बांधवांसाठी सर्वसमावेशक कृषी माहिती व तंत्रज्ञान मंच',
              'Comprehensive Agriculture Knowledge & Advisory Portal for Farmers'
            )}
          </h1>

          {/* Subtitle description */}
          <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
            {t(
              'ऊस, कांदा, डाळिंब, द्राक्षे, सोयाबीन, टोमॅटो यांसह सर्व पिकांचे परिपूर्ण नियोजन, माती परीक्षण, शासकीय योजना, खत गणक आणि पुणे जिल्ह्यातील बाजार समित्यांची संपूर्ण माहिती.',
              'Practical guides for Sugarcane, Onion, Pomegranate, Grapes, Soybean, Tomato, local soil management, government subsidies, fertilizer calculators, and APMC markets.'
            )}
          </p>

          {/* Unified Fast Search Input */}
          <div className="mt-6 sm:mt-8 max-w-2xl">
            <div className="relative flex items-center bg-white rounded-xl shadow-lg border border-emerald-500/30 overflow-hidden p-1">
              <Search className="w-5 h-5 text-stone-400 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t(
                  'पीक, कीड, रोग, योजना किंवा बाजार समिती शोधा... (उदा. कांदा, हुमणी, ठिबक, महाडीबीटी)',
                  'Search crops, pests, diseases, schemes, or APMCs (e.g., Sugarcane, Onion, Drip, MahaDBT)...'
                )}
                className="w-full px-3 py-2.5 text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-3 py-1 text-xs text-stone-500 hover:text-stone-800 font-medium"
                >
                  {t('साफ करा', 'Clear')}
                </button>
              )}
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => onNavigate('crops')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-emerald-950 bg-emerald-300 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
            >
              <Sprout className="w-4 h-4 text-emerald-900" />
              <span>{t('पिकांची माहिती पहा', 'Explore All Crops')}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </button>

            <button
              onClick={() => onNavigate('calculator')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-800/80 hover:bg-emerald-700/80 border border-emerald-600/50 rounded-lg transition-colors cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-emerald-300" />
              <span>{t('खत कॅल्क्युलेटर', 'Fertilizer Calculator')}</span>
            </button>

            <button
              onClick={() => onNavigate('schemes')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-800/80 hover:bg-emerald-700/80 border border-emerald-600/50 rounded-lg transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>{t('शासकीय योजना', 'Govt Schemes')}</span>
            </button>
          </div>
        </div>

        {/* Quantified Agricultural Stats Bar (Adhering to anti-slop: real, concrete categories) */}
        <div className="mt-12 pt-8 border-t border-emerald-800/50 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-200">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-emerald-300 font-mono tabular-nums">९+ प्रमुख</p>
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5">{t('महाराष्ट्रातील नगदी व फळ पिके', 'Major Maharashtra Cash & Fruit Crops')}</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-amber-300 font-mono tabular-nums">१४ तालुके</p>
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5">{t('पुणे जिल्हा स्थानिक शेती नियोजन', 'Pune District Agronomy Coverage')}</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-emerald-300 font-mono tabular-nums">₹१ विमा</p>
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5">{t('महाराष्ट्र पीक विमा व डीबीटी योजना', 'Maharashtra Crop Insurance & DBT')}</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-amber-300 font-mono tabular-nums">१००% मोफत</p>
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5">{t('शेतकऱ्यांसाठी थेट डिजिटल माहिती', 'Free Agricultural Knowledge')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
