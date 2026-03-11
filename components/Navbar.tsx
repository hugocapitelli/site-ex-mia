import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const t = translations[currentLang].nav;
  const location = useLocation();

  const navLinks = [
    { label: t.studio, path: '/studio' },
    { label: t.academy, path: '/academy' },
    { label: t.excellence, path: '/excellence' },
  ];

  const languages = [Language.EN, Language.PT, Language.ES, Language.IT];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]">
        <nav className="glass-pill rounded-full px-2 py-2 md:px-3 md:py-2 flex items-center gap-2 md:gap-4 shadow-2xl relative">

          {/* Logo */}
          <Link
            to="/"
            className="w-10 h-10 rounded-full bg-cream border border-cream flex items-center justify-center hover:scale-105 transition-transform overflow-hidden p-2 text-bg-core shadow-[0_0_10px_rgba(232,224,213,0.15)]"
          >
            <svg viewBox="0 0 120.4 136.01" className="w-full h-full fill-current">
              <path d="M58.88,132.06c0,2.84,2.96,4.72,5.53,3.5l51-24.09c3.04-1.44,4.99-4.51,4.98-7.89l-.02-23.87v-1.81s-.06-60.95-.06-60.95c0-3.57-2.31-6.73-5.72-7.81L87.3.46c-5.29-1.68-10.7,2.27-10.69,7.83l.04,38.51c.01,11.07,7.12,20.88,17.63,24.32l23.61,7.78-53.28,21.38c-3.48,1.39-5.75,4.77-5.75,8.51l.02,23.27Z"/>
              <path d="M61.33,3.85c-.02-2.84-2.99-4.7-5.56-3.47L4.93,24.8C1.9,26.27-.02,29.35,0,32.73l.18,23.87v1.81s.47,60.94.47,60.94c.03,3.57,2.36,6.71,5.77,7.77l27.35,8.51c5.3,1.65,10.68-2.34,10.64-7.89l-.29-38.51c-.08-11.07-7.26-20.83-17.79-24.21l-23.66-7.62,53.14-21.73c3.47-1.42,5.72-4.8,5.69-8.55l-.17-23.27Z"/>
            </svg>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-widest transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-cream/10 text-cream'
                    : 'text-dim hover:text-cream-dim hover:bg-cream/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Separator */}
          <div className="hidden md:block w-px h-6 bg-edge mx-1" />

          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="w-10 h-10 rounded-full border border-edge flex items-center justify-center gap-0.5 text-[10px] font-mono font-medium text-accent hover:bg-cream/5 transition-all"
              title="Language"
            >
              {currentLang}
              <span className="material-symbols-outlined text-[10px]">{isLangMenuOpen ? 'expand_less' : 'expand_more'}</span>
            </button>

            {isLangMenuOpen && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-bg-card border border-edge rounded-xl overflow-hidden shadow-2xl flex flex-col min-w-[80px]">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { onLanguageChange(lang); setIsLangMenuOpen(false); }}
                    className={`px-4 py-2 text-[10px] font-mono font-medium hover:bg-cream/5 text-left transition-colors ${
                      currentLang === lang ? 'text-accent bg-cream/5' : 'text-dim'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 bg-accent text-bg-core px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider hover:bg-accent-hover transition-colors duration-300"
          >
            <span>{t.contact}</span>
            <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-11 h-11 rounded-full bg-cream/5 flex items-center justify-center text-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg-core/95 backdrop-blur-xl flex items-center justify-center md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-4">
            {languages.map(lang => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`font-mono text-sm border px-3 py-1 rounded-full transition-colors ${
                  currentLang === lang ? 'border-accent text-accent' : 'border-edge text-dim'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-serif font-bold text-cream hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 inline-flex items-center gap-2 bg-accent text-bg-core px-8 py-3 rounded-full font-semibold text-sm"
          >
            {t.start}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </>
  );
};
