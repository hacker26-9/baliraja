import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CROPS_DATA } from '../data/agriData';
import { Crop } from '../types';
import { AgriIllustration } from './AgriIllustration';
import { 
  Sprout, 
  Droplets, 
  Clock, 
  MapPin, 
  ChevronRight, 
  X, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Scale, 
  BookOpen
} from 'lucide-react';

interface CropDirectoryProps {
  searchQuery: string;
}

export const CropDirectory: React.FC<CropDirectoryProps> = ({ searchQuery }) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCrop, setActiveCrop] = useState<Crop | null>(null);

  const categories = [
    { id: 'all', labelMr: 'सर्व पिके', labelEn: 'All Crops' },
    { id: 'cash', labelMr: 'नगदी पिके', labelEn: 'Cash Crops' },
    { id: 'fruits', labelMr: 'फळबागा', labelEn: 'Fruits & Orchards' },
    { id: 'vegetables', labelMr: 'भाजीपाला', labelEn: 'Vegetables' },
    { id: 'grains', labelMr: 'धान्य व तृणधान्य', labelEn: 'Grains & Pulses' },
    { id: 'spices', labelMr: 'मसाले पिके', labelEn: 'Spices' },
  ];

  const filteredCrops = CROPS_DATA.filter((crop) => {
    const matchesCategory = selectedCategory === 'all' || crop.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const matchesQuery =
      crop.nameMr.toLowerCase().includes(query) ||
      crop.nameEn.toLowerCase().includes(query) ||
      crop.scientificName.toLowerCase().includes(query) ||
      crop.puneFocusMr.toLowerCase().includes(query) ||
      crop.puneFocusEn.toLowerCase().includes(query) ||
      crop.varietiesMr.some((v) => v.toLowerCase().includes(query)) ||
      crop.varietiesEn.some((v) => v.toLowerCase().includes(query)) ||
      crop.keyPestsMr.some((p) => p.toLowerCase().includes(query)) ||
      crop.keyPestsEn.some((p) => p.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  return (
    <section id="crops" className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
              <span>{t('पुणे व महाराष्ट्र कृषी मार्गदर्शक', 'Pune & Maharashtra Crop Compendium')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {t('प्रमुख पिके आणि संपूर्ण शेती व्यवस्थापन', 'Major Crops & Agronomic Management')}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-stone-600">
              {t(
                'हंगाम, सुधारित वाण, खत मात्रा, ठिबक नियोजन, रोग नियंत्रण आणि स्थानिक बाजारपेठ माहिती.',
                'Seasons, high-yielding varieties, fertilizer scheduling, drip protocols, and local market tips.'
              )}
            </p>
          </div>

          {/* Category Filter Tabs (Interactive buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t(cat.labelMr, cat.labelEn)}
              </button>
            ))}
          </div>
        </div>

        {/* Crops Grid */}
        {filteredCrops.length === 0 ? (
          <div className="p-12 text-center border border-dashed border-stone-300 rounded-2xl bg-stone-50">
            <Sprout className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-stone-800">
              {t('कोणतेही पीक आढळले नाही', 'No crops found matching your search')}
            </h3>
            <p className="text-sm text-stone-500 mt-1">
              {t('कृपया वेगळा शब्द शोधा किंवा श्रेणी बदला.', 'Try another keyword or change category filter.')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCrops.map((crop) => (
              <div
                key={crop.id}
                className="group relative bg-stone-50 hover:bg-white rounded-2xl border border-stone-200 hover:border-emerald-500/50 p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Real Crop Photography */}
                  <div className="relative mb-4 overflow-hidden rounded-xl border border-stone-200 shadow-xs">
                    <AgriIllustration 
                      type={crop.id} 
                      className="w-full h-44" 
                      altText={`${t(crop.nameMr, crop.nameEn)} crop photo`} 
                    />
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-stone-900/85 backdrop-blur-xs text-white rounded-md shadow-xs border border-white/10">
                        {crop.category === 'cash' && t('नगदी पीक', 'Cash Crop')}
                        {crop.category === 'fruits' && t('फळबाग', 'Fruit Crop')}
                        {crop.category === 'vegetables' && t('भाजीपाला', 'Vegetable')}
                        {crop.category === 'grains' && t('धान्य पीक', 'Grain')}
                        {crop.category === 'spices' && t('मसाले पीक', 'Spices')}
                      </span>
                    </div>
                  </div>

                  {/* Top line metadata (unboxed text) */}
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="font-medium text-emerald-800">
                      {crop.category === 'cash' && t('नगदी पीक', 'Cash Crop')}
                      {crop.category === 'fruits' && t('फळबाग', 'Fruit Crop')}
                      {crop.category === 'vegetables' && t('भाजीपाला', 'Vegetable')}
                      {crop.category === 'grains' && t('धान्य पीक', 'Grain')}
                      {crop.category === 'spices' && t('मसाले पीक', 'Spices')}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="italic">{crop.scientificName}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {t(crop.nameMr, crop.nameEn)}
                    <span className="text-sm font-normal text-stone-500 ml-2">
                      ({t(crop.nameEn, crop.nameMr)})
                    </span>
                  </h3>

                  {/* Quick specs */}
                  <div className="mt-4 space-y-2 text-xs sm:text-sm text-stone-600">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-stone-800">{t('कालावधी: ', 'Duration: ')}</strong>
                        {t(crop.durationMr, crop.durationEn)}
                      </span>
                    </div>

                    <div className="flex items-start gap-2">
                      <Scale className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-stone-800">{t('अपेक्षित उत्पादन: ', 'Avg Yield: ')}</strong>
                        {t(crop.yieldPerAcreMr, crop.yieldPerAcreEn)}
                      </span>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">
                        <strong className="text-stone-800">{t('पुणे पट्टा: ', 'Pune Focus: ')}</strong>
                        {t(crop.puneFocusMr, crop.puneFocusEn)}
                      </span>
                    </div>
                  </div>

                  {/* Popular varieties tags */}
                  <div className="mt-4 pt-4 border-t border-stone-200">
                    <p className="text-xs font-semibold text-stone-700 mb-1.5">
                      {t('लोकप्रिय सुधारित वाण:', 'Popular Varieties:')}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(t(crop.varietiesMr.join(' · '), crop.varietiesEn.join(' · '))).split(' · ').slice(0, 3).map((v, i) => (
                        <span key={i} className="text-xs text-stone-700 bg-white border border-stone-200 px-2 py-0.5 rounded-md">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Read Guide CTA */}
                <button
                  onClick={() => setActiveCrop(crop)}
                  className="mt-6 w-full flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-700 hover:text-white rounded-xl transition-all cursor-pointer"
                >
                  <span>{t('संपूर्ण कृषी सल्ला पहा', 'Read Complete Crop Guide')}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Crop Modal / Slide-over Dialog */}
        {activeCrop && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-stone-200">
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-emerald-900 text-white px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <div>
                  <div className="text-xs text-emerald-300 font-medium">
                    {t('कृषी मार्गदर्शिका', 'Agronomy Guide')} · {activeCrop.scientificName}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                    {t(activeCrop.nameMr, activeCrop.nameEn)}
                    <span className="text-sm font-normal text-emerald-200">
                      ({t(activeCrop.nameEn, activeCrop.nameMr)})
                    </span>
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCrop(null)}
                  className="p-1.5 text-emerald-200 hover:text-white hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Visual Banner */}
                <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <div className="w-full sm:w-56 shrink-0 rounded-xl overflow-hidden shadow-sm">
                    <AgriIllustration 
                      type={activeCrop.id} 
                      className="w-full h-36 sm:h-40" 
                      altText={t(activeCrop.nameMr, activeCrop.nameEn)}
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      {t('पीक परिचय व स्थानिक महत्त्व', 'Crop Profile & Pune Regional Context')}
                    </span>
                    <h4 className="text-lg font-bold text-stone-900 mt-0.5">
                      {t(activeCrop.nameMr, activeCrop.nameEn)} ({activeCrop.scientificName})
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                      <strong>{t('पुणे जिल्हा पट्टा: ', 'Pune Focus: ')}</strong>
                      {t(activeCrop.puneFocusMr, activeCrop.puneFocusEn)}
                    </p>
                  </div>
                </div>

                {/* 1. Overview Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-emerald-50/60 rounded-xl border border-emerald-100">
                  <div>
                    <span className="text-xs text-stone-500 font-medium">{t('हंगाम / लागवड', 'Ideal Season')}</span>
                    <p className="text-sm font-semibold text-stone-900 mt-0.5">
                      {t(activeCrop.idealSeasonMr, activeCrop.idealSeasonEn)}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-medium">{t('कालावधी', 'Crop Duration')}</span>
                    <p className="text-sm font-semibold text-stone-900 mt-0.5">
                      {t(activeCrop.durationMr, activeCrop.durationEn)}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-medium">{t('उत्पादन क्षमता', 'Potential Yield')}</span>
                    <p className="text-sm font-semibold text-emerald-800 mt-0.5">
                      {t(activeCrop.yieldPerAcreMr, activeCrop.yieldPerAcreEn)}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 font-medium">{t('जमीन आवश्यकता', 'Soil Requirement')}</span>
                    <p className="text-sm font-semibold text-stone-900 mt-0.5">
                      {t(activeCrop.soilTypeMr, activeCrop.soilTypeEn)}
                    </p>
                  </div>
                </div>

                {/* 2. Varieties & Sowing */}
                <div>
                  <h4 className="text-base font-bold text-stone-900 flex items-center gap-2 mb-3">
                    <Sprout className="w-5 h-5 text-emerald-700" />
                    <span>{t('सुधारित वाण, बियाणे व बीजप्रक्रिया', 'Varieties, Sowing & Seed Treatment')}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                      <p className="text-xs font-semibold text-stone-500 mb-1">{t('शिफारस केलेले वाण:', 'Recommended Varieties:')}</p>
                      <ul className="list-disc list-inside space-y-1 text-stone-800 font-medium">
                        {(t(activeCrop.varietiesMr.join('@@'), activeCrop.varietiesEn.join('@@'))).split('@@').map((v, i) => (
                          <li key={i}>{v}</li>
                        ))}
                      </ul>
                      <p className="text-xs font-semibold text-stone-500 mt-3 mb-1">{t('बियाणे दर व अंतर:', 'Seed Rate & Spacing:')}</p>
                      <p className="text-stone-700">{t(activeCrop.seedRateMr, activeCrop.seedRateEn)}</p>
                      <p className="text-stone-700 mt-1 font-mono text-xs">{t(activeCrop.spacingMr, activeCrop.spacingEn)}</p>
                    </div>

                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                      <p className="text-xs font-semibold text-stone-500 mb-1">{t('बीजप्रक्रिया (Seed Treatment):', 'Seed Treatment:')}</p>
                      <p className="text-stone-700 leading-relaxed">{t(activeCrop.seedTreatmentMr, activeCrop.seedTreatmentEn)}</p>
                      <div className="mt-3 text-xs text-emerald-800 bg-emerald-100/50 p-2.5 rounded-lg">
                        <strong>{t('पुणे जिल्ह्यातील प्रमुख तालुके:', 'Pune Belts:')} </strong>
                        {t(activeCrop.puneFocusMr, activeCrop.puneFocusEn)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Fertilizer & Water Management */}
                <div>
                  <h4 className="text-base font-bold text-stone-900 flex items-center gap-2 mb-3">
                    <Droplets className="w-5 h-5 text-emerald-700" />
                    <span>{t('खत मात्रा व पाणी नियोजन', 'Fertilizer Dosing & Irrigation Schedule')}</span>
                  </h4>
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3 text-sm">
                    <div>
                      <strong className="text-stone-900">{t('खत नियोजन (NPK व सूक्ष्मद्रव्ये): ', 'Fertilizer Schedule: ')}</strong>
                      <span className="text-stone-700">{t(activeCrop.fertilizerDoseMr, activeCrop.fertilizerDoseEn)}</span>
                    </div>
                    <div>
                      <strong className="text-stone-900">{t('पाणी आवश्यकता: ', 'Water Requirement: ')}</strong>
                      <span className="text-stone-700">{t(activeCrop.waterNeedMr, activeCrop.waterNeedEn)}</span>
                    </div>
                  </div>
                </div>

                {/* 4. Pest & Disease Management */}
                <div>
                  <h4 className="text-base font-bold text-stone-900 flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <span>{t('प्रमुख रोग व किडी', 'Key Pests & Critical Diseases')}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(t(activeCrop.keyPestsMr.join('@@'), activeCrop.keyPestsEn.join('@@'))).split('@@').map((pest, i) => (
                      <span key={i} className="text-xs sm:text-sm font-medium bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1.5 rounded-lg">
                        {pest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. Harvesting & Market tips */}
                <div>
                  <h4 className="text-base font-bold text-stone-900 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    <span>{t('काढणी व बाजारपेठ माहिती', 'Harvesting & Market Realization')}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                      <p className="text-xs font-semibold text-stone-500 mb-1">{t('काढणीचे निकष:', 'Harvesting Criteria:')}</p>
                      <p className="text-stone-700">{t(activeCrop.harvestTipsMr, activeCrop.harvestTipsEn)}</p>
                    </div>
                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                      <p className="text-xs font-semibold text-stone-500 mb-1">{t('साठवणूक व बाजार सौदे:', 'Storage & Marketing Advice:')}</p>
                      <p className="text-stone-700">{t(activeCrop.storageMarketTipsMr, activeCrop.storageMarketTipsEn)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-stone-100 border-t border-stone-200 px-6 py-3 flex items-center justify-between rounded-b-2xl">
                <span className="text-xs text-stone-500">
                  {t('स्रोत: महात्मा फुले कृषी विद्यापीठ (राहुरी) व कृषी विभाग', 'Source: MPKV Rahuri & Dept of Agriculture')}
                </span>
                <button
                  onClick={() => setActiveCrop(null)}
                  className="px-4 py-1.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-white border border-stone-300 rounded-lg cursor-pointer"
                >
                  {t('बंद करा', 'Close')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
