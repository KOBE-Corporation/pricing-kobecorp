import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../data/companyInfo';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<'hero' | 'services' | 'programmes' | 'missions' | 'processus' | 'contact'>('hero');

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const scrollToSection = (anchor: string) => {
    const element = document.querySelector(anchor);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const goToSection = (sectionId?: 'hero' | 'services' | 'programmes' | 'missions' | 'processus' | 'contact') => {
    const anchor = sectionId && sectionId !== 'hero' ? `#${sectionId}` : '#hero';

    const performScroll = () => {
      scrollToSection(anchor);
    };

    // Si on n'est pas sur la page SaaS, on y navigue puis on scrolle
    if (location.pathname !== '/' && location.pathname !== '/saas') {
      navigate('/saas');
      // Attendre le rendu de la page avant de scroller
      setTimeout(performScroll, 150);
    } else {
      performScroll();
    }
  };

  const handleNavClick = (sectionId?: 'hero' | 'services' | 'programmes' | 'missions' | 'processus' | 'contact') => {
    setActiveItem(sectionId ?? 'hero');
    goToSection(sectionId);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md shadow-subtle">
      <div className="mx-auto flex h-auto min-h-16 max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-8 lg:py-0 lg:h-16">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
        >
          <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl overflow-hidden bg-black flex items-center justify-center ring-1 ring-neutral-800/40 shadow-subtle">
            <img
              src="/kobe-corporation-logo.jpeg"
              alt="Logo KOBE Corporation"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-display font-semibold text-ink text-lg sm:text-xl leading-tight">
              {companyInfo.name}
            </h1>
            <span className="text-brand-500 font-semibold text-xs sm:text-sm">
              {companyInfo.slogan}
            </span>
          </div>
        </Link>

        {/* Navigation Desktop - identique au site principal, mais ciblant les sections de la page */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeItem === 'hero'
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            Accueil
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('services')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeItem === 'services'
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('forfaits' as never)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeItem === 'programmes'
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            Programmes
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('missions')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeItem === 'missions'
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            Missions
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('processus')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeItem === 'processus'
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            Processus
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeItem === 'contact'
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right side - Language + CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* Switch langue */}
          <button
            onClick={toggleLanguage}
            className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 shadow-subtle hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 hover:shadow-md transition-all flex items-center gap-1.5"
          >
            <GlobeAltIcon className="h-4 w-4" />
            {language.toUpperCase()}
          </button>

          {/* CTA principal : Discuter avec Ben Djibril */}
          <a
            href="https://ben-djibril.kobecorporation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all"
            style={{ backgroundColor: '#0a7aff' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0066e6')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0a7aff')}
          >
            Discuter avec Ben Djibril
          </a>
        </div>

        {/* Mobile - Language + Menu */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="rounded-full border border-neutral-200 bg-white p-2 text-xs font-semibold text-neutral-700 shadow-subtle hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 transition-all"
          >
            <GlobeAltIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-700 shadow-subtle hover:border-brand-300 hover:bg-brand-50 transition-all"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-neutral-200 bg-white backdrop-blur-md md:hidden animate-fadeInUp">
          <nav className="flex flex-col p-4 space-y-2">
            <button
              type="button"
              onClick={() => {
                handleNavClick('hero');
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors text-left"
            >
              Accueil
            </button>
            <button
              type="button"
              onClick={() => {
                handleNavClick('services');
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors text-left"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => {
                handleNavClick('programmes');
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors text-left"
            >
              Programmes
            </button>
            <button
              type="button"
              onClick={() => {
                handleNavClick('missions');
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors text-left"
            >
              Missions
            </button>
            <button
              type="button"
              onClick={() => {
                handleNavClick('processus');
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors text-left"
            >
              Processus
            </button>
            <button
              type="button"
              onClick={() => {
                handleNavClick('contact');
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors text-left"
            >
              Contact
            </button>

            <a
              href="https://ben-djibril.kobecorporation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md text-center mt-2 transition-all"
              style={{ backgroundColor: '#0a7aff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0066e6')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0a7aff')}
            >
              Discuter avec Ben Djibril
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
