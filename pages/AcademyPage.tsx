import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../translations';

interface AcademyPageProps {
  lang: Language;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ lang }) => {
  const t = translations[lang].academy;

  return (
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 animate-fade-in">
      <div className="max-w-[1400px] mx-auto">

        {/* ── Header ── */}
        <section className="mb-24 md:mb-32">
          <div>
            <span className="font-mono text-[10px] text-sage uppercase tracking-[0.2em] block mb-6">
              {t.label}
            </span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-9xl text-cream leading-[0.9] tracking-tight mb-12">
              <span className="block">{t.title}</span>
              <span className="block text-gradient italic">{t.subtitle}</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-10 items-start max-w-5xl">
              <p className="flex-1 text-cream-dim text-lg md:text-xl font-light leading-relaxed">
                {t.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                {t.buttons.map((btn, i) => (
                  <button
                    key={i}
                    className={`px-6 py-3 rounded-full font-mono text-xs tracking-wider transition-colors duration-300 border border-sage ${
                      i === 1
                        ? 'bg-sage text-bg-core font-semibold hover:bg-sage-hover'
                        : 'text-sage hover:bg-sage hover:text-bg-core'
                    }`}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Comparison ── */}
        <section className="grid md:grid-cols-2 gap-6 mb-24 md:mb-32">
          <div className="glass-panel p-10">
            <h3 className="font-mono text-dim text-sm uppercase tracking-widest mb-8">
              {t.oldWay}
            </h3>
            <ul className="space-y-5">
              {t.oldItems.map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-dim line-through decoration-dim/30">
                  <span className="text-dim/50 mt-0.5">&times;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-10 border-sage/20 hover:border-sage/40 transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-sage/10 transition-colors duration-700" />
            <div className="relative z-10">
              <div className="flex items-baseline gap-3 mb-8">
                <h3 className="font-mono text-cream text-sm uppercase tracking-widest font-semibold">
                  {t.newWay}
                </h3>
              </div>
              <ul className="space-y-5">
                {t.newItems.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-cream">
                    <span className="text-sage font-bold mt-0.5">&rarr;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Learning Paths ── */}
        <section className="mb-24 md:mb-32">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-12 border-l-4 border-sage pl-6">
            {t.pathsTitle}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {t.paths.map((path, i) => (
              <div
                key={i}
                className="glass-panel p-8 md:p-10 hover:border-sage/30 hover:-translate-y-1 group transition-all duration-300"
              >
                <div className="font-serif text-5xl md:text-6xl text-sage/20 group-hover:text-sage/50 transition-colors duration-500 mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-cream mb-3">{path.title}</h3>
                <p className="text-cream-dim text-sm leading-relaxed">{path.desc}</p>
                <div className="mt-8 flex gap-1">
                  {[...Array(i + 1)].map((_, idx) => (
                    <div
                      key={idx}
                      className="h-px w-8 bg-edge group-hover:bg-sage transition-colors duration-500"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Programs / Catalog ── */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-12 text-right">
            {t.catalogTitle}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {t.modules.map((module, i) => (
              <div
                key={i}
                className="glass-panel p-8 md:p-10 group hover:border-sage/40 hover:-translate-y-1 relative transition-all duration-300"
              >
                {i === 2 && (
                  <div className="absolute -top-3 -right-3 bg-sage text-bg-core font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full z-10 font-semibold">
                    {t.recommended}
                  </div>
                )}

                <div className="flex gap-2 mb-6">
                  <span className="text-[10px] font-mono border border-edge px-2 py-1 rounded text-dim">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono bg-sage/10 text-sage px-2 py-1 rounded border border-sage/30">
                    {module.level}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-cream mb-6 group-hover:text-sage transition-colors duration-300">
                  {module.title}
                </h3>

                <div className="w-full h-px bg-edge group-hover:bg-sage/30 transition-colors duration-300 my-4" />

                <div className="flex justify-between items-center">
                  <span className="text-sm text-cream-dim font-mono">{module.duration}</span>
                  <span className="material-symbols-outlined text-cream-dim group-hover:text-sage group-hover:translate-x-1 transition-all duration-300 text-[20px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Numbers ── */}
        {'numbers' in t && (t as any).numbers && (
          <section className="mt-24 md:mt-32">
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-12 text-center">
              {(t as any).numbersTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {((t as any).numbers as { value: string; label: string }[]).map((n, i) => (
                <div key={i} className="glass-panel p-6 md:p-8 text-center group hover:border-sage/30 transition-all">
                  <div className="font-serif font-bold text-4xl md:text-5xl text-cream mb-3 group-hover:text-sage transition-colors">
                    {n.value}
                  </div>
                  <div className="font-mono text-xs text-dim uppercase tracking-wider">{n.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Differentials ── */}
        {'differentials' in t && (t as any).differentials && (
          <section className="mt-24 md:mt-32">
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-12 border-l-4 border-sage pl-6">
              {(t as any).differentialsTitle}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {((t as any).differentials as { icon: string; title: string; desc: string }[]).map((d, i) => (
                <div key={i} className="glass-panel p-8 group hover:border-sage/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center text-sage mb-6 group-hover:bg-sage/20 transition-colors">
                    <span className="material-symbols-outlined">{d.icon}</span>
                  </div>
                  <h3 className="font-semibold text-cream text-lg mb-3">{d.title}</h3>
                  <p className="text-sm text-cream-dim leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
