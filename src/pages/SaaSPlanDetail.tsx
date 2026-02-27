import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import {
  UserGroupIcon,
  KeyIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ServerIcon,
  StopCircleIcon,
  InformationCircleIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import ModalInfoCard, { type InfoCardTone } from '../components/ModalInfoCard';
import PageHero from '../components/PageHero';
import { saasPlans } from '../data/saasPlans';

const VALID_PLAN_IDS = ['good-deal', 'pro', 'ultra'] as const;

const SaaSPlanDetail = () => {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const plan = planId && VALID_PLAN_IDS.includes(planId as (typeof VALID_PLAN_IDS)[number])
    ? saasPlans.find((p) => p.id === planId)
    : null;

  useSEO({
    title: plan ? `${plan.name} – SaaS | KOBE Corporation` : 'Forfait SaaS | KOBE Corporation',
    description: plan?.description ?? 'Détail du forfait SaaS KOBE Corporation.',
    path: `/saas/${planId ?? ''}`,
  });

  const modelDetailCards = [
    {
      title: language === 'fr' ? 'Pour qui est ce modèle ?' : 'Who is this model for?',
      description:
        language === 'fr'
          ? 'Idéal pour les entrepreneurs et entreprises qui veulent lancer rapidement, avec un coût mensuel maîtrisé.'
          : 'Ideal for entrepreneurs and companies who want to launch fast with controlled monthly costs.',
      icon: UserGroupIcon,
      tone: 'rose' as const,
    },
    {
      title: language === 'fr' ? 'Propriété intellectuelle & droits' : 'Intellectual property & rights',
      description:
        language === 'fr'
          ? "L'application est opérée en mode SaaS : vous utilisez le logiciel, mais le code source et la propriété intellectuelle restent chez Kobe Corporation."
          : 'The application is operated in SaaS mode: you use the software, but source code and intellectual property remain with Kobe Corporation.',
      icon: KeyIcon,
      tone: 'slate' as const,
    },
    {
      title: language === 'fr' ? 'Vos responsabilités' : 'Your responsibilities',
      description:
        language === 'fr'
          ? "Définir vos besoins métier, valider les grands choix fonctionnels et respecter les conditions d'utilisation."
          : 'Define your business needs, validate major functional choices, and follow usage conditions.',
      icon: ClipboardDocumentCheckIcon,
      tone: 'slate' as const,
    },
    {
      title: language === 'fr' ? 'Nos responsabilités' : 'Our responsibilities',
      description:
        language === 'fr'
          ? "Héberger et maintenir l'application, assurer les mises à jour, la sécurité et les corrections prévues dans le forfait."
          : 'Host and maintain the app, ensure updates, security, and fixes included in the plan.',
      icon: WrenchScrewdriverIcon,
      tone: 'indigo' as const,
    },
    {
      title: language === 'fr' ? 'Sécurité & sauvegardes' : 'Security & backups',
      description:
        language === 'fr'
          ? 'Chiffrement, certificat SSL, sauvegardes et bonnes pratiques de sécurité sont inclus selon le forfait.'
          : 'Encryption, SSL certificate, backups and security best practices are included according to your plan.',
      icon: ShieldCheckIcon,
      tone: 'indigo' as const,
    },
    {
      title: language === 'fr' ? 'Disponibilité & support' : 'Availability & support',
      description:
        language === 'fr'
          ? "L'application reste accessible 24/7 avec support et interventions dans le cadre des engagements du forfait."
          : 'The application remains available 24/7 with support and interventions covered by your plan commitments.',
      icon: ServerIcon,
      tone: 'slate' as const,
    },
  ];

  if (!plan) {
    return (
      <div className="min-h-screen bg-white antialiased flex flex-col items-center justify-center px-4">
        <p className="text-neutral-600 mb-6">
          {language === 'fr' ? 'Forfait introuvable.' : 'Plan not found.'}
        </p>
        <Link
          to="/saas"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-brand-600"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          {language === 'fr' ? 'Retour aux forfaits' : 'Back to plans'}
        </Link>
      </div>
    );
  }

  const formatAmount = (n: number) => n.toLocaleString('fr-FR', { maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-white antialiased">
      <section id="hero">
        <PageHero
          id="plan-detail-hero"
          title={plan.name}
          subtitle={plan.description}
          primaryCta={{
            label: plan.ctaText,
            href: plan.ctaLink?.startsWith('mailto:') ? plan.ctaLink : '#contact',
            variant: 'primary',
          }}
          secondaryCta={{
            label: language === 'fr' ? 'Retour aux forfaits' : 'Back to plans',
            href: '/saas',
            variant: 'outline',
          }}
        />
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-neutral-50/50 to-brand-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/saas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 mb-10"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {language === 'fr' ? 'Retour aux forfaits SaaS' : 'Back to SaaS plans'}
          </Link>

          <div className="rounded-2xl bg-gradient-to-r from-brand-50/80 to-white border border-brand-100 px-6 py-5 mb-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              {language === 'fr' ? 'Tarif du forfait' : 'Plan price'}
            </p>
            <p className="mt-1 text-2xl font-display font-semibold text-ink">
              {formatAmount(plan.price)} {plan.currency}
              <span className="text-base font-sans text-neutral-500"> / {plan.period}</span>
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-lg font-semibold text-neutral-800 mb-3">
              {language === 'fr' ? 'Ce qui est inclus' : 'What is included'}
            </h2>
            <ul className="space-y-2 rounded-xl border border-neutral-200 bg-neutral-50/60 p-5">
              {plan.features.map((feature) => (
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
                  <span className={feature.included ? 'text-neutral-700' : 'text-red-600 font-medium'}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <section className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold text-neutral-800">
              {language === 'fr' ? 'Cadre du modèle SaaS' : 'SaaS model framework'}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {modelDetailCards.map((card) => (
                <ModalInfoCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  tone={card.tone as InfoCardTone}
                />
              ))}
            </div>
            <ModalInfoCard
              icon={KeyIcon}
              tone="amber"
              title={language === 'fr' ? 'Nom de domaine personnalisé (règle importante)' : 'Custom domain (important rule)'}
              description={
                language === 'fr' ? (
                  <>
                    Le nom de domaine personnalisé est offert uniquement en paiement annuel.
                    Sans paiement annuel, le domaine par défaut est du type{' '}
                    <span className="font-semibold text-ink">votre-entreprise.</span>
                    <span className="font-semibold text-brand-700">kb-saas.com</span>.
                  </>
                ) : (
                  <>
                    The custom domain is offered only with annual billing.
                    Without annual billing, the default domain follows{' '}
                    <span className="font-semibold text-ink">your-company.</span>
                    <span className="font-semibold text-brand-700">kb-saas.com</span>.
                  </>
                )
              }
            />
            <ModalInfoCard
              icon={StopCircleIcon}
              tone="neutral"
              title={language === 'fr' ? "Si vous arrêtez l'abonnement" : 'If you stop the subscription'}
              description={
                language === 'fr'
                  ? "L'accès à l'application est suspendu après le préavis prévu. Une sauvegarde des données peut être fournie selon le contrat."
                  : 'Access to the application is suspended after the required notice period. A data backup may be provided according to the contract.'
              }
            />
            <ModalInfoCard
              icon={InformationCircleIcon}
              tone="blue"
              title={language === 'fr' ? 'Information importante' : 'Important information'}
              description={
                language === 'fr'
                  ? "Cette fiche n'est pas un contrat juridique, mais une explication claire du modèle. Les détails définitifs sont validés ensemble."
                  : 'This sheet is not a legal contract, but a clear explanation of the model. Final details are validated together.'
              }
            />
          </section>

          <div className="mt-12 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate('/saas')}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
            >
              {language === 'fr' ? 'Retour aux forfaits' : 'Back to plans'}
            </button>
            {plan.ctaLink?.startsWith('mailto:') ? (
              <a
                href={plan.ctaLink}
                className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-brand-600"
              >
                {plan.ctaText}
              </a>
            ) : (
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-brand-600"
              >
                {plan.ctaText}
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSPlanDetail;
