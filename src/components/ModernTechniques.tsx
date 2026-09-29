import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MODERN_TECHNIQUES } from '../data/agriData';
import { Lightbulb, CheckCircle2, TrendingUp, Award, Droplets, Warehouse, Leaf } from 'lucide-react';

export const ModernTechniques: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'drip_fertigation':
        return <Droplets className="w-5 h-5 text-sky-600" />;
      case 'onion_storage_chawl':
        return <Warehouse className="w-5 h-5 text-amber-600" />;
      case 'organic_jivamrit':
        return <Leaf className="w-5 h-5 text-emerald-600" />;
      default:
        return <Lightbulb className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            <span>{t('प्रगत कृषी तंत्रज्ञान व सेंद्रिय शेती', 'Modern Farm Engineering & Sustainable Agronomy')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {t('उत्पादन वाढवणारी आधुनिक शेती तंत्रज्ञाने', 'High-Impact Modern Agriculture Innovations')}
          </h2>
          <p className="mt-1 text-sm sm:text-base text-stone-600">
            {t(
              'पाणी व खतांची बचत करणारे ठिबक, कांदा साठवणूक चाळ आणि शून्य खर्चाची जीवामृत नैसर्गिक शेती.',
              'Water conservation through precision drip, post-harvest onion storage structures, and biological zero-budget farming.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MODERN_TECHNIQUES.map((tech) => (
            <div
              key={tech.id}
              className="bg-stone-50 rounded-2xl border border-stone-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Real Technique Photography Banner */}
                <div className="w-full h-36 mb-4 rounded-xl overflow-hidden relative border border-stone-200 group/item shadow-xs bg-stone-900">
                  <img
                    src={
                      tech.id === 'drip_fertigation'
                        ? '/images/drip.jpg'
                        : tech.id === 'onion_storage_chawl'
                        ? '/images/onion.jpg'
                        : '/images/compost.jpg'
                    }
                    alt={t(tech.titleMr, tech.titleEn)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold text-emerald-300 text-xs">
                      {tech.id === 'drip_fertigation' && t('सूक्ष्म सिंचन व व्हेंचुरी', 'Micro Irrigation & Venturi')}
                      {tech.id === 'onion_storage_chawl' && t('हवेशीर साठवणूक रचना', 'Ventilated Storage Chawl')}
                      {tech.id === 'organic_jivamrit' && t('नैसर्गिक जिवाणू संवर्धन', 'Biological Soil Inoculant')}
                    </span>
                    <span className="px-1.5 py-0.5 bg-stone-900/80 rounded text-[10px] text-stone-200">
                      {t('शेतकरी मार्गदर्शक', 'Farmer Guide')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-xs">
                    {getIcon(tech.id)}
                  </div>
                  <h3 className="text-base font-bold text-stone-900 leading-snug">
                    {t(tech.titleMr, tech.titleEn)}
                  </h3>
                </div>

                <p className="mt-1 text-xs font-semibold text-emerald-800">
                  {t(tech.taglineMr, tech.taglineEn)}
                </p>

                {/* Advantages */}
                <div className="mt-4 pt-3 border-t border-stone-200">
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    {t('मुख्य फायदे:', 'Key Advantages:')}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {(t(tech.advantagesMr.join('@@'), tech.advantagesEn.join('@@'))).split('@@').map((adv, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical Steps */}
                <div className="mt-4 pt-3 border-t border-stone-200">
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    {t('अंमलबजावणी कृती (Practical Steps):', 'Implementation Guide:')}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {(t(tech.guideMr.join('@@'), tech.guideEn.join('@@'))).split('@@').map((step, i) => (
                      <li key={i} className="bg-white p-2 rounded-lg border border-stone-200">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Subsidy and Cost economics */}
              <div className="mt-6 pt-4 border-t border-stone-200 space-y-2 text-xs">
                <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                  <span className="font-bold text-emerald-900 block mb-0.5">
                    {t('शासकीय अनुदान:', 'Govt Subsidy:')}
                  </span>
                  <span className="text-emerald-950">{t(tech.subsidyDetailsMr, tech.subsidyDetailsEn)}</span>
                </div>
                <div className="text-stone-500">
                  <strong>{t('खर्च-नफा प्रमाण: ', 'Cost-Benefit: ')}</strong>
                  {t(tech.costBenefitMr, tech.costBenefitEn)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
