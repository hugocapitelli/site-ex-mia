import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Language } from '../types';
import { translations } from '../translations';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const t = translations[lang].contact;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    frequency: 'general',
    challenge: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_sh3nf99',
        'template_t873qzs',
        {
          from_name: formState.name,
          from_email: formState.email,
          phone: formState.phone || 'Não informado',
          frequency: formState.frequency,
          message: formState.challenge,
        },
        '9tMCvN9EFuY8aCrdJ'
      );
      setStatus('success');
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
       <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 animate-fade-in flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <div className="w-24 h-24 rounded-full bg-accent-primary/20 flex items-center justify-center mx-auto mb-8 animate-pulse">
               <span className="material-symbols-outlined text-accent-primary text-5xl">satellite_alt</span>
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6 tracking-tighter">{t.successTitle}</h1>
            <p className="text-xl text-text-secondary font-mono mb-12">{t.successDesc}</p>
            <button
               onClick={() => setStatus('idle')}
               className="text-accent-primary font-bold hover:underline underline-offset-8 decoration-dashed"
            >
               [ RESET SIGNAL ]
            </button>
          </div>
       </div>
    );
  }

  if (status === 'error') {
    return (
       <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 animate-fade-in flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-8">
               <span className="material-symbols-outlined text-red-500 text-5xl">error</span>
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6 tracking-tighter">ERRO NA TRANSMISSÃO</h1>
            <p className="text-xl text-text-secondary font-mono mb-12">Algo deu errado. Tente novamente ou entre em contato pelo LinkedIn.</p>
            <button
               onClick={() => setStatus('idle')}
               className="text-accent-primary font-bold hover:underline underline-offset-8 decoration-dashed"
            >
               [ TENTAR NOVAMENTE ]
            </button>
          </div>
       </div>
    );
  }

  return (
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 animate-fade-in">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header - Centered & Simplified */}
        <div className="mb-16 text-center">
           <h1 className="font-display font-black text-6xl md:text-8xl text-white mb-4">{t.title}</h1>
           <p className="text-text-secondary text-xl md:text-2xl max-w-2xl mx-auto font-light">
             {t.subtitle}
           </p>
        </div>
        
        {/* Form Card - Centered */}
        <div className="max-w-4xl mx-auto">
           <div className="bento-card p-8 md:p-12 bg-bg-card border-white/10 relative overflow-hidden">
              {/* Decorative Grid Background */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                 <svg className="w-full h-full" width="100%" height="100%">
                    <defs>
                       <pattern id="gridContact" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                       </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridContact)" />
                 </svg>
              </div>

              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-10">
                 
                 {/* Top Row: Name & Email */}
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3 group">
                       <label className="font-mono text-xs text-accent-primary uppercase flex justify-between">
                          {t.name}
                          <span className="opacity-0 group-focus-within:opacity-100 transition-opacity text-[10px] text-white">REQUIRED</span>
                       </label>
                       <input 
                          type="text" 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          className="bg-bg-core/50 border border-white/10 rounded-lg py-4 px-4 text-white focus:border-accent-primary focus:outline-none focus:bg-bg-core transition-all" 
                          placeholder="Ex: John Doe" 
                       />
                    </div>
                    <div className="flex flex-col gap-3 group">
                       <label className="font-mono text-xs text-accent-primary uppercase flex justify-between">
                          {t.email}
                          <span className="opacity-0 group-focus-within:opacity-100 transition-opacity text-[10px] text-white">REQUIRED</span>
                       </label>
                       <input 
                          type="email" 
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          className="bg-bg-core/50 border border-white/10 rounded-lg py-4 px-4 text-white focus:border-accent-primary focus:outline-none focus:bg-bg-core transition-all" 
                          placeholder="Ex: john@company.com" 
                       />
                    </div>
                 </div>

                 {/* New Field: Phone */}
                 <div className="flex flex-col gap-3 group">
                    <label className="font-mono text-xs text-accent-primary uppercase flex justify-between">
                       {t.phone}
                       <span className="opacity-0 group-focus-within:opacity-100 transition-opacity text-[10px] text-white">OPTIONAL</span>
                    </label>
                    <input 
                       type="tel" 
                       value={formState.phone}
                       onChange={(e) => setFormState({...formState, phone: e.target.value})}
                       className="bg-bg-core/50 border border-white/10 rounded-lg py-4 px-4 text-white focus:border-accent-primary focus:outline-none focus:bg-bg-core transition-all" 
                       placeholder="+55 (11) 99999-9999" 
                    />
                 </div>

                 {/* Frequency Selector */}
                 <div className="flex flex-col gap-3">
                    <label className="font-mono text-xs text-accent-primary uppercase">{t.frequency}</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                       {[
                          { id: 'general', label: t.freqOptions.general },
                          { id: 'studio', label: t.freqOptions.studio },
                          { id: 'academy', label: t.freqOptions.academy },
                          { id: 'excellence', label: t.freqOptions.excellence }
                       ].map((option) => (
                          <button
                             type="button"
                             key={option.id}
                             onClick={() => setFormState({...formState, frequency: option.id})}
                             className={`py-3 px-2 rounded-lg text-xs font-bold border transition-all ${
                                formState.frequency === option.id 
                                   ? 'bg-accent-primary text-black border-accent-primary shadow-[0_0_15px_rgba(212,255,0,0.3)]' 
                                   : 'bg-transparent text-text-secondary border-white/10 hover:border-white/30 hover:text-white'
                             }`}
                          >
                             {option.label}
                          </button>
                       ))}
                    </div>
                 </div>
                 
                 {/* Message Area */}
                 <div className="flex flex-col gap-3 group">
                    <label className="font-mono text-xs text-accent-primary uppercase flex justify-between">
                       {t.challenge}
                       <span className="opacity-0 group-focus-within:opacity-100 transition-opacity text-[10px] text-white">ENCRYPTED</span>
                    </label>
                    <textarea 
                       rows={6} 
                       required
                       value={formState.challenge}
                       onChange={(e) => setFormState({...formState, challenge: e.target.value})}
                       className="bg-bg-core/50 border border-white/10 rounded-lg py-4 px-4 text-white focus:border-accent-primary focus:outline-none focus:bg-bg-core transition-all resize-none" 
                       placeholder="..." 
                    />
                 </div>

                 <div className="relative pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <button 
                       type="submit"
                       disabled={status === 'sending'}
                       className={`
                          w-full md:w-auto bg-white text-black font-bold py-4 px-12 rounded-full 
                          hover:bg-accent-primary transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,255,0,0.4)]
                          disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3
                       `}
                    >
                      {status === 'sending' ? (
                         <>
                            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                            {t.sending}
                         </>
                      ) : (
                         <>
                            {t.send}
                            <span className="material-symbols-outlined text-sm">send</span>
                         </>
                      )}
                    </button>
                    
                    {/* Handwritten Response Note */}
                    <div className="hidden md:flex items-center gap-4 font-hand text-2xl text-text-secondary -rotate-2">
                      <span>← {t.responseHand}</span>
                      <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="stroke-current">
                         <path d="M60 10 C 40 15, 20 5, 0 10" strokeWidth="2" strokeDasharray="4 4" />
                      </svg>
                    </div>
                 </div>

              </form>
           </div>
        </div>

      </div>
    </div>
  );
};