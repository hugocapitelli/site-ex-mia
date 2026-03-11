import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../translations';

interface HomePageProps {
  lang: Language;
}

const ecosystemIcons: Record<string, { icon: string; color: string; href: string }> = {
  studio: { icon: 'compass_calibration', color: 'accent', href: '/studio' },
  academy: { icon: 'school', color: 'sage', href: '/academy' },
  excellence: { icon: 'balance', color: 'atom', href: '/excellence' },
};

export const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  const t = translations[lang].home;

  return (
    <div className="bg-bg-core min-h-screen">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-accent/3 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center animate-fade-in-up">
          <p className="font-mono text-xs text-dim tracking-[0.25em] uppercase mb-8">
            {t.tagline}
          </p>

          <h1 className="font-serif font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-cream mb-8">
            {t.heroTitle}
            <br />
            <span className="text-gradient italic">{t.heroSubtitle}</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-cream-dim leading-relaxed max-w-xl mx-auto mb-12">
            {t.heroDesc}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent rounded-full text-bg-core font-sans font-semibold text-sm tracking-wide hover:bg-accent-hover transition-colors"
          >
            {t.heroCta}
            <span className="material-symbols-outlined text-bg-core text-base">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-t border-edge py-10 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-mono text-xs text-dim tracking-wide mb-4">
            {t.trustLine}
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {t.audiences.map((audience, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-edge text-xs select-none">/</span>}
                <span className="font-mono text-xs text-cream-dim tracking-wide">{audience}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-cream mb-16 animate-fade-in">
            {t.ecosystem}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['studio', 'academy', 'excellence'] as const).map((key) => {
              const { icon, color, href } = ecosystemIcons[key];
              const title = t[`${key}Title` as keyof typeof t] as string;
              const desc = t[`${key}Desc` as keyof typeof t] as string;

              return (
                <Link
                  key={key}
                  to={href}
                  className="glass-panel p-8 md:p-10 flex flex-col justify-between group hover:border-cream/20 transition-all duration-300"
                >
                  <div>
                    <div className={`w-11 h-11 rounded-lg border border-${color}/20 flex items-center justify-center text-${color} mb-8 group-hover:bg-${color}/10 transition-colors`}>
                      <span className="material-symbols-outlined text-xl">{icon}</span>
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-cream mb-3">{title}</h3>
                    <p className="font-sans text-sm text-cream-dim leading-relaxed">{desc}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-dim group-hover:text-cream transition-colors">
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="relative border-t border-edge py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="font-mono text-xs text-dim tracking-[0.2em] uppercase mb-16">
            {t.impactTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {t.impacts.map((impact, i) => (
              <div key={i} className="animate-fade-in-up">
                <p className="font-serif font-bold text-6xl md:text-7xl text-cream mb-4">
                  {impact.value}
                </p>
                <p className="font-sans font-semibold text-base text-cream mb-2">
                  {impact.label}
                </p>
                <p className="font-sans text-sm text-cream-dim leading-relaxed">
                  {impact.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-xs text-dim tracking-[0.2em] uppercase mb-16">
            {t.testimonialsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.map((test: { quote: string; name: string; role: string; company: string }, i: number) => (
              <div key={i} className="glass-panel p-8 md:p-10 flex flex-col justify-between group hover:border-cream/20 transition-all duration-300">
                <div>
                  <span className="font-serif text-5xl text-accent/30 leading-none block mb-4">"</span>
                  <p className="font-sans text-sm text-cream-dim leading-relaxed italic mb-8">
                    {test.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-edge">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-serif font-bold text-sm">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm text-cream">{test.name}</p>
                    <p className="font-mono text-[10px] text-dim">{test.role} · {test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-t border-edge py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-cream mb-16">
            {t.industriesTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.industries.map((ind: { icon: string; title: string; desc: string }, i: number) => (
              <div
                key={i}
                className="glass-panel p-6 text-center group hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="material-symbols-outlined">{ind.icon}</span>
                </div>
                <h4 className="font-semibold text-cream text-sm mb-1">{ind.title}</h4>
                <p className="font-sans text-[11px] text-dim leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-6xl text-cream mb-3">
              {t.methodologyTitle}
            </h2>
            <p className="font-sans text-lg text-cream-dim">
              {t.methodologySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-edge">
            {t.steps.map((step) => (
              <div
                key={step.id}
                className="bg-bg-core p-6 group hover:bg-bg-card transition-colors duration-300"
              >
                <span className="font-mono text-xs text-dim block mb-4">{step.id}</span>
                <h4 className="font-serif font-bold text-lg text-cream mb-2 group-hover:text-accent transition-colors">
                  {step.title}
                </h4>
                <p className="font-sans text-sm text-cream-dim leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif font-bold text-5xl md:text-7xl text-cream mb-6">
            {t.ctaTitle}{' '}
            <span className="text-gradient italic">{t.ctaHighlight}</span>
          </h2>
          <p className="font-sans text-lg text-cream-dim mb-12 max-w-lg mx-auto">
            {t.ctaDesc}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent rounded-full text-bg-core font-sans font-semibold text-base hover:bg-accent-hover transition-colors"
          >
            {t.ctaButton}
            <span className="material-symbols-outlined text-bg-core text-base">arrow_forward</span>
          </Link>
        </div>
      </section>

    </div>
  );
};
