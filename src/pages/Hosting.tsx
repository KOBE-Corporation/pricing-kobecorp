import { useLanguage } from '../contexts/LanguageContext';
import {
  CloudIcon,
  ServerStackIcon,
  BoltIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import Button from '../components/Button';

const Hosting = () => {
  const { t, language } = useLanguage();

  const hostingTypes = [
    {
      icon: CloudIcon,
      titleFr: 'Hébergement Cloud',
      titleEn: 'Cloud Hosting',
      descriptionFr:
        'Solutions d\'hébergement cloud scalables et performantes pour vos applications.',
      descriptionEn: 'Scalable and performant cloud hosting solutions for your applications.',
    },
    {
      icon: ServerStackIcon,
      titleFr: 'Serveurs Dédiés',
      titleEn: 'Dedicated Servers',
      descriptionFr:
        'Serveurs dédiés haute performance pour des applications exigeantes.',
      descriptionEn: 'High-performance dedicated servers for demanding applications.',
    },
    {
      icon: BoltIcon,
      titleFr: 'Hébergement VPS',
      titleEn: 'VPS Hosting',
      descriptionFr:
        'Serveurs virtuels privés avec ressources garanties et contrôle total.',
      descriptionEn: 'Virtual private servers with guaranteed resources and full control.',
    },
    {
      icon: ShieldCheckIcon,
      titleFr: 'Hébergement Sécurisé',
      titleEn: 'Secure Hosting',
      descriptionFr:
        'Infrastructure sécurisée avec SSL, backups automatiques et monitoring 24/7.',
      descriptionEn: 'Secure infrastructure with SSL, automatic backups and 24/7 monitoring.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 min-h-[500px]">
        <div
          className="absolute inset-0 overflow-hidden bg-white"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,122,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,122,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-20 right-20 h-32 w-32 rounded-2xl border-2 border-brand-300/70 animate-float-shape"></div>
          <div className="absolute bottom-32 left-16 h-24 w-24 rounded-full border-2 border-brand-300/65 animate-float-gentle animate-pulse-border"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-50/20 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink mb-6">
            {language === 'fr' ? 'Hébergement' : 'Hosting'}
          </h1>
          <p className="font-sans text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-8">
            {language === 'fr'
              ? 'Solutions d\'hébergement performantes et sécurisées pour vos applications web et mobiles.'
              : 'Performant and secure hosting solutions for your web and mobile applications.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="#contact">
              {language === 'fr' ? 'Démarrer un projet' : 'Start a Project'}
            </Button>
            <Button variant="outline" size="lg" href="/#forfaits">
              {t('nav.pricing')}
            </Button>
          </div>
        </div>
      </section>

      {/* Hosting Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              {language === 'fr' ? 'Types d\'Hébergement' : 'Hosting Types'}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Choisissez la solution d\'hébergement adaptée à vos besoins.'
                : 'Choose the hosting solution that fits your needs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hostingTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-subtle hover:border-brand-300 hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="rounded-xl p-3 flex-shrink-0"
                      style={{ backgroundColor: '#f0f7ff' }}
                    >
                      <Icon className="h-8 w-8" style={{ color: '#0a7aff' }} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink mb-2">
                        {language === 'fr' ? type.titleFr : type.titleEn}
                      </h3>
                      <p className="font-sans text-neutral-600">
                        {language === 'fr' ? type.descriptionFr : type.descriptionEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
            {language === 'fr'
              ? 'Besoin d\'hébergement ?'
              : 'Need hosting?'}
          </h2>
          <p className="font-sans text-lg text-neutral-600 mb-8">
            {language === 'fr'
              ? 'Contactez-nous pour trouver la solution d\'hébergement idéale.'
              : 'Contact us to find the ideal hosting solution.'}
          </p>
          <Button variant="primary" size="lg" href={`mailto:contact@kobecorporation.com`}>
            {t('contact.cta')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Hosting;
