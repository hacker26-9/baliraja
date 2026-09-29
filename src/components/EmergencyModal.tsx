import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HELPLINE_CONTACTS } from '../data/agriData';
import { Phone, X, ShieldAlert, Clock, CheckCircle } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full border border-stone-200 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-emerald-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-emerald-200">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                {t('शेतकरी आपत्कालीन मदत कक्ष', 'Farmer Emergency Helplines')}
              </h3>
              <p className="text-xs text-emerald-300">
                {t('पुणे व महाराष्ट्र शासन थेट संपर्क', 'Pune & Maharashtra Toll-Free Lines')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-emerald-300 hover:text-white hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              {t(
                'अवकाळी पाऊस किंवा गारपिटीमुळे पिकांचे नुकसान झाल्यास ७२ तासांच्या आत १४४४७ या क्रमांकावर पीक विमा कंपनीकडे नोंद करणे बंधनकारक आहे.',
                'Mandatory notice: Report localized crop damages to insurance within 72 hours via 14447.'
              )}
            </span>
          </div>

          <div className="space-y-3">
            {HELPLINE_CONTACTS.map((contact, i) => (
              <div
                key={i}
                className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-3 hover:border-emerald-500 transition-colors"
              >
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                    {t(contact.titleMr, contact.titleEn)}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {t(contact.noteMr, contact.noteEn)}
                  </p>
                </div>

                <a
                  href={`tel:${contact.number}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold shrink-0 shadow-xs transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{contact.number}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-6 py-3 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-white border border-stone-300 rounded-lg cursor-pointer"
          >
            {t('बंद करा', 'Close')}
          </button>
        </div>
      </div>
    </div>
  );
};
