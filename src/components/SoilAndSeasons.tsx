import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SOIL_DATA, SEASONS_DATA } from '../data/agriData';
import { Layers, Calendar, HelpCircle, Check, Info, Droplet, Sun, CloudRain } from 'lucide-react';

export const SoilAndSeasons: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'soil' | 'seasons' | 'testing'>('soil');

  return (
    <section id="soil-seasons" className="py-12 sm:py-16 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              <span>{t('मृदा व हवामान शास्त्र', 'Soil Science & Seasonal Agro-Meteorology')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {t('पुणे जिल्ह्यातील जमीन व पीक पेरणी वेळापत्रक', 'Soil Classification & Cropping Seasons in Pune')}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-stone-600">
              {t(
                'जमिनीचा पोत ओळखून योग्य पिकाची निवड करा आणि खरीप-रब्बी हंगामाचे अचूक नियोजन करा.',
                'Identify soil properties for optimal crop selection and master seasonal agricultural timing.'
              )}
            </p>
          </div>

          {/* Sub-navigation tabs (Interactive buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl">
            <button
              onClick={() => setActiveTab('soil')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'soil'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 inline mr-1.5" />
              {t('जमिनीचे प्रकार', 'Soil Types')}
            </button>
            <button
              onClick={() => setActiveTab('seasons')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'seasons'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 inline mr-1.5" />
              {t('हंगाम कॅलेंडर', 'Season Calendar')}
            </button>
            <button
              onClick={() => setActiveTab('testing')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'testing'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 inline mr-1.5" />
              {t('माती परीक्षण पद्धत', 'Soil Testing Guide')}
            </button>
          </div>
        </div>

        {/* 1. SOIL TYPES TAB */}
        {activeTab === 'soil' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOIL_DATA.map((soil) => (
              <div
                key={soil.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-stone-900">
                    {t(soil.nameMr, soil.nameEn)}
                  </h3>
                </div>

                <p className="text-xs text-emerald-800 font-medium mb-3">
                  📍 {t(soil.regionsMr, soil.regionsEn)}
                </p>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1.5">
                      {t('महत्त्वाची वैशिष्ट्ये:', 'Key Characteristics:')}
                    </h4>
                    <ul className="space-y-1 text-stone-600">
                      {(t(soil.featuresMr.join('@@'), soil.featuresEn.join('@@'))).split('@@').map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-stone-100">
                    <h4 className="font-semibold text-stone-800 mb-1.5">
                      {t('योग्य पिके:', 'Suitable Crops:')}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {(t(soil.suitableCropsMr.join('@@'), soil.suitableCropsEn.join('@@'))).split('@@').map((c, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs bg-emerald-50 text-emerald-800 rounded-md border border-emerald-100">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-100">
                    <h4 className="font-semibold text-stone-800 mb-1.5">
                      {t('सुधारणा व मशागत सल्ला:', 'Soil Improvement & Tilth Tips:')}
                    </h4>
                    <ul className="space-y-1 text-stone-600">
                      {(t(soil.improvementTipsMr.join('@@'), soil.improvementTipsEn.join('@@'))).split('@@').map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-1" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. SEASONS CALENDAR TAB */}
        {activeTab === 'seasons' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SEASONS_DATA.map((season) => (
                <div
                  key={season.id}
                  className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {season.id === 'kharif' && <CloudRain className="w-5 h-5 text-sky-600" />}
                      {season.id === 'rabi' && <Droplet className="w-5 h-5 text-indigo-600" />}
                      {season.id === 'summer' && <Sun className="w-5 h-5 text-amber-500" />}
                      <h3 className="text-lg font-bold text-stone-900">
                        {t(season.nameMr, season.nameEn)}
                      </h3>
                    </div>

                    <div className="text-xs font-semibold text-emerald-800 mb-3 bg-emerald-50 p-2 rounded-lg">
                      ⏱ {t(season.periodMr, season.periodEn)}
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                      {t(season.descriptionMr, season.descriptionEn)}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-stone-800 mb-1.5">
                        {t('हंगामातील मुख्य पिके:', 'Primary Season Crops:')}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {(t(season.keyCropsMr.join('@@'), season.keyCropsEn.join('@@'))).split('@@').map((crop, i) => (
                          <span key={i} className="text-xs bg-stone-100 text-stone-800 px-2 py-0.5 rounded-md">
                            {crop}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100">
                    <p className="text-xs font-semibold text-stone-800 mb-1.5">
                      {t('महत्त्वाचा शेतकरी सल्ला:', 'Crucial Agronomy Tips:')}
                    </p>
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {(t(season.farmerTipsMr.join('@@'), season.farmerTipsEn.join('@@'))).split('@@').map((tip, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-700 font-bold">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Bahar note for Pune fruit growers */}
            <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-2xl">
              <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-1">
                <Info className="w-4 h-4 text-amber-700" />
                {t('फळबागांसाठी बहार व्यवस्थापन (डाळिंब व पेरू विशेष)', 'Fruit Orchard Bahar Management (Pomegranate & Guava)')}
              </h4>
              <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                {t(
                  'पुणे जिल्ह्यात डाळिंबासाठी "हस्त बहार" (सप्टेंबर-ऑक्टोबर) अत्यंत अनुकूल ठरतो कारण यामुळे पावसाळ्यातील तेल्या व करपा रोगाचा धोका टळतो. मृग बहार जूनमध्ये येतो पण पावसाळ्यात रोगांचा प्रादुर्भाव जास्त असतो. आंबे बहार जानेवारीमध्ये घेतला जातो.',
                  'In Pune district, "Hasta Bahar" (Sept-Oct water withholding) is most profitable for pomegranates to sidestep monsoon bacterial blight. Mrug Bahar flowers in June but suffers severe disease pressure during wet spells.'
                )}
              </p>
            </div>
          </div>
        )}

        {/* 3. SOIL TESTING GUIDE TAB */}
        {activeTab === 'testing' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              {t('माती परीक्षण (Soil Testing) कसे करावे? संपूर्ण कृती', 'Standard Soil Sampling & Health Card Protocol')}
            </h3>
            <p className="text-sm text-stone-600 mb-6">
              {t(
                'खतांवर होणारा हजारो रुपयांचा अनावश्यक खर्च टाळण्यासाठी आणि जमिनीची सुपीकता टिकवण्यासाठी दर ३ वर्षांनी माती परीक्षण करणे आवश्यक आहे.',
                'Conduct soil testing once every 3 years to slash unneeded fertilizer costs and restore optimum soil organic balance.'
              )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <div className="w-7 h-7 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm mb-2">
                  १
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  {t('जागेची निवड', 'Spot Selection')}
                </h4>
                <p className="text-xs text-stone-600">
                  {t(
                    'झाडाखालील, खताच्या ढिगाऱ्याजवळील किंवा पाणथळ जागा सोडून शेताच्या मध्यभागी नागमोडी (V-Shape) ५ ते ८ जागा निवडा.',
                    'Select 5 to 8 zigzag spots across the farm; avoid tree shades, manure piles, or waterlogged spots.'
                  )}
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <div className="w-7 h-7 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm mb-2">
                  २
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  {t('खड्डा खोदणे', 'Dig V-Shaped Trench')}
                </h4>
                <p className="text-xs text-stone-600">
                  {t(
                    'हंगामी पिकांसाठी १५ सेंमी (६ इंच) आणि फळबागांसाठी ६० ते ९० सेंमी खोल ‘V’ आकाराचा खड्डा खणून बाजूचा मातीचा पापुद्रा काढा.',
                    'Dig 15 cm deep for field crops and 60-90 cm for fruit orchards. Collect an even slice of soil.'
                  )}
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <div className="w-7 h-7 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm mb-2">
                  ३
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  {t('नमुना गोळा करणे', 'Sample Reduction')}
                </h4>
                <p className="text-xs text-stone-600">
                  {t(
                    'सर्व माती एका स्वच्छ गोणपाटावर एकत्र मिसळा, गोल करा आणि चार समान भाग करून अर्धा किलो माती शिल्लक ठेवा.',
                    'Thoroughly blend the composite soil, make a circle, quarter it crosswise until ~500 grams remains.'
                  )}
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <div className="w-7 h-7 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm mb-2">
                  ४
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  {t('लॅबमध्ये पाठवणे', 'Dispatch to Lab')}
                </h4>
                <p className="text-xs text-stone-600">
                  {t(
                    'सावलीत सुकवून कापडी पिशवीत भरा. नाव, गट नंबर, ७/१२ आणि पुढील पिकाचे नाव लिहून KVK किंवा कृषी महाविद्यालयात द्या.',
                    'Shade-dry, place in clean cloth bag with 7/12 land survey details, and submit to KVK or Agri College Pune lab.'
                  )}
                </p>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-stone-700">
              <strong className="text-emerald-900">{t('पुणे जिल्ह्यातील अधिकृत माती परीक्षण प्रयोगशाळा:', 'Authorized Soil Testing Laboratories in Pune:')} </strong>
              <span>
                {t(
                  'कृषी महाविद्यालय पुणे (शिवाजीनगर), KVK बारामती, KVK नारायणगाव आणि प्रत्येक तालुका कृषी अधिकारी (TAO) कार्यालय.',
                  'College of Agriculture Pune (Shivajinagar), KVK Baramati, KVK Narayangaon, and all Taluka Agriculture Offices.'
                )}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
