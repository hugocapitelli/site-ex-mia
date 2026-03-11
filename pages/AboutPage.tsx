import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../translations';

interface AboutPageProps {
  lang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">

        {/* ── HERO ── */}
        <section className="relative mb-24 md:mb-32 text-center">
          {/* Glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px] animate-glow pointer-events-none" />

          <div className="relative z-10">
            <span className="reveal font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-6">
              {t.label}
            </span>
            <h1 className="reveal reveal-delay-1 font-serif font-bold text-fluid-hero text-cream leading-[0.9] tracking-tight mb-8">
              {t.heroTitle}{' '}
              <span className="text-gradient italic">{t.heroHighlight}</span>
            </h1>
            <p className="reveal reveal-delay-2 max-w-2xl mx-auto text-cream-dim text-lg md:text-xl leading-relaxed">
              {t.heroDesc}
            </p>
          </div>
        </section>

        {/* ── MISSION + VISION ── */}
        <section className="reveal grid md:grid-cols-5 gap-6 mb-24 md:mb-32">
          {/* Mission: wider */}
          <div className="md:col-span-3 glass-panel p-10 border-l-4 border-accent">
            <h3 className="font-mono text-sm text-accent uppercase tracking-widest mb-6">{t.missionTitle}</h3>
            <p className="text-cream text-lg leading-relaxed">{t.mission}</p>
          </div>
          {/* Vision: narrower */}
          <div className="md:col-span-2 glass-panel p-10 border-l-4 border-sage">
            <h3 className="font-mono text-sm text-sage uppercase tracking-widest mb-6">{t.visionTitle}</h3>
            <p className="text-cream text-lg leading-relaxed">{t.vision}</p>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="mb-24 md:mb-32">
          <h2 className="reveal font-serif text-fluid-h2 text-cream mb-12 border-l-4 border-accent pl-6">
            {t.valuesTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((v: { icon: string; title: string; desc: string }, i: number) => (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} glass-panel hover-lift p-8 group hover:border-accent/30 transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors">
                  <span className="material-symbols-outlined">{v.icon}</span>
                </div>
                <h3 className="font-semibold text-cream text-lg mb-3">{v.title}</h3>
                <p className="text-sm text-cream-dim leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── APPROACH ── */}
        <section className="mb-24 md:mb-32">
          <h2 className="reveal font-serif text-fluid-h2 text-cream mb-12">
            {t.approachTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.approaches.map((a: { icon?: string; title: string; desc: string }, i: number) => (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} glass-panel hover-lift p-8 md:p-10 group transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-serif font-bold text-lg group-hover:bg-accent/20 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {a.icon && (
                    <span className="material-symbols-outlined text-accent text-xl">{a.icon}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-cream mb-3">{a.title}</h3>
                <p className="text-cream-dim text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="reveal mb-24 md:mb-32">
          <h2 className="font-serif text-fluid-h2 text-cream mb-4">{t.teamTitle}</h2>
          <p className="text-cream-dim text-lg mb-12 max-w-2xl">{t.teamDesc}</p>
          <div className="flex flex-wrap gap-3">
            {t.teamAreas.map((area: { icon?: string; title: string } | string, i: number) => {
              const title = typeof area === 'string' ? area : area.title;
              return (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-full border border-edge text-cream-dim text-sm font-mono tracking-wide hover:border-accent/40 hover:text-cream transition-colors cursor-default"
                >
                  {title}
                </span>
              );
            })}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="reveal glass-panel p-10 md:p-16 lg:p-24 text-center bg-bg-card">
          <h2 className="font-serif font-bold text-fluid-h1 text-cream mb-10">{t.ctaTitle}</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent text-bg-core px-8 py-4 rounded-full font-semibold hover:bg-accent-hover transition-colors duration-300"
          >
            <span>{t.ctaButton}</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </section>

      </div>
    </div>
  );
};
