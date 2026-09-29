import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, Sparkles, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';

interface CropFertilizerProfile {
  id: string;
  nameMr: string;
  nameEn: string;
  nKgPerAcre: number;
  pKgPerAcre: number;
  kKgPerAcre: number;
  sulphurKg: number;
  splitsMr: string[];
  splitsEn: string[];
}

const CROP_PROFILES: CropFertilizerProfile[] = [
  {
    id: 'sugarcane',
    nameMr: 'ऊस (Adsali/Pre-seasonal)',
    nameEn: 'Sugarcane',
    nKgPerAcre: 160,
    pKgPerAcre: 68,
    kKgPerAcre: 68,
    sulphurKg: 20,
    splitsMr: [
      '१. लागवडीवेळी (१०%): बेसल डोस म्हणून संपूर्ण स्फुरद व पालाश आणि थोडे नत्र',
      '२. ६ ते ८ आठवड्यांनी (४०%): फुटवे निघताना नत्राचा पहिला हप्ता',
      '३. १२ ते १४ आठवड्यांनी (१०%): मधली बांधणी करताना खत देणे',
      '४. मोठा बांधणीवेळी (४०%): शेवटचा नत्र व पालाशचा हप्ता देऊन मातीची भर लावावी'
    ],
    splitsEn: [
      '1. At planting (10%): Basal dose with full Phosphorus and Potash + start Nitrogen',
      '2. 6-8 weeks (40%): Tillering stage Nitrogen boost',
      '3. 12-14 weeks (10%): Sub-earthing up fertilizer dressing',
      '4. Final earthing up (40%): Big earthing up Nitrogen & Potash dose followed by earthing up'
    ]
  },
  {
    id: 'onion',
    nameMr: 'कांदा (खरीप / रब्बी)',
    nameEn: 'Onion (Kharif / Rabi)',
    nKgPerAcre: 40,
    pKgPerAcre: 20,
    kKgPerAcre: 20,
    sulphurKg: 15,
    splitsMr: [
      '१. पुनर्लागवडीवेळी: ५०% नत्र + १००% स्फुरद + १००% पालाश + १५ किलो गंधक',
      '२. लागवडीनंतर ३० दिवसांनी: २५% नत्र (युरिया) पहिला हप्ता',
      '३. लागवडीनंतर ४५ दिवसांनी: उर्वरित २५% नत्र (कांदा पोसण्यापूर्वी खत देणे थांबवावे)'
    ],
    splitsEn: [
      '1. Transplanting: 50% N + 100% P + 100% K + 15 kg Sulphur',
      '2. 30 days after transplanting: 25% Nitrogen top dress',
      '3. 45 days after transplanting: Remaining 25% N (Stop Nitrogen post 60 days to prevent thick necks)'
    ]
  },
  {
    id: 'tomato',
    nameMr: 'टोमॅटो (हायब्रीड)',
    nameEn: 'Tomato (Hybrid)',
    nKgPerAcre: 120,
    pKgPerAcre: 60,
    kKgPerAcre: 60,
    sulphurKg: 12,
    splitsMr: [
      '१. लागवडीपूर्वी बेसल डोस: ३०% नत्र, १००% स्फुरद आणि ५०% पालाश गादीवाफ्यावर मिसळावे',
      '२. फुलोरा सुरू होताना: ३०% नत्र व सूक्ष्म अन्नद्रव्ये ठिबकद्वारे द्यावीत',
      '३. फळधारणेच्या काळात: ४०% नत्र आणि ५०% पालाश (००:५२:३४ किंवा ००:००:५०) द्यावे'
    ],
    splitsEn: [
      '1. Basal at bed preparation: 30% N + 100% P + 50% K mixed in soil',
      '2. Flowering initiation: 30% N + micronutrients via fertigation',
      '3. Fruit setting & sizing: 40% N + 50% K (00:52:34 or 00:00:50)'
    ]
  },
  {
    id: 'soybean',
    nameMr: 'सोयाबीन (फुले संगम / जेएस ३३५)',
    nameEn: 'Soybean',
    nKgPerAcre: 12,
    pKgPerAcre: 30,
    kKgPerAcre: 15,
    sulphurKg: 10,
    splitsMr: [
      '१. पेरणीवेळी: संपूर्ण खत मात्रा (१२:३०:१५ किलो) + १० किलो गंधक पेरणी यंत्राने २ इंच खाली द्यावी',
      'टीप: सोयाबीनच्या मुळांवरील गाठी हवेतील नत्र शोषून घेतात, म्हणून जास्त युरिया देऊ नये.'
    ],
    splitsEn: [
      '1. At sowing: Apply full dose (12:30:15 kg) + 10 kg Sulphur drilled below seed depth',
      'Note: Root nodules fix biological nitrogen, avoid excess urea.'
    ]
  },
  {
    id: 'wheat',
    nameMr: 'गहू (बागायती)',
    nameEn: 'Wheat (Irrigated)',
    nKgPerAcre: 48,
    pKgPerAcre: 24,
    kKgPerAcre: 16,
    sulphurKg: 10,
    splitsMr: [
      '१. पेरणीवेळी: ५०% नत्र (२४ किलो) + १००% स्फुरद (२४ किलो) + १००% पालाश (१६ किलो)',
      '२. पहिल्या पाण्यावेळी (२१ दिवसांनी - मुकुट मुळे फुटताना): उरलेले ५०% नत्र (२४ किलो युरिया)'
    ],
    splitsEn: [
      '1. At sowing: 50% N (24 kg) + 100% P (24 kg) + 100% K (16 kg)',
      '2. First irrigation (21 days - CRI stage): Remaining 50% N (24 kg urea)'
    ]
  },
  {
    id: 'bajra',
    nameMr: 'बाजरी (कोरडवाहू / बागायती)',
    nameEn: 'Pearl Millet (Bajra)',
    nKgPerAcre: 25,
    pKgPerAcre: 12,
    kKgPerAcre: 12,
    sulphurKg: 8,
    splitsMr: [
      '१. पेरणीवेळी: ५०% नत्र व संपूर्ण स्फुरद आणि पालाश',
      '२. पेरणीनंतर २५ ते ३० दिवसांनी: उरलेले ५०% नत्र जमिनीत ओलावा असताना द्यावे'
    ],
    splitsEn: [
      '1. At sowing: 50% N + full P and K',
      '2. 25-30 days after sowing: Remaining 50% N top dressing when soil is moist'
    ]
  }
];

