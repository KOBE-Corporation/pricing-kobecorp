import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';

interface FAQItem {
  questionFr: string;
  questionEn: string;
  answerFr: string;
  answerEn: string;
}

// 10 questions : 7 SaaS (70%), 2 Full Control (20%), 1 Hébergement (10%)
const faqData: FAQItem[] = [
  // ——— SaaS (7) ———
  {
    questionFr: 'Qu’est-ce qu’un forfait SaaS ?',
    questionEn: 'What is a SaaS plan?',
    answerFr:
      'Un forfait SaaS (Software as a Service) vous donne accès à notre logiciel en ligne, sans installation. Vous payez un abonnement et nous gérons les mises à jour et l’hébergement.',
    answerEn:
      'A SaaS (Software as a Service) plan gives you access to our software online, with no installation. You pay a subscription and we handle updates and hosting.',
  },
  {
    questionFr: 'Puis-je changer de forfait SaaS à tout moment ?',
    questionEn: 'Can I change my SaaS plan at any time?',
    answerFr:
      'Oui. Vous pouvez passer à un forfait supérieur ou inférieur à tout moment. Le changement est pris en compte dès la prochaine facturation.',
    answerEn:
      'Yes. You can switch to a higher or lower plan at any time. The change applies at your next billing cycle.',
  },
  {
    questionFr: 'Les mises à jour sont-elles incluses dans le forfait SaaS ?',
    questionEn: 'Are updates included in the SaaS plan?',
    answerFr:
      'Oui. Toutes les mises à jour et correctifs de sécurité sont inclus dans votre abonnement SaaS. Vous avez toujours la dernière version.',
    answerEn:
      'Yes. All updates and security patches are included in your SaaS subscription. You always have the latest version.',
  },
  {
    questionFr: 'Mes données sont-elles sécurisées avec le forfait SaaS ?',
    questionEn: 'Is my data secure with the SaaS plan?',
    answerFr:
      'Oui. Vos données sont hébergées sur des serveurs sécurisés, avec sauvegardes régulières et chiffrement. Nous respectons les bonnes pratiques de confidentialité.',
    answerEn:
      'Yes. Your data is hosted on secure servers, with regular backups and encryption. We follow privacy best practices.',
  },
  {
    questionFr: 'Puis-je essayer le forfait SaaS avant de m’engager ?',
    questionEn: 'Can I try the SaaS plan before committing?',
    answerFr:
      'Oui. Nous proposons une période d’essai gratuite pour découvrir le forfait SaaS. Aucune carte bancaire n’est demandée pour commencer.',
    answerEn:
      'Yes. We offer a free trial to discover the SaaS plan. No credit card is required to get started.',
  },
  {
    questionFr: 'Quel support est fourni avec le forfait SaaS ?',
    questionEn: 'What support is provided with the SaaS plan?',
    answerFr:
      'Le forfait SaaS inclut un support par email et chat. Selon la formule, un support prioritaire ou dédié peut être disponible.',
    answerEn:
      'The SaaS plan includes email and chat support. Depending on the tier, priority or dedicated support may be available.',
  },
  {
    questionFr: 'Comment fonctionne la facturation du forfait SaaS ?',
    questionEn: 'How does SaaS plan billing work?',
    answerFr:
      'La facturation est mensuelle ou annuelle selon votre choix. Vous payez un abonnement fixe ; pas de frais cachés pour l’usage standard inclus.',
    answerEn:
      'Billing is monthly or yearly, depending on your choice. You pay a fixed subscription; no hidden fees for standard included usage.',
  },
  // ——— Full Control (2) ———
  {
    questionFr: 'Qu’est-ce que le forfait Full Control ?',
    questionEn: 'What is the Full Control plan?',
    answerFr:
      'Le forfait Full Control vous donne un accès complet au code et à l’infrastructure. Vous hébergez et gérez tout vous-même, avec notre assistance technique si besoin.',
    answerEn:
      'The Full Control plan gives you full access to the code and infrastructure. You host and manage everything yourself, with our technical support if needed.',
  },
  {
    questionFr: 'Quelle est la différence entre SaaS et Full Control ?',
    questionEn: 'What is the difference between SaaS and Full Control?',
    answerFr:
      'Avec le SaaS, nous hébergeons et maintenons tout pour vous. Avec Full Control, vous recevez le code et la solution pour les déployer sur vos propres serveurs. Idéal si vous voulez un contrôle total.',
    answerEn:
      'With SaaS, we host and maintain everything for you. With Full Control, you receive the code and solution to deploy on your own servers. Ideal if you want full control.',
  },
  // ——— Hébergement (1) ———
  {
    questionFr: 'Qu’est-ce qui est inclus dans l’hébergement ?',
    questionEn: 'What is included in hosting?',
    answerFr:
      'L’hébergement inclut l’espace serveur, la bande passante, les sauvegardes et la surveillance. Nous assurons la disponibilité et la sécurité de votre site ou application.',
    answerEn:
      'Hosting includes server space, bandwidth, backups, and monitoring. We ensure the availability and security of your site or application.',
  },
];

const FAQ = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-brand-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
            {language === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
          </h2>
          <p className="font-sans text-lg text-neutral-600">
            {language === 'fr'
              ? 'Trouvez des réponses aux questions les plus courantes'
              : 'Find answers to the most common questions'}
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 bg-white shadow-subtle overflow-hidden transition-all hover:border-brand-300 hover:shadow-card"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-50/50 transition-colors"
              >
                <span 
                  className="font-sans font-semibold pr-4 transition-colors"
                  style={{ color: openIndex === index ? '#0066e6' : '#171717' }}
                >
                  {language === 'fr' ? faq.questionFr : faq.questionEn}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 flex-shrink-0 transition-all ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  style={{ color: openIndex === index ? '#0a7aff' : '#3b9eff' }}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fadeInUp border-t border-brand-100">
                  <p className="font-sans text-neutral-600 pt-4">
                    {language === 'fr' ? faq.answerFr : faq.answerEn}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
