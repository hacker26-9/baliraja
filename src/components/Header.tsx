import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Sprout, Menu, X, BookOpen, Layers, ShieldCheck, Store, Calculator, Bug, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenHelpline: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenHelpline, activeSection, setActiveSection }) => {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'crops', labelMr: 'सर्व पिके', labelEn: 'All Crops', icon: Sprout },
    { id: 'crop-calendar', labelMr: 'पीक कॅलेंडर', labelEn: 'Crop Calendar', icon: Calendar },
    { id: 'soil-seasons', labelMr: 'जमीन व हंगाम', labelEn: 'Soil & Seasons', icon: Layers },
    { id: 'calculator', labelMr: 'खत गणक', labelEn: 'Fertilizer Calculator', icon: Calculator },
    { id: 'schemes', labelMr: 'शासकीय योजना', labelEn: 'Govt Schemes', icon: ShieldCheck },
    { id: 'mandis', labelMr: 'बाजार व KVK', labelEn: 'APMC & KVK', icon: Store },
    { id: 'pests', labelMr: 'रोग व कीड', labelEn: 'Pest Guide', icon: Bug },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark with domain accent */}
          <div className="flex items-center gap-2">
            <a 
              href="#top" 
              onClick={(e) => { e.preventDefault(); handleNavClick('top'); }}
              className="text-lg sm:text-xl font-bold tracking-tight text-emerald-900 flex items-center gap-2 hover:text-emerald-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Sprout className="w-5 h-5 text-emerald-100" />
              </div>
              <span className="font-extrabold">{t('बळीराजा कृषी मित्र', 'Baliraja Krishi Mitra')}</span>
            </a>
          </div>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer ${
                    isActive 
                      ? 'text-emerald-800 font-semibold' 
                      : 'hover:text-stone-900 text-stone-600'
                  }`}
                >
                  {t(item.labelMr, item.labelEn)}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              aria-label="Switch Language"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-stone-300 hover:border-emerald-600 hover:bg-emerald-50 text-stone-700 transition-colors cursor-pointer"
            >
              <span className={lang === 'mr' ? 'text-emerald-700 font-bold' : 'text-stone-500'}>मराठी</span>
              <span className="text-stone-300">/</span>
              <span className={lang === 'en' ? 'text-emerald-700 font-bold' : 'text-stone-500'}>English</span>
            </button>

            {/* Emergency Hotline Button */}
            <button
              onClick={onOpenHelpline}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t('शेतकरी हेल्पलाइन', 'Helplines')}</span>
              <span className="sm:hidden">{t('मदत', 'Help')}</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-stone-600 hover:text-stone-900 rounded-md hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-md">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-stone-500'}`} />
                <span>{t(item.labelMr, item.labelEn)}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