export const FertilizerCalculator: React.FC = () => {
  const { t } = useLanguage();

  const [selectedCropId, setSelectedCropId] = useState<string>('sugarcane');
  const [areaUnit, setAreaUnit] = useState<'acre' | 'guntha'>('acre');
  const [areaValue, setAreaValue] = useState<number>(1);
  const [fertilizerStrategy, setFertilizerStrategy] = useState<'dap_urea_mop' | 'complex_10_26_26' | 'ssp_urea_mop'>('dap_urea_mop');

  const crop = CROP_PROFILES.find((c) => c.id === selectedCropId) || CROP_PROFILES[0];

  // Convert area to Acre
  const areaInAcres = areaUnit === 'acre' ? Math.max(0.1, areaValue) : Math.max(1, areaValue) / 40;

  // Pure nutrient calculations
  const totalN = Math.round(crop.nKgPerAcre * areaInAcres * 10) / 10;
  const totalP = Math.round(crop.pKgPerAcre * areaInAcres * 10) / 10;
  const totalK = Math.round(crop.kKgPerAcre * areaInAcres * 10) / 10;
  const totalS = Math.round(crop.sulphurKg * areaInAcres * 10) / 10;

  // Commercial bag calculations (50kg standard bag)
  // Strategy 1: DAP (18:46:0) + Urea (46:0:0) + MOP (0:0:60)
  // DAP needed to satisfy P:
  const dapKg = Math.round((totalP / 0.46));
  const nSuppliedByDap = dapKg * 0.18;
  const remainingNForUrea = Math.max(0, totalN - nSuppliedByDap);
  const ureaKgStrat1 = Math.round(remainingNForUrea / 0.46);
  const mopKgStrat1 = Math.round(totalK / 0.60);

  // Strategy 2: 10:26:26 + Urea (46:0:0)
  // 10:26:26 needed to satisfy P:
  const complexKg = Math.round(totalP / 0.26);
  const nSuppliedByComplex = complexKg * 0.10;
  const kSuppliedByComplex = complexKg * 0.26;
  const remainingNForComplexUrea = Math.max(0, totalN - nSuppliedByComplex);
  const ureaKgStrat2 = Math.round(remainingNForComplexUrea / 0.46);
  const extraKNeeded = Math.max(0, totalK - kSuppliedByComplex);
  const mopKgStrat2 = Math.round(extraKNeeded / 0.60);

  // Strategy 3: SSP (0:16:0) + Urea + MOP
  const sspKg = Math.round(totalP / 0.16);
  const ureaKgStrat3 = Math.round(totalN / 0.46);
  const mopKgStrat3 = Math.round(totalK / 0.60);

  return (
    <section id="calculator" className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            <span>{t('अचूक खत गणक व मात्रा', 'Interactive Fertilizer Dosing Calculator')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {t('खत नियोजन व गोणी (Bags) कॅल्क्युलेटर', 'Crop NPK Fertilizer & 50kg Bags Calculator')}
          </h2>
          <p className="mt-1 text-sm sm:text-base text-stone-600">
            {t(
              'तुमचे पीक, क्षेत्र आणि उपलब्ध खतांची निवड करा; लागणारे युरिया, डीएपी, पोटॅश आणि १०:२६:२६ च्या अचूक गोण्यांची गणना करा.',
              'Input your crop, land acreage, and fertilizer source to calculate exact commercial 50kg bags required.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Input Controls Panel (5 cols) */}
          <div className="lg:col-span-5 bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-6">
            {/* 1. Crop Selection */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                {t('१. पीक निवडा', '1. Select Crop')}
              </label>
              <select
                value={selectedCropId}
                onChange={(e) => setSelectedCropId(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                {CROP_PROFILES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {t(c.nameMr, c.nameEn)}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Land Area */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  {t('२. जमिनीचे क्षेत्र', '2. Land Area')}
                </label>
                {/* Unit Switcher */}
                <div className="flex items-center gap-1 bg-stone-200 p-0.5 rounded-lg text-xs">
                  <button
                    onClick={() => setAreaUnit('acre')}
                    className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                      areaUnit === 'acre' ? 'bg-white text-emerald-900 shadow-xs' : 'text-stone-600'
                    }`}
                  >
                    {t('एकर (Acre)', 'Acre')}
                  </button>
                  <button
                    onClick={() => {
                      setAreaUnit('guntha');
                      if (areaValue === 1) setAreaValue(20);
                    }}
                    className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer ${
                      areaUnit === 'guntha' ? 'bg-white text-emerald-900 shadow-xs' : 'text-stone-600'
                    }`}
                  >
                    {t('गुंठे (Guntha)', 'Guntha')}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="0.1"
                  step={areaUnit === 'acre' ? '0.5' : '1'}
                  value={areaValue}
                  onChange={(e) => setAreaValue(parseFloat(e.target.value) || 0)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <span className="text-sm font-semibold text-stone-600 shrink-0">
                  {areaUnit === 'acre' ? t('एकर', 'Acres') : t('गुंठे (४० गुंठे = १ एकर)', 'Gunthas')}
                </span>
              </div>
            </div>

            {/* 3. Fertilizer Source Regime */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                {t('३. खतांचा प्रकार / पर्याय', '3. Preferred Fertilizer Source')}
              </label>
              <div className="space-y-2">
                <label className="flex items-start gap-3 p-3 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-emerald-600 transition-colors">
                  <input
                    type="radio"
                    name="strat"
                    checked={fertilizerStrategy === 'dap_urea_mop'}
                    onChange={() => setFertilizerStrategy('dap_urea_mop')}
                    className="mt-1 text-emerald-700 focus:ring-emerald-600"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-stone-900">
                      {t('डीएपी + युरिया + म्युरेट ऑफ पोटॅश (MOP)', 'DAP + Urea + MOP (Muriate of Potash)')}
                    </span>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {t('शेतकऱ्यांमध्ये सर्वाधिक वापरला जाणारा पर्याय', 'Most popular conventional combination')}
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-emerald-600 transition-colors">
                  <input
                    type="radio"
                    name="strat"
                    checked={fertilizerStrategy === 'complex_10_26_26'}
                    onChange={() => setFertilizerStrategy('complex_10_26_26')}
                    className="mt-1 text-emerald-700 focus:ring-emerald-600"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-stone-900">
                      {t('संयुक्त खत १०:२६:२६ + युरिया', 'Complex 10:26:26 + Urea')}
                    </span>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {t('ऊस व कांद्यासाठी संतुलित पालाश व स्फुरद', 'Balanced P & K for sugarcane and onion')}
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-emerald-600 transition-colors">
                  <input
                    type="radio"
                    name="strat"
                    checked={fertilizerStrategy === 'ssp_urea_mop'}
                    onChange={() => setFertilizerStrategy('ssp_urea_mop')}
                    className="mt-1 text-emerald-700 focus:ring-emerald-600"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-stone-900">
                      {t('सिंगल सुपर फॉस्फेट (SSP) + युरिया + MOP', 'Single Super Phosphate (SSP) + Urea + MOP')}
                    </span>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {t('एसएसपीमुळे मोफत गंधक व कॅल्शियम मिळते', 'SSP supplies essential Sulphur and Calcium')}
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Results Display Panel (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pure Nutrient Summary */}
            <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800">
                <div>
                  <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                    {t('एकूण आवश्यक शुद्ध अन्नद्रव्ये', 'Net Nutrient Requirement')}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {t(crop.nameMr, crop.nameEn)} ({areaValue} {areaUnit === 'acre' ? t('एकर', 'Acres') : t('गुंठे', 'Gunthas')})
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-800/80 flex items-center justify-center text-emerald-200">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 pt-5 text-center">
                <div className="bg-emerald-900/60 p-3 rounded-xl border border-emerald-800">
                  <span className="text-xs text-emerald-200 font-medium">{t('नत्र (N)', 'Nitrogen (N)')}</span>
                  <p className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                    {totalN} <span className="text-xs font-normal">कि.ग्रा.</span>
                  </p>
                </div>
                <div className="bg-emerald-900/60 p-3 rounded-xl border border-emerald-800">
                  <span className="text-xs text-emerald-200 font-medium">{t('स्फुरद (P)', 'Phosphorus (P)')}</span>
                  <p className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                    {totalP} <span className="text-xs font-normal">कि.ग्रा.</span>
                  </p>
                </div>
                <div className="bg-emerald-900/60 p-3 rounded-xl border border-emerald-800">
                  <span className="text-xs text-emerald-200 font-medium">{t('पालाश (K)', 'Potash (K)')}</span>
                  <p className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                    {totalK} <span className="text-xs font-normal">कि.ग्रा.</span>
                  </p>
                </div>
                <div className="bg-emerald-900/60 p-3 rounded-xl border border-emerald-800 col-span-3 sm:col-span-1">
                  <span className="text-xs text-amber-200 font-medium">{t('गंधक (S)', 'Sulphur (S)')}</span>
                  <p className="text-xl sm:text-2xl font-bold font-mono text-amber-300 mt-1 tabular-nums">
                    {totalS} <span className="text-xs font-normal">कि.ग्रा.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Exact Commercial 50kg Bags Calculation */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
              <h4 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-700" />
                <span>{t('खरेदी करावयाच्या खतांच्या ५० किलो गोण्या (Bags):', 'Commercial 50kg Bags to Purchase:')}</span>
              </h4>

              {fertilizerStrategy === 'dap_urea_mop' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                    <p className="text-xs text-stone-500 font-semibold">{t('डीएपी (DAP 18:46:0)', 'DAP (18:46:0)')}</p>
                    <p className="text-2xl font-extrabold text-stone-900 font-mono mt-1 tabular-nums">
                      {(dapKg / 50).toFixed(1)} <span className="text-xs font-medium text-stone-500">{t('गोण्या', 'Bags')}</span>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">({dapKg} {t('किलो', 'kg')})</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                    <p className="text-xs text-stone-500 font-semibold">{t('युरिया (Urea 46% N)', 'Urea (46% N)')}</p>
                    <p className="text-2xl font-extrabold text-stone-900 font-mono mt-1 tabular-nums">
                      {(ureaKgStrat1 / 50).toFixed(1)} <span className="text-xs font-medium text-stone-500">{t('गोण्या', 'Bags')}</span>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">({ureaKgStrat1} {t('किलो', 'kg')})</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                    <p className="text-xs text-stone-500 font-semibold">{t('पोटॅश (MOP 60% K)', 'MOP Potash (60% K)')}</p>
                    <p className="text-2xl font-extrabold text-stone-900 font-mono mt-1 tabular-nums">
                      {(mopKgStrat1 / 50).toFixed(1)} <span className="text-xs font-medium text-stone-500">{t('गोण्या', 'Bags')}</span>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">({mopKgStrat1} {t('किलो', 'kg')})</p>
                  </div>
                </div>
              )}

              {fertilizerStrategy === 'complex_10_26_26' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                    <p className="text-xs text-stone-500 font-semibold">{t('१०:२६:२६ संयुक्त खत', 'Complex 10:26:26')}</p>
                    <p className="text-2xl font-extrabold text-stone-900 font-mono mt-1 tabular-nums">
                      {(complexKg / 50).toFixed(1)} <span className="text-xs font-medium text-stone-500">{t('गोण्या', 'Bags')}</span>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">({complexKg} {t('किलो', 'kg')})</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                    <p className="text-xs text-stone-500 font-semibold">{t('युरिया (Urea)', 'Urea')}</p>
                    <p className="text-2xl font-extrabold text-stone-900 font-mono mt-1 tabular-nums">
                      {(ureaKgStrat2 / 50).toFixed(1)} <span className="text-xs font-medium text-stone-500">{t('गोण्या', 'Bags')}</span>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">({ureaKgStrat2} {t('किलो', 'kg')})</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                    <p className="text-xs text-stone-500 font-semibold">{t('अतिरिक्त पोटॅश (लागू असल्यास)', 'MOP Potash (balance)')}</p>
                    <p className="text-2xl font-extrabold text-stone-900 font-mono mt-1 tabular-nums">
                      {(mopKgStrat2 / 50).toFixed(1)} <span className="text-xs font-medium text-stone-500">{t('गोण्या', 'Bags')}</span>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">({mopKgStrat2} {t('किलो', 'kg')})</p>
                  </div>
                </div>
              )}

              {fertilizerStrategy === 'ssp_urea_mop' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                    <p className="text-xs text-stone-500 font-semibold">{t('सिंगल सुपर फॉस्फेट (SSP)', 'Single Super Phosphate (SSP)')}</p>
                    <p className="text-2xl font-extrabold text-stone-900 font-mono mt-1 tabular-nums">
                      {(sspKg / 50).toFixed(1)} <span className="text-xs font-medium text-stone-500">{t('गोण्या', 'Bags')}</span>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">({sspKg} {t('किलो', 'kg')})</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                    <p className="text-xs text-stone-500 font-semibold">{t('युरिया (Urea)', 'Urea')}</p>
                    <p className="text-2xl font-extrabold text-stone-900 font-mono mt-1 tabular-nums">
                      {(ureaKgStrat3 / 50).toFixed(1)} <span className="text-xs font-medium text-stone-500">{t('गोण्या', 'Bags')}</span>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">({ureaKgStrat3} {t('किलो', 'kg')})</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
                    <p className="text-xs text-stone-500 font-semibold">{t('म्युरेट ऑफ पोटॅश (MOP)', 'MOP Potash')}</p>
                    <p className="text-2xl font-extrabold text-stone-900 font-mono mt-1 tabular-nums">
                      {(mopKgStrat3 / 50).toFixed(1)} <span className="text-xs font-medium text-stone-500">{t('गोण्या', 'Bags')}</span>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">({mopKgStrat3} {t('किलो', 'kg')})</p>
                  </div>
                </div>
              )}
            </div>

            {/* Split Dose Schedule */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
              <h4 className="text-sm font-bold text-stone-900 mb-2">
                {t('खतांचे हप्ते विभागणी (Split Application Schedule):', 'Application Timing & Split Dosing:')}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                {(t(crop.splitsMr.join('@@'), crop.splitsEn.join('@@'))).split('@@').map((split, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{split}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
