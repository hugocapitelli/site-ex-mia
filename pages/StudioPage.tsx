import React from 'react';
import { Page, Language } from '../types';
import { translations } from '../translations';

interface StudioPageProps {
  onNavigate: (page: Page) => void;
  lang: Language;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onNavigate, lang }) => {
  const t = translations[lang].studio;

  return (
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 animate-fade-in">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-8 border-b border-border-subtle relative">
           <div className="relative animate-slide-in-left">
             {/* Handwriting Tag - Matches Academy Style - Gold/Yellow */}
             <div className="absolute -top-12 -left-4 md:-left-6 z-10 pointer-events-none select-none">
               {/* Updated drop shadow color to match Gold (#fdbe66) */}
               <span className="font-hand text-5xl md:text-6xl text-accent-studio -rotate-6 block drop-shadow-[0_0_15px_rgba(253,190,102,0.3)] animate-fade-in whitespace-nowrap">
                 {t.tagHand}
               </span>
             </div>

             <h1 className="font-display font-extrabold text-6xl md:text-8xl text-white mt-2 relative z-0">
               {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t.titleHighlight}</span><br/>{t.titleEnd}
             </h1>
           </div>
           <div className="max-w-sm text-text-secondary mt-8 md:mt-0 font-light animate-fade-in delay-200">
             {t.subtitle}
           </div>
        </div>

        {/* The Problem */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
           {/* Updated background to orange-900/5 to fit the yellow/gold theme */}
           <div className="bento-card p-10 flex flex-col justify-center bg-orange-900/5 border-accent-studio/20 hover:scale-[1.02] relative overflow-hidden group">
              
              {/* SVG IMAGE: Tech Pattern instead of external image */}
              <div className="absolute inset-0 z-0">
                <svg className="w-full h-full opacity-20 group-hover:opacity-30 transition-opacity duration-700" viewBox="0 0 400 400" preserveAspectRatio="none">
                    <defs>
                        <pattern id="chaosGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                             <rect width="100%" height="100%" fill="none" />
                             <path d="M0 50 L50 0" stroke="#fdbe66" strokeWidth="0.5" />
                             <path d="M25 25 L50 50" stroke="#fdbe66" strokeWidth="0.5" opacity="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#chaosGrid)" />
                    <g fill="#fdbe66" opacity="0.5">
                        <circle cx="50" cy="50" r="2" />
                        <circle cx="150" cy="250" r="3" />
                        <circle cx="300" cy="100" r="1.5" />
                    </g>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-card/90"></div>
              </div>

              {/* Handwriting Annotation */}
              <div className="absolute top-6 right-6 font-hand text-4xl text-accent-studio -rotate-6 opacity-90 z-10 font-bold">
                {t.statHand}
              </div>

              <div className="font-display text-8xl text-white mb-4 animate-pulse-slow relative z-10">75%</div>
              <p className="font-mono text-sm text-text-secondary uppercase tracking-widest relative z-10">{t.statLabel}</p>
           </div>
           <div className="flex flex-col gap-4">
              {t.problems.map((item, i) => (
                <div key={i} className="bento-card p-6 flex items-center gap-4 hover:bg-bg-float transition-all hover:translate-x-2">
                  <span className="text-red-500 material-symbols-outlined">warning</span>
                  <span className="text-white font-bold text-lg">{item}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Architecture */}
        <h2 className="font-display text-4xl text-white mb-12 border-l-4 border-accent-studio pl-4">{t.architectureTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-32">
           {t.cards.map((card, i) => (
             <div key={i} className="bento-card p-8 group hover:-translate-y-2">
               <div className="w-12 h-12 rounded-full bg-bg-float flex items-center justify-center text-white mb-6 group-hover:bg-accent-studio group-hover:text-black transition-colors">
                 <span className="material-symbols-outlined">deployed_code</span>
               </div>
               <h3 className="font-bold text-white text-xl mb-4">{card.title}</h3>
               <p className="text-text-secondary text-sm leading-relaxed">{card.text}</p>
             </div>
           ))}
        </div>

        {/* NEW SECTION: Process Timeline */}
        <div className="mb-32">
           <h2 className="font-display text-4xl text-white mb-12 text-right">{t.processTitle}</h2>
           <div className="relative border-t border-border-subtle pt-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {t.processSteps.map((step, i) => (
                   <div key={i} className="group">
                      <div className="text-6xl font-display text-border-subtle group-hover:text-white transition-colors mb-4">0{i+1}</div>
                      <div className="h-1 w-full bg-border-subtle group-hover:bg-accent-studio transition-all duration-700 mb-4"></div>
                      <h4 className="text-white font-bold text-lg">{step.title}</h4>
                      <p className="text-text-secondary text-sm mt-2">{step.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* NEW SECTION: Tech Stack */}
        <div className="mb-32">
           <h2 className="font-display text-4xl text-white mb-12">{t.techTitle}</h2>
           <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'React'].map((tech) => (
                <div key={tech} className="bento-card py-6 flex items-center justify-center font-mono text-text-secondary hover:text-accent-studio hover:border-accent-studio/50 transition-all">
                  {tech}
                </div>
              ))}
           </div>
        </div>

        {/* CTA */}
        <div className="bento-card p-12 md:p-24 text-center bg-gradient-to-b from-bg-card to-bg-core border-accent-studio/20 hover:border-accent-studio transition-colors group">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8 group-hover:scale-105 transition-transform">
            {t.cta}
          </h2>
          <div className="relative inline-block">
             <div className="absolute -top-10 -left-12 font-hand text-3xl md:text-4xl font-bold text-accent-studio -rotate-12 hidden md:block">
                {t.ctaHand} ⤵
             </div>
             <button 
                onClick={() => onNavigate(Page.CONTACT)}
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-accent-studio transition-colors"
             >
                <span>{t.ctaButton}</span>
                <span className="material-symbols-outlined">arrow_forward</span>
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};