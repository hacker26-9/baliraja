/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CropDirectory } from './components/CropDirectory';
import { CropCalendar } from './components/CropCalendar';
import { SoilAndSeasons } from './components/SoilAndSeasons';
import { FertilizerCalculator } from './components/FertilizerCalculator';
import { SchemesPortal } from './components/SchemesPortal';
import { ApmcDirectory } from './components/ApmcDirectory';
import { PestDoctorGuide } from './components/PestDoctorGuide';
import { ModernTechniques } from './components/ModernTechniques';
import { EmergencyModal } from './components/EmergencyModal';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('crops');
  const [isHelplineOpen, setIsHelplineOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-emerald-700 selection:text-white">
      {/* Top Bar Navigation */}
      <Header
        onOpenHelpline={() => setIsHelplineOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Hero with Agricultural Visual & Unified Search */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Active Search Results Indicator if query active */}
        {searchQuery.trim() && (
          <div className="bg-amber-50 border-b border-amber-200 py-3 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm text-amber-900">
              <p>
                <strong>{t('शोध परिणाम चालू आहे: ', 'Active search filter: ')}</strong>
                <span>"{searchQuery}"</span>
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="underline font-semibold hover:text-amber-950 cursor-pointer"
              >
                {t('सर्व पूर्ववत करा', 'Clear filter')}
              </button>
            </div>
          </div>
        )}

        {/* 1. All Major Crops Directory */}
        <CropDirectory searchQuery={searchQuery} />

        {/* 2. Pune Regional Month-by-Month Crop Calendar */}
        <CropCalendar />

        {/* 3. Fertilizer & NPK Commercial Bag Calculator */}
        <FertilizerCalculator />

        {/* 3. Soil Classification, Testing & Seasons */}
        <SoilAndSeasons />

        {/* 4. Maharashtra & Central Govt Schemes */}
        <SchemesPortal searchQuery={searchQuery} />

        {/* 5. Pest & Disease Doctor Guide */}
        <PestDoctorGuide searchQuery={searchQuery} />

        {/* 6. APMC Mandis & Krishi Vigyan Kendras (Pune Focus) */}
        <ApmcDirectory searchQuery={searchQuery} />

        {/* 7. Modern Farm Innovation (Drip, Onion Chawl, Jivamrit) */}
        <ModernTechniques />
      </main>

      {/* Emergency Farmer Helplines Modal */}
      <EmergencyModal
        isOpen={isHelplineOpen}
        onClose={() => setIsHelplineOpen(false)}
      />

      {/* Quiet Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
