import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface AcademyPageProps {
  lang: Language;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ lang }) => {
  const t = translations[lang].academy;

  return (
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 animate-fade-in text-white">
       <div className="max-w-[1400px] mx-auto">
         
         {/* Hero - Centered Title */}
         <div className="relative mb-24 flex flex-col items-center overflow-visible">
            <div className="relative inline-block text-center">
                {/* Handwriting 'UNLOCK' Highlight - Gold Gradient */}
                <div className="absolute -top-8 left-0 md:left-4 z-10 pointer-events-none select-none">
                  <span className="font-hand text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aca-orange to-[#FFAB00] -rotate-6 block drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] animate-fade-in">
                    {t.unlock}
                  </span>
                </div>

                {/* Typography Pattern: Solid Top, Outlined Bottom */}
                <h1 className="font-display font-black text-[8vw] md:text-[9vw] leading-[0.85] text-white uppercase relative z-0 tracking-tighter">
                  <span className="block">{t.title}</span>
                  {/* Outlined text using global CSS class .text-outline. Removed hover effect to keep it transparent. */}
                  <span className="block text-outline text-[7vw] md:text-[8vw]">{t.subtitle}</span>
                </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-12 items-start animate-fade-in-up delay-100 max-w-5xl">
               <div className="flex-1 text-center md:text-left">
                 <p className="text-2xl text-text-secondary font-light">
                   {t.desc}
                 </p>
               </div>
               <div className="flex gap-4 relative justify-center md:justify-start">
                  {/* Button Annotation - REDUCED SIZE */}
                  <div className="absolute -top-12 left-4 font-hand text-3xl md:text-4xl font-bold text-aca-orange -rotate-6 hidden md:block">
                     {t.btnHand} ⤵
                  </div>
                  {t.buttons.map((btn, i) => (
                    <button key={i} className={`px-6 py-3 rounded-full font-mono text-sm transition-colors border border-aca-orange ${i === 1 ? 'bg-aca-orange text-black font-bold hover:bg-transparent hover:text-aca-orange' : 'text-aca-orange hover:bg-aca-orange hover:text-black'}`}>
                      {btn}
                    </button>
                  ))}
               </div>
            </div>
         </div>

         {/* Comparison */}
         <div className="grid md:grid-cols-2 gap-4 mb-32">
            <div className="bento-card p-10 bg-bg-card border-white/10 hover:border-white/30 transition-colors">
               <div className="flex justify-between items-start mb-6">
                 <h3 className="font-mono text-gray-500 text-xl">{t.oldWay}</h3>
                 <span className="material-symbols-outlined text-gray-500 text-2xl">block</span>
               </div>
               <ul className="space-y-4 text-text-secondary">
                 {t.oldItems.map((item, i) => (
                    <li key={i} className="flex gap-4"><span className="text-red-500/50">×</span> {item}</li>
                 ))}
               </ul>
            </div>
            <div className="bento-card p-10 bg-bg-card border-aca-orange/30 hover:border-aca-orange transition-colors relative overflow-hidden group">
               {/* Background Accent */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-aca-orange/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-aca-orange/10 transition-colors"></div>
               
               <div className="flex justify-between items-start mb-6 relative z-10">
                 <div>
                    <h3 className="font-mono text-white text-xl font-bold">{t.newWay}</h3>
                    {/* Tech Tag with Handwriting - REDUCED SIZE */}
                    <div className="mt-2 font-hand text-4xl md:text-5xl font-bold text-aca-orange rotate-2">
                       {t.tagHand}
                    </div>
                 </div>
                 <span className="material-symbols-outlined text-aca-orange text-4xl">all_inclusive</span>
               </div>
               <ul className="space-y-4 text-white relative z-10">
                 {t.newItems.map((item, i) => (
                    <li key={i} className="flex gap-4"><span className="text-aca-orange font-bold">→</span> {item}</li>
                 ))}
               </ul>
            </div>
         </div>

         {/* NEW SECTION: Certification Paths */}
         <div className="mb-32">
            <h2 className="font-display text-4xl text-white mb-12 border-l-4 border-aca-orange pl-4">{t.pathsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
               {t.paths.map((path, i) => (
                  <div key={i} className="bento-card p-8 bg-bg-card border-white/10 hover:border-aca-orange/50 hover:-translate-y-2 group transition-all">
                     <div className="text-6xl font-display text-aca-orange/20 mb-4 group-hover:text-aca-orange transition-colors">0{i+1}</div>
                     <h3 className="text-2xl font-bold text-white mb-2">{path.title}</h3>
                     <p className="text-text-secondary">{path.desc}</p>
                     <div className="mt-8 flex gap-1">
                        {[...Array(i+1)].map((_, idx) => (
                          <div key={idx} className="h-1 w-8 bg-white/20 group-hover:bg-aca-orange transition-colors"></div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Catalog */}
         <h2 className="font-display text-4xl text-white mb-12 text-right">{t.catalogTitle}</h2>
         <div className="grid md:grid-cols-3 gap-6">
            {t.modules.map((module, i) => (
              <div key={i} className="bento-card p-0 bg-bg-card hover:bg-bg-float group cursor-pointer border-dashed border-white/20 hover:border-solid hover:border-aca-orange relative transition-all hover:translate-y-[-4px]">
                 
                 {/* Inner container to clip the background and SVG without cutting off external badges */}
                 <div className="absolute inset-0 rounded-[23px] overflow-hidden z-0">
                    {/* IMAGE PLACEHOLDER: SVG Backgrounds */}
                    <div className="absolute inset-0 z-0">
                      <svg className="w-full h-full opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700" viewBox="0 0 400 400" preserveAspectRatio="none">
                          {i === 0 && (
                              <pattern id="mod1" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="#FFD700" />
                              </pattern>
                          )}
                          {i === 1 && (
                              <pattern id="mod2" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M0 40 L40 0" stroke="#FFD700" strokeWidth="1" />
                              </pattern>
                          )}
                          {i === 2 && (
                              <pattern id="mod3" width="50" height="50" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="25" height="25" fill="#FFD700" opacity="0.2" />
                                <rect x="25" y="25" width="25" height="25" fill="#FFD700" opacity="0.2" />
                              </pattern>
                          )}
                          <rect width="100%" height="100%" fill={`url(#mod${i+1})`} />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-bg-card/90 to-transparent"></div>
                    </div>
                 </div>

                 {/* Handwritten Recommended for the 3rd Module - Now outside overflow:hidden */}
                 {i === 2 && (
                    <div className="absolute -top-3 -right-3 bg-aca-orange text-black font-hand text-lg px-4 py-1 rotate-6 shadow-xl z-20 font-bold">
                       {t.recommendedHand}
                    </div>
                 )}

                 <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div>
                        <div className="flex gap-2 mb-6">
                          <span className="text-[10px] font-mono border border-white/20 px-2 py-1 rounded text-text-secondary bg-black/50 backdrop-blur-sm">MODULE 0{i+1}</span>
                          <span className="text-[10px] font-mono bg-aca-orange/20 text-aca-orange px-2 py-1 rounded border border-aca-orange/50 backdrop-blur-sm">{module.level}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-aca-orange transition-colors">{module.title}</h3>
                    </div>
                    
                    <div>
                        <div className="w-full h-px bg-white/10 my-4 group-hover:bg-aca-orange/30"></div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-text-secondary font-mono">{module.duration}</span>
                          <span className="material-symbols-outlined text-white group-hover:text-aca-orange group-hover:translate-x-2 transition-all">arrow_forward</span>
                        </div>
                    </div>
                 </div>
              </div>
            ))}
         </div>

       </div>
    </div>
  );
};