import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const t = translations[lang].contact;

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

        {/* Form Embed - eximIA Forms */}
        <div className="max-w-4xl mx-auto">
           <div className="bento-card bg-bg-card border-white/10 relative overflow-hidden rounded-2xl">
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
        </div>

      </div>
    </div>
  );
};
