import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StudioPage } from './pages/StudioPage';
import { AcademyPage } from './pages/AcademyPage';
import { ExcellencePage } from './pages/ExcellencePage';
import { ContactPage } from './pages/ContactPage';
import { Page, Language } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [currentLang, setCurrentLang] = useState<Language>(Language.EN);

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage onNavigate={setCurrentPage} lang={currentLang} />;
      case Page.STUDIO:
        return <StudioPage onNavigate={setCurrentPage} lang={currentLang} />;
      case Page.ACADEMY:
        return <AcademyPage lang={currentLang} />;
      case Page.EXCELLENCE:
        return <ExcellencePage lang={currentLang} />;
      case Page.CONTACT:
        return <ContactPage lang={currentLang} />;
      default:
        return <HomePage onNavigate={setCurrentPage} lang={currentLang} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-core selection:bg-accent-primary selection:text-black relative">
      
      {/* Brand Watermark - Top Right - Removed animate-fade-in to fix opacity override */}
      <div className="fixed top-6 right-6 z-40 w-10 h-10 md:w-14 md:h-14 opacity-5 pointer-events-none mix-blend-screen">
        <svg viewBox="0 0 120.4 136.01" className="w-full h-full fill-white">
          <path d="M58.88,132.06c0,2.84,2.96,4.72,5.53,3.5l51-24.09c3.04-1.44,4.99-4.51,4.98-7.89l-.02-23.87v-1.81s-.06-60.95-.06-60.95c0-3.57-2.31-6.73-5.72-7.81L87.3.46c-5.29-1.68-10.7,2.27-10.69,7.83l.04,38.51c.01,11.07,7.12,20.88,17.63,24.32l23.61,7.78-53.28,21.38c-3.48,1.39-5.75,4.77-5.75,8.51l.02,23.27Z"/>
          <path d="M61.33,3.85c-.02-2.84-2.99-4.7-5.56-3.47L4.93,24.8C1.9,26.27-.02,29.35,0,32.73l.18,23.87v1.81s.47,60.94.47,60.94c.03,3.57,2.36,6.71,5.77,7.77l27.35,8.51c5.3,1.65,10.68-2.34,10.64-7.89l-.29-38.51c-.08-11.07-7.26-20.83-17.79-24.21l-23.66-7.62,53.14-21.73c3.47-1.42,5.72-4.8,5.69-8.55l-.17-23.27Z"/>
        </svg>
      </div>

      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} lang={currentLang} />
    </div>
  );
};

export default App;