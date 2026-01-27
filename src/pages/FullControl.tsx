import { useLanguage } from '../contexts/LanguageContext';
import {
  Cog6ToothIcon,
  LockClosedIcon,
  CommandLineIcon,
  ServerStackIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import Button from '../components/Button';
import PricingCard from '../components/PricingCard';
import { fullControlPlans } from '../data/fullControlPlans';

const FullControl = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Cog6ToothIcon,
      titleFr: 'Contrôle Total',
      titleEn: 'Full Control',
      descriptionFr:
        'Accédez à tous les paramètres et configurations de votre infrastructure sans limitations.',
      descriptionEn: 'Access all settings and configurations of your infrastructure without limitations.',
    },
    {
      icon: LockClosedIcon,
      titleFr: 'Sécurité Avancée',
      titleEn: 'Advanced Security',
      descriptionFr:
        'Gérez votre propre sécurité avec des outils de monitoring et de protection avancés.',
      descriptionEn: 'Manage your own security with advanced monitoring and protection tools.',
    },
    {
      icon: CommandLineIcon,
      titleFr: 'Accès Root/Admin',
      titleEn: 'Root/Admin Access',
      descriptionFr:
        'Accès complet au système pour personnaliser et optimiser selon vos besoins.',
      descriptionEn: 'Full system access to customize and optimize according to your needs.',
    },
    {
      icon: ServerStackIcon,
      titleFr: 'Infrastructure Dédiée',
      titleEn: 'Dedicated Infrastructure',
      descriptionFr:
        'Serveurs et ressources dédiés exclusivement à votre entreprise pour des performances optimales.',
      descriptionEn: 'Servers and resources dedicated exclusively to your business for optimal performance.',
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
            {language === 'fr' ? 'Full-Control' : 'Full-Control'}
          </h1>
          <p className="font-sans text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-8">
            {language === 'fr'
              ? 'Prenez le contrôle total de votre infrastructure avec nos solutions Full-Control. Liberté, sécurité et performance maximales.'
              : 'Take full control of your infrastructure with our Full-Control solutions. Maximum freedom, security and performance.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="#forfaits">
              {language === 'fr' ? 'Voir les forfaits' : 'View Plans'}
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              {language === 'fr' ? 'Nous contacter' : 'Contact Us'}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              {language === 'fr' ? 'Avantages Full-Control' : 'Full-Control Benefits'}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Profitez d\'un contrôle total sur votre infrastructure et vos données.'
                : 'Enjoy total control over your infrastructure and data.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
                        {language === 'fr' ? feature.titleFr : feature.titleEn}
                      </h3>
                      <p className="font-sans text-neutral-600">
                        {language === 'fr' ? feature.descriptionFr : feature.descriptionEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="forfaits" className="py-20 bg-gradient-to-b from-white to-brand-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ backgroundColor: '#e0efff', color: '#0066e6' }}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {language === 'fr' ? 'Nos Forfaits Full-Control' : 'Our Full-Control Plans'}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              {language === 'fr'
                ? 'Choisissez le forfait adapté à votre projet'
                : 'Choose the plan that fits your project'}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto mb-6">
              {language === 'fr'
                ? 'Avec Full-Control, vous possédez 100% du code source et de la propriété intellectuelle. Autonomie totale garantie.'
                : 'With Full-Control, you own 100% of the source code and intellectual property. Total autonomy guaranteed.'}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-brand-50 border border-brand-200">
              <svg className="h-4 w-4" style={{ color: '#0a7aff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-neutral-700">
                {language === 'fr'
                  ? '100% propriété du code source'
                  : '100% source code ownership'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fullControlPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-neutral-200 shadow-subtle max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" style={{ color: '#0a7aff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-sans text-sm font-semibold text-neutral-700">
                  {language === 'fr'
                    ? 'Paiement : 50% à la signature, 50% à la livraison'
                    : 'Payment: 50% at signing, 50% at delivery'}
                </p>
              </div>
              <p className="font-sans text-sm text-neutral-600">
                {language === 'fr'
                  ? '💡 Tous les forfaits incluent : Code source complet, API REST, Front-end, Documentation, VPS (année 1), SSL, Domaine, Formation et Support post-livraison'
                  : '💡 All plans include: Complete source code, REST API, Front-end, Documentation, VPS (year 1), SSL, Domain, Training and Post-delivery support'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              {language === 'fr'
                ? 'Inclus dans tous les forfaits Full-Control'
                : 'Included in all Full-Control plans'}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Ces éléments sont communs à tous nos forfaits Full-Control'
                : 'These elements are common to all our Full-Control plans'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: CodeBracketIcon,
                titleFr: 'Code source complet',
                titleEn: 'Complete source code',
                descFr: '100% propriété du client, transfert complet à la livraison',
                descEn: '100% client ownership, complete transfer at delivery',
              },
              {
                icon: ServerStackIcon,
                titleFr: 'API REST (Backend)',
                titleEn: 'REST API (Backend)',
                descFr: 'Architecture backend complète et documentée',
                descEn: 'Complete and documented backend architecture',
              },
              {
                icon: CommandLineIcon,
                titleFr: 'Front-end complet',
                titleEn: 'Complete Front-end',
                descFr: 'Interface utilisateur complète et responsive',
                descEn: 'Complete and responsive user interface',
              },
              {
                icon: DocumentTextIcon,
                titleFr: 'Documentation',
                titleEn: 'Documentation',
                descFr: 'Documentation technique et utilisateur (40-200 pages selon forfait)',
                descEn: 'Technical and user documentation (40-200 pages depending on plan)',
              },
              {
                icon: ServerStackIcon,
                titleFr: 'VPS (Année 1)',
                titleEn: 'VPS (Year 1)',
                descFr: 'Serveur Virtuel Privé personnalisable selon vos besoins',
                descEn: 'Customizable Virtual Private Server according to your needs',
              },
              {
                icon: ShieldCheckIcon,
                titleFr: 'Certificat SSL',
                titleEn: 'SSL Certificate',
                descFr: 'Sécurité HTTPS incluse',
                descEn: 'HTTPS security included',
              },
              {
                icon: LockClosedIcon,
                titleFr: 'Nom de domaine',
                titleEn: 'Domain name',
                descFr: 'Domaine personnalisé inclus (1 an ou à vie selon forfait)',
                descEn: 'Custom domain included (1 year or lifetime depending on plan)',
              },
              {
                icon: AcademicCapIcon,
                titleFr: 'Formation',
                titleEn: 'Training',
                descFr: 'Sessions de formation incluses (2-4 sessions selon forfait)',
                descEn: 'Training sessions included (2-4 sessions depending on plan)',
              },
              {
                icon: Cog6ToothIcon,
                titleFr: 'Support post-livraison',
                titleEn: 'Post-delivery support',
                descFr: 'Support technique inclus (1-6 mois selon forfait)',
                descEn: 'Technical support included (1-6 months depending on plan)',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200"
                >
                  <div
                    className="rounded-lg p-2 flex-shrink-0"
                    style={{ backgroundColor: '#f0f7ff' }}
                  >
                    <Icon className="h-5 w-5" style={{ color: '#0a7aff' }} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink mb-1">
                      {language === 'fr' ? item.titleFr : item.titleEn}
                    </h3>
                    <p className="font-sans text-sm text-neutral-600">
                      {language === 'fr' ? item.descFr : item.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Stack Technique Section */}
      <section className="py-20 bg-gradient-to-b from-brand-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              {language === 'fr'
                ? 'Stack Technique & Infrastructure'
                : 'Technical Stack & Infrastructure'}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Technologies modernes, robustes et scalables pour tous vos projets'
                : 'Modern, robust and scalable technologies for all your projects'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                titleFr: 'Backend',
                titleEn: 'Backend',
                tech: 'Spring Boot (Kotlin/Java)',
              },
              {
                titleFr: 'Frontend',
                titleEn: 'Frontend',
                tech: 'React + Vite + TypeScript',
              },
              {
                titleFr: 'Base de données',
                titleEn: 'Database',
                tech: 'MongoDB',
              },
              {
                titleFr: 'Cache',
                titleEn: 'Cache',
                tech: 'Redis (Speed & Normal)',
              },
              {
                titleFr: 'Sécurité',
                titleEn: 'Security',
                tech: 'JWT, HTTPS, OWASP Top 10',
              },
              {
                titleFr: 'Conteneurs',
                titleEn: 'Containers',
                tech: 'Docker (Normal)',
              },
              {
                titleFr: 'CI/CD',
                titleEn: 'CI/CD',
                tech: 'Pipelines automatisés (Normal)',
              },
              {
                titleFr: 'Infrastructure',
                titleEn: 'Infrastructure',
                tech: 'VPS Ubuntu + Nginx',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-neutral-200 shadow-subtle text-center"
              >
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  {language === 'fr' ? item.titleFr : item.titleEn}
                </h3>
                <p className="font-sans text-sm text-neutral-600">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
            {language === 'fr'
              ? 'Prêt à prendre le contrôle total ?'
              : 'Ready to take full control?'}
          </h2>
          <p className="font-sans text-lg text-neutral-600 mb-8">
            {language === 'fr'
              ? 'Contactez-nous pour discuter de votre projet Full-Control et obtenir un devis personnalisé.'
              : 'Contact us to discuss your Full-Control project and get a personalized quote.'}
          </p>
          <Button variant="primary" size="lg" href={`mailto:contact@kobecorporation.com`}>
            {t('contact.cta')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FullControl;
