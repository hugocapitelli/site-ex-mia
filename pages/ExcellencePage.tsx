import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface ExcellencePageProps {
  lang: Language;
}

export const ExcellencePage: React.FC<ExcellencePageProps> = ({ lang }) => {
  const t = translations[lang].excellence;

  return (
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 animate-fade-in overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="font-mono text-[10px] text-atom uppercase tracking-[0.2em] block mb-6 animate-fade-in">
            {t.label}
          </span>
          <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-cream mb-6">
            {t.title}<br />
            <span className="text-gradient italic">{t.subtitle}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-cream-dim text-lg md:text-xl leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Mobile Dashboard KPIs */}
        <div className="md:hidden mb-24">
          <div className="flex flex-col gap-4">
            <div className="glass-panel p-6">
              <h4 className="text-dim text-[10px] font-mono uppercase tracking-widest mb-2">Global OEE</h4>
              <div className="flex items-end justify-between">
                <div className="text-3xl text-cream font-serif font-bold">87.4%</div>
                <div className="text-success text-xs flex items-center">
                  <span className="material-symbols-outlined text-sm">trending_up</span> +2.4%
                </div>
              </div>
            </div>
            <div className="glass-panel p-6">
              <h4 className="text-dim text-[10px] font-mono uppercase tracking-widest mb-2">Hoshin Goals</h4>
              <div className="flex items-end justify-between">
                <div className="text-3xl text-cream font-serif font-bold">12/15</div>
                <div className="text-xs text-cream-dim">On Track</div>
              </div>
            </div>
            <div className="glass-panel p-6">
              <h4 className="text-dim text-[10px] font-mono uppercase tracking-widest mb-2">Value Leakage</h4>
              <div className="flex items-end justify-between">
                <div className="text-3xl text-cream font-serif font-bold">$0</div>
                <div className="bg-success/10 text-success px-2 py-0.5 rounded text-[10px] uppercase font-bold">Optimal</div>
              </div>
            </div>
            <div className="glass-panel p-6">
              <h4 className="text-cream text-sm font-semibold mb-4">Active Agents</h4>
              <div className="flex flex-col gap-3">
                {['GembaWalker_v2', 'Predictive_Maint', 'Quality_Guard'].map((agent, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-success' : 'bg-warning'}`}></div>
                    <div className="flex-1">
                      <div className="text-xs text-cream font-mono">{agent}</div>
                      <div className="text-[10px] text-dim">Uptime: 99.{9 - i}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* StratOS Dashboard (Desktop) */}
        <div className="hidden md:flex glass-panel overflow-hidden relative min-h-[600px] items-center justify-center mb-24 border-atom/10 group hover:border-atom/30 transition-all">
          <div className="absolute inset-0 bg-gradient-to-b from-atom/[0.03] to-transparent"></div>
          <div className="relative z-10 w-[95%] md:w-[85%] aspect-[16/9] bg-bg-core border border-edge rounded-xl shadow-2xl shadow-black/30 flex flex-col rotate-x-6 group-hover:rotate-x-0 transition-transform duration-700 ease-out overflow-hidden">

            {/* Window Controls */}
            <div className="h-10 border-b border-edge bg-bg-float/50 flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <div className="w-3 h-3 rounded-full bg-success"></div>
              </div>
              <div className="text-[10px] font-mono text-dim uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-atom animate-pulse"></span>
                StratOS_Enterprise_View.exe
              </div>
              <div className="w-4"></div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 grid grid-cols-[60px_1fr] h-full">
              {/* Sidebar */}
              <div className="border-r border-edge flex flex-col items-center py-6 gap-6 bg-bg-float/30">
                {['grid_view', 'query_stats', 'hub', 'settings'].map((icon, i) => (
                  <div key={i} className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${i === 1 ? 'bg-atom/20 text-atom' : 'text-dim hover:text-cream'}`}>
                    <span className="material-symbols-outlined text-lg">{icon}</span>
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="p-6 grid grid-rows-[auto_1fr] gap-6 overflow-hidden bg-bg-core">
                {/* KPIs */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-bg-float border border-edge rounded-lg p-4">
                    <h4 className="text-dim text-[10px] font-mono uppercase tracking-widest mb-2">Global OEE</h4>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl text-cream font-serif font-bold">87.4%</div>
                      <div className="text-success text-xs flex items-center mb-1">
                        <span className="material-symbols-outlined text-sm">trending_up</span> +2.4%
                      </div>
                    </div>
                    <div className="w-full bg-bg-card h-1 mt-3 rounded-full overflow-hidden">
                      <div className="bg-atom h-full w-[87%]" style={{boxShadow: '0 0 10px rgba(139,156,196,0.4)'}}></div>
                    </div>
                  </div>
                  <div className="bg-bg-float border border-edge rounded-lg p-4">
                    <h4 className="text-dim text-[10px] font-mono uppercase tracking-widest mb-2">Hoshin Goals</h4>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl text-cream font-serif font-bold">12/15</div>
                      <div className="text-xs text-cream-dim mb-1">On Track</div>
                    </div>
                    <div className="flex gap-1 mt-3">
                      {[1,1,1,1,1,1,1,1,1,1,0,0].map((active, i) => (
                        <div key={i} className={`h-1 flex-1 rounded-full ${active ? 'bg-atom' : 'bg-bg-card'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-bg-float border border-edge rounded-lg p-4">
                    <h4 className="text-dim text-[10px] font-mono uppercase tracking-widest mb-2">Value Leakage</h4>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl text-cream font-serif font-bold">$0</div>
                      <div className="bg-success/10 text-success px-2 py-0.5 rounded text-[10px] uppercase font-bold mb-1">Optimal</div>
                    </div>
                    <div className="mt-3 text-[10px] text-dim font-mono">Last incident: 42 days ago</div>
                  </div>
                </div>

                {/* Chart + Agents */}
                <div className="grid grid-cols-3 gap-4 h-full">
                  <div className="col-span-2 bg-bg-float border border-edge rounded-lg p-5 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-cream text-sm font-semibold">Productivity Velocity</h4>
                      <div className="flex gap-2">
                        <span className="text-[10px] text-dim border border-edge px-2 py-1 rounded">D</span>
                        <span className="text-[10px] text-cream bg-white/5 border border-edge px-2 py-1 rounded">W</span>
                        <span className="text-[10px] text-dim border border-edge px-2 py-1 rounded">M</span>
                      </div>
                    </div>
                    <div className="flex-1 relative border-b border-l border-edge">
                      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#8B9CC4" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#8B9CC4" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,100 C50,90 100,95 150,80 C200,65 250,75 300,60 C350,45 400,50 450,40 C500,30 550,35 600,20 L600,200 L0,200 Z" fill="url(#gradientArea)" className="opacity-50" />
                        <path d="M0,100 C50,90 100,95 150,80 C200,65 250,75 300,60 C350,45 400,50 450,40 C500,30 550,35 600,20" fill="none" stroke="#8B9CC4" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="150" cy="80" r="3" fill="#E8E0D5" />
                        <circle cx="300" cy="60" r="3" fill="#E8E0D5" />
                        <circle cx="450" cy="40" r="3" fill="#E8E0D5" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-bg-float border border-edge rounded-lg p-5">
                    <h4 className="text-cream text-sm font-semibold mb-4">Active Agents</h4>
                    <div className="flex flex-col gap-3">
                      {['GembaWalker_v2', 'Predictive_Maint', 'Quality_Guard'].map((agent, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded hover:bg-white/5 cursor-pointer">
                          <div className={`w-2 h-2 rounded-full ${i===0?'bg-success':'bg-warning'}`}></div>
                          <div className="flex-1">
                            <div className="text-xs text-cream font-mono">{agent}</div>
                            <div className="text-[10px] text-dim">Uptime: 99.{9-i}%</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24 md:mb-32">
          {t.solutions.map((sol: { title: string; desc: string }, i: number) => (
            <div key={i} className="glass-panel p-8 md:p-10 hover:border-atom/30 transition-all group">
              <div className="text-atom font-mono text-xs tracking-widest mb-6">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-serif font-bold text-cream mb-3">{sol.title}</h3>
              <p className="text-cream-dim text-sm leading-relaxed">{sol.desc}</p>
              <div className="w-full h-px bg-edge group-hover:bg-atom/40 transition-colors mt-8"></div>
            </div>
          ))}
        </div>

        {/* Integration */}
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">{t.integrationTitle}</h2>
            <p className="text-lg text-cream-dim leading-relaxed mb-10">{t.integrationDesc}</p>
            <div className="flex flex-wrap gap-3">
              {['SAP', 'Salesforce', 'Oracle', 'Microsoft 365', 'Slack', 'Jira'].map((tool) => (
                <span key={tool} className="px-5 py-2.5 border border-edge rounded-full text-sm text-cream-dim hover:border-atom/40 hover:text-cream transition-colors cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 relative h-[220px] md:h-[300px] w-full glass-panel border-atom/10 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
              <circle cx="200" cy="150" r="30" fill="#8B9CC4" fillOpacity="0.15" stroke="#8B9CC4" strokeWidth="1.5" />
              <circle cx="200" cy="150" r="6" fill="#8B9CC4" className="animate-pulse" />
              {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                const rad = deg * (Math.PI / 180);
                const x = 200 + Math.cos(rad) * 100;
                const y = 150 + Math.sin(rad) * 100;
                return (
                  <g key={i}>
                    <line x1="200" y1="150" x2={x} y2={y} stroke="#8B9CC4" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 2" />
                    <circle cx={x} cy={y} r="12" fill="#111111" stroke="#E8E0D5" strokeWidth="0.5" strokeOpacity="0.3" />
                    <circle cx={x} cy={y} r="3" fill="#B8B0A5" />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Frameworks */}
        {'frameworks' in t && (t as any).frameworks && (
          <div className="mb-24 md:mb-32">
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-12 border-l-4 border-atom pl-6">
              {(t as any).frameworksTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {((t as any).frameworks as { icon: string; title: string; desc: string }[]).map((fw, i) => (
                <div
                  key={i}
                  className="glass-panel p-6 text-center group hover:border-atom/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-atom/10 flex items-center justify-center text-atom mx-auto mb-4 group-hover:bg-atom/20 transition-colors">
                    <span className="material-symbols-outlined">{fw.icon}</span>
                  </div>
                  <h4 className="font-semibold text-cream text-sm mb-1">{fw.title}</h4>
                  <p className="font-sans text-[11px] text-dim leading-relaxed">{fw.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Impact */}
        <div className="glass-panel p-8 md:p-16 text-center border-atom/10">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">{t.kpiTitle}</h2>
          <p className="text-cream-dim max-w-xl mx-auto mb-16 text-lg leading-relaxed">{t.kpiDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.kpiItems.map((item: { value: string; label: string }, i: number) => (
              <div key={i} className="p-8 bg-white/[0.02] rounded-2xl border border-edge">
                <div className="text-5xl font-serif font-bold text-cream mb-3">{item.value}</div>
                <div className="text-sm text-dim font-mono uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
