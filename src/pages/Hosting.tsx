import { useLanguage } from '../contexts/LanguageContext';
import {
  CloudIcon,
  ServerStackIcon,
  BoltIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import SectionFeatures from '../components/SectionFeatures';

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

      <SectionFeatures
        titleFr="Types d'Hébergement"
        titleEn="Hosting Types"
        subtitleFr="Choisissez la solution d'hébergement adaptée à vos besoins."
        subtitleEn="Choose the hosting solution that fits your needs."
        items={hostingTypes}
      />

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
