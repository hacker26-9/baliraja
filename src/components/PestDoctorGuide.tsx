import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PEST_PROBLEMS } from '../data/agriData';
import { Bug, Leaf, AlertOctagon, CheckCircle2, ShieldAlert } from 'lucide-react';

interface PestDoctorGuideProps {
  searchQuery: string;
}

export const PestDoctorGuide: React.FC<PestDoctorGuideProps> = ({ searchQuery }) => {
  const { t } = useLanguage();
  const [filterType, setFilterType] = useState<'all' | 'pest' | 'disease'>('all');

  const filteredPests = PEST_PROBLEMS.filter((item) => {
    const matchesType = filterType === 'all' || item.type === filterType;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesType;

    const matchesQuery =
      item.cropNameMr.toLowerCase().includes(query) ||
      item.cropNameEn.toLowerCase().includes(query) ||
      item.problemNameMr.toLowerCase().includes(query) ||
      item.problemNameEn.toLowerCase().includes(query) ||
      item.symptomsMr.toLowerCase().includes(query) ||
      item.symptomsEn.toLowerCase().includes(query);

    return matchesType && matchesQuery;
  });

  return (
    <section id="pests" className="py-12 sm:py-16 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
              <span>{t('पिकांचे डॉक्टर व कीड व्यवस्थापन', 'Crop Doctor & Integrated Pest Management')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {t('रोग व कीड नियंत्रण मार्गदर्शिका (IPM Guide)', 'Pest & Disease Diagnosis with Organic & Chemical Remedies')}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-stone-600">
              {t(
                'लक्षणे ओळखा, दशपर्णी अर्क व जैविक मित्र बुरशीचे सेंद्रिय उपाय आणि अधिकृत औषधांचे अचूक प्रमाण जाणून घ्या.',
                'Identify field symptoms early; apply biological Trichoderma/Neem formulations or calibrated chemical controls.'
              )}
            </p>
          </div>

          {/* Filter Type Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl shrink-0">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                filterType === 'all'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              {t('सर्व समस्या', 'All Problems')}
            </button>
            <button
              onClick={() => setFilterType('pest')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                filterType === 'pest'
                  ? 'bg-white text-amber-900 shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Bug className="w-3.5 h-3.5 inline mr-1 text-amber-700" />
              {t('किडी (Insects/Pests)', 'Insect Pests')}
            </button>
            <button
              onClick={() => setFilterType('disease')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                filterType === 'disease'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <AlertOctagon className="w-3.5 h-3.5 inline mr-1 text-emerald-700" />
              {t('रोग (Diseases/Fungus)', 'Crop Diseases')}
            </button>
          </div>
        </div>

        {/* Problems List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPests.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span className="font-semibold text-emerald-800">
                  🌱 {t(item.cropNameMr, item.cropNameEn)}
                </span>
                <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-stone-100 text-stone-700">
                  {item.type === 'pest' ? t('कीड प्रादुर्भाव', 'Insect Pest') : t('बुरशीजन्य/जिवाणू रोग', 'Bacterial/Fungal')}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-stone-900">
                {t(item.problemNameMr, item.problemNameEn)}
              </h3>

              {/* Symptoms */}
              <div className="mt-3 p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs sm:text-sm">
                <strong className="text-stone-900 block mb-1">
                  🔍 {t('लक्षणे (Symptoms):', 'Field Symptoms:')}
                </strong>
                <p className="text-stone-700 leading-relaxed">
                  {t(item.symptomsMr, item.symptomsEn)}
                </p>
              </div>

              {/* Organic Remedy Box */}
              <div className="mt-3 p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs sm:text-sm">
                <strong className="text-emerald-900 flex items-center gap-1.5 mb-1 font-bold">
                  <Leaf className="w-4 h-4 text-emerald-700" />
                  <span>{t('सेंद्रिय व जैविक उपाय (Organic/Biological):', 'Organic & Bio-Control:')}</span>
                </strong>
                <p className="text-emerald-950 leading-relaxed">
                  {t(item.organicRemedyMr, item.organicRemedyEn)}
                </p>
              </div>

              {/* Chemical Remedy Box */}
              <div className="mt-3 p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs sm:text-sm">
                <strong className="text-amber-900 flex items-center gap-1.5 mb-1 font-bold">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  <span>{t('शिफारस केलेले रासायनिक औषध व प्रमाण:', 'Chemical Control & Dose:')}</span>
                </strong>
                <p className="text-amber-950 leading-relaxed">
                  {t(item.chemicalRemedyMr, item.chemicalRemedyEn)}
                </p>
              </div>

              {/* Preventive Cultivation Tip */}
              <div className="mt-3 pt-3 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-stone-800">{t('प्रतिबंधक खबरदारी: ', 'Prevention: ')}</strong>
                  {t(item.preventiveTipsMr, item.preventiveTipsEn)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
