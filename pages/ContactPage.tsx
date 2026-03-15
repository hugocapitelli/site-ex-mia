import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { getConfig } from '../config';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const t = translations[lang].contact;
  const config = getConfig();

  return (
    <div className="bg-bg-core min-h-screen pt-32 pb-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* ── HERO ── */}
        <section className="mb-20 md:mb-28">
          <span className="reveal font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-6">
            Contact
          </span>
          <h1 className="reveal reveal-delay-1 font-serif font-bold text-fluid-hero text-cream leading-[0.9] tracking-tight mb-8">
            {t.title}
          </h1>
          <p className="reveal reveal-delay-2 text-cream-dim text-lg md:text-xl leading-relaxed max-w-2xl">
            {t.subtitle}
          </p>
        </section>

        {/* ── FORM EMBED — eximIA Forms ── */}
        <div className="reveal reveal-delay-3 max-w-3xl">
          <iframe
            src="https://forms.eximiaventures.com.br/embed/formulario-de-contato-eximia-mmnf9177"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: 'none', borderRadius: '8px' }}
            title="Formulário de Contato eximIA"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>

        {/* ── ALTERNATIVE CONTACT ── */}
        <div className="reveal reveal-delay-4 max-w-3xl mt-16 grid sm:grid-cols-2 gap-6">
          {/* Schedule */}
          <a
            href={config.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel hover-lift p-8 flex items-start gap-4 group hover:border-accent/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
              <span className="material-symbols-outlined">calendar_month</span>
            </div>
            <div>
              <h3 className="text-cream font-semibold mb-1">{t.scheduleTitle}</h3>
              <p className="text-cream-dim text-sm leading-relaxed">
                {t.scheduleDesc}
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${config.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel hover-lift p-8 flex items-start gap-4 group hover:border-accent/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
              <span className="material-symbols-outlined">chat</span>
            </div>
            <div>
              <h3 className="text-cream font-semibold mb-1">{t.whatsappTitle}</h3>
              <p className="text-cream-dim text-sm leading-relaxed">
                {t.whatsappDesc}
              </p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};
