import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../data/companyInfo';
import { useLanguage } from '../contexts/useLanguage';

const SAAS_SECTIONS = [
  { id: 'hero', label: 'Accueil' },
  { id: 'services', label: 'Services' },
  { id: 'forfaits', label: 'Programmes' },
  { id: 'missions', label: 'Missions' },
  { id: 'processus', label: 'Processus' },
] as const;

const FULL_CONTROL_SECTIONS = SAAS_SECTIONS;

const HOSTING_SECTIONS = [
  { id: 'hero', label: 'Accueil' },
  { id: 'services', label: 'Services' },
] as const;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSectionMenuOpen, setIsSectionMenuOpen] = useState(false);
  const [isFullControlMenuOpen, setIsFullControlMenuOpen] = useState(false);
  const [isHostingMenuOpen, setIsHostingMenuOpen] = useState(false);
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
  const isSaasActive = location.pathname === '/' || location.pathname === '/saas' || location.pathname.startsWith('/saas/');
  const currentHash = location.hash || '#hero';

  const handleSaasClick = () => {
    // Si on n'est pas encore sur la page SaaS, on y va et on scroll sur le hero
    if (!isSaasActive) {
      goToSaasHero();
      setIsSectionMenuOpen(false);
      return;
    }

    // Si on est déjà sur SaaS, le bouton sert de déclencheur du menu de sections
    setIsSectionMenuOpen((open) => !open);
    if (!isSectionMenuOpen) {
      setIsFullControlMenuOpen(false);
      setIsHostingMenuOpen(false);
    }
  };

  const handleFullControlClick = () => {
    if (!isActiveRoute(['/full-control'])) {
      navigate('/full-control');
      setIsFullControlMenuOpen(false);
      setIsSectionMenuOpen(false);
      setIsHostingMenuOpen(false);
      return;
    }
    setIsFullControlMenuOpen((open) => !open);
    if (!isFullControlMenuOpen) {
      setIsSectionMenuOpen(false);
      setIsHostingMenuOpen(false);
    }
  };

  const handleHostingClick = () => {
    if (!isActiveRoute(['/hebergement'])) {
      navigate('/hebergement');
      setIsHostingMenuOpen(false);
      setIsSectionMenuOpen(false);
      setIsFullControlMenuOpen(false);
      return;
    }
    setIsHostingMenuOpen((open) => !open);
    if (!isHostingMenuOpen) {
      setIsSectionMenuOpen(false);
      setIsFullControlMenuOpen(false);
    }
  };

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
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4">
            <div className="relative">
              <button
                type="button"
                onClick={handleSaasClick}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 rounded-lg px-2 py-1 -mx-0.5 ${
                  isSaasActive
                    ? 'text-brand-600 border-b-2 border-brand-500 pb-1.5 pt-1 hover:bg-brand-50/80'
                    : 'text-neutral-700 hover:text-brand-600 hover:bg-brand-50'
                }`}
                aria-haspopup="listbox"
                aria-expanded={isSaasActive && isSectionMenuOpen}
              >
                SaaS
                <ChevronDownIcon
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                    isSaasActive && isSectionMenuOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                />
              </button>

              {isSaasActive && (
                <div
                  className={`absolute left-0 mt-2 w-44 origin-top rounded-2xl bg-white shadow-lg border border-neutral-200 py-2 z-50 transition-all duration-200 ease-out ${
                    isSectionMenuOpen
                      ? 'visible scale-100 opacity-100'
                      : 'invisible scale-95 opacity-0 pointer-events-none'
                  }`}
                  role="listbox"
                  aria-hidden={!isSectionMenuOpen}
                >
                  {SAAS_SECTIONS.map(({ id, label }) => (
                    <Link
                      key={id}
                      to={`/saas#${id}`}
                      onClick={() => setIsSectionMenuOpen(false)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        currentHash === `#${id}` ? 'text-brand-600 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={handleFullControlClick}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 rounded-lg px-2 py-1 -mx-0.5 ${
                  isActiveRoute(['/full-control'])
                    ? 'text-brand-600 border-b-2 border-brand-500 pb-1.5 pt-1 hover:bg-brand-50/80'
                    : 'text-neutral-700 hover:text-brand-600 hover:bg-brand-50'
                }`}
                aria-haspopup="listbox"
                aria-expanded={isActiveRoute(['/full-control']) && isFullControlMenuOpen}
              >
                Full-Control
                <ChevronDownIcon
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                    isActiveRoute(['/full-control']) && isFullControlMenuOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                />
              </button>

              {isActiveRoute(['/full-control']) && (
                <div
                  className={`absolute left-0 mt-2 w-44 origin-top rounded-2xl bg-white shadow-lg border border-neutral-200 py-2 z-50 transition-all duration-200 ease-out ${
                    isFullControlMenuOpen
                      ? 'visible scale-100 opacity-100'
                      : 'invisible scale-95 opacity-0 pointer-events-none'
                  }`}
                  role="listbox"
                  aria-hidden={!isFullControlMenuOpen}
                >
                  {FULL_CONTROL_SECTIONS.map(({ id, label }) => (
                    <Link
                      key={id}
                      to={`/full-control#${id}`}
                      onClick={() => setIsFullControlMenuOpen(false)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        currentHash === `#${id}` ? 'text-brand-600 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={handleHostingClick}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 rounded-lg px-2 py-1 -mx-0.5 ${
                  isActiveRoute(['/hebergement'])
                    ? 'text-brand-600 border-b-2 border-brand-500 pb-1.5 pt-1 hover:bg-brand-50/80'
                    : 'text-neutral-700 hover:text-brand-600 hover:bg-brand-50'
                }`}
                aria-haspopup="listbox"
                aria-expanded={isActiveRoute(['/hebergement']) && isHostingMenuOpen}
              >
                Hébergement
                <ChevronDownIcon
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                    isActiveRoute(['/hebergement']) && isHostingMenuOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                />
              </button>

              {isActiveRoute(['/hebergement']) && (
                <div
                  className={`absolute left-0 mt-2 w-44 origin-top rounded-2xl bg-white shadow-lg border border-neutral-200 py-2 z-50 transition-all duration-200 ease-out ${
                    isHostingMenuOpen
                      ? 'visible scale-100 opacity-100'
                      : 'invisible scale-95 opacity-0 pointer-events-none'
                  }`}
                  role="listbox"
                  aria-hidden={!isHostingMenuOpen}
                >
                  {HOSTING_SECTIONS.map(({ id, label }) => (
                    <Link
                      key={id}
                      to={`/hebergement#${id}`}
                      onClick={() => setIsHostingMenuOpen(false)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        currentHash === `#${id}` ? 'text-brand-600 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className={`inline-flex items-center text-sm font-medium transition-all duration-200 rounded-lg px-2 py-1 -mx-0.5 ${
                isActiveRoute(['/contact'])
                  ? 'text-brand-600 border-b-2 border-brand-500 pb-1.5 pt-1 hover:bg-brand-50/80'
                  : 'text-neutral-700 hover:text-brand-600 hover:bg-brand-50'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

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
            <button
              type="button"
              onClick={() => {
                navigate('/contact');
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
