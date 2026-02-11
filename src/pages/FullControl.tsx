import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Cog6ToothIcon,
  LockClosedIcon,
  CommandLineIcon,
  ServerStackIcon,
  KeyIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import PricingCard from '../components/PricingCard';
import ComparisonSection from '../components/ComparisonSection';
import { fullControlPlans } from '../data/fullControlPlans';
import IncludedFeaturesSection from '../components/IncludedFeaturesSection';
import PageHero from '../components/PageHero';
import SectionFeatures from '../components/SectionFeatures';

type DynamicFullControlPlan = (typeof fullControlPlans)[number];

const FullControl = () => {
  const { t, tLang, language } = useLanguage();
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState<DynamicFullControlPlan | null>(null);

  // Scroll vers la section correspondant au hash (#hero, #forfaits, #missions, #processus)
  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  // SEO : titre, meta description et canonical
  useEffect(() => {
    document.title = t('fullControl.meta.title');
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', t('fullControl.meta.description'));
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${window.location.origin}/full-control`);
    }
  }, [language, t]);

  const featureIcons = [Cog6ToothIcon, LockClosedIcon, CommandLineIcon, ServerStackIcon];
  const features = [0, 1, 2, 3].map((i) => ({
    icon: featureIcons[i],
    titleFr: tLang(`fullControl.sectionFeatures.features.${i}.title`, 'fr'),
    titleEn: tLang(`fullControl.sectionFeatures.features.${i}.title`, 'en'),
    descriptionFr: tLang(`fullControl.sectionFeatures.features.${i}.description`, 'fr'),
    descriptionEn: tLang(`fullControl.sectionFeatures.features.${i}.description`, 'en'),
  }));

  const isUltra = selectedPlan?.id === 'ultra-speed';
  const isSpeed = selectedPlan?.id === 'speed';
  const isNormal = selectedPlan?.id === 'normal';

  return (
    <div className="min-h-screen bg-white">
      <section id="hero">
        <PageHero
          title={t('fullControl.hero.title')}
          subtitle={t('fullControl.hero.subtitle')}
          highlightLine={language === 'en' ? t('fullControl.hero.highlightLineEn') : undefined}
          primaryCta={{
            label: t('fullControl.hero.primaryCta'),
            href: '#forfaits',
            variant: 'primary',
          }}
secondaryCta={{
          label: t('fullControl.hero.secondaryCta'),
          href: '/contact',
          variant: 'outline',
        }}
        />
      </section>

      <section id="services">
        <SectionFeatures
          titleFr={tLang('fullControl.sectionFeatures.title', 'fr')}
          titleEn={tLang('fullControl.sectionFeatures.title', 'en')}
          subtitleFr={tLang('fullControl.sectionFeatures.subtitle', 'fr')}
          subtitleEn={tLang('fullControl.sectionFeatures.subtitle', 'en')}
          items={features}
        />
      </section>

      {/* Pricing Section */}
      <section id="forfaits" className="py-20 bg-gradient-to-b from-white to-brand-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-brand-100 text-brand-600">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('fullControl.pricing.badge')}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.1] tracking-tight mb-4">
              {t('fullControl.pricing.heading')}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto mb-6">
              {t('fullControl.pricing.description')}
            </p>
            {/* Délais mis en avant : 65 / 110 / 180 jours */}
            <p className="font-sans text-base font-semibold text-brand-600 mb-4">
              {t('fullControl.pricing.deliveryLevels')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-brand-50 border border-brand-200">
                <KeyIcon className="h-4 w-4 text-brand-500" aria-hidden />
                <span className="text-neutral-700">{t('fullControl.pricing.badgeCodeOwnership')}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-emerald-50 border border-emerald-200 text-emerald-800">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('fullControl.pricing.badgeDevis48h')}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fullControlPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                onSelect={(p) => setSelectedPlan(p as DynamicFullControlPlan)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-neutral-200 shadow-subtle max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-sans text-sm font-semibold text-neutral-700">
                  {t('fullControl.pricing.paymentNote')}
                </p>
              </div>
              <p className="font-sans text-sm text-neutral-600">
                {t('fullControl.pricing.plansIncludeNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Features Section - Missions */}
      <section id="missions">
        <IncludedFeaturesSection
          titleFr={tLang('fullControl.included.title', 'fr')}
          titleEn={tLang('fullControl.included.title', 'en')}
          subtitleFr={tLang('fullControl.included.subtitle', 'fr')}
          subtitleEn={tLang('fullControl.included.subtitle', 'en')}
          items={[
            { icon: KeyIcon, titleFr: tLang('fullControl.included.items.0.title', 'fr'), titleEn: tLang('fullControl.included.items.0.title', 'en'), descFr: tLang('fullControl.included.items.0.desc', 'fr'), descEn: tLang('fullControl.included.items.0.desc', 'en') },
            { icon: ServerStackIcon, titleFr: tLang('fullControl.included.items.1.title', 'fr'), titleEn: tLang('fullControl.included.items.1.title', 'en'), descFr: tLang('fullControl.included.items.1.desc', 'fr'), descEn: tLang('fullControl.included.items.1.desc', 'en') },
            { icon: CommandLineIcon, titleFr: tLang('fullControl.included.items.2.title', 'fr'), titleEn: tLang('fullControl.included.items.2.title', 'en'), descFr: tLang('fullControl.included.items.2.desc', 'fr'), descEn: tLang('fullControl.included.items.2.desc', 'en') },
            { icon: DocumentTextIcon, titleFr: tLang('fullControl.included.items.3.title', 'fr'), titleEn: tLang('fullControl.included.items.3.title', 'en'), descFr: tLang('fullControl.included.items.3.desc', 'fr'), descEn: tLang('fullControl.included.items.3.desc', 'en') },
            { icon: ShieldCheckIcon, titleFr: tLang('fullControl.included.items.5.title', 'fr'), titleEn: tLang('fullControl.included.items.5.title', 'en'), descFr: tLang('fullControl.included.items.5.desc', 'fr'), descEn: tLang('fullControl.included.items.5.desc', 'en') },
            { icon: LockClosedIcon, titleFr: tLang('fullControl.included.items.6.title', 'fr'), titleEn: tLang('fullControl.included.items.6.title', 'en'), descFr: tLang('fullControl.included.items.6.desc', 'fr'), descEn: tLang('fullControl.included.items.6.desc', 'en') },
            { icon: AcademicCapIcon, titleFr: tLang('fullControl.included.items.7.title', 'fr'), titleEn: tLang('fullControl.included.items.7.title', 'en'), descFr: tLang('fullControl.included.items.7.desc', 'fr'), descEn: tLang('fullControl.included.items.7.desc', 'en') },
            { icon: Cog6ToothIcon, titleFr: tLang('fullControl.included.items.8.title', 'fr'), titleEn: tLang('fullControl.included.items.8.title', 'en'), descFr: tLang('fullControl.included.items.8.desc', 'fr'), descEn: tLang('fullControl.included.items.8.desc', 'en') },
          ]}
          cols={{ md: 2, lg: 3 }}
        />
      </section>

      {/* Stack Technique Section */}
      <section id="processus" className="py-20 bg-gradient-to-b from-brand-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.1] tracking-tight mb-4">
              {t('fullControl.stack.title')}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('fullControl.stack.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-neutral-200 shadow-subtle text-center"
              >
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  {t(`fullControl.stack.items.${i}.title`)}
                </h3>
                <p className="font-sans text-sm text-neutral-600">
                  {t(`fullControl.stack.items.${i}.tech`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section>
        <ComparisonSection />
      </section>

      {/* Modal détails forfait Full-Control */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label={language === 'fr' ? `Détails du forfait ${selectedPlan.name}` : `Plan details ${selectedPlan.name}`}
        >
          <div className="relative w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-3xl bg-white shadow-2xl border border-neutral-200">
            <button
              type="button"
              onClick={() => setSelectedPlan(null)}
              className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <span className="sr-only">{language === 'fr' ? 'Fermer la fenêtre' : 'Close dialog'}</span>
              ×
            </button>

            <div className="space-y-6 overflow-y-auto px-6 md:px-8 py-5 md:py-6 max-h-[calc(100vh-2rem-3rem)]">
              <header className="pr-10">
                <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-brand-200">
                  {language === 'fr' ? 'Détail du forfait Full-Control' : 'Full-Control plan details'}
                </span>
                <h3 className="mt-3 font-display text-3xl font-semibold text-ink leading-tight">
                  {selectedPlan.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {selectedPlan.description}
                </p>
              </header>

              {/* Comment ce forfait fonctionne concrètement */}
              <section className="rounded-2xl border border-neutral-200 bg-white px-5 py-4">
                <h4 className="font-display text-sm font-semibold text-ink mb-2">
                  {language === 'fr'
                    ? 'Comment ce forfait fonctionne concrètement'
                    : 'How this plan works in practice'}
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {isUltra &&
                    (language === 'fr'
                      ? 'Livraison express, coût premium. Équipe dédiée à temps plein sur votre projet.'
                      : 'Express delivery with premium cost. A dedicated full-time team works only on your project.')}
                  {isSpeed &&
                    (language === 'fr'
                      ? 'Équilibre optimal. Recommandé pour la plupart des projets métier.'
                      : 'Optimal balance. Recommended for most business projects.')}
                  {isNormal &&
                    (language === 'fr'
                      ? 'Budget optimisé, qualité maximale. Rythme de développement confortable.'
                      : 'Optimised budget with maximum quality. Comfortable development pace.')}
                </p>
              </section>

              {/* Que comprend chaque forfait Full Control ? (commun) */}
              <section className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 space-y-2">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr'
                    ? 'Que comprend chaque forfait Full Control ?'
                    : 'What is included in every Full Control plan?'}
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {language === 'fr'
                    ? "Tous les forfaits Full Control incluent : Code source (100% votre propriété), API REST (Backend), Front-end, Documentation complète, Serveur Virtuel Privé (personnalisable), Certificat SSL, Nom de domaine personnalisé, sauvegardes automatiques, sécurité maximale (HTTPS, JWT, protection contre piratage), contrats clairs et protecteurs, période de garantie incluse (1 à 6 mois selon forfait)."
                    : 'All Full Control plans include: Source code (100% your property), REST API (backend), front-end, full documentation, Virtual Private Server (customisable), SSL certificate, custom domain, automated backups, strong security (HTTPS, JWT, protection against hacking), clear and protective contracts, and an included warranty period (1 to 6 months depending on the plan).'}
                </p>
              </section>

              {/* Stack Technique (commune avec compléments par plan) */}
              <section className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 space-y-2">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr' ? 'Stack technique' : 'Technical stack'}
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {language === 'fr'
                    ? "Technologies modernes, robustes et scalables utilisées dans tous les projets Full Control : Backend : Spring Boot (Kotlin/Java) - API RESTful avec authentification JWT. Frontend : React + Vite avec Tailwind CSS. Base de données : MongoDB (NoSQL). Sécurité : JWT, HTTPS/SSL, validation des entrées, protection XSS/CSRF. Infrastructure : VPS (Ubuntu), Nginx, PM2, Docker (forfait Normal), CI/CD (forfait Normal)."
                    : 'Modern, robust and scalable technologies used for all Full Control projects: Backend: Spring Boot (Kotlin/Java) – REST API with JWT authentication. Frontend: React + Vite with Tailwind CSS. Database: MongoDB (NoSQL). Security: JWT, HTTPS/SSL, input validation, XSS/CSRF protection. Infrastructure: VPS (Ubuntu), Nginx, PM2, Docker (Normal plan), CI/CD (Normal plan).'}
                </p>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {language === 'fr'
                    ? 'Compléments : Redis pour le cache (Speed & Normal), Docker et automatisation CI/CD (Normal).'
                    : 'Extras: Redis for caching (Speed & Normal), Docker and CI/CD automation (Normal).'}
                </p>
              </section>

              {/* Infrastructure & Hébergement */}
              <section className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 space-y-2">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr'
                    ? 'Infrastructure & hébergement'
                    : 'Infrastructure & hosting'}
                </h4>
                {isUltra && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? "VPS : 2 vCPU, 4GB RAM, 80GB SSD (année 1 offerte). Domaine : 1 domaine personnalisé (.cm, .com, .fr, .net) – 1 an inclus. Certificat SSL : Let's Encrypt. Emails professionnels : non inclus. CDN : Cloudflare Gratuit. Sauvegardes : snapshots hebdomadaires (conservation 14 jours)."
                      : 'VPS: 2 vCPU, 4 GB RAM, 80 GB SSD (first year included). Domain: 1 custom domain (.cm, .com, .fr, .net) – 1 year included. SSL: Let’s Encrypt. Business emails: not included. CDN: Cloudflare Free. Backups: weekly snapshots (kept 14 days).'}
                  </p>
                )}
                {isSpeed && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? "VPS : 4 vCPU, 8GB RAM, 160GB SSD (année 1 offerte). Domaine : 1 domaine personnalisé (.cm, .com, .fr, .net) – 1 an inclus. Certificat SSL : Premium avec renouvellement automatique. Emails professionnels : 5 adresses (10 Go chacune). CDN : Cloudflare Pro (année 1 incluse). Sauvegardes : snapshots quotidiens (30 jours) + backup externe."
                      : 'VPS: 4 vCPU, 8 GB RAM, 160 GB SSD (first year included). Domain: 1 custom domain (.cm, .com, .fr, .net) – 1 year included. SSL: Premium with automatic renewal. Business emails: 5 mailboxes (10 GB each). CDN: Cloudflare Pro (first year included). Backups: daily snapshots (30 days) + external backup.'}
                  </p>
                )}
                {isNormal && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? "VPS : 8 vCPU, 16GB RAM, 320GB SSD (année 1 offerte). Domaine : 1 domaine personnalisé (.cm, .com, .fr, .net) – à vie. Certificat SSL : Premium avec renouvellement automatique. Emails professionnels : 10 adresses (20 Go chacune). CDN : Cloudflare Pro + Argo Smart Routing (année 1 incluse). Sauvegardes : toutes les 6h (30j) + quotidien (90j) + hebdo (1 an) + triple backup externe."
                      : 'VPS: 8 vCPU, 16 GB RAM, 320 GB SSD (first year included). Domain: 1 custom domain (.cm, .com, .fr, .net) – lifetime. SSL: Premium with automatic renewal. Business emails: 10 mailboxes (20 GB each). CDN: Cloudflare Pro + Argo Smart Routing (first year included). Backups: every 6h (30 days) + daily (90 days) + weekly (1 year) + triple external backup.'}
                  </p>
                )}
              </section>

              {/* Mesures de sécurité */}
              <section className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 space-y-2">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr'
                    ? 'Mesures de sécurité'
                    : 'Security measures'}
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {language === 'fr'
                    ? "Authentification : Tokens JWT avec expiration, hashage des mots de passe avec bcrypt (coût 12+). Protection : validation des entrées (prévention injection SQL), protection XSS, protection CSRF, rate limiting. Headers de sécurité : Helmet.js configuré, CORS proprement configuré. Sécurité serveur : Firewall (UFW), SSH par clés uniquement, Fail2ban, mises à jour de sécurité régulières."
                    : 'Authentication: JWT tokens with expiry, password hashing with bcrypt (cost 12+). Protection: input validation (SQL injection prevention), XSS protection, CSRF protection, rate limiting. Security headers: Helmet.js configured, CORS properly configured. Server security: firewall (UFW), SSH keys only, Fail2ban, regular security updates.'}
                </p>
                {(isSpeed || isNormal) && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? "Niveau avancé : tests de sécurité automatisés, couverture OWASP Top 10 et politique CSP renforcée (surtout sur les forfaits Speed et Normal)."
                      : 'Advanced level: automated security tests, OWASP Top 10 coverage and hardened CSP policy (especially for Speed and Normal plans).'}
                  </p>
                )}
                {isNormal && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? 'Forfait Normal : pentest, WAF, protection bots, protection DDoS et accompagnement conformité RGPD.'
                      : 'Normal plan: pentest, WAF, bot protection, DDoS protection and GDPR compliance support.'}
                  </p>
                )}
              </section>

              {/* Formation incluse */}
              <section className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 space-y-2">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr'
                    ? 'Formation incluse'
                    : 'Training included'}
                </h4>
                {isUltra && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? '2 sessions (4h total) : utilisation de l’application (2h) + administration & technique (2h). Format visioconférence (enregistrée et fournie), jusqu’à 3–10 participants selon le forfait.'
                      : '2 sessions (4h total): application usage (2h) + administration & technical aspects (2h). Online sessions (recorded and delivered), up to 3–10 participants depending on the plan.'}
                  </p>
                )}
                {isSpeed && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? "3 sessions (7h total) : Utilisation & métier (3h) + Administration (2h) + Technique & maintenance (2h). Format visioconférence (enregistrée), jusqu’à 3–10 participants selon le forfait."
                      : '3 sessions (7h total): Business & usage (3h) + Administration (2h) + Technical & maintenance (2h). Online sessions (recorded), up to 3–10 participants depending on the plan.'}
                  </p>
                )}
                {isNormal && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? '4 sessions (12h total) : utilisateurs finaux (4h) + gestionnaires métier (3h) + administrateurs (3h) + développeurs (2h). Format visioconférence (enregistrée), jusqu’à 3–10 participants selon le forfait.'
                      : '4 sessions (12h total): end users (4h) + business managers (3h) + administrators (3h) + developers (2h). Online sessions (recorded), up to 3–10 participants depending on the plan.'}
                  </p>
                )}
              </section>

              {/* Support post‑livraison */}
              <section className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 space-y-2">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr'
                    ? 'Support post‑livraison'
                    : 'Post‑delivery support'}
                </h4>
                {isUltra && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? "1 mois : email (réponse en 24h), WhatsApp (urgences uniquement, 12h), 1 session visio (30 min) si nécessaire. Corrections de bugs : critiques (24–48h), majeurs (3–5 jours), mineurs (7 jours si temps disponible)."
                      : '1 month: email (24h response), WhatsApp (emergencies only, 12h), 1 video call (30 min) if needed. Bug fixes: critical (24–48h), major (3–5 days), minor (within 7 days when time allows).'}
                  </p>
                )}
                {isSpeed && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? "3 mois : email (24h), WhatsApp Business (9h–18h jours ouvrés), 2 appels/mois (30 min), 1 session visio/mois. Corrections bugs : critiques (24h), majeurs (48–72h), mineurs (7 jours), cosmétiques (en fin de mois)."
                      : '3 months: email (24h), WhatsApp Business (9am–6pm business days), 2 calls per month (30 min), 1 video session per month. Bug fixes: critical (24h), major (48–72h), minor (7 days), cosmetic (end of month).'}
                  </p>
                )}
                {isNormal && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? "6 mois : email prioritaire (12h, 7j/7), WhatsApp VIP (8h–20h quotidien), appels illimités, canal Slack/Discord privé. Corrections bugs : critiques (12h même week‑ends), majeurs (24–48h), mineurs (3–5 jours), cosmétiques (en fin de mois)."
                      : '6 months: priority email (12h, 7 days a week), VIP WhatsApp (8am–8pm daily), unlimited calls, private Slack/Discord channel. Bug fixes: critical (12h even on weekends), major (24–48h), minor (3–5 days), cosmetic (end of month).'}
                  </p>
                )}
              </section>

              {/* Garantie & Assurances */}
              <section className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 space-y-2">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr'
                    ? 'Garantie & assurances'
                    : 'Warranty & guarantees'}
                </h4>
                {isUltra && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? 'Garantie 1 mois : bugs critiques corrigés en 24–48h, bugs majeurs en 3–5 jours.'
                      : '1‑month warranty: critical bugs fixed within 24–48h, major bugs within 3–5 days.'}
                  </p>
                )}
                {isSpeed && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? 'Garantie 3 mois : bugs critiques corrigés en 24h, bugs majeurs en 48–72h, bugs mineurs en 7 jours.'
                      : '3‑month warranty: critical bugs fixed within 24h, major bugs within 48–72h, minor bugs within 7 days.'}
                  </p>
                )}
                {isNormal && (
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {language === 'fr'
                      ? 'Garantie 6 mois : garantie zéro bug critique, corrections de bugs critiques illimitées jusqu’à résolution complète.'
                      : '6‑month warranty: zero‑critical‑bug guarantee, unlimited critical bug fixes until complete resolution.'}
                  </p>
                )}
              </section>

              {/* Blocs communs : pour qui, propriété intellectuelle, responsabilités, fin de collaboration */}
              <section className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 space-y-3">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr'
                    ? 'Pour qui est ce modèle ?'
                    : 'Who is this model for?'}
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {language === 'fr'
                    ? "Parfait pour les entreprises et projets où le logiciel est stratégique et doit être entièrement détenu (code, architecture, évolutions long terme). Idéal pour entrepreneurs avec deadline serrée (Ultra Speed), PME en croissance voulant équilibre qualité/prix (Speed), ou entreprises établies exigeant qualité premium (Normal)."
                    : 'Perfect for companies and projects where software is strategic and must be fully owned (code, architecture, long‑term evolutions). Ideal for entrepreneurs with tight deadlines (Ultra Speed), growing SMEs seeking a quality/price balance (Speed), or established companies demanding premium quality (Normal).'}
                </p>
              </section>

              <section className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 space-y-3">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr'
                    ? 'Propriété intellectuelle & droits'
                    : 'Intellectual property & rights'}
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {language === 'fr'
                    ? "Vous devenez propriétaire à 100% du code source et de toute la propriété intellectuelle une fois les jalons et paiements prévus atteints. Vous recevez : code source complet (repository Git), API REST backend, frontend, schéma de base de données, documentation et tous les assets associés. Vous pouvez librement modifier, distribuer, revendre ou créer des produits dérivés."
                    : 'You become 100% owner of the source code and all intellectual property once milestones and payments are completed. You receive: full source code (Git repository), REST API backend, frontend, database schema, documentation and all related assets. You can freely modify, distribute, resell or build derived products.'}
                </p>
              </section>

              <section className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 space-y-3">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr' ? 'Vos responsabilités' : 'Your responsibilities'}
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {language === 'fr'
                    ? "Fournir un cahier des charges détaillé ou participer à un atelier de cadrage (J1–J5), valider les spécifications sous 48h à 5 jours (selon forfait), participer aux démos jalons et donner un feedback clair, fournir les contenus (textes, images, logos) sous 7 jours si demandé, désigner un interlocuteur principal et payer les acomptes à temps (50% à la signature, 50% à la livraison)."
                    : 'Provide a detailed specification or join a scoping workshop (D1–D5), validate specifications within 48h to 5 days (depending on the plan), attend milestone demos and give clear feedback, provide content (texts, images, logos) within 7 days when requested, nominate a main contact person and pay deposits on time (50% at signature, 50% on delivery).'}
                </p>
              </section>

              <section className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 space-y-3">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr' ? 'Nos responsabilités' : 'Our responsibilities'}
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {language === 'fr'
                    ? "Respecter les délais de livraison (65–180 jours selon forfait), livrer un code fonctionnel et testé, fournir une documentation complète (40–200 pages selon forfait), réaliser les sessions de formation (2–4 sessions, 4–12h au total), assurer le support post‑livraison (1 à 6 mois), maintenir un haut standard de qualité de code et transférer tous les accès (serveur, domaine, dépôt Git) à la livraison."
                    : 'Respect delivery deadlines (65–180 days depending on the plan), deliver functional and tested code, provide full documentation (40–200 pages depending on the plan), run all training sessions (2–4 sessions, 4–12h total), ensure post‑delivery support (1 to 6 months), maintain high code quality standards and transfer all accesses (server, domain, Git repository) upon delivery.'}
                </p>
              </section>

              <section className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 space-y-3">
                <h4 className="font-display text-sm font-semibold text-ink">
                  {language === 'fr'
                    ? 'Si vous arrêtez la collaboration'
                    : 'If you stop the collaboration'}
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {language === 'fr'
                    ? "Vous conservez tout le code livré et la documentation, conformément au contrat signé. Vous pouvez continuer avec votre équipe interne ou un autre prestataire : le code source reste 100% votre propriété. Vous pouvez migrer vos données vers une autre solution. Un support à la migration est disponible (optionnel, facturé séparément)."
                    : 'You keep all delivered code and documentation according to the signed contract. You can continue with your internal team or another provider: the source code remains 100% your property. You can migrate your data to another solution. Migration support is available as an optional, billed service.'}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {language === 'fr'
                    ? "Cette fiche n’est pas un contrat juridique, mais une explication claire de la façon dont le modèle fonctionne. Le contrat final est validé ensemble lors de la discussion sur votre projet."
                    : 'This sheet is not a legal contract but a clear explanation of how the model works. The final contract is validated together when we discuss your project.'}
                </p>
              </section>

              {selectedPlan.priceRange && (
                <div className="rounded-2xl bg-neutral-50 border border-neutral-200 px-5 py-4">
                  <p className="text-sm font-medium text-neutral-700">
                    {language === 'fr' ? 'Mode de tarification' : 'Pricing mode'}
                  </p>
                  <p className="mt-1 text-sm text-neutral-700">
                    {language === 'fr'
                      ? 'Prix discutable selon le périmètre et la complexité du projet.'
                      : 'Negotiable price depending on scope and project complexity.'}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    {language === 'fr'
                      ? `Durée estimée : ${selectedPlan.priceRange.deliveryDays} jours de développement.`
                      : `Estimated duration: ${selectedPlan.priceRange.deliveryDays} development days.`}
                  </p>
                </div>
              )}

              <div>
                <p className="text-sm font-semibold text-neutral-700 mb-3">
                  {language === 'fr' ? 'Fonctionnalités détaillées du forfait :' : 'Detailed plan features:'}
                </p>
                <ul className="space-y-2 rounded-xl border border-neutral-200 bg-neutral-50/60 p-4">
                  {selectedPlan.features.map((feature) => (
                    <li key={feature.name} className="text-sm flex items-start gap-3">
                      {feature.included ? (
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          ✓
                        </span>
                      ) : (
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                          ×
                        </span>
                      )}
                      <span className={feature.included ? 'text-neutral-700' : 'text-red-600'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-1 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  {language === 'fr' ? 'Fermer' : 'Close'}
                </button>
                <a
                  href={selectedPlan.ctaLink}
                  className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  {selectedPlan.ctaText || (language === 'fr' ? 'Demander un devis' : 'Request a quote')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullControl;
