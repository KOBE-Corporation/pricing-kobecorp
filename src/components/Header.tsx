import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../data/companyInfo';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

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

  const goToSaasHero = () => {
    const performScroll = () => scrollToSection('#hero');
    if (location.pathname !== '/' && location.pathname !== '/saas') {
      navigate('/saas');
      setTimeout(performScroll, 150);
    } else {
      performScroll();
    }
  };

  const isActiveRoute = (paths: string[]) => paths.includes(location.pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md shadow-subtle">
      <div className="mx-auto flex h-auto min-h-16 max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-8 lg:py-0 lg:h-16">
        {/* Logo */}
        <Link
          to="/saas"
          onClick={(e) => {
            e.preventDefault();
            goToSaasHero();
          }}
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

        {/* Navigation Desktop - onglets principaux */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            type="button"
            onClick={goToSaasHero}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActiveRoute(['/', '/saas'])
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            SaaS
          </button>
          <button
            type="button"
            onClick={() => navigate('/full-control')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActiveRoute(['/full-control'])
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            Full-Control
          </button>
          <button
            type="button"
            onClick={() => navigate('/hebergement')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActiveRoute(['/hebergement'])
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            Hébergement
          </button>
          <a
            href="mailto:contact@kobecorporation.com"
            className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            Contact
          </a>
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
                goToSaasHero();
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors text-left"
            >
              SaaS
            </button>
            <button
              type="button"
              onClick={() => {
                navigate('/full-control');
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors text-left"
            >
              Full-Control
            </button>
            <button
              type="button"
              onClick={() => {
                navigate('/hebergement');
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors text-left"
            >
              Hébergement
            </button>
            <a
              href="mailto:contact@kobecorporation.com"
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors text-left"
            >
              Contact
            </a>

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
