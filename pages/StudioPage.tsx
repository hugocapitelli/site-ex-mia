import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../translations';

interface StudioPageProps {
  lang: Language;
}

export const StudioPage: React.FC<StudioPageProps> = ({ lang }) => {
  const t = translations[lang].studio;

  const techStack = ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'React'];

  return (
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 animate-fade-in">
      <div className="max-w-[1400px] mx-auto">

        {/* ── Header ── */}
        <section className="mb-24 md:mb-32">
          <div>
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-6">
              {t.label}
            </span>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pb-10 border-b border-edge">
              <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-8xl text-cream leading-[0.95] tracking-tight">
                {t.title}
                <br />
                <span className="text-gradient italic">{t.titleHighlight}</span>{' '}
                {t.titleEnd}
              </h1>
              <p className="max-w-md text-cream-dim text-lg font-light leading-relaxed lg:text-right">
                {t.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* ── Stat + Challenges ── */}
        <section className="grid md:grid-cols-2 gap-8 mb-24 md:mb-32">
          <div className="glass-panel p-10 md:p-14 flex flex-col justify-center">
            <div className="font-serif text-7xl md:text-9xl text-cream leading-none tracking-tight mb-4">
              {t.stat}
            </div>
            <p className="text-cream-dim text-base leading-relaxed max-w-sm mb-3">
              {t.statLabel}
            </p>
            <span className="font-mono text-[10px] text-dim uppercase tracking-widest">
              {t.statSource}
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {t.challenges.map((item, i) => (
              <div
                key={i}
                className="glass-panel p-6 flex items-center gap-5 hover:bg-bg-float transition-all duration-300 group"
              >
                <span className="font-mono text-sm text-accent opacity-50 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-cream font-semibold text-lg">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── What We Deliver ── */}
        <section className="mb-24 md:mb-32">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-12 border-l-4 border-accent pl-6">
            {t.architectureTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.cards.map((card, i) => (
              <div
                key={i}
                className="glass-panel p-8 md:p-10 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-[2px] bg-accent mb-8 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-semibold text-cream text-xl mb-4">{card.title}</h3>
                <p className="text-cream-dim text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Process ── */}
        <section className="mb-24 md:mb-32">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-12 text-right">
            {t.processTitle}
          </h2>
          <div className="border-t border-edge pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {t.processSteps.map((step, i) => (
                <div key={i} className="group">
                  <div className="font-serif text-5xl md:text-6xl text-edge group-hover:text-accent transition-colors duration-500 mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="h-px w-full bg-edge group-hover:bg-accent transition-colors duration-500 mb-5" />
                  <h4 className="text-cream font-semibold text-lg mb-2">{step.title}</h4>
                  <p className="text-cream-dim text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="mb-24 md:mb-32">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-12">
            {t.techTitle}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="glass-panel py-6 flex items-center justify-center font-mono text-sm text-cream-dim hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* ── Client Results ── */}
        {'results' in t && (t as any).results && (
          <section className="mb-24 md:mb-32">
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-12 border-l-4 border-accent pl-6">
              {(t as any).resultsTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {((t as any).results as { value: string; label: string; desc: string }[]).map((r, i) => (
                <div key={i} className="glass-panel p-6 md:p-8 text-center group hover:border-accent/30 transition-all">
                  <div className="font-serif font-bold text-4xl md:text-5xl text-cream mb-3 group-hover:text-accent transition-colors">
                    {r.value}
                  </div>
                  <div className="font-semibold text-sm text-cream mb-2">{r.label}</div>
                  <div className="text-[11px] text-dim leading-relaxed">{r.desc}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="glass-panel p-10 md:p-16 lg:p-24 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl text-cream mb-10 leading-tight">
            {t.cta}
          </h2>
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
