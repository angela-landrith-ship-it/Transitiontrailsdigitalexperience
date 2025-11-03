import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { TrailsPage } from './components/pages/TrailsPage';
import { AcademyPage } from './components/pages/AcademyPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { SupportPage } from './components/pages/SupportPage';
import { ContactPage } from './components/pages/ContactPage';
import { CookieConsent } from './components/CookieConsent';
import { BackToTop } from './components/BackToTop';
import { AIAssistant } from './components/AIAssistant';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'trails':
      case 'ourtrails':
        return <TrailsPage onNavigate={handleNavigate} />;
      case 'academy':
        return <AcademyPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'support':
        return <SupportPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <CookieConsent />
      <BackToTop />
      <AIAssistant currentPage={currentPage} />
    </div>
  );
}
