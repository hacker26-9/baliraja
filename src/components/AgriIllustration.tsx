import React, { useState } from 'react';

interface AgriIllustrationProps {
  type: string;
  className?: string;
  altText?: string;
  showOverlay?: boolean;
}

const IMAGE_MAP: Record<string, string> = {
  sugarcane: '/images/sugarcane.jpg',
  onion: '/images/onion.jpg',
  pomegranate: '/images/pomegranate.jpg',
  grapes: '/images/grapes.jpg',
  soybean: '/images/soybean.jpg',
  tomato: '/images/tomato.jpg',
  bajra: '/images/bajra.jpg',
  wheat: '/images/wheat.jpg',
  ginger_turmeric: '/images/ginger_turmeric.jpg',
  fig_custardapple: '/images/fig.jpg',
  marigold_flowers: '/images/marigold.jpg',
  hero_landscape: '/images/hero_pune.jpg',
  drip_fertigation: '/images/drip.jpg',
  drip: '/images/drip.jpg',
  onion_storage_chawl: '/images/onion.jpg',
  organic_jivamrit: '/images/compost.jpg',
  mandi: '/images/mandi.jpg',
};

export const AgriIllustration: React.FC<AgriIllustrationProps> = ({
  type,
  className = 'w-full h-44',
  altText,
  showOverlay = true,
}) => {
  const [imageError, setImageError] = useState(false);
  const imageSrc = IMAGE_MAP[type];

  if (imageSrc && !imageError) {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-stone-900 ${className} group/img`}>
        <img
          src={imageSrc}
          alt={altText || type}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-105"
          loading="lazy"
        />
        {showOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/10 to-transparent pointer-events-none" />
        )}
      </div>
    );
  }

  // Graceful fallback to handcrafted SVGs
  switch (type) {
    case 'hero_landscape':
      return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-800 via-emerald-900 to-stone-900 ${className}`}>
          <svg className="w-full h-full object-cover" viewBox="0 0 800 350" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#064e3b" />
                <stop offset="60%" stopColor="#047857" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="hill1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#065f46" />
                <stop offset="100%" stopColor="#064e3b" />
              </linearGradient>
              <linearGradient id="hill2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#047857" />
                <stop offset="100%" stopColor="#022c22" />
              </linearGradient>
              <linearGradient id="terrace" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>

            {/* Sky */}
            <rect width="800" height="350" fill="url(#skyGrad)" />

            {/* Sahyadri Rising Sun */}
            <circle cx="560" cy="130" r="50" fill="url(#sunGrad)" opacity="0.9" />

            {/* Distant Sahyadri Mountains */}
            <path d="M0,210 Q120,130 250,180 T500,160 T720,140 T800,170 L800,350 L0,350 Z" fill="url(#hill1)" opacity="0.6" />
            <path d="M0,230 Q160,170 320,220 T620,190 T800,210 L800,350 L0,350 Z" fill="url(#hill2)" opacity="0.85" />

            {/* Terraced Fields (Sugarcane & Onion rows) */}
            <path d="M0,260 Q200,240 400,270 T800,250 L800,350 L0,350 Z" fill="url(#terrace)" />
            <path d="M0,285 Q220,265 440,290 T800,275 L800,350 L0,350 Z" fill="#047857" />
            <path d="M0,310 Q240,290 480,315 T800,300 L800,350 L0,350 Z" fill="#065f46" />

            {/* Modern Solar Agri Pump Silhouette */}
            <g transform="translate(680, 220)">
              <polygon points="10,20 50,0 70,15 30,35" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
              <line x1="40" y1="20" x2="40" y2="60" stroke="#94a3b8" strokeWidth="3" />
            </g>

            {/* Drip water lines subtle shimmer */}
            <path d="M50,290 C150,280 250,300 450,295 C600,290 700,310 800,305" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8 6" opacity="0.7" />
            <path d="M0,320 C180,310 320,330 520,325 C650,320 750,335 800,330" stroke="#38bdf8" strokeWidth="2" strokeDasharray="10 8" opacity="0.6" />
          </svg>
        </div>
      );

    case 'sugarcane':
      return (
        <div className={`flex items-center justify-center bg-emerald-900/10 rounded-xl p-3 border border-emerald-200/60 ${className}`}>
          <svg className="w-full h-full max-h-36" viewBox="0 0 100 100" fill="none">
            <rect x="44" y="10" width="12" height="80" rx="3" fill="#059669" />
            <line x1="42" y1="30" x2="58" y2="30" stroke="#d97706" strokeWidth="2" />
            <line x1="42" y1="50" x2="58" y2="50" stroke="#d97706" strokeWidth="2" />
            <line x1="42" y1="70" x2="58" y2="70" stroke="#d97706" strokeWidth="2" />
            <path d="M44,30 Q20,15 10,35 Q30,30 44,32" fill="#10b981" />
            <path d="M56,30 Q80,15 90,35 Q70,30 56,32" fill="#10b981" />
            <path d="M44,50 Q15,40 5,60 Q25,52 44,52" fill="#047857" />
            <path d="M56,50 Q85,40 95,60 Q75,52 56,52" fill="#047857" />
          </svg>
        </div>
      );

    case 'onion':
      return (
        <div className={`flex items-center justify-center bg-rose-900/10 rounded-xl p-3 border border-rose-200/60 ${className}`}>
          <svg className="w-full h-full max-h-36" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="62" rx="28" ry="24" fill="#be123c" />
            <ellipse cx="50" cy="62" rx="20" ry="18" fill="#e11d48" />
            <path d="M46,86 L44,95 M50,86 L50,96 M54,86 L56,94" stroke="#d97706" strokeWidth="2" />
            <path d="M48,40 Q40,15 32,5 Q44,20 49,38" fill="#15803d" />
            <path d="M50,40 Q50,10 50,2 Q52,18 51,38" fill="#16a34a" />
            <path d="M52,40 Q60,15 68,5 Q56,20 51,38" fill="#15803d" />
          </svg>
        </div>
      );

    case 'pomegranate':
      return (
        <div className={`flex items-center justify-center bg-red-900/10 rounded-xl p-3 border border-red-200/60 ${className}`}>
          <svg className="w-full h-full max-h-36" viewBox="0 0 100 100" fill="none">
            <polygon points="40,26 50,10 60,26 47,20 53,20" fill="#991b1b" />
            <circle cx="50" cy="58" r="30" fill="#dc2626" />
            <circle cx="42" cy="52" r="22" fill="#ef4444" opacity="0.6" />
            <ellipse cx="40" cy="46" rx="8" ry="5" fill="#fecaca" opacity="0.5" />
            <path d="M50,22 Q70,10 80,18 Q70,28 50,25" fill="#15803d" />
          </svg>
        </div>
      );

    case 'grapes':
      return (
        <div className={`flex items-center justify-center bg-purple-900/10 rounded-xl p-3 border border-purple-200/60 ${className}`}>
          <svg className="w-full h-full max-h-36" viewBox="0 0 100 100" fill="none">
            <path d="M50,10 Q60,20 50,30" stroke="#78350f" strokeWidth="3" />
            <path d="M50,20 Q30,10 20,25 Q35,35 48,28" fill="#15803d" />
            <circle cx="42" cy="38" r="9" fill="#7e22ce" />
            <circle cx="58" cy="38" r="9" fill="#6b21a8" />
            <circle cx="34" cy="52" r="9" fill="#6b21a8" />
            <circle cx="50" cy="52" r="9" fill="#9333ea" />
            <circle cx="66" cy="52" r="9" fill="#7e22ce" />
            <circle cx="42" cy="66" r="8" fill="#9333ea" />
            <circle cx="58" cy="66" r="8" fill="#6b21a8" />
            <circle cx="50" cy="80" r="7" fill="#7e22ce" />
          </svg>
        </div>
      );

    case 'soybean':
      return (
        <div className={`flex items-center justify-center bg-lime-900/10 rounded-xl p-3 border border-lime-200/60 ${className}`}>
          <svg className="w-full h-full max-h-36" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="25" rx="14" ry="20" fill="#4d7c0f" />
            <ellipse cx="28" cy="36" rx="16" ry="12" fill="#65a30d" />
            <ellipse cx="72" cy="36" rx="16" ry="12" fill="#65a30d" />
            <path d="M50,45 L50,85" stroke="#3f6212" strokeWidth="3" />
            <ellipse cx="40" cy="60" rx="18" ry="7" transform="rotate(-25 40 60)" fill="#a3e635" stroke="#4d7c0f" strokeWidth="1.5" />
            <ellipse cx="60" cy="70" rx="18" ry="7" transform="rotate(25 60 70)" fill="#a3e635" stroke="#4d7c0f" strokeWidth="1.5" />
          </svg>
        </div>
      );

    case 'tomato':
      return (
        <div className={`flex items-center justify-center bg-red-900/10 rounded-xl p-3 border border-red-200/60 ${className}`}>
          <svg className="w-full h-full max-h-36" viewBox="0 0 100 100" fill="none">
            <path d="M50,15 L50,28" stroke="#15803d" strokeWidth="3" />
            <polygon points="50,28 35,22 45,30 32,38 48,34 50,42 52,34 68,38 55,30 65,22" fill="#16a34a" />
            <ellipse cx="50" cy="62" rx="30" ry="26" fill="#dc2626" />
            <ellipse cx="44" cy="56" rx="20" ry="18" fill="#ef4444" opacity="0.6" />
            <circle cx="38" cy="50" r="5" fill="#fecaca" opacity="0.7" />
          </svg>
        </div>
      );

    case 'bajra':
      return (
        <div className={`flex items-center justify-center bg-amber-900/10 rounded-xl p-3 border border-amber-200/60 ${className}`}>
          <svg className="w-full h-full max-h-36" viewBox="0 0 100 100" fill="none">
            <rect x="44" y="20" width="12" height="60" rx="6" fill="#b45309" />
            <path d="M40,25 L60,25 M38,35 L62,35 M38,45 L62,45 M38,55 L62,55 M40,65 L60,65" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2 3" />
            <line x1="50" y1="80" x2="50" y2="95" stroke="#78350f" strokeWidth="3" />
            <path d="M50,85 Q20,70 10,85" stroke="#15803d" strokeWidth="3" fill="none" />
            <path d="M50,88 Q80,70 90,85" stroke="#15803d" strokeWidth="3" fill="none" />
          </svg>
        </div>
      );

    case 'wheat':
      return (
        <div className={`flex items-center justify-center bg-amber-900/10 rounded-xl p-3 border border-amber-200/60 ${className}`}>
          <svg className="w-full h-full max-h-36" viewBox="0 0 100 100" fill="none">
            <path d="M50,95 L50,15" stroke="#d97706" strokeWidth="2" />
            <ellipse cx="44" cy="30" rx="8" ry="4" transform="rotate(-30 44 30)" fill="#f59e0b" />
            <ellipse cx="56" cy="30" rx="8" ry="4" transform="rotate(30 56 30)" fill="#f59e0b" />
            <ellipse cx="44" cy="42" rx="8" ry="4" transform="rotate(-30 44 42)" fill="#f59e0b" />
            <ellipse cx="56" cy="42" rx="8" ry="4" transform="rotate(30 56 42)" fill="#f59e0b" />
            <ellipse cx="44" cy="54" rx="8" ry="4" transform="rotate(-30 44 54)" fill="#f59e0b" />
            <ellipse cx="56" cy="54" rx="8" ry="4" transform="rotate(30 56 54)" fill="#f59e0b" />
            <line x1="44" y1="30" x2="30" y2="10" stroke="#b45309" strokeWidth="1.5" />
            <line x1="56" y1="30" x2="70" y2="10" stroke="#b45309" strokeWidth="1.5" />
          </svg>
        </div>
      );

    default:
      return (
        <div className={`flex items-center justify-center bg-emerald-900/10 rounded-xl p-3 border border-emerald-200/60 ${className}`}>
          <svg className="w-full h-full max-h-36" viewBox="0 0 100 100" fill="none">
            <path d="M50,85 C50,85 50,40 50,30 C50,20 65,15 75,25 C85,35 75,55 50,60" fill="#10b981" />
            <path d="M50,85 C50,85 50,45 50,35 C50,25 35,20 25,30 C15,40 25,60 50,65" fill="#059669" />
            <path d="M50,85 L50,25" stroke="#047857" strokeWidth="3" />
          </svg>
        </div>
      );
  }
};
