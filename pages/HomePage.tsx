import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../translations';

interface HomePageProps {
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  const t = translations[lang].home;
  const navT = translations[lang].nav;

  return (
    <div className="bg-bg-core min-h-screen selection:bg-accent-primary selection:text-black">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-10 pt-32 pb-20 overflow-hidden group">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-accent-secondary/20 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none opacity-30 mix-blend-screen"></div>

        <div className="max-w-[1600px] mx-auto w-full relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-end border-b border-border-subtle pb-6 mb-8 animate-fade-in-up">
            <div className="font-mono text-xs text-text-secondary">
              {t.system}<br/>
              {t.loc}
            </div>
            {/* Tagline font size increased to text-4xl on desktop for more impact */}
            <div className="hidden md:block font-hand text-3xl md:text-4xl text-accent-primary -rotate-6 hover:rotate-0 transition-transform cursor-default">
              {t.tagline}
            </div>
            <div className="font-mono text-xs text-right text-text-secondary">
              V 2.0.5<br/>
              EST. 2024
            </div>
          </div>

          <div className="relative animate-fade-in-up delay-100 flex-grow flex flex-col justify-center items-center">
            {/* Dashed Arrow SVG - Adjusted position for new text size */}
            <div className="absolute top-[55%] left-[2%] w-[80%] h-[65%] pointer-events-none hidden md:block z-0 mix-blend-screen">
              <svg
                className="w-full h-full overflow-visible organic-arrow"
                viewBox="0 0 260 140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="6"
                    markerHeight="6"
                    refX="5"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth"
                  >
                    <path d="M0,0 L6,3 L0,6 Z" fill="#D4FF00" />
                  </marker>
                </defs>
                <path
                  d="M20 35 Q 130 115 240 55"
                  fill="none"
                  stroke="#D4FF00"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="6 12"
                  markerEnd="url(#arrowhead)"
                  className="animate-draw"
                />
              </svg>
            </div>

            {/* Main Title - Reduced font size slightly for better fit */}
            <div className="relative w-full text-center">
              <h1 className="font-display font-extrabold text-[11vw] md:text-[7vw] leading-[0.85] tracking-tighter text-white uppercase mix-blend-exclusion hover:scale-[1.01] transition-transform duration-700 ease-out inline-block max-w-full px-4">
                <span className="block">{t.heroTitle}</span>
                <span className="text-outline block">{t.heroSubtitle}</span>
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-8 animate-fade-in-up delay-200">
            <p className="max-w-xl text-lg md:text-xl text-text-secondary font-light leading-relaxed text-center md:text-left">
              {t.heroDesc}
            </p>

            <div className="relative">
              {/* Handwritten CTA Annotation - REDUCED SIZE */}
              <div className="absolute -top-12 -left-8 font-hand text-3xl md:text-4xl font-bold text-accent-primary -rotate-12 hidden md:block opacity-0 animate-fade-in delay-700" style={{ animationFillMode: 'forwards' }}>
                 {t.heroHand} <span className="text-2xl">⤵</span>
              </div>

              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-white rounded-full overflow-hidden hover:scale-105 transition-transform inline-block"
              >
                <div className="absolute inset-0 bg-accent-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative font-bold text-black text-sm tracking-widest uppercase flex items-center gap-2">
                  {t.initiate} <span className="material-symbols-outlined">arrow_downward</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ECOSYSTEM BENTO GRID */}
      <section className="px-4 md:px-10 py-24 bg-bg-core relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
             <span className="w-3 h-3 bg-accent-primary rounded-full animate-pulse"></span>
             <h2 className="font-mono text-sm text-text-secondary tracking-widest uppercase">{t.ecosystem}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

