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
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 animate-fade-in">
      <div className="max-w-[1400px] mx-auto">

        {/* Hero */}
        <section className="mb-24 md:mb-32 text-center">
          <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-6">
            {t.label}
          </span>
          <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-8xl text-cream leading-[0.9] tracking-tight mb-8">
            {t.heroTitle}{' '}
            <span className="text-gradient italic">{t.heroHighlight}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-cream-dim text-lg md:text-xl font-light leading-relaxed">
            {t.heroDesc}
          </p>
        </section>

        {/* Mission / Vision */}
        <section className="grid md:grid-cols-2 gap-6 mb-24 md:mb-32">
          <div className="glass-panel p-10 border-l-4 border-accent">
            <h3 className="font-mono text-sm text-accent uppercase tracking-widest mb-6">{t.missionTitle}</h3>
            <p className="text-cream text-lg leading-relaxed">{t.mission}</p>
          </div>
          <div className="glass-panel p-10 border-r-4 border-accent">
            <h3 className="font-mono text-sm text-accent uppercase tracking-widest mb-6">{t.visionTitle}</h3>
            <p className="text-cream text-lg leading-relaxed">{t.vision}</p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24 md:mb-32">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-12 border-l-4 border-accent pl-6">
            {t.valuesTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((v: { icon: string; title: string; desc: string }, i: number) => (
              <div key={i} className="glass-panel p-8 group hover:border-accent/30 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors">
                  <span className="material-symbols-outlined">{v.icon}</span>
                </div>
                <h3 className="font-semibold text-cream text-lg mb-3">{v.title}</h3>
                <p className="text-sm text-cream-dim leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="mb-24 md:mb-32">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-12 text-right">
            {t.approachTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.approaches.map((a: { title: string; desc: string }, i: number) => (
              <div key={i} className="glass-panel p-8 md:p-10 group hover:-translate-y-1 transition-all duration-300">
                <div className="font-serif text-5xl text-edge group-hover:text-accent transition-colors duration-500 mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-cream mb-3">{a.title}</h3>
                <p className="text-cream-dim text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-24 md:mb-32">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">{t.teamTitle}</h2>
          <p className="text-cream-dim text-lg mb-12">{t.teamDesc}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.teamAreas.map((area: { icon: string; title: string } | string, i: number) => {
              const icon = typeof area === 'string' ? 'group' : area.icon;
              const title = typeof area === 'string' ? area : area.title;
              return (
                <div key={i} className="glass-panel p-6 text-center group hover:border-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                    <span className="material-symbols-outlined text-lg">{icon}</span>
                  </div>
                  <span className="text-cream text-sm font-medium">{title}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="glass-panel p-10 md:p-16 lg:p-24 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-cream mb-10">{t.ctaTitle}</h2>
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
