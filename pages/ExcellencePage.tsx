import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface ExcellencePageProps {
  lang: Language;
}

export const ExcellencePage: React.FC<ExcellencePageProps> = ({ lang }) => {
  const t = translations[lang].excellence;

  return (
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 animate-fade-in text-exc-text overflow-hidden">
       <div className="max-w-[1400px] mx-auto relative">
          
          {/* Background Gear Decoration (Fixed position related to container) */}
          <div className="absolute top-0 right-[-10%] opacity-10 pointer-events-none z-0">
             <svg width="600" height="600" viewBox="0 0 600 600" className="animate-spin-slow">
                <circle cx="300" cy="300" r="280" stroke="#497EBD" strokeWidth="2" strokeDasharray="20 10" fill="none" />
                <circle cx="300" cy="300" r="200" stroke="#497EBD" strokeWidth="1" strokeDasharray="10 5" fill="none" />
                <path d="M300 0 L300 600 M0 300 L600 300" stroke="#497EBD" strokeWidth="1" />
             </svg>
          </div>

          {/* Header */}
          <div className="text-center mb-24 relative z-10">
             <div className="relative inline-block">
               {/* Handwriting Tag */}
               <div className="absolute -top-20 -left-6 md:-left-20 z-10 pointer-events-none select-none text-left w-full">
                 <span className="font-hand text-5xl md:text-6xl font-bold text-exc-blue -rotate-6 block drop-shadow-[0_0_15px_rgba(73,126,189,0.4)] animate-fade-in whitespace-nowrap">
                   {t.tagHand}
                 </span>
               </div>
               
               <h1 className="font-display font-black text-6xl md:text-9xl text-white mb-6 relative z-0">
                 {t.title}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-exc-blue to-cyan-400">{t.subtitle}</span>
               </h1>
             </div>
             
             <p className="max-w-2xl mx-auto text-exc-text text-xl">
               {t.desc}
             </p>
          </div>

          {/* Feature Highlight - StratOS - DASHBOARD */}
          <div className="bento-card overflow-hidden relative min-h-[600px] flex items-center justify-center mb-24 border-exc-border bg-bg-card group hover:border-exc-blue/50 transition-all">
             {/* Background Ambience */}
             <div className="absolute inset-0 bg-gradient-to-b from-exc-blue/5 to-transparent"></div>
             
             {/* Dashboard Container - 3D Perspective */}
             <div className="relative z-10 w-[95%] md:w-[85%] aspect-[16/9] bg-[#0E0E12] border border-white/10 rounded-xl shadow-2xl flex flex-col rotate-x-6 group-hover:rotate-x-0 transition-transform duration-700 ease-out overflow-hidden">
                
                {/* Window Controls & Header */}
                <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 justify-between">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                   </div>
                   <div className="text-[10px] font-mono text-exc-muted uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-exc-blue animate-pulse"></span>
                      StratOS_Enterprise_View.exe
                   </div>
                   <div className="w-4"></div>
                </div>

                {/* Dashboard Content Grid */}
                <div className="flex-1 grid grid-cols-[60px_1fr] h-full">
                   
                   {/* Sidebar Navigation */}
                   <div className="border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-white/[0.02]">
                      {['grid_view', 'query_stats', 'hub', 'settings'].map((icon, i) => (
                        <div key={i} className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${i === 1 ? 'bg-exc-blue/20 text-exc-blue' : 'text-exc-muted hover:text-white'}`}>
                           <span className="material-symbols-outlined text-lg">{icon}</span>
                        </div>
                      ))}
                   </div>

                   {/* Main Dashboard Area */}
                   <div className="p-6 grid grid-rows-[auto_1fr] gap-6 overflow-hidden bg-bg-core">
                      
                      {/* Top KPIs */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         {/* KPI 1: OEE */}
                         <div className="bg-bg-float border border-white/5 rounded-lg p-4 relative overflow-hidden">
                            <h4 className="text-exc-muted text-xs font-mono uppercase mb-2">Global OEE</h4>
                            <div className="flex items-end justify-between">
                               <div className="text-3xl text-white font-display font-bold">87.4%</div>
                               <div className="text-green-400 text-xs flex items-center mb-1">
                                  <span className="material-symbols-outlined text-sm">trending_up</span> +2.4%
                               </div>
                            </div>
                            <div className="w-full bg-gray-800 h-1 mt-3 rounded-full overflow-hidden">
                               <div className="bg-exc-blue h-full w-[87%]" style={{boxShadow: '0 0 10px rgba(73,126,189,0.5)'}}></div>
                            </div>
                         </div>

                         {/* KPI 2: Strategy Deployment */}
                         <div className="bg-bg-float border border-white/5 rounded-lg p-4 relative">
                            <h4 className="text-exc-muted text-xs font-mono uppercase mb-2">Hoshin Goals</h4>
                            <div className="flex items-end justify-between">
                               <div className="text-3xl text-white font-display font-bold">12/15</div>
                               <div className="text-xs text-exc-text mb-1">On Track</div>
                            </div>
                            <div className="flex gap-1 mt-3">
                               {[1,1,1,1,1,1,1,1,1,1,0,0].map((active, i) => (
                                  <div key={i} className={`h-1 flex-1 rounded-full ${active ? 'bg-exc-blue' : 'bg-gray-800'}`}></div>
                               ))}
                            </div>
                         </div>

                         {/* KPI 3: Incidents */}
                         <div className="bg-bg-float border border-white/5 rounded-lg p-4 relative">
                            <h4 className="text-exc-muted text-xs font-mono uppercase mb-2">Value Leakage</h4>
                            <div className="flex items-end justify-between">
                               <div className="text-3xl text-white font-display font-bold">$0</div>
                               <div className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-[10px] uppercase font-bold mb-1">Optimal</div>
                            </div>
                            <div className="mt-3 text-[10px] text-exc-muted font-mono">
                               Last incident: 42 days ago
                            </div>
                         </div>
                      </div>

                      {/* Main Visualization Area */}
                      <div className="grid grid-cols-3 gap-4 h-full">
                         
                         {/* Large Chart */}
                         <div className="col-span-2 bg-bg-float border border-white/5 rounded-lg p-5 flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                               <h4 className="text-white text-sm font-bold">Productivity Velocity</h4>
                               <div className="flex gap-2">
                                  <span className="text-[10px] text-exc-muted border border-white/10 px-2 py-1 rounded">D</span>
                                  <span className="text-[10px] text-white bg-white/10 border border-white/10 px-2 py-1 rounded">W</span>
                                  <span className="text-[10px] text-exc-muted border border-white/10 px-2 py-1 rounded">M</span>
                               </div>
                            </div>
                            
                            {/* SVG Trend Line */}
                            <div className="flex-1 relative border-b border-l border-white/10">
                               {/* Grid lines */}
                               <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                  <div className="border-t border-dashed border-gray-500 w-full h-px"></div>
                                  <div className="border-t border-dashed border-gray-500 w-full h-px"></div>
                                  <div className="border-t border-dashed border-gray-500 w-full h-px"></div>
                               </div>

                               <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                  <defs>
                                     <linearGradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#497EBD" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#497EBD" stopOpacity="0" />
                                     </linearGradient>
                                  </defs>
                                  <path 
                                    d="M0,100 C50,90 100,95 150,80 C200,65 250,75 300,60 C350,45 400,50 450,40 C500,30 550,35 600,20 L600,200 L0,200 Z" 
                                    fill="url(#gradientArea)" 
                                    className="opacity-50"
                                  />
                                  <path 
                                    d="M0,100 C50,90 100,95 150,80 C200,65 250,75 300,60 C350,45 400,50 450,40 C500,30 550,35 600,20"
                                    fill="none"
                                    stroke="#497EBD"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                  />
                                  {/* Data Points */}
                                  <circle cx="150" cy="80" r="3" fill="#fff" />
                                  <circle cx="300" cy="60" r="3" fill="#fff" />
                                  <circle cx="450" cy="40" r="3" fill="#fff" />
                                </svg>
                            </div>
                         </div>

                         {/* Side List */}
                         <div className="bg-bg-float border border-white/5 rounded-lg p-5">
                            <h4 className="text-white text-sm font-bold mb-4">Active Agents</h4>
                            <div className="flex flex-col gap-3">
                               {['GembaWalker_v2', 'Predictive_Maint', 'Quality_Guard'].map((agent, i) => (
                                  <div key={i} className="flex items-center gap-2 p-2 rounded hover:bg-white/5 cursor-pointer">
                                     <div className={`w-2 h-2 rounded-full ${i===0?'bg-green-500':'bg-yellow-500'}`}></div>
                                     <div className="flex-1">
                                        <div className="text-xs text-white font-mono">{agent}</div>
                                        <div className="text-[10px] text-exc-muted">Uptime: 99.{9-i}%</div>
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

          {/* Solutions / Logic */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
             {t.solutions.map((sol, i) => (
               <div key={i} className="bento-card p-8 bg-bg-card border-white/5 hover:border-exc-blue/50 group">
                  <div className="text-xs font-mono text-exc-blue mb-4">0{i+1}_SYS</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{sol.title}</h3>
                  <p className="text-exc-text text-sm mb-6">{sol.desc}</p>
                  <div className="w-full h-px bg-white/10 group-hover:bg-exc-blue transition-colors"></div>
               </div>
             ))}
          </div>

          {/* Integrations Section - NEW GRAPHIC */}
          <div className="mb-32 flex flex-col md:flex-row items-center gap-12">
             <div className="flex-1">
                <div className="relative inline-block mb-6">
                   {/* Handwriting: Plug & Play - REDUCED SIZE & CHANGED TO BLUE */}
                   <div className="absolute -top-12 -left-8 font-hand text-3xl md:text-4xl font-bold text-exc-blue -rotate-12 w-[200px]">
                      {t.integrationHand} 
                   </div>
                   <h2 className="font-display text-4xl text-white">{t.integrationTitle}</h2>
                </div>
                <p className="text-xl text-exc-text mb-8">{t.integrationDesc}</p>
                <div className="flex flex-wrap gap-4">
                   {['SAP', 'Salesforce', 'Oracle', 'Microsoft 365', 'Slack', 'Jira'].map((tool) => (
                      <span key={tool} className="px-4 py-2 border border-white/10 rounded-full text-sm hover:bg-white hover:text-black transition-colors cursor-default">
                         {tool}
                      </span>
                   ))}
                </div>
             </div>
             
             {/* Tech Graphic: Network Nodes */}
             <div className="flex-1 relative h-[300px] w-full bento-card border-exc-blue/20 bg-exc-card/20 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                   {/* Central Hub */}
                   <circle cx="200" cy="150" r="30" fill="#497EBD" fillOpacity="0.2" stroke="#497EBD" strokeWidth="2" />
                   <circle cx="200" cy="150" r="8" fill="#497EBD" className="animate-pulse" />
                   
                   {/* Satellites */}
                   {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                      const rad = deg * (Math.PI / 180);
                      const x = 200 + Math.cos(rad) * 100;
                      const y = 150 + Math.sin(rad) * 100;
                      return (
                         <g key={i}>
                            <line x1="200" y1="150" x2={x} y2={y} stroke="#497EBD" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 2" />
                            <circle cx={x} cy={y} r="15" fill="#0A0C10" stroke="#CDD5DA" strokeWidth="1" />
                            <circle cx={x} cy={y} r="4" fill="#CDD5DA" />
                         </g>
                      );
                   })}
                </svg>
             </div>
          </div>

          {/* KPI / Impact - NEW GRAPHIC */}
          <div className="bento-card p-12 bg-gradient-to-br from-exc-card to-bg-core border-exc-blue/20 text-center relative overflow-hidden">
             
             {/* Handwriting: Exponential - REDUCED SIZE & CHANGED TO BLUE */}
             <div className="absolute top-8 right-12 md:right-24 font-hand text-3xl md:text-4xl font-bold text-exc-blue rotate-6">
                {t.growthHand} ↗
             </div>

             <div className="relative z-10">
                <h2 className="font-display text-4xl text-white mb-4">{t.kpiTitle}</h2>
                <p className="text-exc-text max-w-xl mx-auto mb-12">{t.kpiDesc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-4xl font-bold text-white mb-2">40%</div>
                      <div className="text-xs font-mono text-exc-muted uppercase">Efficiency Gain</div>
                   </div>
                   <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-4xl font-bold text-white mb-2">2.5x</div>
                      <div className="text-xs font-mono text-exc-muted uppercase">Faster Decisions</div>
                   </div>
                   <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-4xl font-bold text-white mb-2">100%</div>
                      <div className="text-xs font-mono text-exc-muted uppercase">Compliance</div>
                   </div>
                </div>
             </div>
          </div>

       </div>
    </div>
  );
};