            {/* STUDIO - Warm Gold (Matches StudioPage) */}
            <Link
              to="/studio"
              className="bento-card md:col-span-2 p-8 md:p-12 relative overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[400px] hover:border-accent-studio/50"
            >
              {/* SVG IMAGE: Detailed Neural Architecture Blueprint */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                  <pattern id="gridStudio" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(253, 190, 102, 0.1)" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#gridStudio)" />

                  {/* Isometric / Network Nodes */}
                  <g transform="translate(100,100)" stroke="#fdbe66" strokeWidth="1" fill="none">
                    {/* Node 1 */}
                    <circle cx="100" cy="150" r="4" fill="#fdbe66" className="animate-pulse" />
                    <circle cx="100" cy="150" r="30" strokeOpacity="0.3" />

                    {/* Node 2 */}
                    <circle cx="300" cy="50" r="4" fill="#fdbe66" className="animate-pulse" style={{animationDelay: '1s'}} />
                    <circle cx="300" cy="50" r="40" strokeOpacity="0.3" />

                    {/* Node 3 */}
                    <circle cx="500" cy="200" r="4" fill="#fdbe66" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                    <circle cx="500" cy="200" r="25" strokeOpacity="0.3" />

                    {/* Node 4 */}
                    <circle cx="250" cy="300" r="4" fill="#fdbe66" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                    <circle cx="250" cy="300" r="20" strokeOpacity="0.3" />

                    {/* Connections */}
                    <path d="M100 150 L300 50" strokeOpacity="0.2" />
                    <path d="M300 50 L500 200" strokeOpacity="0.2" />
                    <path d="M100 150 L250 300" strokeOpacity="0.2" />
                    <path d="M500 200 L250 300" strokeOpacity="0.2" />
                    <path d="M300 50 L250 300" strokeOpacity="0.2" strokeDasharray="5,5" />

                    {/* Floating Data Blocks */}
                    <rect x="280" y="30" width="40" height="40" strokeOpacity="0.5" transform="rotate(45 300 50)" />
                    <rect x="230" y="280" width="40" height="40" strokeOpacity="0.5" transform="rotate(15 250 300)" />
                  </g>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent"></div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Handwritten Tag for Studio */}
              <div className="absolute top-12 right-12 font-hand text-4xl text-accent-studio -rotate-6 hidden md:block opacity-90 z-20">
                {t.studioHand}
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-accent-studio group-hover:text-black transition-colors">
                  <span className="material-symbols-outlined">compass_calibration</span>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 group-hover:translate-x-2 transition-transform">{t.studioTitle}</h3>
                <p className="text-text-secondary max-w-md group-hover:text-white transition-colors">
                  {t.studioDesc}
                </p>
              </div>
            </Link>

            {/* ACADEMY - Gold/Yellow (Matches AcademyPage) */}
            <Link
              to="/academy"
              className="bento-card md:col-span-1 p-8 md:p-12 relative overflow-hidden group cursor-pointer flex flex-col justify-between bg-bg-card hover:bg-[#111] hover:border-aca-orange/50"
            >
               {/* SVG IMAGE: Spiral Growth / DNA Structure */}
               <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                 <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
                    {/* Helix / Spiral Abstract */}
                    <g fill="none" stroke="#FFD700" strokeWidth="1">
                       {/* Rising Spirals */}
                       <path d="M100 600 Q200 500 100 400 T100 200" strokeOpacity="0.2" />
                       <path d="M300 600 Q200 500 300 400 T300 200" strokeOpacity="0.2" />

                       {/* Rungs of the ladder/DNA */}
                       <path d="M100 550 L300 550" strokeOpacity="0.1" />
                       <path d="M120 500 L280 500" strokeOpacity="0.1" />
                       <path d="M140 450 L260 450" strokeOpacity="0.1" />
                       <path d="M100 400 L300 400" strokeOpacity="0.1" />
                       <path d="M120 350 L280 350" strokeOpacity="0.1" />

                       {/* Central Growth Line */}
                       <path d="M200 600 L200 150" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.5" />

                       {/* Top Star/Spark */}
                       <g transform="translate(200, 150)">
                         <circle r="10" fill="#FFD700" opacity="0.5" className="animate-pulse" />
                         <circle r="20" stroke="#FFD700" strokeOpacity="0.3" />
                         <path d="M0 -30 L0 30 M-30 0 L30 0" stroke="#FFD700" strokeOpacity="0.3" />
                       </g>
                    </g>
                 </svg>
                 <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent"></div>
               </div>

               <div className="absolute top-0 right-0 p-4 relative z-10">
                 <span className="material-symbols-outlined text-gray-600 group-hover:text-aca-orange transition-colors text-4xl group-hover:-translate-y-1 group-hover:translate-x-1">north_east</span>
               </div>
               <div className="mt-8 relative z-10">
                  {/* Updated Icon Background and Text Color to Gold */}
                  <div className="w-10 h-10 rounded-full bg-aca-orange/10 text-aca-orange flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <h3 className="font-display font-bold text-3xl text-white mb-2">{t.academyTitle}</h3>
                  {/* Handwritten Tag - Gold */}
                  <div className="font-hand text-3xl text-aca-orange mb-4 -rotate-2 group-hover:rotate-0 transition-transform origin-left">{t.humanCentered}</div>
                  <p className="text-text-secondary text-sm">
                    {t.academyDesc}
                  </p>
               </div>
            </Link>

            {/* EXCELLENCE - Royal Blue (Matches ExcellencePage) */}
            <Link
              to="/excellence"
              className="bento-card md:col-span-3 p-8 md:p-12 relative overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[360px] hover:border-exc-blue/50"
            >
              {/* Background Texture & Integrated Gears */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
                   <pattern id="gridExcellence" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#497EBD" strokeWidth="0.5"/>
                   </pattern>
                   <rect width="100%" height="100%" fill="url(#gridExcellence)" opacity="0.3" />

                   {/* Connecting Belt/System Lines */}
                   <path d="M280 90 L650 320 L1050 180" fill="none" stroke="#497EBD" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

                   {/* Gear 1: Top Left (Near Text) - Small */}
                   <g transform="translate(280, 90)">
                      <g className="animate-spin-slow" style={{animationDuration: '20s'}}>
                         <circle cx="0" cy="0" r="24" stroke="#497EBD" strokeWidth="4" strokeDasharray="6 4" fill="none" />
                         <circle cx="0" cy="0" r="18" stroke="#497EBD" strokeWidth="1" fill="#497EBD" fillOpacity="0.2" />
                         <path d="M-18 0 L18 0 M0 -18 L0 18" stroke="#497EBD" strokeWidth="1" />
                         <circle cx="0" cy="0" r="4" fill="#497EBD" />
                      </g>
                   </g>

                   {/* Gear 2: Middle Bottom - Medium */}
                   <g transform="translate(650, 320)">
                      <g className="animate-spin-slow" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
                          <circle cx="0" cy="0" r="32" stroke="#497EBD" strokeWidth="5" strokeDasharray="7 5" fill="none" />
                          <circle cx="0" cy="0" r="24" stroke="#497EBD" strokeWidth="1.5" fill="#497EBD" fillOpacity="0.1" />
                          <path d="M-24 0 L24 0 M0 -24 L0 24" stroke="#497EBD" strokeWidth="1.5" />
                          <circle cx="0" cy="0" r="5" fill="#497EBD" />
                      </g>
                   </g>

                   {/* Gear 3: Right (Main) - Large */}
                   <g transform="translate(1050, 180)">
                      <g className="animate-spin-slow" style={{animationDuration: '30s'}}>
                          <circle cx="0" cy="0" r="50" stroke="#497EBD" strokeWidth="8" strokeDasharray="10 8" fill="none" />
                          <circle cx="0" cy="0" r="40" stroke="#497EBD" strokeWidth="2" fill="#497EBD" fillOpacity="0.1" />
                          <path d="M-40 0 L40 0 M0 -40 L0 40" stroke="#497EBD" strokeWidth="2" />
                          <circle cx="0" cy="0" r="8" fill="#497EBD" />
                      </g>
                   </g>
                </svg>
                {/* Updated gradient to allow the left gear to be seen through the overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-bg-card/90 via-bg-card/40 to-transparent"></div>
              </div>

              <div className="relative z-10 max-w-2xl">
                 <div className="flex items-center gap-3 mb-4">
                    {/* Updated Icon Color to Blue */}
                    <span className="material-symbols-outlined text-exc-blue text-4xl">balance</span>
                    <h3 className="font-display font-bold text-4xl md:text-5xl text-white">{t.excellenceTitle}</h3>
                 </div>

                 {/* Handwritten Tag - Blue */}
                 <div className="font-hand text-4xl text-exc-blue/80 -rotate-2 mb-6 block opacity-90 origin-left transform translate-x-2">
                    {t.excellenceHand}
                 </div>

                 <p className="text-text-secondary text-lg leading-relaxed group-hover:text-white transition-colors">
                   {t.excellenceDesc}
                  </p>
              </div>

              {/* Technical Footer Line */}
              <div className="relative z-10 mt-8 flex items-center gap-2">
                  <div className="h-px w-12 bg-exc-blue"></div>
                  <span className="font-mono text-xs text-exc-blue tracking-widest">SYS.GOV_V.2.0</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 3. METHODOLOGY */}
      <section className="py-24 border-t border-border-subtle bg-bg-core">
        <div className="max-w-[1600px] mx-auto px-4 md:px-10">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
            <h2 className="font-display font-bold text-5xl md:text-7xl text-white max-w-2xl">
              {t.methodologyTitle}<br/>
              <span className="text-text-secondary">{t.methodologySubtitle}</span>
            </h2>
            <div className="hidden md:block pb-4 animate-float">
              <svg width="100" height="40" viewBox="0 0 100 40">
                <path d="M0,20 L80,20" stroke="#333" strokeWidth="2" />
                <path d="M70,10 L80,20 L70,30" stroke="#333" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.steps.map((step, i) => (
              <div key={i} className="group border-l border-border-subtle pl-6 py-4 hover:border-accent-primary transition-colors duration-300">
                <span className="font-mono text-xs text-text-secondary mb-2 block">STEP {step.id}</span>
                <h4 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent-primary">{step.title}</h4>
                <p className="text-sm text-text-secondary font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-32 px-4 text-center bg-bg-core">
         <div className="max-w-4xl mx-auto">
           <h2 className="font-display font-black text-5xl md:text-8xl text-white mb-8 hover:scale-105 transition-transform duration-500 cursor-default">
             {t.ctaTitle} <span className="text-accent-primary">{t.ctaHighlight}</span>
           </h2>
           <p className="text-text-secondary text-xl mb-12 max-w-xl mx-auto">
             {t.ctaDesc}
           </p>

           <div className="relative inline-block">
             <div className="absolute -top-10 -left-12 font-hand text-3xl md:text-4xl font-bold text-accent-primary -rotate-12 hidden md:block">
                {t.ctaHand} ⤵
             </div>
             <Link
               to="/contact"
               className="px-10 py-5 bg-accent-primary rounded-full text-black font-bold text-lg hover:bg-white hover:scale-110 transition-all shadow-[0_0_40px_rgba(212,255,0,0.3)] inline-block"
             >
               {t.ctaButton}
             </Link>
           </div>
         </div>
      </section>

    </div>
  );
};
