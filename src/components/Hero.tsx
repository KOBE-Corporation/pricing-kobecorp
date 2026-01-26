import { SparklesIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import Button from './Button';
import Badge from './Badge';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (anchor: string) => {
    const element = document.querySelector(anchor);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-4 pb-8 md:pt-6 md:pb-12 lg:pt-8 lg:pb-16 min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]"
      style={{ isolation: 'isolate' }}
    >
      {/* Fond avec grille et formes géométriques */}
      <div
        className="absolute inset-0 overflow-hidden bg-white"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Grille de fond */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,122,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,122,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Formes géométriques flottantes */}
        <div className="absolute top-20 right-20 h-32 w-32 rounded-2xl border-2 border-brand-300/70 animate-float-shape"></div>
        <div className="absolute bottom-32 left-16 h-24 w-24 rounded-full border-2 border-brand-300/65 animate-float-gentle animate-pulse-border"></div>
        <div
          className="absolute top-1/2 right-1/4 h-20 w-20 border-2 border-brand-300/60 animate-rotate-slow"
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            transformOrigin: 'center',
          }}
        ></div>
        <div
          className="absolute top-40 left-1/3 h-16 w-16 rounded-lg border-2 border-accent-300/60 animate-float-shape"
          style={{ transform: 'rotate(-15deg)' }}
        ></div>
        <div className="absolute bottom-40 right-1/3 h-12 w-12 rounded-full border-2 border-accent-300/55 animate-float-gentle animate-pulse-border"></div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-50/20 to-transparent"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto pt-12 md:pt-16 lg:pt-20">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <Badge variant="primary">
              <SparklesIcon className="h-3 w-3" />
              {t('hero.badge')}
            </Badge>
          </div>

          {/* Titre */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink mb-6">
            {t('hero.title')}
          </h1>

          {/* Sous-titre */}
          <p className="font-sans text-xl md:text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#forfaits')}
            >
              {t('hero.cta1')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              {t('hero.cta2')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
