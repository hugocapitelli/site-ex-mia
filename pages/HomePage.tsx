import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../translations';

interface HomePageProps {
  lang: Language;
}

const ecosystemStyles: Record<string, { icon: string; href: string; borderHover: string; iconBorder: string; iconText: string; iconBg: string; arrowHover: string }> = {
  studio: { icon: 'compass_calibration', href: '/studio', borderHover: 'hover:border-accent/30', iconBorder: 'border-accent/20', iconText: 'text-accent', iconBg: 'group-hover:bg-accent/10', arrowHover: 'group-hover:text-accent' },
  academy: { icon: 'school', href: '/academy', borderHover: 'hover:border-sage/30', iconBorder: 'border-sage/20', iconText: 'text-sage', iconBg: 'group-hover:bg-sage/10', arrowHover: 'group-hover:text-sage' },
  excellence: { icon: 'balance', href: '/excellence', borderHover: 'hover:border-atom/30', iconBorder: 'border-atom/20', iconText: 'text-atom', iconBg: 'group-hover:bg-atom/10', arrowHover: 'group-hover:text-atom' },
};

export const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  const t = translations[lang].home;

  return (
    <div className="bg-bg-core min-h-screen">

      {/* ─── 1. HERO ─── */}
      <section className="reveal relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[160px] pointer-events-none animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-sage/5 rounded-full blur-[160px] pointer-events-none animate-glow-sage" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-mono text-[10px] text-dim tracking-[0.25em] uppercase mb-8">
            {t.tagline}
          </p>

          <h1 className="text-fluid-hero font-serif font-bold leading-[0.9] tracking-tight text-cream mb-8">
            {t.heroTitle}
            <br />
            <span className="text-gradient italic">{t.heroSubtitle}</span>
          </h1>

          <p className="text-cream-dim text-lg font-light leading-relaxed max-w-xl mx-auto mb-12">
            {t.heroDesc}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg-core rounded-full font-semibold text-sm tracking-wide hover:bg-accent-hover transition-colors"
          >
            {t.heroCta}
            <span className="material-symbols-outlined text-bg-core text-base">arrow_forward</span>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <span className="material-symbols-outlined text-dim text-2xl">keyboard_arrow_down</span>
        </div>
      </section>

      {/* ─── 2. TRUST BAR ─── */}
      <section className="reveal border-t border-edge py-10 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-mono text-[10px] text-dim tracking-[0.25em] uppercase mb-4">
            {t.trustLine}
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {t.audiences.map((audience: string, i: number) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-edge text-xs select-none">/</span>}
                <span className="font-mono text-xs text-cream-dim tracking-wide">{audience}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. LOGO BAR (Marquee) ─── */}
      <section className="reveal border-t border-edge py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] text-dim tracking-[0.25em] uppercase text-center mb-8">
            {t.logoBar}
          </p>
          <div className="overflow-hidden">
            <div className="flex items-center gap-12 animate-marquee">
              {[...['AgroCorp', 'Banco Nacional', 'IndustriaMax', 'TechVentures', 'SaúdePlus', 'RetailGroup'], ...['AgroCorp', 'Banco Nacional', 'IndustriaMax', 'TechVentures', 'SaúdePlus', 'RetailGroup']].map((name, i) => (
                <span key={i} className="flex-shrink-0 font-mono text-sm text-edge-light tracking-wider uppercase px-6">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. ECOSYSTEM ─── */}
      <section className="reveal py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-fluid-h1 font-serif font-bold text-cream mb-16">
            {t.ecosystem}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['studio', 'academy', 'excellence'] as const).map((key, idx) => {
              const s = ecosystemStyles[key];
              const title = t[`${key}Title` as keyof typeof t] as string;
              const desc = t[`${key}Desc` as keyof typeof t] as string;

              return (
                <Link
                  key={key}
                  to={s.href}
                  className={`glass-panel hover-lift p-8 md:p-10 flex flex-col justify-between group ${s.borderHover} transition-all duration-300 reveal-delay-${idx + 1}`}
                >
                  <div>
                    <div className={`w-11 h-11 rounded-lg border ${s.iconBorder} flex items-center justify-center ${s.iconText} mb-8 ${s.iconBg} transition-colors`}>
                      <span className="material-symbols-outlined text-xl">{s.icon}</span>
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-cream mb-3">{title}</h3>
                    <p className="text-sm text-cream-dim leading-relaxed">{desc}</p>
                  </div>
                  <div className={`mt-8 flex items-center gap-2 text-dim ${s.arrowHover} transition-colors`}>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. WHY EXIMIA ─── */}
      <section className="reveal border-t border-edge py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-fluid-h1 font-serif font-bold text-cream mb-16">
            {t.whyTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.whyItems?.map((item: { icon: string; title: string; desc: string }, i: number) => (
              <div
                key={i}
                className={`glass-panel p-8 md:p-10 reveal-delay-${i + 1}`}
              >
                <div className="w-11 h-11 rounded-lg border border-accent/20 flex items-center justify-center text-accent mb-6">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-cream mb-3">{item.title}</h3>
                <p className="text-sm text-cream-dim leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. IMPACT NUMBERS ─── */}
      <section className="reveal relative border-t border-edge py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="font-mono text-[10px] text-dim tracking-[0.25em] uppercase mb-16">
            {t.impactTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {t.impacts.map((impact: { value: string; label: string; desc: string }, i: number) => (
              <div key={i} className={`reveal-delay-${i + 1}`}>
                <p className="font-serif font-bold text-6xl md:text-7xl text-cream mb-4">
                  {impact.value}
                </p>
                <p className="font-semibold text-base text-cream mb-2">
                  {impact.label}
                </p>
                <p className="text-sm text-cream-dim leading-relaxed">
                  {impact.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. TESTIMONIALS ─── */}
      <section className="reveal py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-[10px] text-dim tracking-[0.25em] uppercase mb-16">
            {t.testimonialsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.map((test: { quote: string; name: string; role: string; company: string }, i: number) => (
              <div
                key={i}
                className={`glass-panel p-8 md:p-10 flex flex-col justify-between group hover:border-cream/20 transition-all duration-300 reveal-delay-${i + 1}`}
              >
                <div>
                  <span className="font-serif text-5xl text-accent/30 leading-none block mb-4">&ldquo;</span>
                  <p className="text-sm text-cream-dim leading-relaxed italic mb-8">
                    {test.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-edge">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-serif font-bold text-sm">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-cream">{test.name}</p>
                    <p className="font-mono text-[10px] text-dim">{test.role} · {test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. INDUSTRIES ─── */}
      <section className="reveal border-t border-edge py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-fluid-h1 font-serif font-bold text-cream mb-16">
            {t.industriesTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.industries.map((ind: { icon: string; title: string; desc: string }, i: number) => (
              <div
                key={i}
                className={`glass-panel hover-lift p-8 group hover:border-accent/30 transition-all duration-300 reveal-delay-${(i % 3) + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors">
                  <span className="material-symbols-outlined">{ind.icon}</span>
                </div>
                <h4 className="font-serif font-bold text-lg text-cream mb-2">{ind.title}</h4>
                <p className="text-sm text-cream-dim leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. METHODOLOGY ─── */}
      <section className="reveal py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-fluid-h1 font-serif font-bold text-cream mb-3">
              {t.methodologyTitle}
            </h2>
            <p className="text-lg text-cream-dim">
              {t.methodologySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-edge">
            {t.steps.map((step: { id: string; title: string; desc: string }, i: number) => (
              <div
                key={step.id}
                className={`bg-bg-core p-6 group hover:bg-bg-card transition-colors duration-300 reveal-delay-${(i % 5) + 1}`}
              >
                <span className="font-serif text-5xl text-edge block mb-4 group-hover:text-accent transition-colors duration-300">
                  {step.id}
                </span>
                <h4 className="font-serif font-bold text-lg text-cream mb-2 group-hover:text-accent transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm text-cream-dim leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. LEAD MAGNET ─── */}
      <section className="reveal border-t border-edge py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-panel p-10 md:p-14">
            <div className="w-14 h-14 rounded-xl border border-accent/20 flex items-center justify-center text-accent mx-auto mb-8">
              <span className="material-symbols-outlined text-2xl">download</span>
            </div>
            <h2 className="text-fluid-h2 font-serif font-bold text-cream mb-4">
              {t.leadTitle}
            </h2>
            <p className="text-cream-dim text-base leading-relaxed mb-10 max-w-md mx-auto">
              {t.leadDesc}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent rounded-full font-semibold text-sm tracking-wide hover:bg-accent hover:text-bg-core transition-colors"
            >
              {t.leadCta}
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 11. CTA ─── */}
      <section className="reveal py-24 md:py-32 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-fluid-h1 font-serif font-bold text-cream mb-6">
            {t.ctaTitle}{' '}
            <span className="text-gradient italic">{t.ctaHighlight}</span>
          </h2>
          <p className="text-lg text-cream-dim mb-12 max-w-lg mx-auto">
            {t.ctaDesc}
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-bg-core rounded-full font-semibold text-base hover:bg-accent-hover transition-colors"
            >
              {t.ctaButton}
              <span className="material-symbols-outlined text-bg-core text-base">arrow_forward</span>
            </Link>
            <p className="text-sm text-dim flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-dim">phone</span>
              {t.whatsappLine}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
