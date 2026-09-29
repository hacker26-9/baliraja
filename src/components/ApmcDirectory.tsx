import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MANDIS_AND_KVKS } from '../data/agriData';
import { Store, GraduationCap, MapPin, Clock, Phone, Mail, Tag } from 'lucide-react';

interface ApmcDirectoryProps {
  searchQuery: string;
}

export const ApmcDirectory: React.FC<ApmcDirectoryProps> = ({ searchQuery }) => {
  const { t } = useLanguage();
  const [filterType, setFilterType] = useState<'all' | 'apmc' | 'kvk'>('all');
  const [selectedTaluka, setSelectedTaluka] = useState<string>('all');

  const talukas = [
    { id: 'all', nameMr: 'सर्व तालुके', nameEn: 'All Talukas' },
    { id: 'haveli', nameMr: 'हवेली / पुणे', nameEn: 'Haveli / Pune' },
    { id: 'junnar', nameMr: 'जुन्नर', nameEn: 'Junnar' },
    { id: 'ambegaon', nameMr: 'आंबेगाव', nameEn: 'Ambegaon' },
    { id: 'baramati', nameMr: 'बारामती', nameEn: 'Baramati' },
    { id: 'khed', nameMr: 'खेड (चाकण)', nameEn: 'Khed (Chakan)' },
    { id: 'shirur', nameMr: 'शिरूर', nameEn: 'Shirur' },
    { id: 'purandar', nameMr: 'पुरंदर', nameEn: 'Purandar' },
  ];

  const filteredItems = MANDIS_AND_KVKS.filter((item) => {
    const matchesType = filterType === 'all' || item.type === filterType;

    const matchesTaluka =
      selectedTaluka === 'all' ||
      item.talukaMr.toLowerCase().includes(selectedTaluka) ||
      item.talukaEn.toLowerCase().includes(selectedTaluka);

    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesType && matchesTaluka;

    const matchesQuery =
      item.nameMr.toLowerCase().includes(query) ||
      item.nameEn.toLowerCase().includes(query) ||
      item.specialtyMr.toLowerCase().includes(query) ||
      item.specialtyEn.toLowerCase().includes(query) ||
      item.commoditiesMr.some((c) => c.toLowerCase().includes(query)) ||
      item.commoditiesEn.some((c) => c.toLowerCase().includes(query));

    return matchesType && matchesTaluka && matchesQuery;
  });

  const getMandiPhoto = (id: string) => {
    switch (id) {
      case 'pune_gultekdi':
        return { img: '/images/mandi.jpg', badgeMr: 'पुणे मुख्य मार्केट यार्ड', badgeEn: 'Pune Central Market Yard' };
      case 'narayangaon_junnar':
        return { img: '/images/tomato.jpg', badgeMr: 'टोमॅटो प्रमुख लिलाव केंद्र', badgeEn: 'Premier Tomato Mandi' };
      case 'manchar_ambegaon':
        return { img: '/images/onion.jpg', badgeMr: 'कांदा व भाजीपाला लिलाव', badgeEn: 'Onion & Veggie Exchange' };
      case 'chakan_khed':
        return { img: '/images/onion.jpg', badgeMr: 'चाकण कांदा व बटाटा बाजार', badgeEn: 'Chakan Onion & Potato Hub' };
      case 'baramati_apmc':
        return { img: '/images/grapes.jpg', badgeMr: 'गुळ, द्राक्षे व शेतमाल केंद्र', badgeEn: 'Jaggery & Fruit Hub' };
      case 'purandar_saswad':
        return { img: '/images/fig.jpg', badgeMr: 'राजेवाडी अंजीर व सीताफळ', badgeEn: 'GI Fig & Custard Apple' };
      case 'shirur_apmc':
        return { img: '/images/bajra.jpg', badgeMr: 'बाजरी व धान्य लिलाव', badgeEn: 'Pearl Millet & Grain Mandi' };
      case 'kvk_baramati':
        return { img: '/images/drip.jpg', badgeMr: 'शेतकरी प्रशिक्षण व प्रयोग केंद्र', badgeEn: 'Agri Research & Training' };
      case 'kvk_narayangaon':
        return { img: '/images/pomegranate.jpg', badgeMr: 'भाजीपाला व फळबाग तंत्रज्ञान', badgeEn: 'Horticulture Tech Center' };
      default:
        return null;
    }
  };

  return (
    <section id="mandis" className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              <span>{t('पुणे जिल्हा बाजारपेठ व संशोधन संस्था', 'Pune District Mandis & Agronomy Centers')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {t('कृषी उत्पन्न बाजार समित्या (APMC) व कृषी विज्ञान केंद्रे (KVK)', 'APMC Wholesale Markets & Krishi Vigyan Kendras')}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-stone-600">
              {t(
                'पुणे जिल्ह्यातील शेतमाल लिलाव वेळा, पत्ता, संपर्क क्रमांक आणि प्रमुख शेती उत्पादनांची माहिती.',
                'Auction operating hours, market yard addresses, direct office contacts, and crop trade hubs.'
              )}
            </p>
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl shrink-0">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                filterType === 'all'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('सर्व केंद्रे', 'All Facilities')}
            </button>
            <button
              onClick={() => setFilterType('apmc')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                filterType === 'apmc'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Store className="w-3.5 h-3.5 inline mr-1" />
              {t('बाजार समित्या', 'APMC Mandis')}
            </button>
            <button
              onClick={() => setFilterType('kvk')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                filterType === 'kvk'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 inline mr-1" />
              {t('कृषी विज्ञान केंद्र (KVK)', 'KVK Centers')}
            </button>
          </div>
        </div>

        {/* Taluka Quick Pills Filter */}
        <div className="flex items-center gap-1.5 mb-6 overflow-x-auto pb-1 text-xs">
          <span className="text-stone-500 font-medium shrink-0 mr-1">{t('तालुका निवडा:', 'Taluka:')}</span>
          {talukas.map((taluka) => (
            <button
              key={taluka.id}
              onClick={() => setSelectedTaluka(taluka.id)}
              className={`px-2.5 py-1 rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
                selectedTaluka === taluka.id
                  ? 'bg-emerald-800 text-white border-emerald-800 font-semibold'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {t(taluka.nameMr, taluka.nameEn)}
            </button>
          ))}
        </div>

        {/* Directory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const photoInfo = getMandiPhoto(item.id);
            return (
            <div
              key={item.id}
              className="bg-stone-50 rounded-2xl border border-stone-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow group/card"
            >
              <div>
                {/* Photo Banner if mapped */}
                {photoInfo && (
                  <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-900">
                    <img
                      src={photoInfo.img}
                      alt={t(item.nameMr, item.nameEn)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-xs text-white">
                      <span className="font-semibold text-emerald-300 text-xs">
                        {t(photoInfo.badgeMr, photoInfo.badgeEn)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Type Header Tag */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="flex items-center gap-1 font-semibold text-emerald-800">
                    {item.type === 'apmc' ? (
                      <>
                        <Store className="w-3.5 h-3.5" />
                        <span>{t('बाजार समिती', 'APMC Mandi')}</span>
                      </>
                    ) : (
                      <>
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{t('कृषी विज्ञान केंद्र', 'Krishi Vigyan Kendra')}</span>
                      </>
                    )}
                  </span>
                  <span>{t(item.talukaMr, item.talukaEn)}</span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-stone-900 leading-snug">
                  {t(item.nameMr, item.nameEn)}
                </h3>

                {/* Specialty */}
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {t(item.specialtyMr, item.specialtyEn)}
                </p>

                {/* Commodities list */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {(t(item.commoditiesMr.join('@@'), item.commoditiesEn.join('@@'))).split('@@').map((comm, i) => (
                    <span key={i} className="text-xs bg-white text-stone-700 border border-stone-200 px-2 py-0.5 rounded-md">
                      {comm}
                    </span>
                  ))}
                </div>

                {/* Timings and Address */}
                <div className="mt-4 pt-4 border-t border-stone-200 space-y-2 text-xs text-stone-600">
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{t(item.operatingHoursMr, item.operatingHoursEn)}</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{t(item.addressMr, item.addressEn)}</span>
                  </div>

                  {item.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{item.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Direct Phone Action Button */}
              <div className="mt-6 pt-3 border-t border-stone-200">
                <a
                  href={`tel:${item.phone.split('/')[0].trim()}`}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs sm:text-sm font-semibold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-xl transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-800" />
                  <span>{item.phone}</span>
                </a>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
