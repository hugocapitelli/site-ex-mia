import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../translations';

interface ExcellencePageProps {
  lang: Language;
}

export const ExcellencePage: React.FC<ExcellencePageProps> = ({ lang }) => {
  const t = translations[lang].excellence;

  return (
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">

        {/* ── HERO ── */}
        <section className="relative mb-24 md:mb-32 text-center">
          {/* Glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-atom/5 rounded-full blur-[160px] animate-glow-atom pointer-events-none" />

          <div className="relative z-10">
            <span className="reveal font-mono text-[10px] text-atom uppercase tracking-[0.2em] block mb-6">
              {t.label}
            </span>
            <h1 className="reveal reveal-delay-1 font-serif font-bold text-fluid-hero text-cream leading-[0.9] tracking-tight mb-6">
              {t.title}
            </h1>
            <p className="reveal reveal-delay-2 font-serif italic text-fluid-h2 text-gradient mb-8">
              {t.subtitle}
            </p>
            <p className="reveal reveal-delay-3 max-w-2xl mx-auto text-cream-dim text-lg md:text-xl leading-relaxed">
              {t.desc}
            </p>
          </div>
        </section>

        {/* ── StratOS DASHBOARD ── */}
        <section className="mb-24 md:mb-32">
          <div className="text-center mb-12">
            <h2 className="reveal font-serif text-fluid-h2 text-cream mb-4">{t.featureTitle}</h2>
            <p className="reveal reveal-delay-1 text-cream-dim text-lg max-w-xl mx-auto">{t.featureSubtitle}</p>
          </div>

          {/* Mobile dashboard */}
          <div className="reveal md:hidden mb-8">
            <div className="glass-panel p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-atom uppercase tracking-widest">StratOS</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-success" />
                  <div className="w-2.5 h-2.5 rounded-full bg-warning" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'OEE', value: '94.2%', color: 'text-success' },
                  { label: 'Waste', value: '2.1%', color: 'text-warning' },
                  { label: 'Alignment', value: '100%', color: 'text-success' },
                ].map((kpi, i) => (
                  <div key={i} className="bg-bg-float border border-edge rounded-lg p-4">
                    <h4 className="text-dim text-[10px] font-mono uppercase tracking-widest mb-2">{kpi.label}</h4>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl text-cream font-serif font-bold">{kpi.value}</div>
                      <div className={`${kpi.color} text-xs font-mono`}>
                        <span className="material-symbols-outlined text-sm align-middle">check_circle</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-edge">
                <span className="font-mono text-[10px] text-dim">{t.dashboardStatus}</span>
              </div>
            </div>
          </div>

          {/* Desktop dashboard */}
          <div className="reveal hidden md:block" style={{ perspective: '1000px' }}>
            <div className="glass-panel overflow-hidden border-atom/10 group hover:border-atom/30 transition-all duration-500">
              <div className="bg-bg-core border border-edge rounded-xl shadow-2xl shadow-black/30 flex flex-col transform group-hover:rotate-x-0 transition-transform duration-700 ease-out overflow-hidden" style={{ transform: 'rotateX(4deg)' }}>

                {/* Top bar */}
                <div className="h-10 border-b border-edge bg-bg-float/50 flex items-center px-4 justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-atom uppercase tracking-widest font-bold">StratOS</span>
                    <span className="w-2 h-2 rounded-full bg-atom animate-pulse" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                  </div>
                </div>

                {/* Dashboard body */}
                <div className="p-6">
                  {/* KPI cards */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'OEE', value: '94.2%', status: 'success', icon: 'trending_up' },
                      { label: 'Waste', value: '2.1%', status: 'warning', icon: 'trending_down' },
                      { label: 'Alignment', value: '100%', status: 'success', icon: 'check_circle' },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-bg-float border border-edge rounded-lg p-5">
                        <h4 className="text-dim text-[10px] font-mono uppercase tracking-widest mb-2">{kpi.label}</h4>
                        <div className="flex items-end justify-between">
                          <div className="text-4xl text-cream font-serif font-bold">{kpi.value}</div>
                          <div className={`text-${kpi.status} text-xs flex items-center mb-1`}>
                            <span className="material-symbols-outlined text-sm">{kpi.icon}</span>
                          </div>
                        </div>
                        <div className="w-full bg-bg-card h-1 mt-3 rounded-full overflow-hidden">
                          <div
                            className="bg-atom h-full rounded-full"
                            style={{
                              width: kpi.label === 'OEE' ? '94%' : kpi.label === 'Waste' ? '21%' : '100%',
                              boxShadow: '0 0 10px rgba(139,156,196,0.4)',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Area chart */}
                  <div className="bg-bg-float border border-edge rounded-lg p-5 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-cream text-sm font-semibold">{t.dashboardVelocity}</h4>
                      <div className="flex gap-2">
                        {['D', 'W', 'M'].map((tab, i) => (
                          <span
                            key={tab}
                            className={`text-[10px] px-2 py-1 rounded border border-edge ${
                              i === 1 ? 'text-cream bg-white/5' : 'text-dim'
                            }`}
                          >
                            {tab}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-[120px] border-b border-l border-edge">
                      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 120">
                        <defs>
                          <linearGradient id="atomGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#8B9CC4" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#8B9CC4" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <polygon
                          points="0,90 80,75 160,80 240,55 320,45 400,50 480,30 560,20 600,15 600,120 0,120"
                          fill="url(#atomGradient)"
                        />
                        <polyline
                          points="0,90 80,75 160,80 240,55 320,45 400,50 480,30 560,20 600,15"
                          fill="none"
                          stroke="#8B9CC4"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-dim">{t.dashboardStatus}</span>
                    <span className="font-mono text-[10px] text-atom">{t.dashboardLive}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS ── */}
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24 md:mb-32">
          {t.solutions.map((sol: { title: string; desc: string }, i: number) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} glass-panel hover-lift p-8 md:p-10 hover:border-atom/30 transition-all group`}
            >
              <div className="w-10 h-10 rounded-xl bg-atom/10 flex items-center justify-center text-atom mb-6 group-hover:bg-atom/20 transition-colors">
                <span className="font-mono text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-cream mb-3">{sol.title}</h3>
              <p className="text-cream-dim text-sm leading-relaxed">{sol.desc}</p>
              <div className="w-full h-px bg-edge group-hover:bg-atom/40 transition-colors mt-8" />
            </div>
          ))}
        </section>

        {/* ── INTEGRATION ── */}
        <section className="reveal mb-24 md:mb-32 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-serif text-fluid-h1 text-cream mb-6">{t.integrationTitle}</h2>
            <p className="text-lg text-cream-dim leading-relaxed">{t.integrationDesc}</p>
          </div>

          {/* 4-node integration visual */}
          <div className="flex-1 w-full">
            <div className="glass-panel border-atom/10 p-8 overflow-hidden">
              <svg className="w-full" viewBox="0 0 400 200" fill="none">
                {/* Connection lines */}
                <line x1="60" y1="100" x2="160" y2="60" stroke="#8B9CC4" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3" />
                <line x1="160" y1="60" x2="260" y2="100" stroke="#8B9CC4" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3" />
                <line x1="260" y1="100" x2="340" y2="140" stroke="#8B9CC4" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3" />
                <line x1="60" y1="100" x2="260" y2="100" stroke="#8B9CC4" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="2 4" />

                {/* Node 1: ERP */}
                <circle cx="60" cy="100" r="24" fill="#111111" stroke="#8B9CC4" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="60" cy="100" r="6" fill="#8B9CC4" fillOpacity="0.6" />
                <text x="60" y="140" textAnchor="middle" fill="#B8B0A5" fontSize="10" fontFamily="monospace">ERP</text>

                {/* Node 2: Academy */}
                <circle cx="160" cy="60" r="24" fill="#111111" stroke="#8B9CC4" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="160" cy="60" r="6" fill="#8B9CC4" fillOpacity="0.6" />
                <text x="160" y="100" textAnchor="middle" fill="#B8B0A5" fontSize="10" fontFamily="monospace">Academy</text>

                {/* Node 3: Operations */}
                <circle cx="260" cy="100" r="24" fill="#111111" stroke="#8B9CC4" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="260" cy="100" r="6" fill="#8B9CC4" fillOpacity="0.6" className="animate-pulse" />
                <text x="260" y="140" textAnchor="middle" fill="#B8B0A5" fontSize="10" fontFamily="monospace">Operations</text>

                {/* Node 4: Intelligence */}
                <circle cx="340" cy="140" r="24" fill="#111111" stroke="#8B9CC4" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="340" cy="140" r="6" fill="#8B9CC4" fillOpacity="0.6" />
                <text x="340" y="180" textAnchor="middle" fill="#B8B0A5" fontSize="10" fontFamily="monospace">Intelligence</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── FRAMEWORKS (optional) ── */}
        {'frameworks' in t && (t as any).frameworks && (
          <section className="reveal mb-24 md:mb-32">
            <h2 className="font-serif text-fluid-h2 text-cream mb-12 border-l-4 border-atom pl-6">
              {(t as any).frameworksTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {((t as any).frameworks as { icon: string; title: string; desc: string }[]).map((fw, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${Math.min(i + 1, 5)} glass-panel hover-lift p-6 text-center group hover:border-atom/30 transition-all duration-300`}
                >
                  <div className="w-12 h-12 rounded-xl bg-atom/10 flex items-center justify-center text-atom mx-auto mb-4 group-hover:bg-atom/20 transition-colors">
                    <span className="material-symbols-outlined">{fw.icon}</span>
                  </div>
                  <h4 className="font-semibold text-cream text-sm mb-1">{fw.title}</h4>
                  <p className="text-[11px] text-dim leading-relaxed">{fw.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── KPI IMPACT ── */}
        <section className="reveal glass-panel p-8 md:p-16 text-center border-atom/10 bg-bg-card mb-24 md:mb-32">
          <h2 className="font-serif text-fluid-h2 text-cream mb-4">{t.kpiTitle}</h2>
          <p className="text-cream-dim max-w-xl mx-auto mb-16 text-lg leading-relaxed">{t.kpiDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.kpiItems.map((item: { value: string; label: string }, i: number) => (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} p-8 bg-bg-core rounded-2xl border border-edge`}
              >
                <div className="text-fluid-hero font-serif font-bold text-cream mb-3">{item.value}</div>
                <div className="text-sm text-dim font-mono uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTEXTUAL CTA ── */}
        <section className="reveal text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-atom text-bg-core px-10 py-4 rounded-full font-semibold hover:bg-atom-hover transition-colors duration-300"
          >
            <span className="material-symbols-outlined text-[20px]">event_note</span>
            <span>{t.ctaLabel}</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </section>

      </div>
    </div>
  );
};
