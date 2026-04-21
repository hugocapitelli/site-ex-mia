import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomePage } from './pages/HomePage';
import { Language } from './types';

// Lazy-loaded pages for code splitting
const StudioPage = lazy(() => import('./pages/StudioPage').then(m => ({ default: m.StudioPage })));
const AcademyPage = lazy(() => import('./pages/AcademyPage').then(m => ({ default: m.AcademyPage })));
const ExcellencePage = lazy(() => import('./pages/ExcellencePage').then(m => ({ default: m.ExcellencePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Per-route title + canonical update for SEO
const PAGE_META: Record<string, { title: string; description: string; canonical: string }> = {
  '/': {
    title: 'ExímIA Ventures | Excelência Empresarial através de IA',
    description: 'Consultoria, tecnologia e educação corporativa que transforma estratégia em resultados concretos com inteligência artificial.',
    canonical: 'https://eximiaventures.com.br/',
  },
  '/studio': {
    title: 'Studio | Seu Cockpit de Comando — ExímIA Ventures',
    description: 'Pare de ser refém de sistemas fragmentados. Studio é o seu cockpit integrado: visão total, controle real, você no comando.',
    canonical: 'https://eximiaventures.com.br/studio',
  },
  '/academy': {
    title: 'Academy | Educação Corporativa com IA — ExímIA Ventures',
    description: 'Descubra o que sua equipe já sabe. Academy é educação corporativa que revela potencial humano com inteligência artificial.',
    canonical: 'https://eximiaventures.com.br/academy',
  },
  '/excellence': {
    title: 'Excellence | Excelência Operacional com IA — ExímIA Ventures',
    description: 'Visibilidade total, controle real. Excellence integra sistemas e dados para entregar excelência operacional sustentável.',
    canonical: 'https://eximiaventures.com.br/excellence',
  },
  '/contact': {
    title: "Fale Conosco | ExímIA Ventures",
    description: 'Entre em contato com a ExímIA Ventures. Consultoria em inteligência artificial para agronegócio e educação corporativa.',
    canonical: 'https://eximiaventures.com.br/contact',
  },
};

const MetaUpdater: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] ?? PAGE_META['/'];

    document.title = meta.title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (attr === 'name') (el as HTMLMetaElement).name = selector.match(/name="([^"]+)"/)?.[1] ?? '';
        if (attr === 'property') (el as HTMLMetaElement).setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] ?? '');
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', 'name', meta.description);
    setMeta('meta[property="og:title"]', 'property', meta.title);
    setMeta('meta[property="og:description"]', 'property', meta.description);
    setMeta('meta[property="og:url"]', 'property', meta.canonical);
    setMeta('meta[name="twitter:title"]', 'name', meta.title);
    setMeta('meta[name="twitter:description"]', 'name', meta.description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = meta.canonical;
  }, [pathname]);

  return null;
};

// Layout wrapper with Navbar and Footer
const Layout: React.FC<{
  children: React.ReactNode;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}> = ({ children, currentLang, onLanguageChange }) => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-core selection:bg-accent-primary selection:text-black relative">

      {/* Brand Watermark - Top Right */}
      <div className="fixed top-6 right-6 z-40 w-10 h-10 md:w-14 md:h-14 opacity-5 pointer-events-none mix-blend-screen hidden sm:block">
        <svg viewBox="0 0 120.4 136.01" className="w-full h-full fill-white">
          <path d="M58.88,132.06c0,2.84,2.96,4.72,5.53,3.5l51-24.09c3.04-1.44,4.99-4.51,4.98-7.89l-.02-23.87v-1.81s-.06-60.95-.06-60.95c0-3.57-2.31-6.73-5.72-7.81L87.3.46c-5.29-1.68-10.7,2.27-10.69,7.83l.04,38.51c.01,11.07,7.12,20.88,17.63,24.32l23.61,7.78-53.28,21.38c-3.48,1.39-5.75,4.77-5.75,8.51l.02,23.27Z"/>
          <path d="M61.33,3.85c-.02-2.84-2.99-4.7-5.56-3.47L4.93,24.8C1.9,26.27-.02,29.35,0,32.73l.18,23.87v1.81s.47,60.94.47,60.94c.03,3.57,2.36,6.71,5.77,7.77l27.35,8.51c5.3,1.65,10.68-2.34,10.64-7.89l-.29-38.51c-.08-11.07-7.26-20.83-17.79-24.21l-23.66-7.62,53.14-21.73c3.47-1.42,5.72-4.8,5.69-8.55l-.17-23.27Z"/>
        </svg>
      </div>

      <Navbar
        currentLang={currentLang}
        onLanguageChange={onLanguageChange}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer lang={currentLang} />
    </div>
  );
};

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    // Try to get language from localStorage
    const saved = localStorage.getItem('eximia-lang');
    return (saved as Language) || Language.EN;
  });

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('eximia-lang', currentLang);
  }, [currentLang]);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <MetaUpdater />
        <Layout currentLang={currentLang} onLanguageChange={setCurrentLang}>
          <ErrorBoundary>
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-accent-primary" /></div>}>
              <Routes>
                <Route path="/" element={<HomePage lang={currentLang} />} />
                <Route path="/studio" element={<StudioPage lang={currentLang} />} />
                <Route path="/academy" element={<AcademyPage lang={currentLang} />} />
                <Route path="/excellence" element={<ExcellencePage lang={currentLang} />} />
                <Route path="/contact" element={<ContactPage lang={currentLang} />} />
                {/* Fallback to home for unknown routes */}
                <Route path="*" element={<HomePage lang={currentLang} />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
