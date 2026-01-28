import { useLanguage } from '../contexts/LanguageContext';
import {
  CloudIcon,
  ServerStackIcon,
  BoltIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';

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
      <PageHero
        title={language === 'fr' ? 'Hébergement' : 'Hosting'}
        subtitle={
          language === 'fr'
            ? 'Solutions d\'hébergement performantes et sécurisées pour vos applications web et mobiles.'
            : 'Performant and secure hosting solutions for your web and mobile applications.'
        }
        primaryCta={{
          label: language === 'fr' ? 'Démarrer un projet' : 'Start a Project',
          href: '#contact',
          variant: 'primary',
        }}
        secondaryCta={{
          label: t('nav.pricing'),
          href: '/#forfaits',
          variant: 'outline',
        }}
      />

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

      {/* CTA Section commune */}
      <ContactCTA
        id="contact"
        titleFr="Besoin d'hébergement ?"
        titleEn="Need hosting?"
        subtitleFr="Contactez-nous pour trouver la solution d'hébergement idéale."
        subtitleEn="Contact us to find the ideal hosting solution."
        mailSubjectSuffix="Projet Hébergement"
      />
    </div>
  );
};

export default Hosting;
