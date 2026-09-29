import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sprout, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
                <Sprout className="w-4 h-4 text-emerald-100" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {t('बळीराजा कृषी मित्र', 'Baliraja Krishi Mitra')}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t(
                'पुणे आणि संपूर्ण महाराष्ट्रातील शेतकरी बांधवांसाठी समर्पित डिजिटल कृषी माहिती, खत नियोजन आणि शासकीय योजना पोर्टल.',
                'Dedicated agricultural knowledge, fertilizer calculations, and government welfare scheme advisory for Maharashtra farmers.'
              )}
            </p>
          </div>

          {/* Col 2: Fast Navigation */}
          <div>
            <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider mb-3">
              {t('महत्त्वाचे विभाग', 'Quick Links')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('crops')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t('सर्व पिके मार्गदर्शक', 'Crop Encyclopedia')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('crop-calendar')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t('पुणे पीक कॅलेंडर (१२ महिने)', 'Pune Crop Calendar (12 Months)')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('soil-seasons')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t('जमीन प्रकार व माती परीक्षण', 'Soil Science & Testing')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t('खत मात्रा कॅल्क्युलेटर', 'Fertilizer Calculator')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('schemes')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t('महाराष्ट्र शासकीय योजना', 'Govt Schemes & Subsidies')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Local Mandis & Centers */}
          <div>
            <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider mb-3">
              {t('पुणे कृषी केंद्रे', 'Pune Agronomy Hubs')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('mandis')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t('पुणे मार्केट यार्ड (गुलटेकडी)', 'Pune APMC Gultekdi')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mandis')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t('नारायणगाव टोमॅटो मार्केट', 'Narayangaon Tomato Hub')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mandis')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t('कृषी विज्ञान केंद्र (KVK), बारामती', 'KVK Baramati')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mandis')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t('चाकण कांदा बाजार', 'Chakan APMC Onion Yard')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Portals */}
          <div>
            <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider mb-3">
              {t('अधिकृत शासकीय संकेतस्थळे', 'Official Govt Portals')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://krishi.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                >
                  <span>{t('कृषी विभाग, महाराष्ट्र शासन', 'Dept of Agriculture, Maharashtra')}</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://mahadbt.maharashtra.gov.in/farmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                >
                  <span>{t('महाडीबीटी शेतकरी पोर्टल', 'MahaDBT Farmer Portal')}</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://pmkisan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                >
                  <span>{t('पीएम-किसान सन्मान निधी', 'PM-Kisan National Portal')}</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://pmfby.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                >
                  <span>{t('पंतप्रधान पीक विमा योजना (PMFBY)', 'PMFBY Crop Insurance')}</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Copyright and disclaimer */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>
            © {new Date().getFullYear()} {t('बळीराजा कृषी मित्र · शेतकरी जनजागृती व माहिती मंच', 'Baliraja Krishi Mitra · Public Farmer Advisory Portal')}.
          </p>
          <p className="flex items-center gap-1 text-stone-400">
            <span>{t('महाराष्ट्रातील शेतकरी बांधवांच्या सेवेसाठी समर्पित', 'Dedicated to the farmers of Maharashtra')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
