import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomePage } from './pages/HomePage';
import { Language } from './types';

const StudioPage = lazy(() => import('./pages/StudioPage').then(m => ({ default: m.StudioPage })));
const AcademyPage = lazy(() => import('./pages/AcademyPage').then(m => ({ default: m.AcademyPage })));
const ExcellencePage = lazy(() => import('./pages/ExcellencePage').then(m => ({ default: m.ExcellencePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Layout: React.FC<{
  children: React.ReactNode;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}> = ({ children, currentLang, onLanguageChange }) => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-core relative">
      {/* Brand Watermark */}
      <div className="fixed top-6 right-6 z-40 w-10 h-10 md:w-14 md:h-14 opacity-[0.03] pointer-events-none hidden sm:block">
        <svg viewBox="0 0 120.4 136.01" className="w-full h-full fill-cream">
          <path d="M58.88,132.06c0,2.84,2.96,4.72,5.53,3.5l51-24.09c3.04-1.44,4.99-4.51,4.98-7.89l-.02-23.87v-1.81s-.06-60.95-.06-60.95c0-3.57-2.31-6.73-5.72-7.81L87.3.46c-5.29-1.68-10.7,2.27-10.69,7.83l.04,38.51c.01,11.07,7.12,20.88,17.63,24.32l23.61,7.78-53.28,21.38c-3.48,1.39-5.75,4.77-5.75,8.51l.02,23.27Z"/>
          <path d="M61.33,3.85c-.02-2.84-2.99-4.7-5.56-3.47L4.93,24.8C1.9,26.27-.02,29.35,0,32.73l.18,23.87v1.81s.47,60.94.47,60.94c.03,3.57,2.36,6.71,5.77,7.77l27.35,8.51c5.3,1.65,10.68-2.34,10.64-7.89l-.29-38.51c-.08-11.07-7.26-20.83-17.79-24.21l-23.66-7.62,53.14-21.73c3.47-1.42,5.72-4.8,5.69-8.55l-.17-23.27Z"/>
        </svg>
      </div>
      <Navbar currentLang={currentLang} onLanguageChange={onLanguageChange} />
      <main className="flex-grow">{children}</main>
      <Footer lang={currentLang} />
    </div>
  );
};

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('eximia-lang');
    return (saved as Language) || Language.EN;
  });

  useEffect(() => {
    localStorage.setItem('eximia-lang', currentLang);
  }, [currentLang]);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Layout currentLang={currentLang} onLanguageChange={setCurrentLang}>
          <ErrorBoundary>
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-accent" /></div>}>
              <Routes>
                <Route path="/" element={<HomePage lang={currentLang} />} />
                <Route path="/studio" element={<StudioPage lang={currentLang} />} />
                <Route path="/academy" element={<AcademyPage lang={currentLang} />} />
                <Route path="/excellence" element={<ExcellencePage lang={currentLang} />} />
                <Route path="/about" element={<AboutPage lang={currentLang} />} />
                <Route path="/contact" element={<ContactPage lang={currentLang} />} />
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
