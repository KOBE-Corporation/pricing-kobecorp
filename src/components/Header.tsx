import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../data/companyInfo';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md shadow-subtle">
      <div className="mx-auto flex h-auto min-h-16 max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-8 lg:py-0 lg:h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
        >
          <div className="flex flex-col">
            <h1 className="font-display font-semibold text-ink text-lg sm:text-xl">
              {companyInfo.name}
            </h1>
            <span className="text-brand-500 font-semibold text-xs sm:text-sm">
              {companyInfo.slogan}
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/saas"
            className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
            onMouseEnter={(e) => e.currentTarget.style.color = '#0a7aff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#404040'}
          >
            {t('nav.saas')}
          </Link>
          <Link
            to="/full-control"
            className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
            onMouseEnter={(e) => e.currentTarget.style.color = '#0a7aff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#404040'}
          >
            {t('nav.fullControl')}
          </Link>
          <Link
            to="/hebergement"
            className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
            onMouseEnter={(e) => e.currentTarget.style.color = '#0a7aff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#404040'}
          >
            {t('nav.hosting')}
          </Link>
          <Link
            to="/applications"
            className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
            onMouseEnter={(e) => e.currentTarget.style.color = '#0a7aff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#404040'}
          >
            {t('nav.applications')}
          </Link>
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

          {/* CTA */}
          <Link
            to="/#forfaits"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all"
            style={{ backgroundColor: '#0a7aff' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0066e6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0a7aff'}
          >
            {t('nav.viewOffers')}
          </Link>
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
            <Link
              to="/saas"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0a7aff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#404040'}
            >
              {t('nav.saas')}
            </Link>
            <Link
              to="/full-control"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0a7aff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#404040'}
            >
              {t('nav.fullControl')}
            </Link>
            <Link
              to="/hebergement"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0a7aff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#404040'}
            >
              {t('nav.hosting')}
            </Link>
            <Link
              to="/applications"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0a7aff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#404040'}
            >
              {t('nav.applications')}
            </Link>
            <Link
              to="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors text-center mt-2"
              style={{ backgroundColor: '#0a7aff' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0066e6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0a7aff'}
            >
              {language === 'fr' ? 'Nous contacter' : 'Contact Us'}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
