import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';

interface FAQItem {
  questionFr: string;
  questionEn: string;
  answerFr: string;
  answerEn: string;
}

const faqData: FAQItem[] = [
  {
    questionFr: 'Puis-je changer de forfait à tout moment ?',
    questionEn: 'Can I change my plan at any time?',
    answerFr:
      'Oui, vous pouvez mettre à niveau ou rétrograder votre forfait à tout moment. Les changements prennent effet immédiatement.',
    answerEn:
      'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    questionFr: 'Y a-t-il un engagement minimum ?',
    questionEn: 'Is there a minimum commitment?',
    answerFr:
      'Non, tous nos forfaits sont sans engagement. Vous pouvez annuler à tout moment sans frais.',
    answerEn:
      'No, all our plans are commitment-free. You can cancel at any time without fees.',
  },
  {
    questionFr: 'Quels moyens de paiement acceptez-vous ?',
    questionEn: 'What payment methods do you accept?',
    answerFr:
      'Nous acceptons les cartes bancaires, virements bancaires et paiements mobiles.',
    answerEn:
      'We accept credit cards, bank transfers, and mobile payments.',
  },
  {
    questionFr: 'Le support est-il disponible 24/7 ?',
    questionEn: 'Is support available 24/7?',
    answerFr:
      'Oui, notre équipe de support est disponible 24/7 pour tous nos clients, quel que soit le forfait.',
    answerEn:
      'Yes, our support team is available 24/7 for all our clients, regardless of the plan.',
  },
  {
    questionFr: 'Puis-je essayer avant d\'acheter ?',
    questionEn: 'Can I try before buying?',
    answerFr:
      'Oui, nous offrons une période d\'essai de 14 jours pour tous nos forfaits. Aucune carte bancaire requise.',
    answerEn:
      'Yes, we offer a 14-day trial period for all our plans. No credit card required.',
  },
];

const FAQ = () => {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
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
              className="rounded-2xl border border-neutral-200 bg-white shadow-subtle overflow-hidden transition-all hover:shadow-card"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-sans font-semibold text-ink pr-4">
                  {language === 'fr' ? faq.questionFr : faq.questionEn}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-neutral-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fadeInUp">
                  <p className="font-sans text-neutral-600">
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
