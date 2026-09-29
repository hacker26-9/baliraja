import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PUNE_CROP_CALENDAR, MonthCalendarData } from '../data/cropCalendarData';
import { 
  Calendar, 
  Thermometer, 
  CloudRain, 
  Sprout, 
  Scissors, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export const CropCalendar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  // Initialize with current calendar month (1-indexed: 1 = Jan, 9 = Sep, etc.)
  const currentMonthIndex = new Date().getMonth() + 1;
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(currentMonthIndex);
  const [cropFilter, setCropFilter] = useState<string>('');
  const [viewMode, setViewMode] = useState<'detail' | 'matrix'>('detail');

  const selectedMonth: MonthCalendarData = 
    PUNE_CROP_CALENDAR.find((m) => m.monthIndex === selectedMonthIndex) || PUNE_CROP_CALENDAR[0];

  const handlePrevMonth = () => {
    setSelectedMonthIndex((prev) => (prev === 1 ? 12 : prev - 1));
  };

  const handleNextMonth = () => {
    setSelectedMonthIndex((prev) => (prev === 12 ? 1 : prev + 1));
  };

  // Filter months if searching for a specific crop across the year
  const matchingMonthsForCrop = cropFilter.trim()
    ? PUNE_CROP_CALENDAR.filter((m) => {
        const q = cropFilter.trim().toLowerCase();
        return (
          m.sowingCropsMr.some((c) => c.toLowerCase().includes(q)) ||
          m.sowingCropsEn.some((c) => c.toLowerCase().includes(q)) ||
          m.harvestingCropsMr.some((c) => c.toLowerCase().includes(q)) ||
          m.harvestingCropsEn.some((c) => c.toLowerCase().includes(q)) ||
          m.maintenanceTasksMr.some((task) => task.toLowerCase().includes(q)) ||
          m.maintenanceTasksEn.some((task) => task.toLowerCase().includes(q))
        );
      })
    : [];

  return (
    <section id="crop-calendar" className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4 text-emerald-700" />
              <span>{t('पुणे जिल्हा कृषी वेळापत्रक · १२ महिने मार्गदर्शक', 'Pune Regional Agro-Calendar · 12 Month Guide')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {t('पुणे हवामानानुसार महिना-वार पीक दिनदर्शिका', 'Month-by-Month Crop Calendar for Pune Region')}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-stone-600 max-w-3xl">
              {t(
                'पुण्याच्या हवामानानुसार दर महिन्याची पेरणी, काढणी, द्राक्ष-डाळिंब छाटणी आणि खत व्यवस्थापनाचे शास्त्रोक्त वेळापत्रक.',
                'A climate-grounded monthly agronomic roadmap for sowing, harvesting, pruning, and field maintenance across Pune district.'
              )}
            </p>
          </div>

          {/* Action Area: In-Component Marathi / English Toggle + View Switcher */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Dedicated Language Toggle requested by user */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-medium">
              <button
                onClick={() => setLang('mr')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  lang === 'mr'
                    ? 'bg-emerald-800 text-white font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                मराठी
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-emerald-800 text-white font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                English
              </button>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-medium">
              <button
                onClick={() => setViewMode('detail')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'detail'
                    ? 'bg-white text-emerald-950 font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t('तपशीलवार महिना', 'Monthly Details')}
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-white text-emerald-950 font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {t('वार्षिक तक्ता', 'Annual Matrix')}
              </button>
            </div>
          </div>
        </div>

        {/* Crop Quick Finder Input */}
        <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-200">
          <div className="flex items-center gap-2 flex-1">
            <Search className="w-4 h-4 text-stone-400 shrink-0 ml-1" />
            <input
              type="text"
              value={cropFilter}
              onChange={(e) => setCropFilter(e.target.value)}
              placeholder={t(
                'विशिष्ट पिकाचे महिने शोधा (उदा. कांदा, ऊस, द्राक्षे, सोयाबीन, गहू)...',
                'Find which months an individual crop is sown/harvested (e.g., Onion, Cane, Grapes, Wheat)...'
              )}
              className="w-full bg-transparent text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none"
            />
            {cropFilter && (
              <button
                onClick={() => setCropFilter('')}
                className="text-xs text-stone-500 hover:text-stone-800 font-semibold px-2 py-0.5"
              >
                {t('साफ करा', 'Clear')}
              </button>
            )}
          </div>

          {cropFilter && (
            <div className="text-xs text-emerald-800 font-medium shrink-0 px-2">
              <span>
                {matchingMonthsForCrop.length} {t('महिन्यांमध्ये कामे आढळली', 'months with scheduled operations')}
              </span>
            </div>
          )}
        </div>

        {/* 12-Month Selector Strip */}
        <div className="mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
            {PUNE_CROP_CALENDAR.map((month) => {
              const isSelected = month.monthIndex === selectedMonthIndex;
              const isCurrent = month.monthIndex === currentMonthIndex;
              const hasMatchingCrop = cropFilter.trim() && matchingMonthsForCrop.some((m) => m.monthIndex === month.monthIndex);

              return (
                <button
                  key={month.monthIndex}
                  onClick={() => {
                    setSelectedMonthIndex(month.monthIndex);
                    setViewMode('detail');
                  }}
                  className={`flex-1 min-w-[90px] sm:min-w-[100px] py-2.5 px-2 rounded-xl text-center transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm scale-102'
                      : hasMatchingCrop
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-400 font-bold'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold truncate">
                    {lang === 'mr' ? month.nameMr.split(' ')[0] : month.nameEn}
                  </div>
                  <div className={`text-[10px] sm:text-xs mt-0.5 ${isSelected ? 'text-emerald-200' : 'text-stone-500'}`}>
                    {isCurrent ? `● ${t('सध्या', 'Current')}` : month.tempRange.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* VIEW 1: MONTHLY DETAILS CARD */}
        {viewMode === 'detail' && (
          <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
            {/* Month Header Banner */}
            <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-stone-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-emerald-300 font-medium">
                  <span>{t(selectedMonth.seasonMr, selectedMonth.seasonEn)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t('महिना क्रमांक: ', 'Month: ')}{selectedMonth.monthIndex}/१२</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
                  {t(selectedMonth.nameMr, selectedMonth.nameEn)}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 mt-2 max-w-2xl leading-relaxed">
                  {t(selectedMonth.climatePuneMr, selectedMonth.climatePuneEn)}
                </p>
              </div>

              {/* Prev / Next Month Navigators & Weather badges */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                <div className="flex items-center gap-2 bg-emerald-950/70 p-3 rounded-xl border border-emerald-700/50 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-200">
                    <Thermometer className="w-4 h-4 text-amber-300" />
                    <span className="font-mono font-bold">{selectedMonth.tempRange}</span>
                  </div>
                  <span className="text-emerald-500">|</span>
                  <div className="flex items-center gap-1.5 text-emerald-200">
                    <CloudRain className="w-4 h-4 text-sky-300" />
                    <span>{t(selectedMonth.rainfallStatusMr, selectedMonth.rainfallStatusEn)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrevMonth}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Previous Month"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Next Month"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3 Main Action Columns: Sowing, Harvesting, Maintenance */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Col 1: Sowing & Transplanting */}
              <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-100">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                      <Sprout className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-stone-900">
                      {t('पेरणी व लागवड (Sowing / Planting)', 'Sowing & Transplanting')}
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {(t(selectedMonth.sowingCropsMr.join('@@'), selectedMonth.sowingCropsEn.join('@@'))).split('@@').map((crop, i) => (
                      <li key={i} className="flex items-start gap-2 bg-emerald-50/50 p-2 rounded-lg border border-emerald-100/70">
                        <span className="text-emerald-700 font-bold mt-0.5">•</span>
                        <span>{crop}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                  {t('हंगामानुसार दर्जेदार बियाणे व बीजप्रक्रिया आवश्यक.', 'Use certified disease-free seeds with inoculants.')}
                </div>
              </div>

              {/* Col 2: Harvesting & Marketing */}
              <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-100">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Scissors className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-stone-900">
                      {t('काढणी व तोडणी (Harvesting)', 'Harvesting & Market Arrivals')}
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {(t(selectedMonth.harvestingCropsMr.join('@@'), selectedMonth.harvestingCropsEn.join('@@'))).split('@@').map((crop, i) => (
                      <li key={i} className="flex items-start gap-2 bg-amber-50/50 p-2 rounded-lg border border-amber-100/70">
                        <span className="text-amber-700 font-bold mt-0.5">•</span>
                        <span>{crop}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                  {t('पुणे गुलटेकडी, मंचर, नारायणगाव व चाकण सौदे.', 'Trade via Pune APMC, Manchar, Narayangaon, Chakan.')}
                </div>
              </div>

              {/* Col 3: Maintenance & Pruning */}
              <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-100">
                    <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-stone-900">
                      {t('मशागत, छाटणी व खत व्यवस्थापन', 'Maintenance, Pruning & Care')}
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {(t(selectedMonth.maintenanceTasksMr.join('@@'), selectedMonth.maintenanceTasksEn.join('@@'))).split('@@').map((task, i) => (
                      <li key={i} className="flex items-start gap-2 bg-stone-50 p-2 rounded-lg border border-stone-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-700 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                  {t('पाणी व अन्नद्रव्ये ठिबकद्वारे द्यावीत.', 'Administer via precision fertigation.')}
                </div>
              </div>
            </div>

            {/* Bottom Strip: Pune Region Expert Tip & Focus Talukas */}
            <div className="px-6 sm:px-8 pb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 p-4 bg-amber-50/80 rounded-2xl border border-amber-200">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs sm:text-sm mb-1">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  <span>{t('या महिन्याचा पुणे जिल्हा विशेष शेतकरी सल्ला:', 'Pune Regional Agronomy Advisory of the Month:')}</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  {t(selectedMonth.expertTipPuneMr, selectedMonth.expertTipPuneEn)}
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-stone-200 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 text-stone-800 font-bold mb-1">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>{t('प्रमुख शेती तालुके:', 'Key Activity Belts:')}</span>
                </div>
                <p className="text-stone-600 leading-relaxed text-xs">
                  {t(selectedMonth.keyTalukasMr, selectedMonth.keyTalukasEn)}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: ANNUAL MATRIX VIEW (All 12 Months At-a-Glance) */}
        {viewMode === 'matrix' && (
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4">{t('महिना व हवामान', 'Month & Climate')}</th>
                    <th className="py-3 px-4">{t('पेरणी / लागवड', 'Sowing / Planting')}</th>
                    <th className="py-3 px-4">{t('काढणी / तोडणी', 'Harvesting / Picking')}</th>
                    <th className="py-3 px-4">{t('महत्त्वाची मशागत व छाटणी', 'Key Maintenance & Pruning')}</th>
                    <th className="py-3 px-4 text-center">{t('पहा', 'Action')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {PUNE_CROP_CALENDAR.map((m) => (
                    <tr 
                      key={m.monthIndex} 
                      className={`hover:bg-stone-50 transition-colors ${
                        m.monthIndex === selectedMonthIndex ? 'bg-emerald-50/60 font-medium' : ''
                      }`}
                    >
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-bold text-stone-900">
                          {t(m.nameMr, m.nameEn)}
                        </div>
                        <div className="text-[11px] text-stone-500 font-mono">
                          {m.tempRange}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-stone-800">
                        {(t(m.sowingCropsMr.join(' · '), m.sowingCropsEn.join(' · '))).split(' · ').slice(0, 2).join(', ')}
                      </td>
                      <td className="py-3 px-4 text-stone-800">
                        {(t(m.harvestingCropsMr.join(' · '), m.harvestingCropsEn.join(' · '))).split(' · ').slice(0, 2).join(', ')}
                      </td>
                      <td className="py-3 px-4 text-stone-600 text-xs">
                        {t(m.maintenanceTasksMr[0], m.maintenanceTasksEn[0])}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => {
                            setSelectedMonthIndex(m.monthIndex);
                            setViewMode('detail');
                          }}
                          className="px-2.5 py-1 text-xs font-semibold text-emerald-800 hover:text-white bg-emerald-50 hover:bg-emerald-700 rounded-md transition-colors cursor-pointer"
                        >
                          {t('सविस्तर', 'View')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
