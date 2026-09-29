import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GOVT_SCHEMES, PUNE_TALUKA_AGRI_OFFICES } from '../data/agriData';
import { GovtScheme, TalukaAgriOffice } from '../types';
import { 
  ShieldCheck, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Phone, 
  Landmark, 
  ChevronRight, 
  X, 
  Building2, 
  Search, 
  HelpCircle, 
  ListOrdered, 
  BadgePercent, 
  MapPin, 
  Mail, 
  CalendarCheck,
  Tractor,
  Droplets,
  SunMedium,
  HeartHandshake
} from 'lucide-react';

interface SchemesPortalProps {
  searchQuery: string;
}

export const SchemesPortal: React.FC<SchemesPortalProps> = ({ searchQuery }) => {
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState<'schemes' | 'process' | 'contacts' | 'checker'>('schemes');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSchemeModal, setActiveSchemeModal] = useState<GovtScheme | null>(null);
  const [talukaSearch, setTalukaSearch] = useState<string>('');

  // Eligibility Checker State
  const [farmerCategory, setFarmerCategory] = useState<'all' | 'sc_st' | 'small_marginal' | 'general'>('all');
  const [hasWaterSource, setHasWaterSource] = useState<boolean>(true);

  const categories = [
    { id: 'all', labelMr: 'सर्व योजना', labelEn: 'All Schemes' },
    { id: 'direct_benefit', labelMr: 'थेट सन्मान निधी', labelEn: 'Direct DBT Income' },
    { id: 'subsidy', labelMr: 'ठिबक व कांदा चाळ', labelEn: 'Drip & Storage' },
    { id: 'machinery', labelMr: 'ट्रॅक्टर व अवजारे', labelEn: 'Farm Machinery' },
    { id: 'water_power', labelMr: 'सौर कृषी पंप व शेततळे', labelEn: 'Solar & Farm Ponds' },
    { id: 'insurance', labelMr: '₹१ पीक विमा', labelEn: 'Crop Insurance' },
    { id: 'special_grant', labelMr: 'विशेष अनुदान (SC/ST/फळबाग)', labelEn: 'Special Grants' },
    { id: 'safety', labelMr: 'शेतकरी सुरक्षा', labelEn: 'Accident Relief' },
  ];

  const filteredSchemes = GOVT_SCHEMES.filter((scheme) => {
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;

    // Checker filter logic if in checker mode
    let matchesChecker = true;
    if (farmerCategory === 'sc_st' && scheme.id !== 'ambedkar_swavalamban' && scheme.id !== 'birsa_munda_kranti' && scheme.category !== 'direct_benefit' && scheme.category !== 'subsidy' && scheme.category !== 'water_power') {
      matchesChecker = true; // Still show but prioritize
    }

    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory && matchesChecker;

    const matchesQuery =
      scheme.titleMr.toLowerCase().includes(query) ||
      scheme.titleEn.toLowerCase().includes(query) ||
      scheme.benefitSummaryMr.toLowerCase().includes(query) ||
      scheme.benefitSummaryEn.toLowerCase().includes(query) ||
      scheme.puneFocusNotesMr.toLowerCase().includes(query) ||
      scheme.puneFocusNotesEn.toLowerCase().includes(query) ||
      scheme.subsidyAmountMr.toLowerCase().includes(query) ||
      scheme.subsidyAmountEn.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  const filteredTalukas = PUNE_TALUKA_AGRI_OFFICES.filter((office) => {
    const q = talukaSearch.trim().toLowerCase();
    if (!q) return true;
    return (
      office.talukaMr.toLowerCase().includes(q) ||
      office.talukaEn.toLowerCase().includes(q) ||
      office.jurisdictionMr.toLowerCase().includes(q) ||
      office.jurisdictionEn.toLowerCase().includes(q) ||
      office.addressMr.toLowerCase().includes(q) ||
      office.addressEn.toLowerCase().includes(q)
    );
  });

  return (
    <section id="schemes" className="py-12 sm:py-16 bg-stone-100/80 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>{t('महाराष्ट्र शासन व केंद्र सरकार योजना केंद्र · पुणे जिल्हा विशेष', 'Maharashtra & Central Govt Farmer Welfare Portal · Pune Focus')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {t('शासकीय योजना, थेट अनुदान व विशेष आर्थिक सहाय्य', 'Government Schemes, Subsidies & Grants for Farmers')}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-stone-600 max-w-3xl">
              {t(
                'नमो शेतकरी सन्मान निधी, १ रुपयात पीक विमा, महाडीबीटी ठिबक व ट्रॅक्टर अनुदान, कुसुम सोलर पंप, शेततळे, आणि पुणे जिल्ह्यातील १४ तालुक्यांचे कृषी अधिकारी संपर्क.',
                'Full eligibility guidelines, step-by-step application walkthroughs, required 7/12 documentation, and direct contacts for all 14 Taluka Agriculture Offices in Pune district.'
              )}
            </p>
          </div>

          {/* Sub-Navigation Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl shrink-0 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('schemes')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'schemes'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <BadgePercent className="w-3.5 h-3.5 inline mr-1" />
              {t('सर्व योजना व अनुदान', 'All Schemes')}
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'process'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5 inline mr-1" />
              {t('अर्ज कसा करावा?', 'Application Process')}
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'contacts'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 inline mr-1" />
              {t('पुणे तालुका कृषी अधिकारी (TAO)', 'Pune Agri Offices')}
            </button>
            <button
              onClick={() => setActiveTab('checker')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'checker'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 inline mr-1" />
              {t('पात्रता तपासक', 'Eligibility Checker')}
            </button>
          </div>
        </div>

        {/* TAB 1: ALL SCHEMES & SUBSIDIES */}
        {activeTab === 'schemes' && (
          <div>
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 mb-6 p-1 bg-white rounded-xl border border-stone-200 overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-800 text-white font-semibold'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {t(cat.labelMr, cat.labelEn)}
                </button>
              ))}
            </div>

            {/* Schemes Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchemes.map((scheme) => (
                <div
                  key={scheme.id}
                  className="bg-white rounded-2xl border border-stone-200 hover:border-emerald-500/50 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header line metadata */}
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                      <span className="font-semibold text-emerald-800 flex items-center gap-1">
                        <Landmark className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{t(scheme.grantTypeMr, scheme.grantTypeEn)}</span>
                      </span>
                      <span className="text-stone-400">{t(scheme.onlineOrOfflineMr, scheme.onlineOrOfflineEn)}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-stone-900 leading-snug">
                      {t(scheme.titleMr, scheme.titleEn)}
                    </h3>

                    {/* Subsidy Highlight Box */}
                    <div className="mt-3 p-3 bg-emerald-50/80 border border-emerald-200/80 rounded-xl">
                      <span className="text-xs text-emerald-800 font-semibold uppercase tracking-wider block">
                        {t('अनुदान स्वरूप / लाभ रक्कम:', 'Subsidy Quantum:')}
                      </span>
                      <p className="text-sm font-bold text-emerald-950 mt-0.5">
                        {t(scheme.subsidyAmountMr, scheme.subsidyAmountEn)}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="mt-3 text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                      {t(scheme.benefitSummaryMr, scheme.benefitSummaryEn)}
                    </p>

                    {/* Pune Focus Highlight */}
                    <div className="mt-3 text-xs bg-amber-50/80 text-amber-900 border border-amber-200/60 p-2.5 rounded-lg">
                      <strong>{t('पुणे जिल्हा विशेष:', 'Pune District Focus:')} </strong>
                      <span className="line-clamp-2">{t(scheme.puneFocusNotesMr, scheme.puneFocusNotesEn)}</span>
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveSchemeModal(scheme)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>{t('सविस्तर पात्रता व अर्ज पद्धत', 'View Full Guide & Process')}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={scheme.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-stone-500 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors border border-stone-200"
                      title={t('अधिकृत पोर्टलवर जा', 'Open Official Portal')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: STEP-BY-STEP APPLICATION WALKTHROUGH */}
        {activeTab === 'process' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="max-w-3xl mb-8">
              <h3 className="text-xl font-bold text-stone-900">
                {t('शासकीय योजना व अनुदानासाठी अर्ज करण्याची अधिकृत पद्धत (MahaDBT SOP)', 'Standard Operating Procedure (SOP) to Apply on MahaDBT Portal')}
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                {t(
                  'महाडीबीटी पोर्टलवर फसवणूक न होता घरबसल्या किंवा जवळच्या सीएससी केंद्रावरून अर्ज करण्याचे ६ सोपे टप्पे.',
                  '6 official steps to register, submit documents, qualify in lottery, and receive DBT subsidy in your bank account.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 relative">
                <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm mb-3">
                  १
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  {t('शेतकरी नोंदणी व आधार प्रमाणीकरण', 'Farmer Registration & Aadhaar Seed')}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t(
                    'mahadbt.maharashtra.gov.in/farmer वर जा. नवीन शेतकरी नोंदणी निवडून आधार नंबर टाका. मोबाईल ओटीपी किंवा बायोमेट्रिकने ई-केवायसी (e-KYC) पूर्ण करा.',
                    'Visit mahadbt.maharashtra.gov.in/farmer. Click New Registration, input Aadhaar, and complete e-KYC using mobile OTP or biometric CSC touchpoint.'
                  )}
                </p>
              </div>

              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 relative">
                <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm mb-3">
                  २
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  {t('जमीन व बँक खात्याचा तपशील', 'Land Records (7/12 & 8-A) & Bank Profile')}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t(
                    'प्रोफाइलमध्ये पुणे जिल्हा, तालुका, गाव निवडा. ७/१२ वरील खाते क्रमांक आणि गट/सर्व्हे क्रमांक प्रविष्ट करा. आधार-लिंक बँक खाते तपशील तपासा.',
                    'Fill profile with district Pune, taluka, village, 7/12 khata number, survey numbers, and ensure bank account has active NPCI DBT linkage.'
                  )}
                </p>
              </div>

              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 relative">
                <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm mb-3">
                  ३
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  {t('घटक निवड व चलन भरणे', 'Select Component & Pay Nominal Fee')}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t(
                    '"अर्ज करा" वर क्लिक करून ठिबक, तुषार, ट्रॅक्टर, अवजारे, कांदा चाळ किंवा फळबाग घटकाची निवड करा. एकाच अर्जासाठी केवळ ₹२३.६० ऑनलाइन फी भरा.',
                    'Select scheme components (Drip, Tractor, Implements, Onion Chawl, Orchard) and pay single consolidated application fee of ₹23.60.'
                  )}
                </p>
              </div>

              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 relative">
                <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm mb-3">
                  ४
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  {t('संगणकीय सोडत व पूर्वसंमती पत्र', 'Online Lottery & Pre-Sanction')}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t(
                    'दर आठवड्याला पारदर्शक संगणकीय सोडत (Lottery) निघते. नाव निवडल्यास मोबाईलवर एसएमएस येतो. ७ दिवसांत कागदपत्रे अपलोड करून पूर्वसंमती पत्र (Pre-Sanction) डाउनलोड करा.',
                    'Transparent computerized lottery is conducted weekly. On selection, SMS is sent. Upload 7/12 and download official Pre-Sanction approval letter.'
                  )}
                </p>
              </div>

              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 relative">
                <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm mb-3">
                  ५
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  {t('खरेदी व जीएसटी बिल अपलोड', 'Purchase & Upload GST Invoices')}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t(
                    'पूर्वसंमती मिळाल्याशिवाय खरेदी करू नये! मान्यताप्राप्त डीलरकडून अधिकृत आयएसआय प्रमाणित संच खरेदी करून मूळ जीएसटी बिल व वॉरंटी कार्ड पोर्टलवर अपलोड करा.',
                    'Never purchase before pre-sanction! Procure ISI-certified sets/machinery from authorized dealers and upload original tax invoice within 30 days.'
                  )}
                </p>
              </div>

              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 relative">
                <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm mb-3">
                  ६
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  {t('मोका तपासणी व थेट अनुदान जमा', 'Spot Inspection & Direct DBT Credit')}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t(
                    'तालुका कृषी सहाय्यक शेतात येऊन जिओ-टॅग फोटो व पाहणी अहवाल तयार करतात. तालुका कृषी अधिकारी मंजुरी देतात आणि अनुदान थेट बँक खात्यात जमा होते.',
                    'Agriculture Assistant conducts GPS-tagged spot inspection of installed unit. Upon TAO approval, subsidy credits directly to your bank account.'
                  )}
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-stone-700 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-950 font-bold block mb-0.5">
                  {t('महत्त्वाची दक्षता: दलालांपासून सावध रहा!', 'Critical Farmer Advisory: Beware of Middlemen!')}
                </strong>
                <span>
                  {t(
                    'महाडीबीटी व इतर योजनांची निवड पूर्णपणे संगणकीय प्रणालीद्वारे होते. कोणत्याही मध्यस्थ किंवा दलालाला पैसे देऊ नका. काही अडचण आल्यास थेट आपल्या तालुका कृषी कार्यालयाशी संपर्क साधा.',
                    'All MahaDBT selections are 100% randomized and automated. Never pay any bribe or fee to middlemen. For any grievance, contact your local Taluka Agriculture Officer directly.'
                  )}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PUNE TALUKA AGRICULTURE OFFICES (TAO DIRECTORY) */}
        {activeTab === 'contacts' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  {t('पुणे जिल्हा कृषी विभाग संपर्क डिरेक्टरी (सर्व १४ तालुके)', 'Pune District Agriculture Department Directory (All 14 Talukas)')}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                  {t(
                    'योजनांची माहिती, पूर्वसंमती, मोका तपासणी आणि अनुदानासाठी आपल्या संबंधित तालुका कृषी अधिकारी (TAO) कार्यालयाशी संपर्क साधा.',
                    'Direct contact numbers, addresses, and agronomy jurisdictions for Taluka Agriculture Officers across Pune.'
                  )}
                </p>
              </div>

              {/* Quick Taluka Search */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={talukaSearch}
                  onChange={(e) => setTalukaSearch(e.target.value)}
                  placeholder={t('तालुका किंवा गाव शोधा...', 'Search taluka or area...')}
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-xl bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTalukas.map((office) => (
                <div
                  key={office.id}
                  className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                      <span className="font-semibold text-emerald-800 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{t('शासकीय कृषी कार्यालय', 'Govt Agriculture Office')}</span>
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-stone-900">
                      {t(office.talukaMr, office.talukaEn)}
                    </h4>

                    <p className="text-xs font-semibold text-stone-600 mt-1">
                      {t(office.officerDesignationMr, office.officerDesignationEn)}
                    </p>

                    <div className="mt-4 pt-3 border-t border-stone-100 space-y-2 text-xs text-stone-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{t(office.addressMr, office.addressEn)}</span>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-emerald-700 font-bold shrink-0">📍</span>
                        <span>
                          <strong className="text-stone-800">{t('कार्यक्षेत्र: ', 'Jurisdiction: ')}</strong>
                          {t(office.jurisdictionMr, office.jurisdictionEn)}
                        </span>
                      </div>

                      {office.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{office.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100">
                    <a
                      href={`tel:${office.phone.split('/')[0].trim()}`}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs sm:text-sm font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-800" />
                      <span>{office.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: INTERACTIVE ELIGIBILITY CHECKER */}
        {activeTab === 'checker' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="max-w-2xl mb-8">
              <h3 className="text-xl font-bold text-stone-900">
                {t('शेतकरी पात्रता व योजना शिफारस तपासक', 'Interactive Farmer Scheme & Grant Eligibility Checker')}
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                {t(
                  'तुमचा प्रवर्ग आणि जमिनीचा प्रकार निवडा; तुम्हाला पुणे जिल्ह्यात कोणत्या योजनांत किती अनुदान मिळू शकते ते लगेच तपासा.',
                  'Select your category and farm profile to discover personalized grants and eligible subsidy quotas.'
                )}
              </p>
            </div>

            {/* Questions Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-stone-50 rounded-2xl border border-stone-200 mb-8">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  {t('१. तुमचा सामाजिक प्रवर्ग निवडा:', '1. Select Category:')}
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 p-3 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-emerald-600">
                    <input
                      type="radio"
                      name="farmerCat"
                      checked={farmerCategory === 'all'}
                      onChange={() => setFarmerCategory('all')}
                      className="text-emerald-700 focus:ring-emerald-600"
                    />
                    <span className="text-xs sm:text-sm font-medium text-stone-800">
                      {t('सर्वसामान्य / सर्व शेतकरी (General Category)', 'General / All Farmers')}
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-emerald-600">
                    <input
                      type="radio"
                      name="farmerCat"
                      checked={farmerCategory === 'sc_st'}
                      onChange={() => setFarmerCategory('sc_st')}
                      className="text-emerald-700 focus:ring-emerald-600"
                    />
                    <span className="text-xs sm:text-sm font-medium text-stone-800">
                      {t('अनुसूचित जाती / जमाती (SC / ST Category - १००% विहीर व ९५% सोलर)', 'SC / ST Category (100% Well & 95% Solar)')}
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-emerald-600">
                    <input
                      type="radio"
                      name="farmerCat"
                      checked={farmerCategory === 'small_marginal'}
                      onChange={() => setFarmerCategory('small_marginal')}
                      className="text-emerald-700 focus:ring-emerald-600"
                    />
                    <span className="text-xs sm:text-sm font-medium text-stone-800">
                      {t('अल्प / अत्यल्प भूधारक (२ हेक्टर / ५ एकरांपेक्षा कमी शेतजमीन - ८०% ठिबक)', 'Small / Marginal (< 2 Ha - 80% Drip Subsidy)')}
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  {t('२. शेतात उपलब्ध पाण्याचा स्त्रोत:', '2. Available Water Source:')}
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 p-3 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-emerald-600">
                    <input
                      type="radio"
                      name="waterSrc"
                      checked={hasWaterSource}
                      onChange={() => setHasWaterSource(true)}
                      className="text-emerald-700 focus:ring-emerald-600"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-medium text-stone-800 block">
                        {t('होय, विहीर / कूपनलिका / कालवा / शेततळे उपलब्ध आहे', 'Yes, Well / Borewell / Canal / Farm pond available')}
                      </span>
                      <span className="text-xs text-emerald-700">
                        {t('ठिबक, तुषार आणि सोलर पंपासाठी पात्र', 'Eligible for Drip, Sprinklers & Solar Pump')}
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-emerald-600">
                    <input
                      type="radio"
                      name="waterSrc"
                      checked={!hasWaterSource}
                      onChange={() => setHasWaterSource(false)}
                      className="text-emerald-700 focus:ring-emerald-600"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-medium text-stone-800 block">
                        {t('नाही, कोरडवाहू शेती आहे (पाणी स्त्रोत आवश्यक आहे)', 'No water source (Dryland farming)')}
                      </span>
                      <span className="text-xs text-amber-700">
                        {t('मागेल त्याला शेततळे किंवा नवीन विहीर योजनेसाठी पात्र', 'Eligible for Farm Pond or New Well subsidy')}
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Results based on selection */}
            <div>
              <h4 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <span>{t('तुमच्या निवडीनुसार पात्र असणाऱ्या प्रमुख शासकीय योजना:', 'Recommended Subsidies & Grants for Your Profile:')}</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="font-bold text-emerald-950 block text-sm">
                    {t('१. नमो शेतकरी सन्मान निधी + PM-Kisan', '1. Namo Shetkari + PM-Kisan')}
                  </span>
                  <p className="text-emerald-900 mt-1">
                    {t('दरवर्षी ₹१२,००० थेट बँक खात्यात. सर्व शेतकरी खातेदारांना १००% पात्र.', '₹12,000/year directly to bank. 100% eligible for all 7/12 holders.')}
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="font-bold text-emerald-950 block text-sm">
                    {t('२. सर्वसमावेशक ₹१ पीक विमा योजना', '2. ₹1 Crop Insurance Scheme')}
                  </span>
                  <p className="text-emerald-900 mt-1">
                    {t('केवळ ₹१ भरून खरीप व रब्बी पिकांना दुष्काळ, पूर व गारपिटीपासून संरक्षण.', '₹1 token fee to insure notified crops against drought and hail.')}
                  </p>
                </div>

                {farmerCategory === 'sc_st' && (
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <span className="font-bold text-amber-950 block text-sm">
                      {t('३. डॉ. आंबेडकर / बिरसा मुंडा कृषी स्वावलंबन (नवीन विहीर)', '3. Dr. Ambedkar / Birsa Munda Well Grant')}
                    </span>
                    <p className="text-amber-900 mt-1">
                      {t('नवीन विहिरीसाठी ₹२.५० लाखांचे १००% विशेष शासकीय अनुदान + पंप संच मोफत.', 'Up to ₹2.50 Lakh 100% grant for new irrigation well + free pump set.')}
                    </p>
                  </div>
                )}

                {hasWaterSource ? (
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <span className="font-bold text-emerald-950 block text-sm">
                      {farmerCategory === 'small_marginal'
                        ? t('४. महाडीबीटी सूक्ष्म सिंचन (८०% भरघोस अनुदान)', '4. MahaDBT Micro Irrigation (80% Subsidy)')
                        : t('४. महाडीबीटी सूक्ष्म सिंचन (७५% अनुदान)', '4. MahaDBT Micro Irrigation (75% Subsidy)')}
                    </span>
                    <p className="text-emerald-900 mt-1">
                      {t('ठिबक व तुषार सिंचन संचावर थेट बँक खात्यात अनुदान मिळते.', 'Capital grant on ISI drip and sprinkler systems credited via DBT.')}
                    </p>
                  </div>
                ) : (
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <span className="font-bold text-amber-950 block text-sm">
                      {t('४. मागेल त्याला शेततळे व प्लास्टिक अस्तरीकरण', '4. Farm Pond with Plastic Lining')}
                    </span>
                    <p className="text-amber-900 mt-1">
                      {t('खोदकामासाठी ₹५०,००० + प्लास्टिक अस्तरीकरणासाठी ₹७५,००० = एकूण ₹१.२५ लाख अनुदान.', '₹50,000 for digging + ₹75,000 for plastic film lining = ₹1.25 Lakh grant.')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* DETAILED SCHEME MODAL / DRAWER */}
        {activeSchemeModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-stone-200">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-emerald-900 text-white px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <div>
                  <div className="text-xs text-emerald-300 font-medium flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5" />
                    <span>{t(activeSchemeModal.departmentMr, activeSchemeModal.departmentEn)}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mt-0.5">
                    {t(activeSchemeModal.titleMr, activeSchemeModal.titleEn)}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveSchemeModal(null)}
                  className="p-1.5 text-emerald-300 hover:text-white hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Highlight banner */}
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
                    {t('अनुदान व लाभाचे स्वरूप (Benefit Structure):', 'Subsidy & Grant Benefit:')}
                  </span>
                  <p className="text-base font-extrabold text-emerald-950 mt-1">
                    {t(activeSchemeModal.subsidyAmountMr, activeSchemeModal.subsidyAmountEn)}
                  </p>
                  <p className="text-xs text-emerald-800 mt-1">
                    {t(activeSchemeModal.grantTypeMr, activeSchemeModal.grantTypeEn)}
                  </p>
                </div>

                {/* Summary */}
                <div>
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t('योजनेचा उद्देश व माहिती:', 'Scheme Purpose & Details:')}
                  </h4>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {t(activeSchemeModal.benefitSummaryMr, activeSchemeModal.benefitSummaryEn)}
                  </p>
                </div>

                {/* Eligibility */}
                <div>
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    {t('पात्रता निकष (Eligibility Criteria):', 'Eligibility Checklist:')}
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                    {(t(activeSchemeModal.eligibilityMr.join('@@'), activeSchemeModal.eligibilityEn.join('@@'))).split('@@').map((elig, i) => (
                      <li key={i} className="flex items-start gap-2 bg-stone-50 p-2 rounded-lg border border-stone-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{elig}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step-by-Step Application Steps */}
                <div>
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ListOrdered className="w-4 h-4 text-emerald-800" />
                    <span>{t('अर्ज करण्याची सविस्तर पायरी-वार पद्धत (Step-by-Step Application):', 'Step-by-Step Application Process:')}</span>
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    {(t(activeSchemeModal.applicationStepsMr.join('@@'), activeSchemeModal.applicationStepsEn.join('@@'))).split('@@').map((step, i) => (
                      <div key={i} className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-stone-800">
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Required Documents */}
                <div>
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    {t('आवश्यक कागदपत्रे (Required Documents):', 'Required Documents:')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(t(activeSchemeModal.requiredDocsMr.join('@@'), activeSchemeModal.requiredDocsEn.join('@@'))).split('@@').map((doc, i) => (
                      <span key={i} className="flex items-center gap-1 text-xs bg-stone-100 text-stone-800 px-2.5 py-1.5 rounded-lg border border-stone-200 font-medium">
                        <FileText className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{doc}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pune Focus */}
                <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm">
                  <strong className="text-amber-950 font-bold block mb-1">
                    📍 {t('पुणे जिल्ह्यातील शेतकरी बांधवांसाठी विशेष टिप:', 'Pune District Farmer Advisory:')}
                  </strong>
                  <p className="text-amber-900 leading-relaxed">
                    {t(activeSchemeModal.puneFocusNotesMr, activeSchemeModal.puneFocusNotesEn)}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-stone-100 border-t border-stone-200 px-6 py-3 flex items-center justify-between rounded-b-2xl">
                <div className="flex items-center gap-1 text-xs text-stone-600 font-medium">
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{activeSchemeModal.helpline}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveSchemeModal(null)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg cursor-pointer hover:bg-stone-50"
                  >
                    {t('बंद करा', 'Close')}
                  </button>

                  <a
                    href={activeSchemeModal.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>{t('अधिकृत पोर्टल उघडा', 'Open Official Portal')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
