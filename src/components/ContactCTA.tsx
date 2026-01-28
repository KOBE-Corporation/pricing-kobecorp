import { useLanguage } from '../contexts/LanguageContext';
import Button from './Button';

type ContactCTAProps = {
  id?: string;
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
  /** Suffixe pour l'objet du mail (ex: \"Projet SaaS\", \"Projet Full-Control\") */
  mailSubjectSuffix?: string;
};

const ContactCTA = ({
  id = 'contact',
  titleFr,
  titleEn,
  subtitleFr,
  subtitleEn,
  mailSubjectSuffix,
}: ContactCTAProps) => {
  const { t, language } = useLanguage();

  const subject =
    mailSubjectSuffix && mailSubjectSuffix.trim().length > 0
      ? encodeURIComponent(mailSubjectSuffix)
      : '';

  const mailto =
    subject.length > 0
      ? `mailto:contact@kobecorporation.com?subject=${subject}`
      : 'mailto:contact@kobecorporation.com';

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-brand-50/50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
          {language === 'fr' ? titleFr : titleEn}
        </h2>
        <p className="font-sans text-lg text-neutral-600 mb-8">
          {language === 'fr' ? subtitleFr : subtitleEn}
        </p>
        <Button variant="primary" size="lg" href={mailto}>
          {t('contact.cta')}
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;

